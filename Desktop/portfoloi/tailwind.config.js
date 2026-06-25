/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      borderColor :{
        'primary' : 'rgb(101, 55, 166)' ,
        'secondary' : ' rgb(68, 23, 127)'

      }
    },
    fontFamily : {
      'hero-font' : 'Sriracha'
    }
  },
  plugins: [],
}

