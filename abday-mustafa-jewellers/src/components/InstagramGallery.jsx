import { motion } from 'framer-motion'
import LuxImage from './LuxImage'
import SectionHeading from './SectionHeading'

const img = (id) => `https://images.unsplash.com/${id}?q=80&w=500&auto=format&fit=crop`
const shots = [
  img('photo-1601121141461-9d6647bca1ed'),
  img('photo-1611591437281-460bfbe1220a'),
  img('photo-1543294001-f7cd5d7fb516'),
  img('photo-1616401784845-180882ba9ba8'),
  img('photo-1573408301185-9146fe634ad0'),
  img('photo-1515562141207-7a88fb7ce338'),
]

export default function InstagramGallery() {
  return (
    <section className="section-pad bg-black">
      <div className="container-lux flex flex-col items-center gap-14">
        <SectionHeading eyebrow="@abdaymustafajewellers" title="Follow Our Craft" subtitle="A glimpse into our latest creations and behind-the-scenes moments." />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full">
          {shots.map((src, i) => (
            <motion.a
              key={i}
              href="#"
              data-cursor="link"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden block"
            >
              <LuxImage src={src} alt="Instagram post" className="w-full h-full" imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 flex items-center justify-center transition-all duration-300">
                <span className="text-gold opacity-0 group-hover:opacity-100 text-lg">📷</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
