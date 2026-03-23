import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'mirai-red': '#B22234',
        'mirai-red-dark': '#8B1A1A',
        'mirai-red-light': '#B84A5A',
        'mirai-black': '#1A1A1A',
        'mirai-charcoal': '#2D2D2D',
        'mirai-gray-dark': '#4A4A4A',
        'mirai-gray': '#6B7080',
        'mirai-gray-light': '#9CA0A8',
        'mirai-gray-lighter': '#E8E9EC',
        'mirai-off-white': '#F7F7F5',
        'mirai-gold': '#C7923E',
        'mirai-navy': '#1B2A4A',
      },
      fontFamily: {
        display: ['var(--font-libre-bodoni)', 'GFS Didot', 'Playfair Display', 'Georgia', 'serif'],
        serif: ['var(--font-source-serif)', 'EB Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-dm-sans)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'noto-sc': ['var(--font-noto-sc)', 'Source Han Serif SC', 'SimSun', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section': ['2.25rem', { lineHeight: '1.2' }],
        'subsection': ['1.5rem', { lineHeight: '1.3' }],
        'body': ['1.0625rem', { lineHeight: '1.75' }],
      },
      maxWidth: {
        'content': '1200px',
      },
      borderRadius: {
        DEFAULT: '4px',
        'sm': '2px',
        'md': '4px',
      },
      borderWidth: {
        'thin': '0.5px',
      },
      spacing: {
        'section': '6rem',
        'section-mobile': '4rem',
      },
    },
  },
  plugins: [],
}
export default config
