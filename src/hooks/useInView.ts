import { useEffect, useRef, useState } from 'react'

/**
 * Reports whether the element is on screen, so looping animations can be
 * paused while it is not.
 *
 * Defaults to `true` when IntersectionObserver is unavailable, so the caller
 * degrades to "always running" rather than "never runs".
 */
export function useInView<T extends HTMLElement>(rootMargin = '120px') {
  const ref = useRef<T>(null)
  const [inView, setInView] = useState(true)

  useEffect(() => {
    const element = ref.current
    if (!element || typeof IntersectionObserver === 'undefined') {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { rootMargin },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [rootMargin])

  return { ref, inView }
}
