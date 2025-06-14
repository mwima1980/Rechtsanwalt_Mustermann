/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/home.html",
    "./src/pages/Über_mich.html",
    "./src/pages/Leistungen.html",
    "./src/pages/Erfolge.html",
    "./src/pages/Mandantenstimmen.html",
    "./src/pages/Blog_News.html",
    "./src/partials/header.html",
    "./src/partials/footer.html",
  ],
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
      fontSize: {
        h1: ["3rem", { lineHeight: "1.2" }],
        h2: ["2rem", { lineHeight: "1.3" }],
        h3: ["1.5rem", { lineHeight: "1.3" }],
        h4: ["1.3rem", { lineHeight: "1.3" }],
        p: ["1.125rem", { lineHeight: "1.3" }],
        btn: ["1rem", { lineHeight: "1.3" }],
      },
      fontFamily: {
        sans: ["Montserat", "ui-sans-serif", "system-ui"],
        serif: ["Merriweather", "ui-serif", "Georgia"],
      },
      screens: {
        "custom-md": "41.875rem",
        "custom-xl": "70rem",
      },
      scale: {
        130: "1.3",
      },
      backgroundImage: {
        hero: "url('/src/assets/images/picture/heroPicture.png')",
      },
    },
  },
  variants: {
    extend: {
      scale: ["hover", "group-hover"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
