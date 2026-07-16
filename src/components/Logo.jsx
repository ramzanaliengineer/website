// A compact, premium gem + monogram lockup used wherever the "AM" badge
// previously showed plain text. Renders via currentColor so it inherits
// whatever gold/black state the parent button/badge is already styled with.
export default function Logo({ className = '' }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none">
      <polygon points="50,14 62,30 50,40 38,30" fill="currentColor" />
      <path d="M38 30 L50 40 L62 30" stroke="currentColor" strokeWidth="1" opacity="0.5" fill="none" />
      <text
        x="50"
        y="76"
        textAnchor="middle"
        fontFamily="'Playfair Display', serif"
        fontStyle="italic"
        fontWeight="600"
        fontSize="34"
        fill="currentColor"
      >
        AM
      </text>
      <path d="M26 86 Q50 94 74 86" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.6" strokeLinecap="round" />
    </svg>
  )
}
