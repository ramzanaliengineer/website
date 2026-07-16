import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import LuxImage from '../components/LuxImage'
import CTASection from '../components/CTASection'

const img = (id, w = 900) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`

const items = [
  { id: 1, cat: 'Bridal', src: img('photo-1601121141461-9d6647bca1ed'), h: 'row-span-2' },
  { id: 2, cat: 'Gold', src: img('photo-1611591437281-460bfbe1220a'), h: '' },
  { id: 3, cat: 'Diamond', src: img('photo-1515562141207-7a88fb7ce338'), h: '' },
  { id: 4, cat: 'Store', src: img('photo-1523170335258-f5ed11844a49'), h: 'row-span-2' },
  { id: 5, cat: 'Gemstone', src: img('photo-1518544866330-4d9370733ce0'), h: '' },
  { id: 6, cat: 'Gold', src: img('photo-1616401784845-180882ba9ba8'), h: '' },
  { id: 7, cat: 'Bridal', src: img('photo-1543294001-f7cd5d7fb516'), h: 'row-span-2' },
  { id: 8, cat: 'Diamond', src: img('photo-1611652022419-a9419f74343d'), h: '' },
  { id: 9, cat: 'Gemstone', src: img('photo-1602752275438-63bf5b8b1f8a'), h: '' },
  { id: 10, cat: 'Customer', src: img('photo-1573408301185-9146fe634ad0'), h: '' },
  { id: 11, cat: 'Store', src: img('photo-1587467512961-120760940315'), h: '' },
  { id: 12, cat: 'Gold', src: img('photo-1610694955371-d4a3e0ce4b25'), h: 'row-span-2' },
]

const filters = ['All', 'Bridal', 'Gold', 'Diamond', 'Gemstone', 'Store', 'Customer']

export default function Gallery() {
  const [active, setActive] = useState('All')
  const [lightbox, setLightbox] = useState(null)

  const filtered = active === 'All' ? items : items.filter((i) => i.cat === active)

  return (
    <>
      <section className="relative pt-44 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Visual Journey</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ivory">
            Gallery
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="container-lux">
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`px-4 py-2 text-[11px] tracking-widest2 uppercase border transition-all duration-300 ${
                  active === f ? 'bg-gold text-black border-gold' : 'border-gold/25 text-ivory/60 hover:border-gold hover:text-gold'
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
                <LuxImage src={it.src} alt={it.cat} className="w-full h-full" imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-end p-3 transition-all duration-300">
                  <span className="text-ivory text-xs opacity-0 group-hover:opacity-100 tracking-widest2 uppercase transition-opacity duration-300">{it.cat}</span>
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
            className="fixed inset-0 z-[90] bg-black/95 flex items-center justify-center p-6"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-3xl max-h-[80vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <LuxImage src={lightbox.src} alt={lightbox.cat} className="w-full h-full" imgClassName="w-full h-full object-contain" />
              <button onClick={() => setLightbox(null)} className="absolute -top-10 right-0 text-gold text-2xl">✕</button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <CTASection />
    </>
  )
}
