import { Link } from 'react-router-dom'
import Logo from './Logo'

const quickLinks = [
  { to: '/collections', label: 'Collections' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative bg-pearl border-t border-gold/15 pt-20 pb-8 overflow-hidden">
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="container-lux relative grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-5">
            <span className="w-11 h-11 border border-gold/60 rounded-full flex items-center justify-center text-gold p-2.5">
              <Logo className="w-full h-full" />
            </span>
            <span className="flex flex-col leading-none">
              <span className="heading-serif text-xl text-ink">Abday Mustafa</span>
              <span className="eyebrow text-[10px]">Gems &amp; Jewellers</span>
            </span>
          </Link>
          <p className="text-ink/50 text-sm leading-relaxed mb-5">
            A legacy house of fine gold, diamond and gemstone jewellery, hand-crafted in Kunjah since generations, trusted by 554+ happy customers.
          </p>
          <div className="flex gap-3">
            {['Instagram', 'Facebook'].map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className="w-9 h-9 rounded-full border border-gold/30 flex items-center justify-center text-gold text-xs hover:bg-gold hover:text-black transition-all duration-300"
              >
                {s[0]}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Quick Links</h4>
          <ul className="space-y-3">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-sm text-ink/60 hover:text-gold transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Visit Us</h4>
          <ul className="space-y-3 text-sm text-ink/60">
            <li>Main Bazar, Kunjah, Pakistan</li>
            <li>
              <a href="tel:+923057121111" className="hover:text-gold transition-colors duration-300">+92 305 7121111</a>
            </li>
            <li>Open Daily · 10:00 AM – 9:00 PM</li>
            <li className="text-gold">★★★★★ 5.0 · 554+ Reviews</li>
          </ul>
        </div>

        <div>
          <h4 className="eyebrow mb-5">Find Us</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Abday+Mustafa+Gems+%26+Jewellers+Main+Bazar+Kunjah"
            target="_blank"
            rel="noreferrer"
            className="block relative h-32 rounded overflow-hidden border border-gold/20 group"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,#F3ECDF,#EAE0CC)] flex items-center justify-center">
              <span className="text-gold text-xs tracking-widest2 uppercase group-hover:underline">View on Google Maps →</span>
            </div>
          </a>
          <a
            href="https://wa.me/923057121111"
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-block text-sm text-ink/60 hover:text-gold transition-colors duration-300"
          >
            WhatsApp: +92 305 7121111
          </a>
        </div>
      </div>

      <div className="gold-divider my-10" />

      <div className="container-lux flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ink/40">
        <p>© {new Date().getFullYear()} Abday Mustafa Gems &amp; Jewellers. All Rights Reserved.</p>
        <p className="tracking-widest2 uppercase text-[10px]">Crafted with Legacy &amp; Trust</p>
      </div>
    </footer>
  )
}
