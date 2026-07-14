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
        "well-blue": "#2D9CDB",
        "well-blue-light": "#B8C9EB",
        "well-blue-deep": "#003399",
        "deep-navy": "#0B1A3D",
        midnight: "#06152A",
        "soft-gray": "#F4F6F8",
        silver: "#D9E2EA",
        mauve: "#C6A0A5",
        lavender: "#B8A2C8",
        "hot-pink": "#E84A8A",
        gold: "#C9A962",
        blush: "#F5E6E8",
        peach: "#E8C4B8",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 4px 24px rgba(11, 26, 61, 0.08)",
        "card-hover": "0 8px 32px rgba(11, 26, 61, 0.12)",
        glow: "0 0 40px rgba(45, 156, 219, 0.25)",
        "gold-ring": "0 0 0 3px rgba(201, 169, 98, 0.4)",
      },
      backgroundImage: {
        "brand-hero":
          "linear-gradient(135deg, #0B1A3D 0%, #003399 50%, #1a2a5e 100%)",
        "brand-logo":
          "linear-gradient(180deg, #B8C9EB 0%, #2D9CDB 50%, #003399 100%)",
        "brand-button":
          "linear-gradient(135deg, #2D9CDB 0%, #003399 100%)",
        "brand-accent":
          "linear-gradient(90deg, rgba(45,156,219,0.12) 0%, rgba(184,162,200,0.18) 50%, rgba(198,160,165,0.12) 100%)",
        "brand-footer":
          "linear-gradient(180deg, #0B1A3D 0%, #06152A 70%, #8B6B70 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
