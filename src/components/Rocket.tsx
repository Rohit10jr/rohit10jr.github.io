import { useState } from 'react'
import { useInView } from '../hooks/useInView'

/**
 * Line-art rocket for the hero. Drawn in `currentColor` so it inherits the
 * page palette, matching the flourish and the nav icons.
 *
 * Every stroked element carries `pathLength="1"`, which normalises its length
 * regardless of the real geometry. That lets one CSS keyframe draw all of them
 * from `stroke-dashoffset: 1` to `0` without measuring anything in JS.
 */
export function Rocket() {
  // The float and exhaust loops run forever, so stop paying for them once the
  // hero has scrolled away.
  const { ref, inView } = useInView<HTMLButtonElement>()
  const [launching, setLaunching] = useState(false)

  function launch() {
    // Ignore repeat clicks mid-flight, or the animation restarts halfway and
    // the rocket appears to teleport.
    if (launching) {
      return
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    setLaunching(true)
    window.setTimeout(() => setLaunching(false), 1700)
  }

  return (
    <button
      type="button"
      className="rocket-wrap"
      ref={ref}
      onClick={launch}
      aria-label="Launch the rocket"
      data-animate={inView ? 'run' : 'pause'}
      data-launching={launching ? 'true' : 'false'}
    >
      <svg
        className="rocket"
        viewBox="0 0 220 340"
        role="img"
        aria-label="Line drawing of a rocket"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Only shown in the dark theme, where the off-white ground that
            carries the drawing in light mode turns into night sky. */}
        <g className="hero-stars">
          <circle cx="26" cy="52" r="2.2" opacity="0.55" />
          <circle cx="196" cy="88" r="1.6" opacity="0.4" />
          <circle cx="204" cy="30" r="1.3" opacity="0.3" />
          <circle cx="18" cy="148" r="1.5" opacity="0.35" />
          <circle cx="188" cy="196" r="2" opacity="0.45" />
          <circle cx="40" cy="292" r="1.4" opacity="0.3" />
        </g>

        {/* Body and exhaust float together, or the nozzle drifts away from
            the flame at the top of each cycle. */}
        <g className="rocket-float">
          <g className="rocket-exhaust">
          <path className="rocket-flame rocket-flame-1" pathLength="1" d="M92 282 C 88 300, 94 314, 90 330" />
          <path className="rocket-flame rocket-flame-2" pathLength="1" d="M110 286 C 106 306, 114 322, 110 340" />
          <path className="rocket-flame rocket-flame-3" pathLength="1" d="M128 282 C 132 300, 126 314, 130 330" />
          </g>

          <g className="rocket-body">
          <path
            className="rocket-draw rocket-hull"
            pathLength="1"
            d="M110 16 C 132 54, 146 104, 146 152 L146 232 L74 232 L74 152 C 74 104, 88 54, 110 16 Z"
          />

          <path className="rocket-draw rocket-fin" pathLength="1" d="M74 176 C 52 192, 40 214, 38 246 L74 226" />
          <path className="rocket-draw rocket-fin" pathLength="1" d="M146 176 C 168 192, 180 214, 182 246 L146 226" />

          <path className="rocket-draw rocket-skirt" pathLength="1" d="M84 232 L80 262 L140 262 L136 232" />

          <circle className="rocket-draw rocket-window" pathLength="1" cx="110" cy="118" r="20" />
          <circle
            className="rocket-draw rocket-window-inner"
            pathLength="1"
            cx="110"
            cy="118"
            r="12"
            strokeWidth="1.4"
            opacity="0.5"
          />

          <path className="rocket-draw rocket-seam" pathLength="1" d="M74 196 L146 196" strokeWidth="1.4" />
          <path className="rocket-draw rocket-seam" pathLength="1" d="M74 214 L146 214" strokeWidth="1.4" />
          </g>
        </g>
      </svg>
    </button>
  )
}
