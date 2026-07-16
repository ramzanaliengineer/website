import { motion } from 'framer-motion'

export default function CTASection() {
  return (
    <section className="relative section-pad bg-gradient-to-b from-black via-obsidian-3 to-black text-center overflow-hidden">
      <div className="absolute inset-0 bg-radial-fade" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="container-lux relative flex flex-col items-center gap-6"
      >
        <span className="eyebrow">Visit The House Of Abday Mustafa</span>
        <h2 className="heading-serif text-3xl sm:text-5xl text-ivory max-w-2xl leading-tight">
          Begin your legacy with a piece crafted just for you
        </h2>
        <p className="text-ivory/60 max-w-lg text-sm sm:text-base">
          Book a private consultation at our Kunjah showroom, or reach out on WhatsApp for a custom design quote.
        </p>
        <div className="flex flex-wrap gap-4 justify-center mt-2">
          <a href="https://wa.me/923057121111" target="_blank" rel="noreferrer" className="btn-gold">Chat on WhatsApp</a>
          <a href="tel:+923057121111" className="btn-outline">Call +92 305 7121111</a>
        </div>
      </motion.div>
    </section>
  )
}
