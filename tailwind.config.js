/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
    './src/templates/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    fontFamily: {
      serif: ['TAN-BUSTER'],
      mono: ['Fira Code']
    },
    extend: {
      container: {
        screens: {
          lg: '100%'
        }
      },
      maxWidth: {
        1000: '1000px'
      },
      colors: {
        pink: '#ec79a9',
        purple: '#525ba7',
        black: '#141315',
        white: '#ebebeb'
      }
    }
  },
  plugins: [require('daisyui')]
};
