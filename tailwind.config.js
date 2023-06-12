/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Poppins',
    },
    extend: {
      colors: {
        primary: '#7562E0',
        Secondary:'#282162',
        tertiary:'#848191',
        light:'#BDBDBD',
        dark: '#000036',
      }
    },
  },
  plugins: [],
}

