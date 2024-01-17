/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/**/*.{html, js}", 
    "./public/**/*"
],
  theme: {
    extend: {
      colors: {
        "violet": "hsl(257, 40%, 49%)",
        "softMagenta": "hsl(300, 69%, 71%)",        
      },
      fontFamily: {
        body: ["'Open Sans', sans-serif"],
        headings: ["'Poppins', sans-serif"]
      },
      backgroundImage: {
        "desktop": "url(./public/images/bg-desktop.svg)",
        "mobile": "url(./public/images/bg-mobile.svg)"
      },
      borderRadius: {
        'large' : '130px',
      },
      spacing: {
        '600px': '600px',
      }
    },
  },
  plugins: [],
}
