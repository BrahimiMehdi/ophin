/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily:{
        'Montserrat': ['Montserrat', 'sans-serif'],
        'Amaranth': ['Amaranth', 'sans-serif'],
      },
      colors:{
        "main-brown" :"#F7ECD6",
        "main-green" :"#CADDC1",
        "second-green" :"#80C63E",
        "dark-brown" :"#572C1B",
      }
    },
  },
  plugins: [],
}
