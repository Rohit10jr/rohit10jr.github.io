import { useEffect, useState } from 'react'
import { RocketMark } from './RocketMark'

/**
 * Returns to the top of the page. The header is not sticky, so without this
 * the bottom of a long page offers no way back to the navigation.
 */
export function BackToTop() {
  const [visible, setVisible] = useState(false)
  const [firing, setFiring] = useState(false)

  useEffect(() => {
    function update() {
      setVisible(window.scrollY > window.innerHeight * 0.75)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })
    window.addEventListener('resize', update)

    return () => {
      window.removeEventListener('scroll', update)
      window.removeEventListener('resize', update)
    }
  }, [])

  function handleClick() {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    if (!reduced) {
      setFiring(true)
      window.setTimeout(() => setFiring(false), 600)
    }

    window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
  }

  return (
    <button
      type="button"
      className="back-to-top"
      data-visible={visible ? 'true' : 'false'}
      data-firing={firing ? 'true' : 'false'}
      onClick={handleClick}
      aria-label="Back to top"
      // Keep it out of the tab order while it is invisible, or keyboard users
      // land on a control they cannot see.
      tabIndex={visible ? 0 : -1}
      aria-hidden={visible ? undefined : true}
    >
      <RocketMark />
    </button>
  )
}
