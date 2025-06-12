/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/partials/home.html"],
  theme: {
    extend: {
      colors: {
        // Primaryfarbe für Headers, Buttons, Links
        primary: {
          default: "#1A2A47", // dunkelblau
          light: "#435B7A", // für Hover-Zustände
          dark: "#0F1A2B", // für Footer/Hintergründe
        },
        // Sekundärfarbe für Akzente, Icons, CTA
        secondary: {
          default: "#D4AF37", // gold
          light: "E1BE54",
          dark: "#A8872E",
        },
        // Hintergrundfläche
        background: {
          default: "#0F1A2B", // fast schwarzblau
          muted: "#F5F7FA", // Grauton für weniger wichtige Farbe
        },
        // Optional: Akzentfarbe für CTAs oder Links
        accent: "#C49E2A", // etwas dunkleres Gold
      },
      fontFamily: {
        sans: ["Montserat", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
