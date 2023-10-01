/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Merriweather Sans"],
      serif: ["Merriweather"],
    },
    extend: {
      colors: {
        terracotta: "#a57973",
      },
      backgroundImage: {
        dot: "radial-gradient(rgba(20, 20, 20, 0.6) 2px, transparent 2px)",
        grungedot: "url('~@/assets/images/GrungeDot11.webp')", // ~@ wird in vite.config für src gesetzt
      },
      backgroundSize: {
        10: "10px 10px",
      },
      gridTemplateColumns: {
        default:
          "minmax(2rem, 1fr) repeat(2, minmax(0, 30rem)) minmax(2rem, 1fr)",
        imgBox: "minmax(2rem, 1fr) repeat(4, 1fr) minmax( 2rem, 1fr)",
      },
      boxShadow: {
        default: "0 3px 7px rgb(0 0 0 / 0.5)",
      },
      animation: {
        flying: "flying 2s linear infinite",
      },
      keyframes: {
        flying: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(20px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
    },
  },
  plugins: [],
};
