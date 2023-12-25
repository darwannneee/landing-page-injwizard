/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '2304px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [],
}