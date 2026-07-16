# Abday Mustafa Gems & Jewellers — Luxury Website

A premium, black & gold luxury jewellery website built with React, Vite, Tailwind CSS and Framer Motion.

## Getting Started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure

```
src/
  components/   Reusable UI: Navbar, Footer, cards, sliders, floating buttons, loader, cursor...
  pages/        Home, About, Collections, Gemstones, Products, ProductDetail, Gallery, Contact, Reviews, NotFound
  data/         Collections, gemstones, products and reviews content (edit these to update site content)
  index.css     Design tokens & global styles (black/gold theme)
tailwind.config.js   Color palette, fonts, animation tokens
```

## Editing content

- **Products**: `src/data/products.js`
- **Gemstones**: `src/data/gemstones.js`
- **Collections**: `src/data/collections.js`
- **Reviews**: `src/data/reviews.js`
- **Business info** (phone, WhatsApp, address, map link) appears in `Navbar.jsx`, `Footer.jsx`, `FloatingButtons.jsx` and `Contact.jsx` — update `+923057121111` and the Google Maps query string across these files if the number or address changes.

## Images

Product and gemstone photography currently uses royalty-free Unsplash placeholder images referenced by URL. For a real launch, replace the `image` fields in the `src/data/*.js` files with your own professional product photography (drop images into `src/assets` and import them, or host on your own CDN).

## Notes

- Contact form and newsletter form currently confirm on-page and do not send email — connect them to a form backend (e.g. Formspree, EmailJS, or a custom API) when ready to go live.
- WhatsApp, Call and Google Maps buttons are pre-wired to `+92 305 7121111` and the Main Bazar, Kunjah address.
