/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f0f0f',
        light: '#f5f5f5',
        gold: '#c9a86a',
        anthracite: '#1c1c1c',
        bordeaux: '#8b3a3a',
        rose: {
          600: '#be123c',
          700: '#9f1239',
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui'],
        serif: ['Playfair Display', 'ui-serif', 'Georgia'],
      },
    },
  },
  plugins: [],
}
