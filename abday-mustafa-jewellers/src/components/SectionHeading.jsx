import { motion } from 'framer-motion'

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center', light }) {
  const alignClass = align === 'center' ? 'text-center items-center mx-auto' : 'text-left items-start'
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2 className={`heading-serif text-3xl sm:text-4xl md:text-5xl ${light ? 'text-black' : 'text-ivory'} leading-tight`}>{title}</h2>
      <div className={align === 'center' ? 'gold-divider' : 'h-[1px] w-16 bg-gold-gradient bg-[length:200%_100%]'} />
      {subtitle && <p className={`text-sm sm:text-base ${light ? 'text-black/60' : 'text-ivory/60'} leading-relaxed`}>{subtitle}</p>}
    </motion.div>
  )
}
