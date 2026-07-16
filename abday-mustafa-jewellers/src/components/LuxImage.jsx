import { useState } from 'react'

/**
 * Image component with a graceful luxury-styled fallback in case a source
 * fails to load (e.g. offline environments). Keeps the premium aesthetic
 * intact even without network access to the image CDN.
 */
export default function LuxImage({ src, alt = '', className = '', imgClassName = '', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return (
      <div
        className={`relative flex items-center justify-center bg-gradient-to-br from-obsidian-3 via-obsidian-2 to-black overflow-hidden ${className}`}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.35),transparent_60%)]" />
        <svg viewBox="0 0 64 64" className="w-1/4 h-1/4 text-gold/70 relative z-10" fill="none" stroke="currentColor" strokeWidth="1.2">
          <path d="M16 24 L32 8 L48 24 L40 24 L32 56 L24 24 Z" strokeLinejoin="round" />
          <path d="M16 24 L24 24 L32 56 M48 24 L40 24" strokeLinejoin="round" />
        </svg>
      </div>
    )
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={`${className} ${imgClassName}`}
      {...rest}
    />
  )
}
