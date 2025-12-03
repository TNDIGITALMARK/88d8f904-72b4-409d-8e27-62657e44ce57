"use client"

import { useEffect, useRef } from 'react'

export function useScrollAnimation() {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fadeInUp')
          // Optionally unobserve after animation
          observer.unobserve(entry.target)
        }
      })
    }, observerOptions)

    // Observe all elements with data-animate attribute
    const elements = document.querySelectorAll('[data-animate]')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])
}

export function useParallax() {
  const parallaxRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!parallaxRef.current) return

      const scrolled = window.scrollY
      const rate = scrolled * 0.5

      if (parallaxRef.current) {
        parallaxRef.current.style.transform = `translate3d(0, ${rate}px, 0)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return parallaxRef
}
