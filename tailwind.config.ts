import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "well-blue": "#6B4FA3",
        "well-blue-light": "#C4A8E0",
        "well-blue-deep": "#28346D",
        "well-purple": "#28346D",
        violet: "#6B4FA3",
        lilac: "#C4A8E0",
        rose: "#D4789C",
        "well-pink": "#EC5F8F",
        "soft-pink": "#F7D0DF",
        "deep-navy": "#1A2048",
        midnight: "#121633",
        "soft-gray": "#F8F4F8",
        silver: "#E5D6E8",
        mauve: "#C99BB5",
        lavender: "#C4A8E0",
        "hot-pink": "#EC5F8F",
        gold: "#C9A962",
        blush: "#F9EEF4",
        peach: "#F5D5E4",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(40, 52, 109, 0.08)",
        "card-hover": "0 8px 32px rgba(236, 95, 143, 0.12)",
        glow: "0 0 40px rgba(107, 79, 163, 0.25)",
        "gold-ring": "0 0 0 3px rgba(212, 120, 156, 0.45)",
      },
      backgroundImage: {
        "brand-hero":
          "linear-gradient(135deg, #1A2048 0%, #28346D 35%, #6B4FA3 65%, #D4789C 100%)",
        "brand-logo":
          "linear-gradient(180deg, #F7D0DF 0%, #C4A8E0 40%, #6B4FA3 75%, #28346D 100%)",
        "brand-button":
          "linear-gradient(135deg, #6B4FA3 0%, #9A5FB8 45%, #EC5F8F 100%)",
        "brand-ombre":
          "linear-gradient(90deg, #28346D 0%, #6B4FA3 35%, #C4A8E0 65%, #EC5F8F 100%)",
        "brand-accent":
          "linear-gradient(90deg, rgba(107,79,163,0.12) 0%, rgba(196,168,224,0.2) 50%, rgba(236,95,143,0.15) 100%)",
        "brand-footer":
          "linear-gradient(180deg, #1A2048 0%, #28346D 55%, #5A3A6B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
