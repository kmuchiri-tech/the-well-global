export const siteConfig = {
  name: "The Well Global",
  tagline: "Encounter God. Grow in Faith. Live with Purpose. Lead with Impact.",
  description:
    "The Well Global is a Christ-centered community helping people grow spiritually, build healthy relationships, receive care, and serve with purpose.",
  email: "thewell@newlife.global",
  logo: "/images/the-well-logo.png",
  themeSong: "/audio/the-well-theme-song.mpeg",
  url: "https://thewellglobal.com",
  giveUrl: "https://linktr.ee/thewellglobal",
  pastorNina: {
    name: "Pastor Nina Anderson",
    page: "/about/pastor-nina",
    linktree: "https://linktr.ee/NinaDAnderson",
    facebook: "https://www.facebook.com/share/1DGcvmV7W1/?mibextid=wwXIfr",
    image: "/images/pastor-nina.png",
    aboutImage: "/images/pastor-nina-about.png",
    armedAndDangerousVideoId: "bXKZBqevYf0",
    youtubePlaylistId: "PLKuBc6F_MMouR9apFIa-Fpiab2Wp03xGd",
  },
} as const;

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Grow", href: "/grow" },
  { label: "Gather", href: "/gather" },
  { label: "Pray", href: "/pray" },
  { label: "Serve", href: "/serve" },
  { label: "Media", href: "/media" },
  { label: "Get Involved", href: "/get-involved" },
  { label: "Contact", href: "/contact" },
] as const;

export const primaryButtons = {
  join: { label: "Join The Well", href: "/get-involved" },
  give: { label: "Give", href: "https://linktr.ee/thewellglobal" },
} as const;

export const footerQuickLinks = [
  { label: "About", href: "/about" },
  { label: "Grow", href: "/grow" },
  { label: "Gather", href: "/gather" },
  { label: "Pray", href: "/pray" },
  { label: "Serve", href: "/serve" },
] as const;

export const footerGetInvolvedLinks = [
  { label: "Join", href: "/get-involved" },
  { label: "Volunteer", href: "/serve#volunteer" },
  { label: "Partner", href: "/get-involved" },
  { label: "Give", href: "https://linktr.ee/thewellglobal" },
  { label: "Prayer Request", href: "/pray#prayer-request" },
] as const;

export const footerConnectLinks = [
  { label: "thewell@newlife.global", href: "mailto:thewell@newlife.global" },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/18qGiPdUbS/?mibextid=wwXIfr",
  },
  { label: "Linktree", href: "https://linktr.ee/thewellglobal" },
  {
    label: "Digital Card",
    href: "https://hihello.com/p/2f060400-7d61-4381-8a89-a4fdc08627de",
  },
] as const;

export const pathways = [
  {
    id: "grow",
    title: "Grow",
    description:
      "Mentorship, coaching, classes, and leadership development.",
    href: "/grow",
    icon: "sprout" as const,
  },
  {
    id: "gather",
    title: "Gather",
    description: "Retreats, events, groups, and meaningful relationships.",
    href: "/gather",
    icon: "users" as const,
  },
  {
    id: "pray",
    title: "Pray",
    description:
      "Prayer gatherings, intercession, spiritual support, and prayer development.",
    href: "/pray",
    icon: "heart-handshake" as const,
  },
  {
    id: "serve",
    title: "Serve",
    description:
      "Youth programs, outreach, missions, partnerships, and volunteer opportunities.",
    href: "/serve",
    icon: "hand-heart" as const,
  },
] as const;
