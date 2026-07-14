import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { EventCard } from "@/components/cards/EventCard";
import { CTASection } from "@/components/sections/CTASection";
import { getProgramsBySection } from "@/data/programs";
import { events } from "@/data/events";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Gather",
  description:
    "Gather, connect, and build community through retreats, events, and small groups at The Well Global.",
  path: "/gather",
});

export default function GatherPage() {
  const retreats = getProgramsBySection("retreats");
  const gatherEvents = getProgramsBySection("events");
  const community = getProgramsBySection("community");
  const upcoming = events.filter((e) => !e.isPast).slice(0, 3);

  return (
    <>
      <PageHero
        title="Gather, Connect, and Build Community"
        subtitle="Retreats, events, and community groups designed for meaningful relationships and shared faith."
      />

      <section className="section-padding bg-white" aria-labelledby="retreats-heading">
        <div className="container-wide">
          <SectionHeading title="Retreats" subtitle="Step away to encounter God and connect deeply with others." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {retreats.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="gather-events-heading">
        <div className="container-wide">
          <SectionHeading title="Events" subtitle="Worship nights, prayer gatherings, and community celebrations." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {gatherEvents.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="community-heading">
        <div className="container-wide">
          <SectionHeading title="The Well Community" subtitle="Find your people in a group that fits your season of life." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {community.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="upcoming-gatherings-heading">
        <div className="container-wide">
          <SectionHeading title="Upcoming Gatherings" />
          <div className="grid gap-8 md:grid-cols-3">
            {upcoming.map((event, i) => (
              <EventCard
                key={event.id}
                title={event.title}
                date={event.date}
                endDate={event.endDate}
                time={event.time}
                location={event.location}
                description={event.description}
                registerUrl={event.registerUrl}
                index={i}
              />
            ))}
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link href="/events" className="btn-primary">
              View Upcoming Events
            </Link>
            <Link href="/get-involved" className="btn-outline">
              Join a Community
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="You Belong Here"
        subtitle="Find a gathering, group, or retreat that fits your season."
        buttons={[
          { label: "Join a Group", href: "/get-involved" },
          { label: "View Events", href: "/events" },
        ]}
      />
    </>
  );
}
