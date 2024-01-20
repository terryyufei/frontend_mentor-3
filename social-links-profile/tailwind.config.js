/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "green": "hsl(75, 94%, 57%)",
        "grey": "hsl(0, 0%, 20%)", 
        "darkGrey": "hsl(0, 0%, 12%)", 
        "offBlack": "hsl(0, 0%, 8%)",      
      },
      fontFamily: {
        body: ["'Inter', sans-serif"],        
      },
    },
  },
  plugins: [],
}
