/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // sans: ['"Open Sans"', 'sans-serif'],
        PlayfairDisplay: ['"Playfair Display"', 'serif'],
        Roboto: ['"Roboto"', 'sans-serif'],
        Philosopher: ['"Philosopher"', 'sans-serif'],
        Satisfy: ['"Satisfy"', 'cursive'],
        GreyQo: ['"GreyQo"', 'serif']
      },
      colors:{
          'custom-black':'#0b0c10',
          'custom-darkGray':'#1f2833',
          'custom-gray' :'#c5c6c7',
          'custom-sky':'#66fcf1',
          'custom-darkSky':'#45a29e',
          
      },
    },
  },
  plugins: [],
}

