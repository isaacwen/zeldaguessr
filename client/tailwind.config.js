/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    // maxWidth: {
    //   '1/6': '16.67%',
    //   '1/2': '50%'
    // },
    extend: {
      maxHeight: {
        '5/6': '83.33%',
      },
      width: {
        '172': '44rem',
        '140': '35rem'
      }
    },
  },
  plugins: [],
}