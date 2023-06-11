/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    
    extend: {
      colors: {
        "main-primary": "#ffb142",
        "main-black": "#151517"
      },
      maxHeight:{
        "786":"786px",
        "595":"595px"
      },
      maxWidth:{
        "80":"20rem",
        "96":"24rem",
        "400":"400px",
        "600":"600px"
      },
      height:{
        "450":"450px"
      },
      zIndex:{
        "45":"45"
      },
      fontSize:{
        "8xl": "8rem",
        "7xl": "6rem"
      }
   
    }
    
  },
  plugins: [],
}
