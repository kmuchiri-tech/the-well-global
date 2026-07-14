export type SocialLinkCategory =
  | "Official Page"
  | "Program Pages"
  | "Community Groups"
  | "Pastor Nina"
  | "Link Hubs"
  | "Digital Card";

export interface SocialLink {
  id: string;
  title: string;
  url: string;
  category: SocialLinkCategory;
  description?: string;
}

export const socialLinks: SocialLink[] = [
  {
    id: "official-facebook",
    title: "The Well Global Network",
    url: "https://www.facebook.com/share/18qGiPdUbS/?mibextid=wwXIfr",
    category: "Official Page",
    description: "Official public Facebook page for The Well Global.",
  },
  {
    id: "well-fed",
    title: "Well-Fed Mentoring and Equipping",
    url: "https://www.facebook.com/share/1BWGQSqhbG/?mibextid=wwXIfr",
    category: "Program Pages",
    description: "Mentoring and equipping for spiritual growth.",
  },
  {
    id: "men-of-progress",
    title: "Men of Progress",
    url: "https://www.facebook.com/share/1BtXesyQNd/?mibextid=wwXIfr",
    category: "Program Pages",
    description: "Community for men growing in faith and leadership.",
  },
  {
    id: "nina-facebook",
    title: "Nina Anderson",
    url: "https://www.facebook.com/share/1DGcvmV7W1/?mibextid=wwXIfr",
    category: "Pastor Nina",
    description: "Connect with Pastor Nina Anderson on Facebook.",
  },
  {
    id: "well-global-group",
    title: "The Well Global Group",
    url: "https://www.facebook.com/share/g/18rLeik1Px/?mibextid=wwXIfr",
    category: "Community Groups",
    description: "Join the main community group for updates and connection.",
  },
  {
    id: "passionate-partners",
    title: "Passionate Partners Mentorship and Retreats",
    url: "https://www.facebook.com/share/g/18r2mWqxgB/?mibextid=wwXIfr",
    category: "Community Groups",
    description: "Community for couples mentorship and retreats.",
  },
  {
    id: "mop-community",
    title: "Men of Progress Community",
    url: "https://www.facebook.com/share/g/1D9WMQYk9N/?mibextid=wwXIfr",
    category: "Community Groups",
    description: "Facebook group for Men of Progress members.",
  },
  {
    id: "linktree-well",
    title: "The Well Global",
    url: "https://linktr.ee/thewellglobal",
    category: "Link Hubs",
    description: "All official links in one place.",
  },
  {
    id: "linktree-nina",
    title: "Nina Anderson",
    url: "https://linktr.ee/NinaDAnderson",
    category: "Link Hubs",
    description: "Pastor Nina's link hub.",
  },
  {
    id: "digital-card",
    title: "Digital Contact Card",
    url: "https://hihello.com/p/2f060400-7d61-4381-8a89-a4fdc08627de",
    category: "Digital Card",
    description: "Save The Well Global contact information.",
  },
];

export const socialCategories: SocialLinkCategory[] = [
  "Official Page",
  "Program Pages",
  "Community Groups",
  "Pastor Nina",
  "Link Hubs",
  "Digital Card",
];
