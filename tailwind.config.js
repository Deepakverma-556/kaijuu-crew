/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        godzilla: ['godzilla', 'sans-serif'],
        oswald: ['oswald', 'sans-serif'],
        Righteous: ['Righteous', 'sans-serif'],
      },
      colors: {
        'dark-blue': '#001120',
        'smoky-black': '#141313',
        'dark-red': '#ff002a',
        'dark-gray':'9ab2c0',
      }
    },
  },
  plugins: [],
}