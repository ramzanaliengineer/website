import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

import LuxImage from '../components/LuxImage'
import SectionHeading from '../components/SectionHeading'
import CollectionCard from '../components/CollectionCard'
import ProductCard from '../components/ProductCard'
import GemstoneCard from '../components/GemstoneCard'
import ReviewCard from '../components/ReviewCard'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import Newsletter from '../components/Newsletter'
import InstagramGallery from '../components/InstagramGallery'

import { collections } from '../data/collections'
import { products } from '../data/products'
import { gemstones } from '../data/gemstones'
import { reviews, ratingStats } from '../data/reviews'

const img = (id, w = 1600) => `https://images.unsplash.com/${id}?q=80&w=${w}&auto=format&fit=crop`

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '35%'])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[720px] overflow-hidden flex items-center">
      <motion.div style={{ y }} className="absolute inset-0">
        <LuxImage
          src={img('photo-1601121141461-9d6647bca1ed')}
          alt="Abday Mustafa luxury bridal jewellery"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-black/40" />
      </motion.div>

      <motion.div style={{ opacity }} className="container-lux relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.7 }}
          className="eyebrow inline-block mb-6"
        >
          Main Bazar, Kunjah · Est. Legacy of Trust
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.8 }}
          className="heading-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] text-ivory max-w-3xl"
        >
          Where Gold Meets <span className="text-gold-gradient italic">Eternity</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.25, duration: 0.8 }}
          className="text-ivory/70 text-base sm:text-lg max-w-xl mt-6 leading-relaxed"
        >
          Abday Mustafa Gems &amp; Jewellers — handcrafted gold, certified diamonds and natural gemstones,
          trusted by 554+ happy customers with a perfect 5.0 rating.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.45, duration: 0.8 }}
          className="flex flex-wrap gap-4 mt-10"
        >
          <Link to="/collections" className="btn-gold">Explore Collections</Link>
          <Link to="/contact" className="btn-outline">Book Consultation</Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="flex items-center gap-3 mt-14 text-ivory/70"
        >
          <span className="text-gold tracking-widest text-sm">★★★★★</span>
          <span className="text-xs sm:text-sm">5.0 Rating · 554+ Happy Customers</span>
        </motion.div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold/70 text-xs tracking-widest2 uppercase z-10"
      >
        Scroll
      </motion.div>
    </section>
  )
}

function CollectionsPreview() {
  return (
    <section className="section-pad bg-black">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Signature Collections" title="Curated For Every Milestone" subtitle="From bridal splendour to everyday elegance, each collection is handcrafted by our master artisans in-house." />
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 w-full">
          {collections.slice(0, 8).map((c, i) => (
            <CollectionCard key={c.slug} collection={c} index={i} />
          ))}
        </div>
        <Link to="/collections" className="btn-outline">View All Collections</Link>
      </div>
    </section>
  )
}

function VideoBackgroundSection() {
  return (
    <section className="relative h-[70vh] min-h-[480px] overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0">
        <LuxImage
          src={img('photo-1611591437281-460bfbe1220a')}
          alt="Craftsmanship at Abday Mustafa"
          className="absolute inset-0 w-full h-full"
          imgClassName="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70" />
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center container-lux flex flex-col items-center gap-6"
      >
        <span className="eyebrow">The Abday Mustafa Experience</span>
        <h2 className="heading-serif text-3xl sm:text-5xl text-ivory max-w-2xl">Every Piece Tells A Story Of Craftsmanship</h2>
        <p className="text-ivory/60 max-w-xl text-sm sm:text-base">
          Watch our artisans transform raw gold and rare gemstones into heirlooms meant to be passed down for generations.
        </p>
        <button className="w-16 h-16 rounded-full border border-gold flex items-center justify-center text-gold hover:bg-gold hover:text-black transition-all duration-300 mt-2">
          ▶
        </button>
      </motion.div>
    </section>
  )
}

function FeaturedProducts() {
  return (
    <section className="section-pad bg-obsidian-2">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Best Selling Jewellery" title="Loved By Our Clients" subtitle="Our most requested pieces — chosen for their exceptional craftsmanship and timeless design." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {products.slice(0, 8).map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <Link to="/products" className="btn-outline">View All Products</Link>
      </div>
    </section>
  )
}

function GemstonesPreview() {
  return (
    <section className="section-pad bg-black">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Featured Gemstones" title="Nature's Rarest Treasures" subtitle="Certified natural gemstones sourced ethically and set by our master jewellers." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {gemstones.slice(0, 4).map((g, i) => (
            <GemstoneCard key={g.slug} gem={g} index={i} />
          ))}
        </div>
        <Link to="/gemstones" className="btn-outline">Explore All Gemstones</Link>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const items = [
    { title: 'Certified Purity', text: '22K & 24K hallmarked gold and certified natural gemstones, guaranteed.' },
    { title: 'Master Craftsmanship', text: 'Every piece hand-finished by artisans with decades of expertise.' },
    { title: 'Trusted Since Generations', text: 'A legacy of honest service to the Kunjah community and beyond.' },
    { title: 'Custom Design Service', text: 'Bring your vision to life with our bespoke jewellery design studio.' },
  ]
  return (
    <section className="section-pad bg-obsidian-2 border-y border-gold/10">
      <div className="container-lux grid lg:grid-cols-2 gap-16 items-center">
        <div className="flex flex-col gap-8">
          <SectionHeading eyebrow="Why Choose Us" title="A Legacy Built On Trust" align="left" />
          <div className="grid sm:grid-cols-2 gap-8">
            {items.map((it, i) => (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="w-10 h-10 border border-gold/50 rounded-full flex items-center justify-center text-gold heading-serif mb-4">{i + 1}</div>
                <h3 className="heading-serif text-lg text-ivory mb-2">{it.title}</h3>
                <p className="text-ivory/50 text-sm leading-relaxed">{it.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden"
        >
          <LuxImage src={img('photo-1523170335258-f5ed11844a49')} alt="Abday Mustafa showroom" className="w-full h-full" imgClassName="w-full h-full object-cover" />
          <div className="absolute inset-0 border border-gold/30 m-4" />
        </motion.div>
      </div>
    </section>
  )
}

function ReviewsPreview() {
  return (
    <section className="section-pad bg-black">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading
          eyebrow="Customer Love"
          title="554+ Happy Customers"
          subtitle={`Rated ${ratingStats.average.toFixed(1)} out of 5 on Google — read what our customers say about their experience.`}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {reviews.slice(0, 4).map((r, i) => (
            <ReviewCard key={r.name} review={r} index={i} />
          ))}
        </div>
        <Link to="/reviews" className="btn-outline">Read All Reviews</Link>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <CollectionsPreview />
      <VideoBackgroundSection />
      <FeaturedProducts />
      <GemstonesPreview />
      <WhyChooseUs />
      <ReviewsPreview />
      <InstagramGallery />
      <CTASection />
      <Newsletter />
    </>
  )
}
