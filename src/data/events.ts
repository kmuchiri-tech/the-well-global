export type EventCategory =
  | "Worship"
  | "Prayer"
  | "Community"
  | "Retreat"
  | "Leadership"
  | "Family";

export interface Event {
  id: string;
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  description: string;
  category: EventCategory;
  featured?: boolean;
  registerUrl?: string;
  isPast?: boolean;
}

export const events: Event[] = [
  {
    id: "morning-manna-march",
    title: "Morning Manna Prayer Call",
    date: "2026-03-15",
    time: "7:00 AM EST",
    location: "Online — Zoom",
    description:
      "Start your week centered in prayer with Morning Manna, a guided prayer call for the entire Well community.",
    category: "Prayer",
    featured: true,
    registerUrl: "/get-involved",
  },
  {
    id: "worship-night-april",
    title: "Spring Worship Night",
    date: "2026-04-12",
    time: "6:30 PM EST",
    location: "Community Center — Main Hall",
    description:
      "An evening of worship, reflection, and community as we celebrate God's faithfulness together.",
    category: "Worship",
    registerUrl: "/get-involved",
  },
  {
    id: "leadership-retreat-may",
    title: "Leadership Renewal Retreat",
    date: "2026-05-22",
    endDate: "2026-05-24",
    location: "Retreat Center — Mountain View",
    description:
      "A weekend retreat for leaders seeking spiritual renewal, practical equipping, and meaningful connection.",
    category: "Retreat",
    registerUrl: "/get-involved",
  },
  {
    id: "family-gathering-june",
    title: "Family Community Gathering",
    date: "2026-06-08",
    time: "2:00 PM EST",
    location: "City Park Pavilion",
    description:
      "Families of all ages are welcome for food, fellowship, games, and connection in a relaxed outdoor setting.",
    category: "Family",
    registerUrl: "/get-involved",
  },
  {
    id: "prayer-gathering-july",
    title: "Corporate Prayer Gathering",
    date: "2026-07-19",
    time: "7:00 PM EST",
    location: "The Well Prayer Room",
    description:
      "Join intercessors and community members for an evening of corporate prayer and spiritual covering.",
    category: "Prayer",
    registerUrl: "/pray",
  },
  {
    id: "mens-retreat-august",
    title: "Men of Progress Retreat",
    date: "2026-08-14",
    endDate: "2026-08-16",
    location: "Lakeside Retreat Center",
    description:
      "A powerful weekend for men to grow in faith, brotherhood, and leadership.",
    category: "Retreat",
    registerUrl: "/gather",
  },
  {
    id: "worship-night-jan",
    title: "New Year Worship Night",
    date: "2026-01-10",
    time: "6:30 PM EST",
    location: "Community Center — Main Hall",
    description:
      "We welcomed the new year with worship, prayer, and testimony from across the community.",
    category: "Worship",
    isPast: true,
  },
  {
    id: "prayer-jan",
    title: "January Prayer Fast",
    date: "2026-01-06",
    endDate: "2026-01-12",
    location: "Online & In Person",
    description:
      "A week of focused prayer and fasting to seek God's direction for the year ahead.",
    category: "Prayer",
    isPast: true,
  },
];

export const eventCategories: EventCategory[] = [
  "Worship",
  "Prayer",
  "Community",
  "Retreat",
  "Leadership",
  "Family",
];
