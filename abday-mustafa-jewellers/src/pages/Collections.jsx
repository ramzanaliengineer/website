import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'
import CollectionCard from '../components/CollectionCard'
import CTASection from '../components/CTASection'
import LuxImage from '../components/LuxImage'
import { collections } from '../data/collections'

export default function Collections() {
  return (
    <>
      <section className="relative pt-44 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Explore</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ivory">
            Our Collections
          </motion.h1>
          <p className="text-ivory/50 max-w-xl text-sm sm:text-base">
            Fifteen curated categories, each handcrafted to celebrate a different moment, tradition and story.
          </p>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="container-lux grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {collections.map((c, i) => (
            <CollectionCard key={c.slug} collection={c} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
