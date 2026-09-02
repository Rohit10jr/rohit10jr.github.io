/**
 * Compact rocket for the back-to-top button. Same silhouette as the hero
 * drawing, with the seams and inner window dropped — they turn to mud at 30px.
 */
export function RocketMark() {
  return (
    <svg
      className="rocket-mark"
      viewBox="0 0 220 300"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <g className="rocket-mark-exhaust">
        <path d="M92 282 L90 300" />
        <path d="M110 286 L110 300" />
        <path d="M128 282 L130 300" />
      </g>
      <path d="M110 16 C 132 54, 146 104, 146 152 L146 232 L74 232 L74 152 C 74 104, 88 54, 110 16 Z" />
      <path d="M74 176 C 52 192, 40 214, 38 246 L74 226" />
      <path d="M146 176 C 168 192, 180 214, 182 246 L146 226" />
      <path d="M84 232 L80 262 L140 262 L136 232" />
      <circle cx="110" cy="120" r="20" />
    </svg>
  )
}
