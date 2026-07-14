/**
 * The Well Global brand palette
 * Purple-to-pink ombre: deep purple → violet → lilac → rose → pink
 */
export const brandColors = {
  // Ombre spectrum (dark → light / cool → warm)
  wellPurple: "#28346D",
  wellViolet: "#6B4FA3",
  wellLilac: "#C4A8E0",
  wellLavender: "#E8DDF5",
  wellRose: "#D4789C",
  wellPink: "#EC5F8F",
  softPink: "#F7D0DF",

  // Tailwind alias keys (well-blue* map into the ombre so existing classes keep working)
  wellBlue: "#6B4FA3",
  wellBlueLight: "#C4A8E0",
  wellBlueDeep: "#28346D",

  // Neutrals
  deepNavy: "#1A2048",
  midnight: "#121633",
  white: "#FFFFFF",
  softGray: "#F8F4F8",
  silver: "#E5D6E8",
  black: "#000000",

  // Soft accents
  mauve: "#C99BB5",
  lavender: "#C4A8E0",
  hotPink: "#EC5F8F",
  gold: "#C9A962",
  blush: "#F9EEF4",
  peach: "#F5D5E4",
} as const;

export const brandGradients = {
  /** Full purple → pink ombre */
  ombre: "linear-gradient(135deg, #28346D 0%, #6B4FA3 35%, #C4A8E0 65%, #EC5F8F 100%)",
  logo: "linear-gradient(180deg, #F7D0DF 0%, #C4A8E0 35%, #6B4FA3 70%, #28346D 100%)",
  hero: "linear-gradient(135deg, #1A2048 0%, #28346D 40%, #6B4FA3 70%, #D4789C 100%)",
  button: "linear-gradient(135deg, #6B4FA3 0%, #9A5FB8 45%, #EC5F8F 100%)",
  footer: "linear-gradient(180deg, #1A2048 0%, #28346D 50%, #5A3A6B 85%, #7A4A70 100%)",
  capsule:
    "linear-gradient(90deg, rgba(107,79,163,0.15) 0%, rgba(196,168,224,0.22) 50%, rgba(236,95,143,0.18) 100%)",
} as const;
