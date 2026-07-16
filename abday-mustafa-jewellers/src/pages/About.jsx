import { motion } from 'framer-motion'
import LuxImage from '../components/LuxImage'
import SectionHeading from '../components/SectionHeading'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'

const img = (id, w = 1400) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`

const journey = [
  { year: 'The Beginning', text: 'Abday Mustafa Gems & Jewellers opened its doors in Main Bazar, Kunjah, with a single promise: uncompromising purity and honest craftsmanship.' },
  { year: 'Building Trust', text: 'Word of mouth carried our name across Kunjah and beyond, as families returned generation after generation for their most cherished occasions.' },
  { year: 'Expanding The Craft', text: 'We introduced certified natural gemstones and bespoke design services, bringing rare beauty within reach of every client.' },
  { year: 'Today', text: 'With 554+ five-star reviews, we continue to serve as the region\'s most trusted name in fine jewellery.' },
]

const team = [
  { name: 'Abday Mustafa', role: 'Founder & Master Jeweller', img: img('photo-1611591437281-460bfbe1220a', 600) },
  { name: 'Design Studio', role: 'Custom Design Atelier', img: img('photo-1523170335258-f5ed11844a49', 600) },
  // { name: 'Gemstone Experts', role: 'Sourcing & Certification', img: img('photo-1518544866330-4d9370733ce0', 600) },
]

export default function About() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[420px] flex items-center overflow-hidden">
        <LuxImage src={img('photo-1523170335258-f5ed11844a49', 1800)} alt="Abday Mustafa store" className="absolute inset-0 w-full h-full" imgClassName="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/75" />
        <div className="container-lux relative z-10">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="eyebrow">Our Story</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15, duration: 0.7 }} className="heading-serif text-4xl sm:text-6xl text-ivory mt-4 max-w-2xl">
            A Legacy Woven In Gold
          </motion.h1>
        </div>
      </section>

      <section className="section-pad bg-black">
        <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative aspect-[4/5] overflow-hidden">
            <LuxImage src={img('photo-1611591437281-460bfbe1220a')} alt="Craftsmanship" className="w-full h-full" imgClassName="w-full h-full object-cover" />
            <div className="absolute inset-0 border border-gold/30 m-4" />
          </motion.div>
          <div className="flex flex-col gap-6">
            <SectionHeading eyebrow="Mission & Vision" title="Crafted With Purpose, Worn With Pride" align="left" />
            <p className="text-ivory/60 text-sm sm:text-base leading-relaxed">
              Our mission is simple: to craft jewellery of uncompromising purity and beauty, while treating every
              customer with the honesty and warmth of family. From a single counter in Main Bazar, Kunjah, we have
              grown into a name synonymous with trust across the region.
            </p>
            <p className="text-ivory/60 text-sm sm:text-base leading-relaxed">
              Our vision is to become Pakistan's most beloved house of fine jewellery — one where heirloom
              craftsmanship meets contemporary design, and where every gemstone tells a story of authenticity.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="section-pad bg-obsidian-2">
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
                <p className="text-ivory/60 text-sm leading-relaxed">{j.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-black">
        <div className="container-lux flex flex-col items-center gap-16">
          <SectionHeading eyebrow="Craftsmanship" title="Meet Our Team" subtitle="The hands and hearts behind every Abday Mustafa creation." />
          <div className="grid sm:grid-cols-3 gap-8 w-full">
            {team.map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: i * 0.1 }} className="text-center">
                <div className="relative aspect-square overflow-hidden mb-5">
                  <LuxImage src={t.img} alt={t.name} className="w-full h-full" imgClassName="w-full h-full object-cover" />
                </div>
                <h3 className="heading-serif text-xl text-ivory">{t.name}</h3>
                <p className="text-gold text-xs tracking-widest2 uppercase mt-1">{t.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-obsidian-2 border-y border-gold/10">
        <div className="container-lux flex flex-col items-center text-center gap-6 max-w-2xl mx-auto">
          <SectionHeading eyebrow="Why Customers Trust Us" title="Honesty, Purity & A Perfect 5.0 Rating" />
          <p className="text-ivory/60 text-sm sm:text-base leading-relaxed">
            With 554+ five-star Google reviews, our reputation is our greatest asset. Every piece is hallmarked,
            every gemstone certified, and every customer treated with the respect they deserve.
          </p>
        </div>
      </section>

      <CTASection />
    </>
  )
}
