import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail('')
  }

  return (
    <section className="section-pad bg-pearl-dark border-y border-gold/10">
      <div className="container-lux flex flex-col items-center text-center gap-6 max-w-xl mx-auto">
        <span className="eyebrow">Stay In Touch</span>
        <h2 className="heading-serif text-3xl sm:text-4xl text-ink">Join our private collector's list</h2>
        <p className="text-ink/50 text-sm">Be the first to know about new collections, gemstone arrivals and exclusive previews.</p>
        <form onSubmit={submit} className="flex flex-col sm:flex-row gap-3 w-full mt-2">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="flex-1 bg-transparent border border-gold/30 px-5 py-3.5 text-sm text-ink placeholder:text-ink/30 focus:border-gold outline-none"
          />
          <button type="submit" className="btn-gold whitespace-nowrap">Subscribe</button>
        </form>
        {sent && <p className="text-gold text-xs">Thank you — you have been added to our list.</p>}
      </div>
    </section>
  )
}
