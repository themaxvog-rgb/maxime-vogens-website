import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          DEFAULT: '#D4AF37',
          light: '#E8C84A',
          dark: '#B8962E',
        },
        dark: {
          DEFAULT: '#0A0A0A',
          card: '#111111',
          border: '#1E1E1E',
        },
      },
      fontFamily: {
        sans: ['Jost', 'system-ui', 'sans-serif'],
        serif: ['Bodoni Moda', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #D4AF37, #E8C84A)',
        'dark-gradient': 'linear-gradient(180deg, #0A0A0A 0%, #111111 100%)',
      },
    },
  },
  plugins: [],
}
export default config
