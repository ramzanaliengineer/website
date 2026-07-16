import { useState } from 'react'
import JewelArt from './JewelArt'

/**
 * Renders a real photograph. If the network image ever fails to load,
 * falls back to a matching hand-drawn JewelArt illustration instead of
 * a broken image icon, so the layout never looks broken.
 */
export default function LuxImage({ src, alt = '', className = '', imgClassName = '', fallbackType = 'gem', ...rest }) {
  const [failed, setFailed] = useState(false)

  if (failed) {
    return <JewelArt type={fallbackType} className={className} />
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
