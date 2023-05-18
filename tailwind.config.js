/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens : {
      'sm' : '90px',
      'bal' : '370px',
      'md' : '700px',
      'lg' : '1300px',
    },
    extend: {
      colors: {
        'DarkGreen' : '#011a04',
        'LightGreen' : '#097f18'
      }
    },
  },
  plugins: [],
}