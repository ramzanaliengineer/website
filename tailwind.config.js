/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        obsidian: '#000000',
        'obsidian-2': '#0a0806',
        'obsidian-3': '#120e09',
        pearl: '#FBF8F3',
        'pearl-dark': '#F3ECDF',
        beige: '#EAE0CC',
        'beige-dark': '#DCCDAE',
        ink: '#2E2618',
        gold: {
          DEFAULT: '#C9A227',
          light: '#E8CE79',
          dark: '#9C7C24',
        },
        champagne: '#A9803E',
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
        'gold-gradient': 'linear-gradient(135deg, #9C7C24 0%, #C9A227 45%, #B8935A 60%, #C9A227 78%, #9C7C24 100%)',
        'radial-fade': 'radial-gradient(ellipse at center, rgba(201,162,39,0.16) 0%, rgba(251,248,243,0) 70%)',
      },
      boxShadow: {
        gold: '0 0 40px rgba(201,162,39,0.28)',
        'gold-sm': '0 0 20px rgba(201,162,39,0.18)',
        glass: '0 8px 32px rgba(120,98,50,0.15)',
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
