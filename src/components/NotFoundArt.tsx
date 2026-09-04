/**
 * The 404 illustration: a rocket climbing away along the dashed track it has
 * already flown. The rocket and the line live in one drawing so the tail sits
 * on the end of the track no matter how the page is scaled.
 *
 * The rocket sits inside its own group. A CSS `transform` replaces the
 * `transform` attribute rather than composing with it, so the positioning
 * transform needs an element of its own that the animation never touches.
 */
export function NotFoundArt() {
  return (
    <svg
      className="notfound-trajectory"
      viewBox="0 0 720 300"
      role="img"
      aria-label="A rocket climbing away along a dashed trajectory"
      fill="none"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path
        className="trajectory-line"
        d="M24 274 C 180 270, 330 244, 440 190 C 510 156, 552 138, 574 118"
        strokeDasharray="5 11"
      />

      <g className="trajectory-rocket">
        {/* Pivot on the rocket's own centre, then drop it so its tail meets
            the end of the track at a tangent. */}
        <g transform="translate(608 84) rotate(45) scale(0.4) translate(-110 -140)">
          <g className="trajectory-exhaust" strokeWidth="9">
            <path d="M92 282 L90 300" />
            <path d="M110 286 L110 302" />
            <path d="M128 282 L130 300" />
          </g>
          <g strokeWidth="9">
            <path d="M110 16 C 132 54, 146 104, 146 152 L146 232 L74 232 L74 152 C 74 104, 88 54, 110 16 Z" />
            <path d="M74 176 C 52 192, 40 214, 38 246 L74 226" />
            <path d="M146 176 C 168 192, 180 214, 182 246 L146 226" />
            <path d="M84 232 L80 262 L140 262 L136 232" />
            <circle cx="110" cy="120" r="20" />
          </g>
        </g>
      </g>
    </svg>
  )
}
