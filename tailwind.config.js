/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'white-bone' : '#f6f2ea',
        'button-color' : '#d9501f'
      },
      fontFamily: {
        'poppins' : ['Poppins']
      }
    },
  },
  plugins: [],
}
