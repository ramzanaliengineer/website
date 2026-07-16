import { motion } from 'framer-motion'
import LuxImage from '../components/LuxImage'
import SectionHeading from '../components/SectionHeading'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

const px = (id, w = 1200) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const journey = [
  { year: 'The Beginning', text: 'Abday Mustafa Gems & Jewellers opened its doors in Main Bazar, Kunjah, with a single promise: uncompromising purity and honest craftsmanship.' },
  { year: 'Building Trust', text: 'Word of mouth carried our name across Kunjah and beyond, as families returned generation after generation for their most cherished occasions.' },
  { year: 'Expanding The Craft', text: 'We introduced certified natural gemstones and bespoke design services, bringing rare beauty within reach of every client.' },
  { year: 'Today', text: 'With 554+ five-star reviews, we continue to serve as the region\'s most trusted name in fine jewellery.' },
]

const team = [
  { name: 'Abday Mustafa', role: 'Founder & Master Jeweller', icon: 'ring-solo', image: px(32622561, 700) },
  { name: 'Design Studio', role: 'Custom Design Atelier', icon: 'necklace', image: px(4532678, 700) },
  { name: 'Gemstone Experts', role: 'Sourcing & Certification', icon: 'gem', image: px(17298629, 700) },
]

const galleryStrip = [
  { icon: 'crown', image: px(29038003, 600), label: 'Bridal' },
  { icon: 'diamond', image: px(2735981, 600), label: 'Diamond' },
  { icon: 'bangles', image: px(1616097, 600), label: 'Gold' },
  { icon: 'earrings', image: px(13595676, 600), label: 'Earrings' },
]

export default function About() {
  return (
    <>
      <section className="relative pt-40 pb-20 overflow-hidden bg-gradient-to-b from-pearl via-pearl-dark to-pearl">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">Our Story</motion.span>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="heading-serif text-4xl sm:text-6xl text-ink mt-4">
              A Legacy Woven In Gold
            </motion.h1>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.8 }} className="relative aspect-[4/3] overflow-hidden shadow-gold-sm">
            <LuxImage src={px(16063741)} alt="Abday Mustafa showroom" fallbackType="store" className="w-full h-full" imgClassName="w-full h-full object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="section-pad bg-pearl">
        <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative aspect-[4/5] overflow-hidden shadow-gold-sm">
            <LuxImage src={px(7679657)} alt="Jewellery craftsmanship" fallbackType="hands" className="w-full h-full" imgClassName="w-full h-full object-cover" />
          </motion.div>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Mission & Vision" title="Crafted With Purpose, Worn With Pride" align="left" />
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
              Our mission is simple: to craft jewellery of uncompromising purity and beauty, while treating every
              customer with the honesty and warmth of family. From a single counter in Main Bazar, Kunjah, we have
              grown into a name synonymous with trust across the region.
            </p>
            <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
              Our vision is to become Pakistan's most beloved house of fine jewellery — one where heirloom
              craftsmanship meets contemporary design, and where every gemstone tells a story of authenticity.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section-pad bg-pearl-dark">
        <div className="container-lux flex flex-col items-center gap-16">
          <SectionHeading eyebrow="Our Journey" title="Milestones Of A Growing Legacy" />
          <div className="grid md:grid-cols-2 gap-8 w-full">
            {journey.map((j, i) => (
              <motion.div
                key={j.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="glass-card p-8"
              >
                <p className="eyebrow mb-3">{j.year}</p>
                <p className="text-ink/60 text-sm leading-relaxed">{j.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-pearl">
        <div className="container-lux flex flex-col items-center gap-16">
          <SectionHeading eyebrow="Craftsmanship" title="Meet Our Team" subtitle="The hands and hearts behind every Abday Mustafa creation." />
          <div className="grid sm:grid-cols-3 gap-8 w-full">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-5 shadow-gold-sm">
                  <LuxImage src={t.image} alt={t.name} fallbackType={t.icon} className="w-full h-full" imgClassName="w-full h-full object-cover" />
                </div>
                <h3 className="heading-serif text-xl text-ink">{t.name}</h3>
                <p className="text-gold text-xs tracking-widest2 uppercase mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-pearl-dark">
        <div className="container-lux grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryStrip.map((g, i) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative aspect-square overflow-hidden shadow-gold-sm"
            >
              <LuxImage src={g.image} alt={g.label} fallbackType={g.icon} className="w-full h-full" imgClassName="w-full h-full object-cover" />
            </motion.div>
          ))}
        </div>
      </section>

      <section className="section-pad bg-pearl border-y border-gold/10">
        <div className="container-lux flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <SectionHeading eyebrow="Why Customers Trust Us" title="Honesty, Purity & A Perfect 5.0 Rating" />
          <p className="text-ink/60 text-sm sm:text-base leading-relaxed">
            With 554+ five-star Google reviews, our reputation is our greatest asset. Every piece is hallmarked,
            every gemstone certified, and every customer treated with the respect they deserve.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
