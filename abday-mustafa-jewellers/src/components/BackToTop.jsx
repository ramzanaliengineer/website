import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
          data-cursor="link"
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-full border border-gold/50 bg-black/80 backdrop-blur text-gold flex items-center justify-center hover:bg-gold hover:text-black transition-all duration-300"
        >
          ↑
        </motion.button>
      )}
    </AnimatePresence>
  )
}
