export type MediaType = "watch" | "listen" | "read" | "social";

export interface MediaItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  type: MediaType;
  thumbnail?: string;
  url?: string;
}

export const mediaItems: MediaItem[] = [
  {
    id: "armed-and-dangerous",
    title: "Armed and Dangerous",
    category: "Featured Message",
    date: "2026-01-01",
    description:
      "Pastor Nina Anderson's testimony of life with The LORD — faith, spiritual strength, and purposeful living in Christ.",
    type: "watch",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://youtu.be/bXKZBqevYf0",
  },
  {
    id: "sermon-faith-purpose",
    title: "Living with Purpose",
    category: "Sermons",
    date: "2026-02-15",
    description:
      "A message on discovering God's purpose and walking in faith with confidence.",
    type: "watch",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "teaching-leadership",
    title: "Leadership Rooted in Prayer",
    category: "Teachings",
    date: "2026-01-28",
    description:
      "Teaching on leading with humility, wisdom, and a prayer-centered foundation.",
    type: "watch",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "retreat-highlight",
    title: "Women's Retreat Highlights",
    category: "Retreats",
    date: "2025-11-10",
    description:
      "Highlights from a weekend of worship, teaching, and sisterhood at our women's retreat.",
    type: "watch",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "event-worship",
    title: "Worship Night Recap",
    category: "Events",
    date: "2026-01-10",
    description:
      "A recap of our New Year worship night celebrating God's faithfulness.",
    type: "watch",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "podcast-episode-1",
    title: "The Well Podcast: Encounter",
    category: "Podcast",
    date: "2026-02-01",
    description:
      "Conversations on faith, growth, and living with purpose in everyday life.",
    type: "listen",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "prayer-recording",
    title: "Morning Manna Prayer Recording",
    category: "Prayer Recordings",
    date: "2026-03-01",
    description:
      "A guided prayer session from our Morning Manna community call.",
    type: "listen",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "audio-teaching",
    title: "Faith in Everyday Life",
    category: "Audio Teachings",
    date: "2026-01-15",
    description:
      "An audio teaching on applying biblical wisdom to daily decisions.",
    type: "listen",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "devotional-week",
    title: "Weekly Devotional: Rooted",
    category: "Devotionals",
    date: "2026-03-10",
    description:
      "A week of devotionals on staying rooted in prayer and Scripture.",
    type: "read",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "article-community",
    title: "Building Authentic Community",
    category: "Articles",
    date: "2026-02-20",
    description:
      "Practical insights on creating safe spaces for genuine connection and growth.",
    type: "read",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
  {
    id: "testimony-growth",
    title: "A Story of Transformation",
    category: "Testimonies",
    date: "2026-01-05",
    description:
      "A community member shares how mentorship and prayer changed their life.",
    type: "read",
    thumbnail: "/images/media-placeholder.svg",
    url: "https://linktr.ee/thewellglobal",
  },
];

export const socialMediaPlatforms = [
  { name: "YouTube", url: "https://youtube.com/playlist?list=PLKuBc6F_MMouR9apFIa-Fpiab2Wp03xGd", icon: "youtube" as const },
  { name: "Instagram", url: "https://linktr.ee/thewellglobal", icon: "instagram" as const },
  {
    name: "Facebook",
    url: "https://www.facebook.com/share/18qGiPdUbS/?mibextid=wwXIfr",
    icon: "facebook" as const,
  },
  { name: "TikTok", url: "https://linktr.ee/thewellglobal", icon: "music" as const },
  { name: "Linktree", url: "https://linktr.ee/thewellglobal", icon: "link" as const },
];

export function getMediaByType(type: MediaType) {
  return mediaItems.filter((item) => item.type === type);
}
