// Procedurally illustrated gemstones — accurate colours per stone, rendered as
// crisp faceted / cabochon SVG art so the Gemstones page never depends on
// external photos and always looks premium & consistent with the brand.

const GEM_STYLES = {
  ruby: { style: 'facet', colors: ['#5c0a12', '#9b111e', '#e0455f', '#ff8fa3'] },
  emerald: { style: 'facet', colors: ['#04331f', '#046307', '#2ecc71', '#a9f5c9'] },
  sapphire: { style: 'facet', colors: ['#061a4d', '#0f52ba', '#4169e1', '#a9c6ff'] },
  topaz: { style: 'facet', colors: ['#0d5c73', '#1a8fa8', '#4ab8de', '#c9f3ff'] },
  amethyst: { style: 'facet', colors: ['#3a0d5c', '#6a0dad', '#9966cc', '#dcc4f5'] },
  aquamarine: { style: 'facet', colors: ['#0d5c56', '#2fa89a', '#7fffd4', '#e2fff6'] },
  citrine: { style: 'facet', colors: ['#7a5a02', '#b8860b', '#e4c000', '#fff2b0'] },
  garnet: { style: 'facet', colors: ['#3d1012', '#733635', '#a42a3f', '#e08a97'] },
  pearl: { style: 'cabochon', colors: ['#c9c2ae', '#efe9db', '#fffdf6', '#ffffff'] },
  turquoise: { style: 'cabochon', colors: ['#0e6b63', '#1ca9a0', '#30d5c8', '#c8fff6'] },
  opal: { style: 'opal', colors: ['#e9e4f0', '#a0e7e5', '#ffb3d9', '#c9f2c7', '#fff3b0'] },
  peridot: { style: 'facet', colors: ['#4c5c05', '#7a8f0a', '#b4c424', '#eaf5a8'] },
  alexandrite: { style: 'opal', colors: ['#1f6b3a', '#3fae63', '#6a2a7a', '#b25fd1'] },
  'cats-eye': { style: 'catseye', colors: ['#5c5109', '#9a8a1f', '#c9b950', '#f2e9b8'] },
  moonstone: { style: 'cabochon', colors: ['#2b3a55', '#7c93c4', '#cfe0f5', '#ffffff'] },
  zircon: { style: 'facet', colors: ['#1a2a3d', '#5c7a9e', '#bfe0f5', '#ffffff'] },
}

function FacetGem({ id, colors }) {
  const [dark, mid, bright, light] = colors
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="42%" r="65%">
          <stop offset="0%" stopColor={bright} stopOpacity="0.55" />
          <stop offset="100%" stopColor={bright} stopOpacity="0" />
        </radialGradient>
        <linearGradient id={`g1-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={light} />
          <stop offset="100%" stopColor={mid} />
        </linearGradient>
      </defs>
      <circle cx="100" cy="95" r="80" fill={`url(#glow-${id})`} />
      {/* crown facets */}
      <polygon points="100,28 132,58 100,72 68,58" fill={bright} opacity="0.95" />
      <polygon points="68,58 100,72 92,100 45,88" fill={mid} />
      <polygon points="132,58 155,88 108,100 100,72" fill={dark} />
      <polygon points="45,88 92,100 100,150 60,120" fill={`url(#g1-${id})`} />
      <polygon points="108,100 155,88 140,120 100,150" fill={mid} />
      <polygon points="92,100 108,100 100,150" fill={bright} opacity="0.9" />
      {/* pavilion tip */}
      <polygon points="60,120 100,150 140,120 100,172" fill={dark} />
      {/* table highlight */}
      <polygon points="92,100 108,100 100,72" fill={light} opacity="0.85" />
      <polyline points="100,28 132,58 100,72 68,58 100,28" fill="none" stroke={light} strokeWidth="0.6" opacity="0.6" />
      <polyline points="45,88 92,100 100,150 60,120 45,88" fill="none" stroke={light} strokeWidth="0.5" opacity="0.35" />
      <ellipse cx="82" cy="55" rx="14" ry="6" fill="#ffffff" opacity="0.5" transform="rotate(-18 82 55)" />
    </svg>
  )
}

function CabochonGem({ id, colors }) {
  const [dark, mid, bright, light] = colors
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={bright} stopOpacity="0.5" />
          <stop offset="100%" stopColor={bright} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`dome-${id}`} cx="42%" cy="35%" r="65%">
          <stop offset="0%" stopColor={light} />
          <stop offset="45%" stopColor={bright} />
          <stop offset="80%" stopColor={mid} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="82" fill={`url(#glow-${id})`} />
      <circle cx="100" cy="102" r="62" fill={`url(#dome-${id})`} />
      <ellipse cx="78" cy="72" rx="20" ry="12" fill="#ffffff" opacity="0.55" transform="rotate(-25 78 72)" />
      <circle cx="100" cy="102" r="62" fill="none" stroke={light} strokeOpacity="0.3" strokeWidth="1" />
    </svg>
  )
}

