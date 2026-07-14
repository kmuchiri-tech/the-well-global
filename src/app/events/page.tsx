import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { createMetadata } from "@/lib/utils";
import { EventsListing } from "@/components/sections/EventsListing";

export const metadata: Metadata = createMetadata({
  title: "Events",
  description:
    "View upcoming and past events at The Well Global — worship nights, prayer gatherings, retreats, and community celebrations.",
  path: "/events",
});

export default function EventsPage() {
  return (
    <>
      <PageHero
        title="Events"
        subtitle="Worship nights, prayer gatherings, retreats, and community celebrations."
      />
      <EventsListing />
    </>
  );
}
