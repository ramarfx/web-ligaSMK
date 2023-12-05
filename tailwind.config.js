/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["index.html"],
  theme: {
    container:{
      center: true,
      padding: '1 rem'
    },
    extend: {
      screens:{
        '2xl': '1320'
      },
      colors:{
        blue: '#3A10E5',
        lightblue: '#F0F3FF',
        secondary: '#797A7B',
        yellow: '#FACB3B',
        cream: {
          100: '#FFF0E5',
          200: '#FDD5A1',
        },
        silver: '#E8EAF6',
      }
    },

    fontFamily: {
      DMsans: ['DM Sans']
    },
  },
  plugins: [],
}

