/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#080808',
          dark: '#0a0a0c',
          charcoal: '#111111',
          surface: '#141416',
          elevated: '#1a1a1e',
          crimson: '#e50920',
          crimsonHover: '#ff263b',
          crimsonMuted: '#9e0d1b',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        anton: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
        cursive: ['"Caveat"', 'cursive'],
        sans: ['"Plus Jakarta Sans"', '-apple-system', 'BlinkMacSystemFont', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
