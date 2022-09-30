/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix:"tw-",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./views/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}
