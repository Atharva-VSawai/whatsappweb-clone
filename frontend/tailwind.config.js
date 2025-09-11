/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // 👈 this must include src
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
