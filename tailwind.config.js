/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./frontend/src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark': '#003049',
        'red': '#D62828',
        'orange': '#F77F00',
        'yellow': '#FCBF49',
        'olive': '#EAE2B7',
      },
    },
  },
  plugins: [],
};
