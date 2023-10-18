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
        pelorous: {
          50: "#f2f9f9",
          100: "#deeeef",
          200: "#c0dee1",
          300: "#94c5cc",
          400: "#5aa1ab",
          500: "#468a94",
          600: "#3d727d",
          700: "#365d68",
          800: "#334e57",
          900: "#2e434b",
          950: "#1b2b31",
        },
        pharlap: {
          50: "#faf6f6",
          100: "#f4edec",
          200: "#ecdedc",
          300: "#dec6c3",
          400: "#c9a5a0",
          500: "#b38680",
          600: "#a57973",
          700: "#825953",
          800: "#6d4c47",
          900: "#5d433f",
          950: "#30211f",
        },
      },
      backgroundImage: {
        dot: "radial-gradient(rgba(20, 20, 20, 0.6) 2px, transparent 2px)",
        grungedot: "url('~@/assets/images/GrungeDot11.webp')", // ~@ wird in vite.config für src gesetzt
        "line-top": "url('~@/assets/icons/CurvedLineTop.svg')",
        "line-bottom": "url('~@/assets/icons/CurvedLineBottom.svg')",
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
