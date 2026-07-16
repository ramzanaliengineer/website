import { motion } from 'framer-motion'
import GemstoneCard from '../components/GemstoneCard'
import CTASection from '../components/CTASection'
import { gemstones } from '../data/gemstones'

export default function Gemstones() {
  return (
    <>
      <section className="relative pt-44 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Certified & Natural</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ivory">
            Premium Gemstones
          </motion.h1>
          <p className="text-ivory/50 max-w-xl text-sm sm:text-base">
            Sixteen precious and semi-precious gemstones, ethically sourced and available for custom setting.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="container-lux grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {gemstones.map((g, i) => (
            <GemstoneCard key={g.slug} gem={g} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
