/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#200126",
        secondary: "#c9b8e8",
        tertiary: "#2e003e",
        "black-100": "#1a0030",
        "black-200": "#200126",
        "white-100": "#FFFFFF",
        brand: {
          purple: "#6909D7",
          fuchsia: "#F56CEE",
          "dark-purple": "#200126",
          cyan: "#00E5FF",
        },
      },
      boxShadow: {
        card: "0px 35px 120px -15px #6909D740",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/herobg.png')",
      },
    },
  },
  plugins: [],
};
