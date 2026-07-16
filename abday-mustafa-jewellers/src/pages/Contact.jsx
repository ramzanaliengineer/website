import { useState } from 'react'
import { motion } from 'framer-motion'
import SectionHeading from '../components/SectionHeading'

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
  }

  const waMsg = encodeURIComponent(`Hello, my name is ${form.name || '___'}. ${form.message || 'I would like to enquire about your jewellery.'}`)

  return (
    <>
      <section className="relative pt-44 pb-16 bg-black overflow-hidden">
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="container-lux relative flex flex-col items-center text-center gap-5">
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="eyebrow">Get In Touch</motion.span>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="heading-serif text-4xl sm:text-6xl text-ivory">
            Visit Or Contact Us
          </motion.h1>
        </div>
      </section>

      <section className="pb-24 sm:pb-32 bg-black">
        <div className="container-lux grid lg:grid-cols-2 gap-16">
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="glass-card p-8 sm:p-10">
            <SectionHeading eyebrow="Send An Enquiry" title="We'd Love To Hear From You" align="left" />
            {sent ? (
              <p className="text-gold mt-8">Thank you, {form.name || 'friend'}! We will reach out shortly. You can also message us directly on WhatsApp below.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-8">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full Name"
                  className="bg-transparent border border-gold/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold outline-none"
                />
                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="bg-transparent border border-gold/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold outline-none"
                />
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={5}
                  placeholder="Your Message"
                  className="bg-transparent border border-gold/25 px-5 py-3.5 text-sm text-ivory placeholder:text-ivory/30 focus:border-gold outline-none resize-none"
                />
                <button type="submit" className="btn-gold w-full sm:w-auto self-start">Send Message</button>
              </form>
            )}
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="flex flex-col gap-8">
            <div>
              <SectionHeading eyebrow="Business Information" title="Abday Mustafa Gems & Jewellers" align="left" />
              <ul className="mt-8 space-y-5 text-sm text-ivory/70">
                <li className="flex gap-4"><span className="text-gold">Address</span> Main Bazar, Kunjah, Pakistan</li>
                <li className="flex gap-4"><span className="text-gold">Phone</span> <a href="tel:+923057121111" className="hover:text-gold">+92 305 7121111</a></li>
                <li className="flex gap-4"><span className="text-gold">WhatsApp</span> <a href="https://wa.me/923057121111" target="_blank" rel="noreferrer" className="hover:text-gold">+92 305 7121111</a></li>
                <li className="flex gap-4"><span className="text-gold">Email</span> <a href="mailto:info@abdaymustafajewellers.com" className="hover:text-gold">info@abdaymustafajewellers.com</a></li>
                <li className="flex gap-4"><span className="text-gold">Hours</span> Daily · 10:00 AM – 9:00 PM</li>
                <li className="flex gap-4"><span className="text-gold">Rating</span> ★★★★★ 5.0 · 554+ Reviews</li>
              </ul>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Abday+Mustafa+Gems+%26+Jewellers+Main+Bazar+Kunjah"
              target="_blank"
              rel="noreferrer"
              className="relative h-64 border border-gold/20 overflow-hidden group flex items-center justify-center"
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#120e09,#1a1410)]" />
              <span className="relative z-10 text-gold text-sm tracking-widest2 uppercase group-hover:underline">Open in Google Maps →</span>
            </a>

            <div className="flex gap-4">
              <a href="https://wa.me/923057121111" target="_blank" rel="noreferrer" className="btn-gold flex-1 text-center">WhatsApp Us</a>
              <a href="tel:+923057121111" className="btn-outline flex-1 text-center">Call Now</a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}
