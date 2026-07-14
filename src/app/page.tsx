import Link from "next/link";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { ThemeSongPlayer } from "@/components/media/ThemeSongPlayer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PathwayCard } from "@/components/cards/PathwayCard";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { EventCard } from "@/components/cards/EventCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { pathways, siteConfig } from "@/config/site";
import { getProgramsBySection } from "@/data/programs";
import { events } from "@/data/events";
import { testimonials } from "@/data/testimonials";

export default function HomePage() {
  const featuredPrograms = getProgramsBySection("featured");
  const upcomingEvents = events
    .filter((e) => !e.isPast)
    .slice(0, 3);

  return (
    <>
      <ThemeSongPlayer />
      <Hero />

      {/* Four Pathways */}
      <section className="section-padding bg-white" aria-labelledby="pathways-heading">
        <div className="container-wide">
          <SectionHeading
            title="Four Pathways to Community"
            subtitle="Grow in faith, gather with others, pray together, and serve with purpose."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {pathways.map((pathway, i) => (
              <PathwayCard
                key={pathway.id}
                title={pathway.title}
                description={pathway.description}
                href={pathway.href}
                icon={pathway.icon}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding section-blush" aria-labelledby="about-preview-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl text-center">
            <FadeIn>
              <h2
                id="about-preview-heading"
                className="font-serif text-3xl font-bold text-deep-navy sm:text-4xl"
              >
                A Place to Encounter God and Grow With Others
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-deep-navy/70">
                The Well Global creates safe spaces where people encounter God,
                experience transformation, build meaningful relationships, and
                receive practical support for everyday life.
              </p>
              <Link href="/about" className="btn-primary mt-8 inline-flex">
                Learn About The Well
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Featured Programs */}
      <section className="section-padding bg-white" aria-labelledby="programs-heading">
        <div className="container-wide">
          <SectionHeading
            title="Featured Programs"
            subtitle="Discover pathways designed to help you grow, connect, and thrive."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {featuredPrograms.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                category={program.category}
                href={program.href}
                externalUrl={program.externalUrl}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="section-padding section-blush" aria-labelledby="events-heading">
        <div className="container-wide">
          <SectionHeading
            title="Upcoming Events"
            subtitle="Join us for gatherings, retreats, and community celebrations."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {upcomingEvents.map((event, i) => (
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
          <div className="mt-12 text-center">
            <Link href="/events" className="btn-outline">
              View All Events
            </Link>
          </div>
        </div>
      </section>

      {/* Pastor Nina Welcome */}
      <section className="section-padding bg-white" aria-labelledby="pastor-heading">
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-2xl bg-soft-gray shadow-card">
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-well-blue/20 to-deep-navy/10">
                  <Image
                    src={siteConfig.logo}
                    alt=""
                    width={200}
                    height={200}
                    className="rounded-full opacity-40"
                  />
                </div>
                <p className="absolute bottom-4 left-0 right-0 text-center text-xs text-deep-navy/50">
                  Pastor photo placeholder
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.15}>
              <h2
                id="pastor-heading"
                className="font-serif text-3xl font-bold text-deep-navy sm:text-4xl"
              >
                A Welcome From {siteConfig.pastorNina.name}
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-deep-navy/70">
                Welcome to The Well Global. This community exists to help people
                grow in faith, receive support, develop as leaders, and serve
                others with purpose.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about/pastor-nina" className="btn-primary">
                  Meet Pastor Nina
                </Link>
                <a
                  href={siteConfig.pastorNina.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline inline-flex items-center gap-2"
                >
                  Linktree <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.pastorNina.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-silver px-6 py-3 text-sm font-semibold text-deep-navy transition-colors hover:border-well-blue hover:text-well-blue"
                >
                  Facebook <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding section-lavender" aria-labelledby="testimonials-heading">
        <div className="container-wide">
          <SectionHeading
            title="Stories From The Well"
            subtitle="Hear how God is working in the lives of our community members."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <TestimonialCard
                key={t.id}
                quote={t.quote}
                name={t.name}
                context={t.context}
                isSample={t.isSample}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <CTASection
        title="Find Your Place at The Well"
        subtitle="Whether you're seeking growth, community, prayer, or a way to serve — there's a place for you."
        buttons={[
          { label: "Join", href: "/get-involved" },
          { label: "Attend", href: "/events" },
          { label: "Serve", href: "/serve" },
          { label: "Give", href: "https://linktr.ee/thewellglobal", external: true },
        ]}
      />
    </>
  );
}
