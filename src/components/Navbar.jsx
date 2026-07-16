import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/collections', label: 'Collections' },
  { to: '/products', label: 'Products' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/reviews', label: 'Reviews' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-pearl/85 backdrop-blur-xl border-b border-gold/15 py-3' : 'bg-gradient-to-b from-pearl/70 to-transparent py-6'
      }`}
    >
      <nav className="container-lux flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3 group" data-cursor="link">
          <span className="w-11 h-11 border border-gold/60 rounded-full flex items-center justify-center text-gold p-2.5 group-hover:bg-gold group-hover:text-black transition-all duration-500">
            <Logo className="w-full h-full" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="heading-serif text-lg sm:text-xl tracking-wide text-ink">Abday Mustafa</span>
            <span className="eyebrow text-[10px] sm:text-[11px]">Gems &amp; Jewellers</span>
          </span>
        </NavLink>

        <ul className="hidden lg:flex items-center gap-9">
          {links.map((l) => (
            <li key={l.to}>
              <NavLink
                to={l.to}
                data-cursor="link"
                className={({ isActive }) =>
                  `relative text-xs tracking-[0.2em] uppercase transition-colors duration-300 py-2 ${
                    isActive ? 'text-gold' : 'text-ink/80 hover:text-gold'
                  } after:content-[''] after:absolute after:left-0 after:-bottom-0.5 after:h-[1px] after:bg-gold after:transition-all after:duration-300 ${
                    isActive ? 'after:w-full' : 'after:w-0 hover:after:w-full'
                  }`
                }
              >
                {l.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <a href="https://wa.me/923057121111" target="_blank" rel="noreferrer" className="hidden lg:inline-flex btn-outline !py-2.5 !px-6 !text-[11px] items-center gap-2" data-cursor="link">
          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
          Live Chat
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-gold w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Toggle menu"
        >
          <span className={`block h-[1px] w-6 bg-gold transition-all duration-300 ${open ? 'rotate-45 translate-y-[7px]' : ''}`} />
          <span className={`block h-[1px] w-6 bg-gold transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block h-[1px] w-6 bg-gold transition-all duration-300 ${open ? '-rotate-45 -translate-y-[7px]' : ''}`} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-pearl/98 backdrop-blur-xl border-t border-gold/10 overflow-hidden"
          >
            <ul className="flex flex-col py-6 px-8 gap-5">
              {links.map((l) => (
                <li key={l.to}>
                  <NavLink
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={({ isActive }) =>
                      `block text-sm tracking-[0.2em] uppercase py-1 ${isActive ? 'text-gold' : 'text-ink/80'}`
                    }
                  >
                    {l.label}
                  </NavLink>
                </li>
              ))}
              <a href="https://wa.me/923057121111" target="_blank" rel="noreferrer" className="btn-gold mt-2 !text-[11px]">Live Chat</a>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
