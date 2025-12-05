/**
 * Image Optimization Utilities
 * Provides helpers for responsive images, lazy loading, and performance optimization
 */

export interface ImageConfig {
  src: string
  alt: string
  width?: number
  height?: number
  priority?: boolean
  quality?: number
  sizes?: string
  placeholder?: 'blur' | 'empty'
  blurDataURL?: string
}

/**
 * Generate responsive image sizes string for Next.js Image component
 */
export function generateImageSizes(config: {
  mobile?: string
  tablet?: string
  desktop?: string
  default?: string
}): string {
  const { mobile = '100vw', tablet = '50vw', desktop = '33vw', default: defaultSize = '100vw' } = config

  const sizes: string[] = []

  if (mobile) sizes.push(`(max-width: 640px) ${mobile}`)
  if (tablet) sizes.push(`(max-width: 1024px) ${tablet}`)
  if (desktop) sizes.push(`(min-width: 1025px) ${desktop}`)
  if (defaultSize) sizes.push(defaultSize)

  return sizes.join(', ')
}

/**
 * Calculate optimal image dimensions based on container size
 */
export function calculateOptimalDimensions(
  containerWidth: number,
  aspectRatio: number = 16 / 9,
  devicePixelRatio: number = 2
): { width: number; height: number } {
  // Multiply by device pixel ratio for retina displays
  const width = Math.round(containerWidth * devicePixelRatio)
  const height = Math.round(width / aspectRatio)

  return { width, height }
}

/**
 * Generate blur placeholder data URL for progressive image loading
 */
export function generateBlurDataURL(width: number = 8, height: number = 8): string {
  // Simple gray blur placeholder (in production, use actual image data)
  const canvas = typeof document !== 'undefined' ? document.createElement('canvas') : null

  if (!canvas) {
    // Server-side fallback
    return 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mN8/x8AAuMB8DtXNJsAAAAASUVORK5CYII='
  }

  canvas.width = width
  canvas.height = height

  const ctx = canvas.getContext('2d')
  if (!ctx) return ''

  // Create gradient for more natural blur effect
  const gradient = ctx.createLinearGradient(0, 0, width, height)
  gradient.addColorStop(0, '#f0f0f0')
  gradient.addColorStop(1, '#e0e0e0')

  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, width, height)

  return canvas.toDataURL()
}

/**
 * Preload critical images for better performance
 */
export function preloadImage(src: string, options?: { as?: string; fetchpriority?: 'high' | 'low' | 'auto' }): void {
  if (typeof window === 'undefined') return

  const link = document.createElement('link')
  link.rel = 'preload'
  link.as = options?.as || 'image'
  link.href = src

  if (options?.fetchpriority) {
    link.setAttribute('fetchpriority', options.fetchpriority)
  }

  document.head.appendChild(link)
}

/**
 * Check if image should use lazy loading
 */
export function shouldLazyLoad(priority?: boolean, position?: 'above-fold' | 'below-fold'): boolean {
  // Don't lazy load priority images or above-fold content
  if (priority) return false
  if (position === 'above-fold') return false

  return true
}

/**
 * Image loading strategies
 */
export const IMAGE_LOADING_STRATEGIES = {
  hero: {
    priority: true,
    quality: 90,
    sizes: generateImageSizes({
      mobile: '100vw',
      tablet: '100vw',
      desktop: '50vw'
    })
  },
  gallery: {
    priority: false,
    quality: 85,
    sizes: generateImageSizes({
      mobile: '100vw',
      tablet: '50vw',
      desktop: '33vw'
    })
  },
  thumbnail: {
    priority: false,
    quality: 80,
    sizes: generateImageSizes({
      mobile: '50vw',
      tablet: '33vw',
      desktop: '25vw'
    })
  },
  icon: {
    priority: false,
    quality: 90,
    sizes: '64px'
  }
} as const

/**
 * Intersection Observer for lazy loading images
 */
export class LazyImageLoader {
  private observer: IntersectionObserver | null = null
  private images: Set<HTMLImageElement> = new Set()

  constructor(
    private options: IntersectionObserverInit = {
      rootMargin: '50px 0px', // Start loading 50px before entering viewport
      threshold: 0.01
    }
  ) {
    this.init()
  }

  private init() {
    if (typeof window === 'undefined' || !('IntersectionObserver' in window)) {
      return
    }

    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement
          this.loadImage(img)
          this.observer?.unobserve(img)
          this.images.delete(img)
        }
      })
    }, this.options)
  }

  private loadImage(img: HTMLImageElement) {
    const src = img.dataset.src
    const srcset = img.dataset.srcset

    if (src) img.src = src
    if (srcset) img.srcset = srcset

    img.classList.add('loaded')
  }

  observe(img: HTMLImageElement) {
    if (!this.observer) {
      this.loadImage(img)
      return
    }

    this.images.add(img)
    this.observer.observe(img)
  }

  disconnect() {
    this.observer?.disconnect()
    this.images.clear()
  }
}

/**
 * Image format detection and optimization
 */
export function getSupportedImageFormat(): 'webp' | 'avif' | 'jpeg' {
  if (typeof window === 'undefined') return 'jpeg'

  // Check for AVIF support
  const avifSupported = (() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/avif').indexOf('data:image/avif') === 0
  })()

  if (avifSupported) return 'avif'

  // Check for WebP support
  const webpSupported = (() => {
    const canvas = document.createElement('canvas')
    canvas.width = 1
    canvas.height = 1
    return canvas.toDataURL('image/webp').indexOf('data:image/webp') === 0
  })()

  if (webpSupported) return 'webp'

  return 'jpeg'
}

/**
 * Performance monitoring for images
 */
export function measureImageLoadTime(img: HTMLImageElement): Promise<number> {
  return new Promise((resolve) => {
    const startTime = performance.now()

    if (img.complete) {
      resolve(0)
      return
    }

    img.addEventListener('load', () => {
      const loadTime = performance.now() - startTime
      resolve(loadTime)
    })

    img.addEventListener('error', () => {
      resolve(-1) // Error indicator
    })
  })
}
