import { useMemo, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import CTASection from '../components/CTASection'
import { products, categories } from '../data/products'

const parsePrice = (p) => Number(p.replace(/[^\d]/g, ''))

export default function Products() {
  const [searchParams] = useSearchParams()
  const initialCategory = searchParams.get('category')
  const matchedCategory = categories.find((c) => c.toLowerCase() === (initialCategory || '').toLowerCase())

  const [category, setCategory] = useState(matchedCategory || 'All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')

  useEffect(() => {
    if (matchedCategory) setCategory(matchedCategory)
  }, [matchedCategory])

  const filtered = useMemo(() => {
    let list = products.filter((p) => (category === 'All' ? true : p.category === category))
    if (query.trim()) {
      const q = query.toLowerCase()
      list = list.filter((p) => p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q))
    }
    if (sort === 'price-asc') list = [...list].sort((a, b) => parsePrice(a.price) - parsePrice(b.price))
    if (sort === 'price-desc') list = [...list].sort((a, b) => parsePrice(b.price) - parsePrice(a.price))
    if (sort === 'newest') list = [...list].filter((p) => p.tag === 'New Arrival').concat(list.filter((p) => p.tag !== 'New Arrival'))
    return list
  }, [category, query, sort])

  return (
    <>
      <section className="relative pt-44 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">The Full Collection</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ivory">
            Luxury Products
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="container-lux">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between mb-10 sticky top-24 z-30 bg-black/80 backdrop-blur-xl py-4 border-y border-gold/10">
            <div className="flex flex-wrap gap-2">
              {categories.map((c) => (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={`px-4 py-2 text-[11px] tracking-widest2 uppercase border transition-all duration-300 ${
                    category === c ? 'bg-gold text-black border-gold' : 'border-gold/25 text-ivory/60 hover:border-gold hover:text-gold'
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex gap-3">
              <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search products..."
                className="bg-transparent border border-gold/25 px-4 py-2 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold outline-none w-44 sm:w-56"
              />
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="bg-black border border-gold/25 px-3 py-2 text-sm text-ivory focus:border-gold outline-none"
              >
                <option value="featured">Featured</option>
                <option value="newest">New Arrivals</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
              </select>
            </div>
          </div>

          {filtered.length === 0 ? (
            <p className="text-center text-ivory/40 py-20">No products match your search. Try a different filter.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filtered.map((p, i) => (
                <ProductCard key={p.id} product={p} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection />
    </>
  )
}