function OpalGem({ id, colors }) {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={colors[2]} stopOpacity="0.5" />
          <stop offset="100%" stopColor={colors[2]} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`dome-${id}`} cx="40%" cy="35%" r="70%">
          {colors.map((c, i) => (
            <stop key={c} offset={`${(i / (colors.length - 1)) * 100}%`} stopColor={c} />
          ))}
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="82" fill={`url(#glow-${id})`} />
      <circle cx="100" cy="102" r="62" fill={`url(#dome-${id})`} opacity="0.92" />
      <ellipse cx="78" cy="72" rx="20" ry="12" fill="#ffffff" opacity="0.6" transform="rotate(-25 78 72)" />
      <circle cx="100" cy="102" r="62" fill="none" stroke="#ffffff" strokeOpacity="0.25" strokeWidth="1" />
    </svg>
  )
}

function CatsEyeGem({ id, colors }) {
  const [dark, mid, bright, light] = colors
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <defs>
        <radialGradient id={`glow-${id}`} cx="50%" cy="45%" r="60%">
          <stop offset="0%" stopColor={bright} stopOpacity="0.5" />
          <stop offset="100%" stopColor={bright} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`dome-${id}`} cx="42%" cy="38%" r="65%">
          <stop offset="0%" stopColor={light} />
          <stop offset="50%" stopColor={bright} />
          <stop offset="100%" stopColor={dark} />
        </radialGradient>
      </defs>
      <circle cx="100" cy="100" r="82" fill={`url(#glow-${id})`} />
      <circle cx="100" cy="102" r="62" fill={`url(#dome-${id})`} />
      <ellipse cx="100" cy="102" rx="46" ry="5" fill="#ffffff" opacity="0.75" />
      <ellipse cx="78" cy="72" rx="16" ry="9" fill="#ffffff" opacity="0.4" transform="rotate(-25 78 72)" />
    </svg>
  )
}

export default function GemSVG({ slug, className = '' }) {
  const gem = GEM_STYLES[slug] || GEM_STYLES.sapphire
  const id = slug

  return (
    <div className={`relative flex items-center justify-center bg-gradient-to-br from-obsidian-3 via-obsidian-2 to-black ${className}`}>
      <div className="absolute inset-0 opacity-70 bg-[radial-gradient(circle_at_50%_30%,rgba(212,175,55,0.12),transparent_65%)]" />
      <div className="relative w-3/5 h-3/5">
        {gem.style === 'facet' && <FacetGem id={id} colors={gem.colors} />}
        {gem.style === 'cabochon' && <CabochonGem id={id} colors={gem.colors} />}
        {gem.style === 'opal' && <OpalGem id={id} colors={gem.colors} />}
        {gem.style === 'catseye' && <CatsEyeGem id={id} colors={gem.colors} />}
      </div>
    </div>
  )
}
