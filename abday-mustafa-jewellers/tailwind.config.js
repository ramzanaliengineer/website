/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        'obsidian-2': '#0a0806',
        'obsidian-3': '#120e09',
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8CE79',
          dark: '#9C7C24',
        },
        champagne: '#F2E2C4',
        ivory: '#F7F4EE',
        glass: 'rgba(212,175,55,0.06)',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Playfair Display', 'serif'],
        display: ['"Playfair Display"', 'serif'],
        sans: ['"Jost"', '"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.35em',
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #9C7C24 0%, #D4AF37 45%, #F2E2C4 60%, #D4AF37 78%, #9C7C24 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(212,175,55,0.15) 0%, rgba(0,0,0,0) 70%)',
      },
      boxShadow: {
        gold: '0 0 40px rgba(212,175,55,0.25)',
        'gold-sm': '0 0 20px rgba(212,175,55,0.15)',
        glass: '0 8px 32px rgba(0,0,0,0.5)',
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}
