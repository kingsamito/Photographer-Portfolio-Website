/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ['"Cormorant Garamond"', ],
        cormorant: ['"Cormorant"', ],
        ephesis: ['"Ephesis"'],
        playfairDisplaySC: ['"Playfair Display SC"', ],
        playfairDisplay: ['"Playfair Display"', ],
        raleway: ['"Raleway"',],
      },
      backgroundImage: {
        'contact-bg': "url('./assets/imgs/contactbg.jpg')",
      },
    },
  },
  plugins: [],
}

