/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fff5f5',
          100: '#ffe3e3',
          200: '#ffc9c9',
          300: '#ffa8a8',
          400: '#ff8787',
          500: '#ff6b6b',
          600: '#fa5252',
          700: '#f03e3e',
          800: '#e03131',
          900: '#c92a2a'
        }
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        xl2: '1rem'
      }
    },
  },
  plugins: [],
}
