/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'putih': '#F0F0F0',
        'hitam': '#0D0F18',
        'main': '#3A4F64',
        'second': '#002060',
        'abumain': '#3A4F64',
        'abusecond': '#677787',
      },
    },
    fontFamily: {
      'primary': ['Montserrat']
    },

  },
  plugins: [],
}