/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    extend: {
      backgroundImage: {
        'collage-bg': "url('/img/collage_desktop.png')",
      },
      fontFamily: {
        'georgia': ['Georgia', 'serif'],
        'helvetica': ['Helvetica', 'Arial', 'sans-serif'],
        'arial': ['Arial'],
      }
    },
  },
  plugins: [],
}

