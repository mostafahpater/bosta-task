/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:{
          DEFAULT:"#e30613"
        }
      },
      fontFamily:{
        cairo:['Cairo']
      }
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
 },
}

