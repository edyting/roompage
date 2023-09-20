/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      spacing:{
        60:"60%",
        45:"40%",
        35:"30%",
        'view':'75%',
        300:"12px",
      }
    },
  },
  plugins: [],
}

