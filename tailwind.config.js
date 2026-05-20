/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sweden: {
          blue: '#006AA7',
          yellow: '#FECC02',
        },
        norway: {
          red: '#EF2B2D',
          blue: '#002868',
          white: '#FFFFFF',
        },
        fjord: '#1B4F72',
        aurora: '#00C9A7',
      },
      fontFamily: {
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}
