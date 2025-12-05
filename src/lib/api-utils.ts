/**
 * Robust API Utilities
 * Provides error handling, retry logic, and request/response interceptors
 */

export class APIError extends Error {
  constructor(
    message: string,
    public statusCode?: number,
    public response?: any,
    public isNetworkError: boolean = false
  ) {
    super(message)
    this.name = 'APIError'
  }
}

export interface RetryConfig {
  maxRetries?: number
  retryDelay?: number
  retryOn?: number[]
  exponentialBackoff?: boolean
}

export interface RequestConfig extends RequestInit {
  timeout?: number
  retry?: RetryConfig
  baseURL?: string
}

/**
 * Enhanced fetch with timeout, retry logic, and error handling
 */
export async function fetchWithRetry(
  url: string,
  config: RequestConfig = {}
): Promise<Response> {
  const {
    timeout = 30000,
    retry = {},
    baseURL = '',
    ...fetchConfig
  } = config

  const {
    maxRetries = 3,
    retryDelay = 1000,
    retryOn = [408, 429, 500, 502, 503, 504],
    exponentialBackoff = true
  } = retry

  const fullURL = baseURL ? `${baseURL}${url}` : url
  let lastError: Error | null = null

  for (let attempt = 0; attempt <= maxRetries; attempt++) {
    try {
      // Create abort controller for timeout
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), timeout)

      const response = await fetch(fullURL, {
        ...fetchConfig,
        signal: controller.signal
      })

      clearTimeout(timeoutId)

      // Check if we should retry based on status code
      if (!response.ok && retryOn.includes(response.status) && attempt < maxRetries) {
        const delay = exponentialBackoff
          ? retryDelay * Math.pow(2, attempt)
          : retryDelay

        console.warn(`Request failed with status ${response.status}. Retrying in ${delay}ms... (Attempt ${attempt + 1}/${maxRetries})`)
        await sleep(delay)
        continue
      }

      return response

    } catch (error) {
      lastError = error as Error

      // Don't retry on abort (timeout) if it's the last attempt
      if (error instanceof Error && error.name === 'AbortError') {
        if (attempt < maxRetries) {
          console.warn(`Request timed out. Retrying... (Attempt ${attempt + 1}/${maxRetries})`)
          const delay = exponentialBackoff
            ? retryDelay * Math.pow(2, attempt)
            : retryDelay
          await sleep(delay)
          continue
        }
        throw new APIError('Request timeout', undefined, undefined, true)
      }

      // Network errors
      if (attempt < maxRetries) {
        const delay = exponentialBackoff
          ? retryDelay * Math.pow(2, attempt)
          : retryDelay
        console.warn(`Network error. Retrying in ${delay}ms... (Attempt ${attempt + 1}/${maxRetries})`)
        await sleep(delay)
        continue
      }

      throw new APIError('Network request failed', undefined, undefined, true)
    }
  }

  throw lastError || new APIError('Max retries exceeded')
}

/**
 * JSON API helper with automatic error handling
 */
export async function fetchJSON<T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<T> {
  const response = await fetchWithRetry(url, {
    ...config,
    headers: {
      'Content-Type': 'application/json',
      ...config.headers
    }
  })

  if (!response.ok) {
    let errorMessage = `HTTP Error ${response.status}`
    let errorData: any = null

    try {
      errorData = await response.json()
      errorMessage = errorData.message || errorData.error || errorMessage
    } catch {
      // Response wasn't JSON, use status text
      errorMessage = response.statusText || errorMessage
    }

    throw new APIError(errorMessage, response.status, errorData)
  }

  try {
    return await response.json()
  } catch (error) {
    throw new APIError('Invalid JSON response', response.status)
  }
}

/**
 * POST request helper
 */
export async function postJSON<T = any>(
  url: string,
  data: any,
  config: RequestConfig = {}
): Promise<T> {
  return fetchJSON<T>(url, {
    ...config,
    method: 'POST',
    body: JSON.stringify(data)
  })
}

/**
 * PUT request helper
 */
export async function putJSON<T = any>(
  url: string,
  data: any,
  config: RequestConfig = {}
): Promise<T> {
  return fetchJSON<T>(url, {
    ...config,
    method: 'PUT',
    body: JSON.stringify(data)
  })
}

/**
 * PATCH request helper
 */
export async function patchJSON<T = any>(
  url: string,
  data: any,
  config: RequestConfig = {}
): Promise<T> {
  return fetchJSON<T>(url, {
    ...config,
    method: 'PATCH',
    body: JSON.stringify(data)
  })
}

/**
 * DELETE request helper
 */
export async function deleteJSON<T = any>(
  url: string,
  config: RequestConfig = {}
): Promise<T> {
  return fetchJSON<T>(url, {
    ...config,
    method: 'DELETE'
  })
}

/**
 * Form data upload helper with progress tracking
 */
