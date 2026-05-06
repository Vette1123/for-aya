import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        hand: ["var(--font-hand)", "cursive"],
      },
      colors: {
        rose: {
          deep: "#8B1E3F",
          warm: "#C73E5A",
          soft: "#E8A0A8",
        },
        cream: "#FBF3E4",
        gold: "#D4A24C",
        ink: "#2A0E1A",
      },
    },
  },
  plugins: [],
};
export default config;
