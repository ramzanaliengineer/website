import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import LuxImage from '../components/LuxImage'
import SectionHeading from '../components/SectionHeading'
import CollectionCard from '../components/CollectionCard'
import ProductCard from '../components/ProductCard'
import ReviewCard from '../components/ReviewCard'
import StatsSection from '../components/StatsSection'
import CTASection from '../components/CTASection'
import Newsletter from '../components/Newsletter'
import InstagramGallery from '../components/InstagramGallery'

import { collections } from '../data/collections'
import { products } from '../data/products'
import { reviews, ratingStats } from '../data/reviews'

function Hero() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-gradient-to-b from-pearl via-pearl-dark to-pearl">
      <div className="absolute -top-40 -right-40 w-[520px] h-[520px] bg-gold/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-[420px] h-[420px] bg-gold/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="container-lux relative z-10 grid lg:grid-cols-2 gap-14 items-center">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="eyebrow inline-block mb-6"
          >
            Main Bazar, Kunjah · Est. Legacy of Trust
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="heading-serif text-5xl sm:text-6xl lg:text-7xl leading-[1.05] text-ink"
          >
            Where Gold Meets <span className="text-gold-gradient italic">Eternity</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-ink/60 text-base sm:text-lg max-w-xl mt-6 leading-relaxed"
          >
            Abday Mustafa Gems &amp; Jewellers — handcrafted gold, certified diamonds and natural gemstones,
            trusted by 554+ happy customers with a perfect 5.0 rating.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.8 }}
            className="flex flex-wrap gap-4 mt-10"
          >
            <Link to="/collections" className="btn-gold">Explore Collections</Link>
            <Link to="/contact" className="btn-outline">Book Consultation</Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex items-center gap-3 mt-14 text-ink/70"
          >
            <span className="text-gold tracking-widest text-sm">★★★★★</span>
            <span className="text-xs sm:text-sm">5.0 Rating · 554+ Happy Customers</span>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease: 'easeOut' }}
          className="relative"
        >
          <div className="relative aspect-[4/5] overflow-hidden shadow-gold">
            <LuxImage
              src="https://img.magnific.com/premium-photo/collection-jewelry-including-diamond-diamond-jewelry_1308406-136.jpg?semt=ais_hybrid&w=740&q=80"
              alt="Bridal gold jewellery"
              fallbackType="crown"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-32 h-32 sm:w-40 sm:h-40 glass-card overflow-hidden shadow-gold-sm">
            <LuxImage
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW5zdZZ0gJgRQ1xNNS9BIe2Q-z_uPWrOtmvWWQO6f5Zg&s=10"
              alt="Diamond and emerald necklace set"   
              fallbackType="diamond"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -top-6 -right-6 w-24 h-24 sm:w-28 sm:h-28 glass-card overflow-hidden shadow-gold-sm">
            <LuxImage
              src="https://images.pexels.com/photos/30541174/pexels-photo-30541174.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Gold and diamond ring"
              fallbackType="ring-solo"
              className="w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-gold/70 text-xs tracking-widest2 uppercase z-10"
      >
        Scroll
      </motion.div>
    </section>
  )
}

function CollectionsPreview() {
  return (
    <section className="section-pad bg-pearl">
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

function CraftsmanshipBanner() {
  return (
    <section className="relative py-24 sm:py-28 overflow-hidden bg-pearl-dark border-y border-gold/10">
      <div className="container-lux grid lg:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative aspect-[16/11] overflow-hidden shadow-gold-sm order-2 lg:order-1"
        >
          <LuxImage
            src="https://images.pexels.com/photos/7679657/pexels-photo-7679657.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Jewellery craftsmanship"
            fallbackType="hands"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-start gap-6 order-1 lg:order-2"
        >
          <span className="eyebrow">The Abday Mustafa Experience</span>
          <h2 className="heading-serif text-3xl sm:text-5xl text-ink max-w-xl leading-tight">Every Piece Tells A Story Of Craftsmanship</h2>
          <p className="text-ink/60 max-w-xl text-sm sm:text-base leading-relaxed">
            Our artisans transform raw gold and rare gemstones into heirlooms meant to be passed down for
            generations — every cut, setting and polish finished entirely by hand in our Kunjah workshop.
          </p>
          <Link to="/about" className="btn-outline mt-2">Discover Our Story</Link>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProducts() {
  return (
    <section className="section-pad bg-pearl">
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

function GemstoneSpotlight() {
  const gems = products.filter((p) => p.category === 'Gemstone')
  return (
    <section className="section-pad bg-pearl-dark border-y border-gold/10">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Certified & Natural" title="Premium Gemstones" subtitle="Rubies, emeralds, sapphires and amethysts — hand-selected for colour, clarity and brilliance." />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
          {gems.map((p, i) => (
            <ProductCard key={p.id} product={p} index={i} />
          ))}
        </div>
        <Link to="/products?category=Gemstone" className="btn-outline">Explore All Gemstones</Link>
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
    <section className="section-pad bg-pearl-dark border-y border-gold/10">
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
                <h3 className="heading-serif text-lg text-ink mb-2">{it.title}</h3>
                <p className="text-ink/50 text-sm leading-relaxed">{it.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative aspect-[4/5] overflow-hidden shadow-gold-sm"
        >
          <LuxImage
            src="https://images.pexels.com/photos/16063741/pexels-photo-16063741.jpeg?auto=compress&cs=tinysrgb&w=1000"
            alt="Abday Mustafa jewellery showroom"
            fallbackType="store"
            className="w-full h-full"
            imgClassName="w-full h-full object-cover"
          />
        </motion.div>
      </div>
    </section>
  )
}

function ReviewsPreview() {
  return (
    <section className="section-pad bg-pearl">
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

function StyleEdit() {
  const px = (id, w = 900) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
  const edit = [
    { src: px(12184920), icon: 'necklace', label: 'Tablescape Edit', span: 'row-span-2 col-span-2' },
    { src: px(12585697), icon: 'earrings', label: 'Mirror Reflections', span: '' },
    { src: px(9430463), icon: 'gem', label: 'Marble & Stone', span: '' },
    { src: px(10526289), icon: 'bracelet', label: 'Geometric Edit', span: 'row-span-2' },
    { src: px(7743156), icon: 'pendant', label: 'Soft Pearl', span: '' },
    { src: px(12133990), icon: 'crown', label: 'Display Edit', span: '' },
  ]
  return (
    <section className="section-pad bg-pearl overflow-hidden">
      <div className="container-lux flex flex-col items-center gap-16">
        <SectionHeading eyebrow="Trending Now" title="The Style Edit" subtitle="Fresh, fashion-forward edits from our latest lookbook — styled the way our clients wear us." />
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[140px] sm:auto-rows-[170px] gap-3 sm:gap-4 w-full">
          {edit.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 24, rotate: i % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: 'easeOut' }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden shadow-gold-sm ${item.span}`}
            >
              <LuxImage src={item.src} alt={item.label} fallbackType={item.icon} className="w-full h-full" imgClassName="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0" />
              <span className="absolute bottom-3 left-3 text-white text-[11px] tracking-widest2 uppercase">{item.label}</span>
            </motion.div>
          ))}
        </div>
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
      <StyleEdit />
      <CraftsmanshipBanner />
      <FeaturedProducts />
      <GemstoneSpotlight />
      <WhyChooseUs />
      <ReviewsPreview />
      <InstagramGallery />
      <CTASection />
      <Newsletter />
    </>
  )
}