export async function uploadFormData<T = any>(
  url: string,
  formData: FormData,
  onProgress?: (progress: number) => void
): Promise<T> {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest()

    if (onProgress) {
      xhr.upload.addEventListener('progress', (e) => {
        if (e.lengthComputable) {
          const progress = (e.loaded / e.total) * 100
          onProgress(progress)
        }
      })
    }

    xhr.addEventListener('load', () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        try {
          const data = JSON.parse(xhr.responseText)
          resolve(data)
        } catch {
          resolve(xhr.responseText as any)
        }
      } else {
        reject(new APIError(`Upload failed with status ${xhr.status}`, xhr.status))
      }
    })

    xhr.addEventListener('error', () => {
      reject(new APIError('Upload failed', undefined, undefined, true))
    })

    xhr.addEventListener('abort', () => {
      reject(new APIError('Upload cancelled'))
    })

    xhr.open('POST', url)
    xhr.send(formData)
  })
}

/**
 * Batch request helper
 */
export async function batchFetch<T = any>(
  requests: Array<{ url: string; config?: RequestConfig }>,
  options: {
    parallel?: boolean
    maxParallel?: number
  } = {}
): Promise<T[]> {
  const { parallel = true, maxParallel = 5 } = options

  if (!parallel) {
    // Sequential execution
    const results: T[] = []
    for (const { url, config } of requests) {
      const result = await fetchJSON<T>(url, config)
      results.push(result)
    }
    return results
  }

  // Parallel execution with concurrency limit
  const results: T[] = []
  const queue = [...requests]

  const executeBatch = async () => {
    const batch = queue.splice(0, maxParallel)
    const promises = batch.map(({ url, config }) => fetchJSON<T>(url, config))
    return Promise.all(promises)
  }

  while (queue.length > 0) {
    const batchResults = await executeBatch()
    results.push(...batchResults)
  }

  return results
}

/**
 * Cache wrapper for API requests
 */
export class APICache {
  private cache: Map<string, { data: any; timestamp: number }> = new Map()
  private ttl: number

  constructor(ttlSeconds: number = 300) {
    this.ttl = ttlSeconds * 1000
  }

  get<T>(key: string): T | null {
    const cached = this.cache.get(key)
    if (!cached) return null

    const age = Date.now() - cached.timestamp
    if (age > this.ttl) {
      this.cache.delete(key)
      return null
    }

    return cached.data as T
  }

  set<T>(key: string, data: T): void {
    this.cache.set(key, {
      data,
      timestamp: Date.now()
    })
  }

  clear(key?: string): void {
    if (key) {
      this.cache.delete(key)
    } else {
      this.cache.clear()
    }
  }

  has(key: string): boolean {
    const cached = this.cache.get(key)
    if (!cached) return false

    const age = Date.now() - cached.timestamp
    if (age > this.ttl) {
      this.cache.delete(key)
      return false
    }

    return true
  }
}

/**
 * Create cached fetch function
 */
export function createCachedFetch(cache: APICache) {
  return async function <T = any>(
    url: string,
    config: RequestConfig = {},
    cacheKey?: string
  ): Promise<T> {
    const key = cacheKey || url

    // Check cache first
    const cached = cache.get<T>(key)
    if (cached) {
      return cached
    }

    // Fetch and cache
    const data = await fetchJSON<T>(url, config)
    cache.set(key, data)
    return data
  }
}

/**
 * Helper to check if error is an API error
 */
export function isAPIError(error: unknown): error is APIError {
  return error instanceof APIError
}

/**
 * Helper to handle API errors gracefully
 */
export function handleAPIError(error: unknown): string {
  if (isAPIError(error)) {
    if (error.isNetworkError) {
      return 'Network connection error. Please check your internet connection and try again.'
    }

    if (error.statusCode === 400) {
      return 'Invalid request. Please check your input and try again.'
    }

    if (error.statusCode === 401) {
      return 'Authentication required. Please log in and try again.'
    }

    if (error.statusCode === 403) {
      return 'Access denied. You do not have permission to perform this action.'
    }

    if (error.statusCode === 404) {
      return 'Resource not found. The requested item may have been removed.'
    }

    if (error.statusCode === 429) {
      return 'Too many requests. Please wait a moment and try again.'
    }

    if (error.statusCode && error.statusCode >= 500) {
      return 'Server error. Our team has been notified. Please try again later.'
    }

    return error.message
  }

  if (error instanceof Error) {
    return error.message
  }

  return 'An unexpected error occurred. Please try again.'
}

/**
 * Sleep utility for delays
 */
function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Request deduplication helper
 */
export class RequestDeduplicator {
  private pending: Map<string, Promise<any>> = new Map()

  async fetch<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
    // If request is already pending, return the existing promise
    if (this.pending.has(key)) {
      return this.pending.get(key)!
    }

    // Start new request
    const promise = fetcher()
      .finally(() => {
        this.pending.delete(key)
      })

    this.pending.set(key, promise)
    return promise
  }

  clear(key?: string): void {
    if (key) {
      this.pending.delete(key)
    } else {
      this.pending.clear()
    }
  }
}
