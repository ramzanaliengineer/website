import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 })
  const [hovering, setHovering] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const move = (e) => {
      setPos({ x: e.clientX, y: e.clientY })
      if (!visible) setVisible(true)
      const target = e.target.closest('a, button, [data-cursor="link"]')
      setHovering(Boolean(target))
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [visible])

  return (
    <div className="hidden md:block">
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none rounded-full border border-gold"
        animate={{
          x: pos.x - (hovering ? 22 : 9),
          y: pos.y - (hovering ? 22 : 9),
          width: hovering ? 44 : 18,
          height: hovering ? 44 : 18,
          opacity: visible ? (hovering ? 0.9 : 0.6) : 0,
          backgroundColor: hovering ? 'rgba(212,175,55,0.08)' : 'transparent',
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 32, mass: 0.4 }}
      />
      <motion.div
        className="fixed top-0 left-0 z-[200] pointer-events-none w-1 h-1 rounded-full bg-gold"
        animate={{ x: pos.x - 2, y: pos.y - 2, opacity: visible ? 1 : 0 }}
        transition={{ type: 'spring', stiffness: 900, damping: 40 }}
      />
    </div>
  )
}
