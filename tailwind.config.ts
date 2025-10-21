import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "var(--brand-blue)",
          gold: "var(--brand-gold)",
          blue700: "var(--brand-blue-700)",
          blue100: "var(--brand-blue-100)"
        }
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.08)"
      },
      backgroundImage: {
        "hero-overlay":
          "linear-gradient(to bottom, rgba(15,38,80,0.45), rgba(15,38,80,0.35))"
      }
    }
  },
  plugins: []
};
export default config;
