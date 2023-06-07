/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Roboto', 'ui-sans-serif', 'system-ui'],
        serif: ['Merriweather', 'ui-serif', 'Georgia'],
        mono: ['Courier New', 'monospace'],
      },
      colors: {
        'yellow-zerobi': '#ecfb72',
        'black-zerobi': '#000000'
      },
    },
  },
  variants: {
    extend: {
      visibility: ['group-hover'],
    },
  },
  plugins: [require('@tailwindcss/typography')],
};