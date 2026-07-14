export const youtubeMedia = {
  playlist: {
    id: "PLKuBc6F_MMouR9apFIa-Fpiab2Wp03xGd",
    title: "The Well Global — YouTube Playlist",
    description:
      "A curated collection of teachings, messages, and moments from The Well Global and Pastor Nina Anderson.",
    url: "https://youtube.com/playlist?list=PLKuBc6F_MMouR9apFIa-Fpiab2Wp03xGd",
  },
  armedAndDangerous: {
    id: "bXKZBqevYf0",
    title: "Armed and Dangerous",
    description:
      "Armed and Dangerous encapsulates Pastor Nina Anderson's life with The LORD — a testimony of faith, surrender, spiritual strength, and purposeful living in Christ.",
    url: "https://youtu.be/bXKZBqevYf0",
  },
} as const;

export function getYouTubeEmbedUrl({
  videoId,
  playlistId,
}: {
  videoId?: string;
  playlistId?: string;
}) {
  if (videoId && playlistId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}?list=${playlistId}`;
  }
  if (playlistId) {
    return `https://www.youtube-nocookie.com/embed/videoseries?list=${playlistId}`;
  }
  if (videoId) {
    return `https://www.youtube-nocookie.com/embed/${videoId}`;
  }
  return "";
}
