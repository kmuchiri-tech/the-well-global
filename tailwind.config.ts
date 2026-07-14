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
        // Purple brand — well-blue* kept as aliases for existing class names
        "well-blue": "#6B4FA3",
        "well-blue-light": "#C4A8E0",
        "well-blue-deep": "#28346D",
        "well-purple": "#28346D",
        violet: "#6B4FA3",
        lilac: "#C4A8E0",
        "deep-navy": "#1A2048",
        midnight: "#121633",
        "soft-gray": "#F6F4FA",
        silver: "#DDD6E8",
        mauve: "#B89BC9",
        lavender: "#C4A8E0",
        "hot-pink": "#A855F7",
        gold: "#C9A962",
        blush: "#F4EFF8",
        peach: "#E8D5F0",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(40, 52, 109, 0.08)",
        "card-hover": "0 8px 32px rgba(40, 52, 109, 0.12)",
        glow: "0 0 40px rgba(107, 79, 163, 0.25)",
        "gold-ring": "0 0 0 3px rgba(201, 169, 98, 0.4)",
      },
      backgroundImage: {
        "brand-hero":
          "linear-gradient(135deg, #1A2048 0%, #28346D 50%, #3D2A6B 100%)",
        "brand-logo":
          "linear-gradient(180deg, #E8DDF5 0%, #6B4FA3 50%, #28346D 100%)",
        "brand-button":
          "linear-gradient(135deg, #6B4FA3 0%, #28346D 100%)",
        "brand-accent":
          "linear-gradient(90deg, rgba(107,79,163,0.12) 0%, rgba(196,168,224,0.2) 50%, rgba(232,221,245,0.25) 100%)",
        "brand-footer":
          "linear-gradient(180deg, #1A2048 0%, #121633 70%, #4A3A6B 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
