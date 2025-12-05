"use client"

import { useEffect, useState } from 'react'

interface PerformanceMetrics {
  pageLoadTime: number | null
  firstContentfulPaint: number | null
  largestContentfulPaint: number | null
  cumulativeLayoutShift: number | null
  firstInputDelay: number | null
  timeToInteractive: number | null
}

/**
 * Hook to monitor and report Core Web Vitals and performance metrics
 */
export function usePerformance() {
  const [metrics, setMetrics] = useState<PerformanceMetrics>({
    pageLoadTime: null,
    firstContentfulPaint: null,
    largestContentfulPaint: null,
    cumulativeLayoutShift: null,
    firstInputDelay: null,
    timeToInteractive: null
  })

  useEffect(() => {
    if (typeof window === 'undefined' || !('performance' in window)) {
      return
    }

    // Page Load Time
    const navigationTiming = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
    if (navigationTiming) {
      const loadTime = navigationTiming.loadEventEnd - navigationTiming.fetchStart
      setMetrics(prev => ({ ...prev, pageLoadTime: loadTime }))
    }

    // First Contentful Paint (FCP)
    const paintEntries = performance.getEntriesByType('paint')
    const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
    if (fcp) {
      setMetrics(prev => ({ ...prev, firstContentfulPaint: fcp.startTime }))
    }

    // Largest Contentful Paint (LCP)
    if ('PerformanceObserver' in window) {
      try {
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const lastEntry = entries[entries.length - 1] as any
          if (lastEntry) {
            setMetrics(prev => ({ ...prev, largestContentfulPaint: lastEntry.renderTime || lastEntry.loadTime }))
          }
        })
        lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] })

        // Cumulative Layout Shift (CLS)
        let clsValue = 0
        const clsObserver = new PerformanceObserver((list) => {
          for (const entry of list.getEntries()) {
            if (!(entry as any).hadRecentInput) {
              clsValue += (entry as any).value
              setMetrics(prev => ({ ...prev, cumulativeLayoutShift: clsValue }))
            }
          }
        })
        clsObserver.observe({ entryTypes: ['layout-shift'] })

        // First Input Delay (FID)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries()
          const firstEntry = entries[0] as any
          if (firstEntry) {
            const fid = firstEntry.processingStart - firstEntry.startTime
            setMetrics(prev => ({ ...prev, firstInputDelay: fid }))
          }
        })
        fidObserver.observe({ entryTypes: ['first-input'] })

        return () => {
          lcpObserver.disconnect()
          clsObserver.disconnect()
          fidObserver.disconnect()
        }
      } catch (error) {
        console.warn('Performance monitoring not supported:', error)
      }
    }
  }, [])

  return metrics
}

/**
 * Hook to detect slow network conditions
 */
export function useNetworkStatus() {
  const [isSlowNetwork, setIsSlowNetwork] = useState(false)
  const [effectiveType, setEffectiveType] = useState<string>('4g')

  useEffect(() => {
    if (typeof window === 'undefined') return

    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection

    if (!connection) return

    const updateNetworkStatus = () => {
      const type = connection.effectiveType || '4g'
      setEffectiveType(type)
      setIsSlowNetwork(type === 'slow-2g' || type === '2g')
    }

    updateNetworkStatus()
    connection.addEventListener('change', updateNetworkStatus)

    return () => {
      connection.removeEventListener('change', updateNetworkStatus)
    }
  }, [])

  return { isSlowNetwork, effectiveType }
}

/**
 * Hook to detect if user prefers reduced motion
 */
export function usePrefersReducedMotion() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)

    return () => {
      mediaQuery.removeEventListener('change', handleChange)
    }
  }, [])

  return prefersReducedMotion
}

/**
 * Hook to detect if device is in battery saver mode
 */
export function useBatterySaver() {
  const [isBatterySaver, setIsBatterySaver] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') return

    const checkBattery = async () => {
      try {
        const battery = await (navigator as any).getBattery?.()
        if (battery) {
          const updateBatteryStatus = () => {
            // Consider battery saver mode if battery < 20% and not charging
            setIsBatterySaver(battery.level < 0.2 && !battery.charging)
          }

          updateBatteryStatus()
          battery.addEventListener('levelchange', updateBatteryStatus)
          battery.addEventListener('chargingchange', updateBatteryStatus)

          return () => {
            battery.removeEventListener('levelchange', updateBatteryStatus)
            battery.removeEventListener('chargingchange', updateBatteryStatus)
          }
        }
      } catch (error) {
        // Battery API not supported
        console.debug('Battery API not supported')
      }
    }

    checkBattery()
  }, [])

  return isBatterySaver
}

/**
 * Combined hook for adaptive performance strategies
 */
export function useAdaptivePerformance() {
  const metrics = usePerformance()
  const { isSlowNetwork, effectiveType } = useNetworkStatus()
  const prefersReducedMotion = usePrefersReducedMotion()
  const isBatterySaver = useBatterySaver()

  // Determine if we should use performance optimizations
  const shouldOptimize = isSlowNetwork || isBatterySaver || prefersReducedMotion

  return {
    metrics,
    network: { isSlowNetwork, effectiveType },
    prefersReducedMotion,
    isBatterySaver,
    shouldOptimize,
    // Suggestions for adaptive content
    recommendations: {
      disableAnimations: prefersReducedMotion || isBatterySaver,
      reduceImageQuality: isSlowNetwork,
      lazyLoadAggressive: isSlowNetwork || isBatterySaver,
      disableAutoplay: isSlowNetwork || isBatterySaver
    }
  }
}
