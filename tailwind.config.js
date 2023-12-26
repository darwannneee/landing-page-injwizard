/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    screens: {
      'md': '1024px',
      'md2': '1200px',
      'xl': '1800px',
      'dekstop': '2100px',
    },
  },
  plugins: [],
}