/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      margin: {
        '520px': '520px',
      },
      colors:{
        weather:{
          10: "#595959",
          50: '#d8ffff',
          100: '#acfdff',
          200: '#7df9ff',
          300: '#4df7ff',
          400: '#27f5fe',
          500: '#17dbe5',
          600: '#00abb3',
          700: '#007a80',
          800: '#004a4e',
          900: '#001a1d',
        }
      }
    },
  },
  plugins: [],
}

