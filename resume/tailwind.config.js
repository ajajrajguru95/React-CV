/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'body': '#9b7896',
      'primary': '#3261af',
      // 'blue': '#3261af',
      'secondary': '#e7d1e4',
      'white': '#ffffff',
      'gray' : '#b3a5c0',
    },
    fontFamily: {
      base: ['Merienda', 'cursive'],
    },
    extend: {},
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
    }
  },
  plugins: [],
}

