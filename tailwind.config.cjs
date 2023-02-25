/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'sans': ["Merriweather Sans"],
      'serif': ["Merriweather"]
    },
    extend: {
      backgroundImage: {
        dot: "radial-gradient(rgba(20, 20, 20, 0.6) 2px, transparent 2px)",
        'footer-texture': "url('/img/footer-texture.png')",
      },
      backgroundSize: {
        '10': '10px 10px',
      }
    },
  },
  plugins: [],
}
