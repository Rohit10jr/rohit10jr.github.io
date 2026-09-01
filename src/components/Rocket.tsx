/**
 * Line-art rocket for the hero. Drawn in `currentColor` so it inherits the
 * page palette, matching the flourish and the nav icons.
 */
export function Rocket() {
  return (
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
      {/* exhaust — three plumes under the engine */}
      <g className="rocket-exhaust" strokeWidth="2">
        <path className="rocket-flame rocket-flame-1" d="M92 268 C 88 288, 94 302, 90 320" />
        <path className="rocket-flame rocket-flame-2" d="M110 272 C 106 296, 114 312, 110 332" />
        <path className="rocket-flame rocket-flame-3" d="M128 268 C 132 288, 126 302, 130 320" />
      </g>

      <g className="rocket-body">
        {/* fuselage: nose cone down to the engine skirt */}
        <path d="M110 16 C 132 54, 146 104, 146 152 L146 232 L74 232 L74 152 C 74 104, 88 54, 110 16 Z" />

        {/* fins */}
        <path d="M74 176 C 52 192, 40 214, 38 246 L74 226" />
        <path d="M146 176 C 168 192, 180 214, 182 246 L146 226" />

        {/* engine skirt */}
        <path d="M84 232 L80 262 L140 262 L136 232" />

        {/* window */}
        <circle cx="110" cy="118" r="20" />
        <circle cx="110" cy="118" r="12" strokeWidth="1.4" opacity="0.5" />

        {/* body seams */}
        <path d="M74 196 L146 196" strokeWidth="1.4" opacity="0.45" />
        <path d="M74 214 L146 214" strokeWidth="1.4" opacity="0.45" />
      </g>
    </svg>
  )
}
