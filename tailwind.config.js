/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#10063e',
        yellow: '#ffe733',
        red: '#ed2938',
        green: '#006b3e',
        'gray-dark': '#1F2937',
        gray: '#6A7280',
        'gray-light': '#F3F4F6',
        'gray-lighter': '#FAFAFA',
      },
    },
  },
  plugins: [],
};

