import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import LuxImage from './LuxImage'

export default function ProductCard({ product, index = 0 }) {
  const [wished, setWished] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 6) * 0.06, ease: 'easeOut' }}
      className="group relative glass-card"
    >
      <div className="relative aspect-square overflow-hidden">
        <Link to={`/products/${product.id}`} data-cursor="link">
          <LuxImage
            src={product.image}
            alt={product.name}
            fallbackType={product.icon}
            className="w-full h-full"
            imgClassName="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </Link>
        {product.tag && (
          <span className="absolute top-3 left-3 bg-gold text-black text-[10px] tracking-widest2 uppercase px-3 py-1">
            {product.tag}
          </span>
        )}
        <button
          onClick={() => setWished(!wished)}
          aria-label="Add to wishlist"
          className={`absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 ${
            wished ? 'bg-gold text-black border-gold' : 'bg-black/50 text-gold border-gold/40 hover:bg-gold hover:text-black'
          }`}
        >
          ♥
        </button>
        <div className="absolute inset-x-0 bottom-0 p-3 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-400 flex gap-2">
          <Link to={`/products/${product.id}`} className="flex-1 text-center bg-black/80 backdrop-blur text-gold text-[10px] tracking-widest2 uppercase py-2 border border-gold/30 hover:bg-gold hover:text-black transition-colors duration-300">
            Quick View
          </Link>
        </div>
      </div>
      <div className="p-5">
        <p className="text-[10px] tracking-widest2 uppercase text-gold/70 mb-1">{product.category}</p>
        <h3 className="heading-serif text-lg text-ink mb-1 leading-snug">{product.name}</h3>
        <p className="text-sm text-champagne">{product.price}</p>
      </div>
    </motion.div>
  )
}
