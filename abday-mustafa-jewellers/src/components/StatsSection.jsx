import { motion } from 'framer-motion'

const stats = [
  { value: '25+', label: 'Years of Legacy' },
  { value: '554+', label: 'Happy Customers' },
  { value: '5.0★', label: 'Google Rating' },
  { value: '1000+', label: 'Handcrafted Designs' },
]

export default function StatsSection() {
  return (
    <section className="relative bg-obsidian-2 border-y border-gold/10 py-16">
      <div className="container-lux grid grid-cols-2 md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="text-center"
          >
            <p className="heading-serif text-3xl sm:text-4xl text-gold-gradient">{s.value}</p>
            <p className="text-ivory/50 text-[11px] sm:text-xs tracking-widest2 uppercase mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
