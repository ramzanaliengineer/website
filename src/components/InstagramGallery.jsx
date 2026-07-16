import { motion } from 'framer-motion'
import LuxImage from './LuxImage'
import SectionHeading from './SectionHeading'

const px = (id, w = 500) => `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

const shots = [
  { src: px(12184920), icon: 'necklace' },
  { src: px(24815712), icon: 'goldbar' },
  { src: px(9430463), icon: 'gem' },
  { src: px(13924051), icon: 'bangles' },
  { src: px(12585697), icon: 'earrings' },
  { src: px(29245554), icon: 'diamond' },
]

export default function InstagramGallery() {
  return (
    <section className="section-pad bg-pearl-dark">
      <div className="container-lux flex flex-col items-center gap-14">
        <SectionHeading eyebrow="@abdaymustafajewellers" title="Follow Our Craft" subtitle="A glimpse into our latest creations and behind-the-scenes moments." />
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 w-full">
          {shots.map((shot, i) => (
            <motion.a
              key={i}
              href="#"
              data-cursor="link"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative aspect-square overflow-hidden block shadow-gold-sm"
            >
              <LuxImage src={shot.src} alt="Instagram post" fallbackType={shot.icon} className="w-full h-full" imgClassName="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 flex items-center justify-center transition-all duration-300">
                <span className="text-white opacity-0 group-hover:opacity-100 text-lg">📷</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
