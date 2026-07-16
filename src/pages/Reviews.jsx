import { motion } from 'framer-motion'
import ReviewCard from '../components/ReviewCard'
import CTASection from '../components/CTASection'
import { reviews, ratingStats } from '../data/reviews'

export default function Reviews() {
  const total = Object.values(ratingStats.breakdown).reduce((a, b) => a + b, 0)

  return (
    <>
      <section className="relative pt-44 pb-16 bg-pearl overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Customer Voices</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ink">
            554+ Happy Customers
          </motion.h1>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-card px-10 py-8 mt-4 flex flex-col sm:flex-row items-center gap-8">
            <div className="text-center">
              <p className="heading-serif text-5xl text-gold-gradient">{ratingStats.average.toFixed(1)}</p>
              <p className="text-gold text-sm tracking-widest mt-1">★★★★★</p>
              <p className="text-ink/40 text-xs mt-1">{ratingStats.count}+ Google Reviews</p>
            </div>
            <div className="flex flex-col gap-1.5 w-full sm:w-64">
              {[5, 4, 3, 2, 1].map((star) => (
                <div key={star} className="flex items-center gap-3 text-xs text-ink/50">
                  <span className="w-8">{star}★</span>
                  <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-gold-gradient bg-[length:200%_100%]" style={{ width: `${(ratingStats.breakdown[star] / total) * 100}%` }} />
                  </div>
                  <span className="w-8 text-right">{ratingStats.breakdown[star]}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-pearl">
        <div className="container-lux grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...reviews, ...reviews].slice(0, 12).map((r, i) => (
            <ReviewCard key={i} review={r} index={i} />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  )
}
