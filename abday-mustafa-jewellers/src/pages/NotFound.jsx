import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center gap-6 px-6 bg-black">
      <p className="eyebrow">404</p>
      <h1 className="heading-serif text-4xl sm:text-6xl text-ivory">This Page Is Not Set In Gold</h1>
      <p className="text-ivory/50 max-w-md text-sm">The page you are looking for may have been moved or does not exist.</p>
      <Link to="/" className="btn-gold mt-2">Return Home</Link>
    </section>
  )
}
