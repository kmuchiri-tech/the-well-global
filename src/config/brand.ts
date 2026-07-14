/**
 * The Well Global brand palette
 * Derived from official logo gradient + SHE LEADS WELL event branding
 */
export const brandColors = {
  // Logo blues
  wellBlue: "#2D9CDB",
  wellBlueLight: "#B8C9EB",
  wellBlueDeep: "#003399",

  // Legacy alias (maps to vibrant azure)
  wellBlueClassic: "#3E8FCC",

  // Navy & neutrals
  deepNavy: "#0B1A3D",
  midnight: "#06152A",
  white: "#FFFFFF",
  softGray: "#F4F6F8",
  silver: "#D9E2EA",
  black: "#000000",

  // SHE LEADS accent palette
  mauve: "#C6A0A5",
  lavender: "#B8A2C8",
  hotPink: "#E84A8A",
  gold: "#C9A962",
  blush: "#F5E6E8",
  peach: "#E8C4B8",
} as const;

export const brandGradients = {
  logo: "linear-gradient(180deg, #B8C9EB 0%, #2D9CDB 50%, #003399 100%)",
  hero: "linear-gradient(135deg, #0B1A3D 0%, #003399 45%, #B8A2C8 100%)",
  button: "linear-gradient(135deg, #2D9CDB 0%, #003399 100%)",
  capsule: "linear-gradient(90deg, rgba(45,156,219,0.15) 0%, rgba(184,162,200,0.2) 50%, rgba(198,160,165,0.15) 100%)",
} as const;
