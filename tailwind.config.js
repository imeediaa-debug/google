/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F7FF',
          100: '#B3E0FF',
          500: '#0077FF',
          600: '#0059D6',
          900: '#0B2340'
        },
        cyan: {
          50: '#E6F7FF',
          500: '#00B7EB'
        }
      },
      fontFamily: {
        arabic: ['"Noto Sans Arabic"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}