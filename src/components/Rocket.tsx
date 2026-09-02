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
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <div className="rocket-wrap" ref={ref} data-animate={inView ? 'run' : 'pause'}>
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
        <g className="rocket-exhaust">
          <path className="rocket-flame rocket-flame-1" pathLength="1" d="M92 268 C 88 288, 94 302, 90 320" />
          <path className="rocket-flame rocket-flame-2" pathLength="1" d="M110 272 C 106 296, 114 312, 110 332" />
          <path className="rocket-flame rocket-flame-3" pathLength="1" d="M128 268 C 132 288, 126 302, 130 320" />
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
      </svg>
    </div>
  )
}
