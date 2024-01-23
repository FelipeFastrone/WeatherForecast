/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        backgroundImage:{
          'fundo-img': 'url(/fundo.jpg)'
        }
      },
    },
    plugins: [],
  }