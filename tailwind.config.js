/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#060709',
          850: '#080808',
          800: '#0a0b0e',
          700: '#111318',
          600: '#161821',
          500: '#1e212b',
        },
        crimson: {
          DEFAULT: '#e50920',
          hover: '#ff1731',
          dim: 'rgba(229, 9, 32, 0.15)',
          glow: 'rgba(229, 9, 32, 0.35)',
          border: 'rgba(229, 9, 32, 0.4)',
        },
        muted: {
          light: '#e4e4e7',
          DEFAULT: '#9ca3af',
          dim: '#6b7280',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['"Bebas Neue"', '"Anton"', 'sans-serif'],
        script: ['"Caveat"', 'cursive'],
        impact: ['"Anton"', '"Bebas Neue"', 'sans-serif'],
      },
      letterSpacing: {
        tighter: '-0.04em',
        widest: '0.25em',
        mega: '0.35em',
      },
    },
  },
  plugins: [],
};
