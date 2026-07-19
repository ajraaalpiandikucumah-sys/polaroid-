/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        desk: {
          shadow: "#2C1B10",
          walnut: "#4A2E19",
          oak: "#6E4525",
          highlight: "#9C6B3C",
        },
        glow: {
          amber: "#F2B155",
          soft: "#FFDCA0",
        },
        paper: {
          DEFAULT: "#FAF6EC",
          aged: "#EFE6D3",
          shadow: "#D9CBAE",
        },
        ink: {
          DEFAULT: "#2B2117",
          soft: "#5C4B3A",
        },
        blush: {
          DEFAULT: "#C1666B",
          soft: "#E3A6A9",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        hand: ["'Caveat'", "cursive"],
        note: ["'Homemade Apple'", "cursive"],
        body: ["'Inter'", "sans-serif"],
      },
      boxShadow: {
        polaroid: "0 2px 4px rgba(20, 12, 5, 0.25), 0 12px 24px -8px rgba(20, 12, 5, 0.45)",
        polaroidHover: "0 6px 10px rgba(20, 12, 5, 0.3), 0 24px 40px -12px rgba(20, 12, 5, 0.55)",
        prop: "0 8px 20px -6px rgba(20, 12, 5, 0.5)",
      },
      keyframes: {
        flicker: {
          "0%, 100%": { opacity: 1 },
          "48%": { opacity: 0.85 },
          "50%": { opacity: 0.6 },
          "52%": { opacity: 0.9 },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-6px) rotate(1.5deg)" },
        },
        dustFloat: {
          "0%": { transform: "translate(0, 0)", opacity: 0 },
          "10%": { opacity: 1 },
          "100%": { transform: "translate(var(--dust-x, 20px), -120px)", opacity: 0 },
        },
      },
      animation: {
        flicker: "flicker 6s ease-in-out infinite",
        drift: "drift 5s ease-in-out infinite",
        dust: "dustFloat 8s linear infinite",
      },
    },
  },
  plugins: [],
};
