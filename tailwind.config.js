/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'primary-orange': '#FF5722',
        'gray': '#262626',
      },
      keyframes: {
        popupHeight: {
          '0%': { height: '0%' },
          '50%': { height: '25%' },
          '100%': { height: '25%' },
        },
        popupWidth: {
          '0%': { width: '36px' },
          '100%': { width: '100px' }, // Adjust the final width as needed
        },
      },
      animation: {
        'popup-height': 'popupHeight 1s linear forwards',
        'popup-width': 'popupWidth 1s linear forwards',
      },
    },
  },
  plugins: [],
}