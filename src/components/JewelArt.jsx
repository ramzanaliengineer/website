// Hand-built luxury line-art illustrations used throughout the site in place
// of external photography. Each rendersinstantly (no network dependency) and
// is matched contextually to its content, so cards never show a generic
// placeholder — every section gets artwork that fits what it represents.

const ICONS = {
  ring: (
    <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round">
      <circle cx="100" cy="128" r="42" />
      <path d="M100 86 L84 54 L100 40 L116 54 Z" />
      <path d="M86 56 L114 56" />
      <circle cx="100" cy="52" r="6" fill="currentColor" stroke="none" />
    </g>
  ),
  'ring-solo': (
    <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round">
      <circle cx="100" cy="132" r="46" />
      <path d="M100 86 L78 46 L100 30 L122 46 Z" />
      <polyline points="82,50 100,58 118,50" />
      <path d="M100 30 L100 58" opacity="0.5" />
    </g>
  ),
  necklace: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round">
      <path d="M46 44 C46 110 154 110 154 44" />
      <path d="M92 100 L100 132 L108 100 Z" fill="currentColor" stroke="none" opacity="0.9" />
      <circle cx="100" cy="96" r="5" fill="currentColor" stroke="none" />
      {[...Array(10)].map((_, i) => {
        const t = i / 9
        const x = 46 + t * 108
        const y = 44 + Math.sin(t * Math.PI) * 62
        return <circle key={i} cx={x} cy={y} r="2.6" fill="currentColor" stroke="none" />
      })}
    </g>
  ),
  pendant: (
    <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round">
      <circle cx="100" cy="52" r="14" />
      <path d="M100 66 L100 84" />
      <path d="M70 84 L130 84 L112 156 L88 156 Z" />
      <path d="M82 106 L118 106" opacity="0.5" />
      <path d="M90 130 L110 130" opacity="0.5" />
    </g>
  ),
  chain: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      {[...Array(7)].map((_, i) => (
        <ellipse key={i} cx={100} cy={30 + i * 22} rx="18" ry="12" transform={`rotate(${i % 2 === 0 ? 0 : 90} 100 ${30 + i * 22})`} />
      ))}
    </g>
  ),
  bangles: (
    <g stroke="currentColor" strokeWidth="2.4" fill="none">
      <ellipse cx="100" cy="110" rx="52" ry="58" />
      <ellipse cx="100" cy="110" rx="38" ry="44" />
      <ellipse cx="100" cy="98" rx="60" ry="66" opacity="0.4" />
    </g>
  ),
  bracelet: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      <ellipse cx="100" cy="115" rx="58" ry="30" />
      {[...Array(8)].map((_, i) => {
        const a = (i / 8) * Math.PI * 2
        const x = 100 + Math.cos(a) * 58
        const y = 115 + Math.sin(a) * 30
        return <circle key={i} cx={x} cy={y} r="3" fill="currentColor" stroke="none" />
      })}
    </g>
  ),
  anklet: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      <ellipse cx="100" cy="120" rx="64" ry="24" />
      {[...Array(9)].map((_, i) => {
        const t = i / 8
        const x = 40 + t * 120
        const y = 120 + Math.sin(t * Math.PI) * 20
        return <circle key={i} cx={x} cy={y + 24} r="3" fill="currentColor" stroke="none" />
      })}
    </g>
  ),
  earrings: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      <circle cx="70" cy="44" r="8" />
      <path d="M70 52 L70 70" />
      <path d="M55 70 L85 70 L75 128 L65 128 Z" />
      <circle cx="130" cy="44" r="8" />
      <path d="M130 52 L130 70" />
      <path d="M115 70 L145 70 L135 128 L125 128 Z" />
    </g>
  ),
  crown: (
    <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round">
      <path d="M48 138 L58 76 L82 104 L100 62 L118 104 L142 76 L152 138 Z" />
      <path d="M48 138 L152 138" />
      <circle cx="100" cy="58" r="4" fill="currentColor" stroke="none" />
    </g>
  ),
  diamond: (
    <g stroke="currentColor" strokeWidth="2.4" fill="none" strokeLinejoin="round">
      <path d="M66 74 L100 40 L134 74 L100 168 Z" />
      <path d="M66 74 L134 74" />
      <path d="M84 74 L100 40 L116 74" />
      <path d="M84 74 L100 168" opacity="0.6" />
      <path d="M116 74 L100 168" opacity="0.6" />
    </g>
  ),
  watch: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      <circle cx="100" cy="106" r="40" />
      <circle cx="100" cy="106" r="30" opacity="0.5" />
      <path d="M100 88 L100 106 L114 114" strokeLinecap="round" />
      <path d="M88 66 L112 66 L108 46 L92 46 Z" />
      <path d="M88 146 L112 146 L108 166 L92 166 Z" />
    </g>
  ),
  goldbar: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round">
      <path d="M60 92 L140 92 L154 148 L46 148 Z" />
      <path d="M46 148 L60 92" opacity="0.6" />
      <path d="M154 148 L140 92" opacity="0.6" />
      <text x="100" y="126" fontFamily="Playfair Display, serif" fontSize="14" fill="currentColor" stroke="none" textAnchor="middle">24K</text>
    </g>
  ),
  gem: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round">
      <polygon points="100,44 138,76 100,166 62,76" />
      <polygon points="62,76 138,76 100,100" opacity="0.55" />
      <path d="M80 76 L100 44 L120 76" />
    </g>
  ),
  store: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round">
      <path d="M46 92 L46 158 L154 158 L154 92" />
      <path d="M38 92 L100 52 L162 92 Z" />
      <path d="M84 158 L84 122 L116 122 L116 158" />
      <circle cx="100" cy="76" r="6" fill="currentColor" stroke="none" />
    </g>
  ),
  hands: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinecap="round" strokeLinejoin="round">
      <path d="M62 130 C58 108 66 90 78 84 C82 76 96 74 100 84" />
      <path d="M138 130 C142 108 134 90 122 84 C118 76 104 74 100 84" />
      <polygon points="100,60 112,80 100,100 88,80" fill="currentColor" opacity="0.85" stroke="none" />
      <path d="M64 130 C64 148 136 148 136 130" />
    </g>
  ),
  people: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none">
      <circle cx="76" cy="80" r="18" />
      <path d="M42 152 C42 118 110 118 110 152" />
      <circle cx="132" cy="88" r="14" opacity="0.6" />
      <path d="M104 152 C104 126 160 126 160 152" opacity="0.6" />
    </g>
  ),
  camera: (
    <g stroke="currentColor" strokeWidth="2.2" fill="none" strokeLinejoin="round">
      <rect x="52" y="80" width="96" height="72" rx="6" />
      <circle cx="100" cy="116" r="24" />
      <path d="M82 80 L88 64 L112 64 L118 80" />
    </g>
  ),
}

export default function JewelArt({ type = 'gem', className = '', tone = 'gold' }) {
  const toneClass = tone === 'gold' ? 'text-gold' : 'text-champagne'
  return (
    <div className={`relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-obsidian-3 via-obsidian-2 to-black ${className}`}>
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.14),transparent_65%)]" />
      <div className="absolute inset-0 opacity-[0.04] mix-blend-overlay bg-[repeating-linear-gradient(45deg,#D4AF37_0px,#D4AF37_1px,transparent_1px,transparent_14px)]" />
      <svg viewBox="0 0 200 200" className={`relative w-2/5 h-2/5 ${toneClass}`}>
        {ICONS[type] || ICONS.gem}
      </svg>
    </div>
  )
}
