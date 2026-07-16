import { motion } from 'framer-motion'
import GemSVG from './GemSVG'

export default function GemstoneCard({ gem, index = 0 }) {
  const waMsg = encodeURIComponent(`Hello, I would like to enquire about the ${gem.name} available at Abday Mustafa Gems & Jewellers.`)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: 'easeOut' }}
      className="group glass-card overflow-hidden flex flex-col"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <GemSVG
          slug={gem.slug}
          className="w-full h-full transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="absolute bottom-3 left-4">
          <h3 className="heading-serif text-2xl text-ivory">{gem.name}</h3>
          <p className="text-gold text-xs tracking-wide">{gem.tagline}</p>
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3 flex-1">
        <p className="text-ivory/60 text-sm leading-relaxed">{gem.description}</p>
        <p className="text-xs text-ivory/50"><span className="text-gold/80">Benefits — </span>{gem.benefits}</p>
        <div className="text-xs text-ivory/40">Origin: <span className="text-ivory/60">{gem.origin}</span></div>
        <div className="flex flex-wrap gap-1.5">
          {gem.sizes.map((s) => (
            <span key={s} className="text-[10px] px-2.5 py-1 border border-gold/25 text-ivory/60 rounded-full">{s}</span>
          ))}
        </div>
        <div className="flex gap-2 mt-2">
          <a href={`https://wa.me/923057121111?text=${waMsg}`} target="_blank" rel="noreferrer" className="flex-1 text-center btn-outline !py-2.5 !px-2 !text-[10px]">
            Get Price
          </a>
          <a href={`https://wa.me/923057121111?text=${waMsg}`} target="_blank" rel="noreferrer" className="flex-1 text-center btn-gold !py-2.5 !px-2 !text-[10px]">
            Enquire Now
          </a>
        </div>
      </div>
    </motion.div>
  )
}
