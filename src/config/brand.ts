/**
 * The Well Global brand palette
 * Primary: deep purple #28346D with violet, lilac, and lavender accents
 */
export const brandColors = {
  // Primary purple family
  wellPurple: "#28346D",
  wellViolet: "#6B4FA3",
  wellLilac: "#C4A8E0",
  wellLavender: "#E8DDF5",

  // Tailwind alias keys (well-blue* map to purple so existing classes keep working)
  wellBlue: "#6B4FA3",
  wellBlueLight: "#C4A8E0",
  wellBlueDeep: "#28346D",

  // Neutrals
  deepNavy: "#1A2048",
  midnight: "#121633",
  white: "#FFFFFF",
  softGray: "#F6F4FA",
  silver: "#DDD6E8",
  black: "#000000",

  // Soft accents
  mauve: "#B89BC9",
  lavender: "#C4A8E0",
  hotPink: "#A855F7",
  gold: "#C9A962",
  blush: "#F4EFF8",
  peach: "#E8D5F0",
} as const;

export const brandGradients = {
  logo: "linear-gradient(180deg, #E8DDF5 0%, #6B4FA3 50%, #28346D 100%)",
  hero: "linear-gradient(135deg, #1A2048 0%, #28346D 45%, #6B4FA3 100%)",
  button: "linear-gradient(135deg, #6B4FA3 0%, #28346D 100%)",
  capsule:
    "linear-gradient(90deg, rgba(107,79,163,0.15) 0%, rgba(196,168,224,0.25) 50%, rgba(232,221,245,0.3) 100%)",
} as const;
