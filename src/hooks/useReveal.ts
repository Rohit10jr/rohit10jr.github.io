import { useEffect, useRef } from 'react'

/**
 * Fades in `.reveal` children as they scroll into view.
 *
 * Returns a ref to attach to the container. Elements are revealed immediately
 * when the user prefers reduced motion, or when IntersectionObserver is
 * unavailable, so content is never left hidden.
 */
export function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const container = ref.current
    if (!container) {
      return
    }

    const items = container.querySelectorAll('.reveal')
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (reduced || typeof IntersectionObserver === 'undefined') {
      items.forEach((item) => item.classList.add('is-visible'))
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' },
    )

    items.forEach((item) => observer.observe(item))

    return () => observer.disconnect()
  }, [])

  return ref
}
