import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import LuxImage from './LuxImage'

export default function CollectionCard({ collection, index = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 4) * 0.08, ease: 'easeOut' }}
    >
      <Link
        to={`/products?category=${encodeURIComponent(collection.name.split(' ')[0])}`}
        data-cursor="link"
        className="group relative block overflow-hidden aspect-[3/4] border border-gold/10"
      >
        <LuxImage
          src={collection.image}
          alt={collection.name}
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/10 group-hover:from-black/90 transition-all duration-500" />
        <div className="absolute inset-0 border border-gold/0 group-hover:border-gold/40 transition-all duration-500 m-3" />
        <div className="absolute bottom-0 left-0 right-0 p-6 flex flex-col gap-1 translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="heading-serif text-xl sm:text-2xl text-ivory">{collection.name}</h3>
          <p className="text-ivory/60 text-xs opacity-0 group-hover:opacity-100 max-h-0 group-hover:max-h-10 overflow-hidden transition-all duration-500">
            {collection.desc}
          </p>
          <span className="mt-2 text-gold text-[11px] tracking-widest2 uppercase">Explore →</span>
        </div>
      </Link>
    </motion.div>
  )
}
