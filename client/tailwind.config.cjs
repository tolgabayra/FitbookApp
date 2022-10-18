/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Archivo: ["Archivo", "sansa-serif"],
        Peralta: ["Peralta", "cursive"]
       },
    },
  },
  plugins: [],
}
