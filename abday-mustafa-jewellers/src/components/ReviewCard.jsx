import { motion } from 'framer-motion'

export default function ReviewCard({ review, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08 }}
      className="glass-card p-7 flex flex-col gap-4"
    >
      <div className="flex items-center justify-between">
        <div className="text-gold text-sm tracking-widest">{'★'.repeat(review.rating)}</div>
        <span className="text-[10px] text-ivory/30 tracking-widest2 uppercase">Google Review</span>
      </div>
      <p className="text-ivory/70 text-sm leading-relaxed italic">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3 mt-auto pt-2 border-t border-gold/10">
        <div className="w-9 h-9 rounded-full bg-gold-gradient bg-[length:200%_100%] flex items-center justify-center text-black text-xs heading-serif">
          {review.name.charAt(0)}
        </div>
        <div>
          <p className="text-ivory text-sm">{review.name}</p>
          <p className="text-ivory/40 text-xs">{review.location}</p>
        </div>
      </div>
    </motion.div>
  )
}
