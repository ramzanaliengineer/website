import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LuxImage from '../components/LuxImage'
import CTASection from '../components/CTASection'

const px = (id, w = 900) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const items = [
  { id: 1, cat: 'Bridal', icon: 'crown', src: px(29038003), h: 'row-span-2' },
  { id: 2, cat: 'Gold', icon: 'goldbar', src: px(24815712), h: '' },
  { id: 3, cat: 'Diamond', icon: 'diamond', src: px(29245554), h: '' },
  { id: 4, cat: 'Store', icon: 'store', src: px(16063741), h: 'row-span-2' },
  { id: 5, cat: 'Gemstone', icon: 'gem', src: px(13307186), h: '' },
  { id: 6, cat: 'Gold', icon: 'bangles', src: px(1616097), h: '' },
  { id: 7, cat: 'Bridal', icon: 'necklace', src: px(12184920), h: 'row-span-2' },
  { id: 8, cat: 'Diamond', icon: 'ring-solo', src: px(30541186), h: '' },
  { id: 9, cat: 'Gemstone', icon: 'pendant', src: px(17298629), h: '' },
  { id: 10, cat: 'Customer', icon: 'people', src: px(9838684), h: '' },
  { id: 11, cat: 'Store', icon: 'hands', src: px(7679657), h: '' },
  { id: 12, cat: 'Gold', icon: 'chain', src: px(13924051), h: 'row-span-2' },
  { id: 13, cat: 'Diamond', icon: 'earrings', src: px(12585697), h: '' },
  { id: 14, cat: 'Gemstone', icon: 'gem', src: px(13595301), h: '' },
  { id: 15, cat: 'Gemstone', icon: 'pendant', src: px(9430463), h: 'row-span-2' },
  { id: 16, cat: 'Diamond', icon: 'necklace', src: px(20100141), h: '' },
]

const filters = ['All', 'Bridal', 'Gold', 'Diamond', 'Gemstone', 'Store', 'Customer']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active)

  return (
    <>
      <section className="relative pt-44 pb-16 bg-pearl overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Visual Journey</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ink">
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-pearl">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[11px] tracking-widest2 uppercase border transition-all duration-300 ${
                  active === f ? 'bg-gold text-black border-gold' : 'border-gold/25 text-ink/60 hover:border-gold hover:text-gold'
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 auto-rows-[160px] sm:auto-rows-[200px]">
            {filtered.map((it) => (
              <motion.button
                key={it.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                onClick={() => setLightbox(it)}
                className={`group relative overflow-hidden ${it.h}`}
              >
                <LuxImage src={it.src} alt={it.cat} fallbackType={it.icon} className="w-full h-full" imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-end p-3 transition-all duration-300">
                  <span className="text-white text-xs opacity-0 group-hover:opacity-100 tracking-widest2 uppercase transition-opacity duration-300">{it.cat}</span>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[90] bg-black/90 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-lg max-h-[80vh] w-full aspect-square"
              onClick={(e) => e.stopPropagation()}
            >
              <LuxImage src={lightbox.src} alt={lightbox.cat} fallbackType={lightbox.icon} className="w-full h-full" imgClassName="w-full h-full object-cover" />
              <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-gold text-2xl">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
