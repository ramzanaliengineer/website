import { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import LuxImage from '../components/LuxImage'
import ProductCard from '../components/ProductCard'
import SectionHeading from '../components/SectionHeading'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find((p) => p.id === id)
  const [active, setActive] = useState(0)
  const [zoom, setZoom] = useState(false)

  if (!product) return <Navigate to="/products" replace />

  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4)
  const waMsg = encodeURIComponent(`Hello, I'm interested in the ${product.name} (${product.price}).`)

  return (
    <>
      <section className="pt-32 sm:pt-40 pb-24 bg-black">
        <div className="container-lux">
          <div className="text-xs text-ivory/40 mb-10 flex gap-2">
            <Link to="/" className="hover:text-gold">Home</Link> /
            <Link to="/products" className="hover:text-gold">Products</Link> /
            <span className="text-gold">{product.name}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <div
                className={`relative aspect-square overflow-hidden mb-4 border border-gold/15 cursor-zoom-in ${zoom ? 'cursor-zoom-out' : ''}`}
                onClick={() => setZoom(!zoom)}
              >
                <LuxImage
                  src={product.gallery[active]}
                  alt={product.name}
                  className="w-full h-full"
                  imgClassName={`w-full h-full object-cover transition-transform duration-500 ${zoom ? 'scale-150' : 'scale-100'}`}
                />
              </div>
              <div className="flex gap-3">
                {product.gallery.map((g, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    className={`w-20 h-20 overflow-hidden border ${active === i ? 'border-gold' : 'border-gold/15'}`}
                  >
                    <LuxImage src={g} alt="" className="w-full h-full" imgClassName="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex flex-col gap-6">
              <div>
                {product.tag && <span className="text-[10px] tracking-widest2 uppercase bg-gold text-black px-3 py-1">{product.tag}</span>}
                <p className="eyebrow mt-4">{product.category}</p>
                <h1 className="heading-serif text-3xl sm:text-4xl text-ivory mt-2">{product.name}</h1>
                <p className="text-2xl text-champagne mt-4">{product.price}</p>
              </div>
              <div className="gold-divider !mx-0" />
              <p className="text-ivory/60 text-sm leading-relaxed">{product.desc}</p>

              <div className="flex flex-wrap gap-4 mt-2">
                <a href={`https://wa.me/923057121111?text=${waMsg}`} target="_blank" rel="noreferrer" className="btn-gold">Buy Now</a>
                <a href={`https://wa.me/923057121111?text=${waMsg}`} target="_blank" rel="noreferrer" className="btn-outline">Add to Cart</a>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4 text-xs text-ivory/50">
                <p>✓ Hallmarked Purity</p>
                <p>✓ Certificate of Authenticity</p>
                <p>✓ Custom Sizing Available</p>
                <p>✓ Nationwide Delivery</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="section-pad bg-obsidian-2">
          <div className="container-lux flex flex-col items-center gap-16">
            <SectionHeading eyebrow="You May Also Like" title="Related Products" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
              {related.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
