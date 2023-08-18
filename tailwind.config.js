/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'JakartaSans': ['Plus Jakarta Sans','Helvetica', 'Arial', 'sans-serif'],
        'Roboto':['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [],
}

