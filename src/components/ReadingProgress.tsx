import { useEffect, useState } from 'react'

/**
 * Thin bar across the top showing how far through the article you are.
 * Stays hidden when the page is too short to scroll.
 */
export function ReadingProgress() {
  const [progress, setProgress] = useState(0)
  const [scrollable, setScrollable] = useState(false)

  useEffect(() => {
    function update() {
      const doc = document.documentElement
      const height = doc.scrollHeight - doc.clientHeight

      // Guard the divide: a page that fits the viewport has zero scroll range.
      if (height <= 0) {
        setScrollable(false)
        setProgress(0)
        return
      }

      setScrollable(true)
      setProgress(Math.min(100, (doc.scrollTop / height) * 100))
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  if (!scrollable) {
    return null
  }

  return (
    <div
      className="reading-progress"
      role="progressbar"
      aria-label="Article reading progress"
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(progress)}
    >
      <div className="reading-progress-bar" style={{ width: `${progress}%` }} />
    </div>
  )
}
