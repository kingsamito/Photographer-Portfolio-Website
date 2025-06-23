/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cormorantGaramond: ['"Cormorant Garamond"'],
        cormorant: ['"Cormorant"'],
        ephesis: ['"Ephesis"'],
        dancingScript: ['"Dancing Script"'],
        corinthia: ['"Corinthia"'],
        playfairDisplaySC: ['"Playfair Display SC"'],
        playfairDisplay: ['"Playfair Display"'],
        raleway: ['"Raleway"'],
      },
      backgroundImage: {
        'contact-bg': "url('./assets/imgs/contactbg.jpg')",
      },
    },
  },
  plugins: [],
};
