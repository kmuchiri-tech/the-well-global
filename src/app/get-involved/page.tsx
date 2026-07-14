import type { Metadata } from "next";
import Link from "next/link";
import {
  UserPlus,
  Calendar,
  Users,
  Heart,
  HandHeart,
  Handshake,
  Gift,
  Sprout,
  HeartHandshake,
  type LucideIcon,
} from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Get Involved",
  description:
    "Join The Well Global — attend events, join a group, volunteer, partner, or give to support our mission.",
  path: "/get-involved",
});

interface ActionCard {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  external?: boolean;
}

const actionCards: ActionCard[] = [
  {
    title: "Join The Well",
    description:
      "Become part of our Christ-centered community and start your journey of growth and connection.",
    href: "/contact",
    icon: UserPlus,
  },
  {
    title: "Attend an Event",
    description:
      "Join us for worship nights, prayer gatherings, retreats, and community celebrations.",
    href: "/events",
    icon: Calendar,
  },
  {
    title: "Join a Group",
    description:
      "Find a small group, men's or women's community, or alumni network that fits your season.",
    href: "/gather",
    icon: Users,
  },
  {
    title: "Request Care",
    description:
      "Receive mentorship, coaching, pastoral care, or crisis support from our care team.",
    href: "/grow",
    icon: Heart,
  },
  {
    title: "Volunteer",
    description:
      "Serve through events, prayer ministry, outreach, youth programs, and more.",
    href: "/serve#volunteer",
    icon: HandHeart,
  },
  {
    title: "Partner",
    description:
      "Become a ministry partner or sponsor a program to expand our community impact.",
    href: "/contact",
    icon: Handshake,
  },
  {
    title: "Give",
    description:
      "Support the mission of The Well Global through generous giving.",
    href: "https://linktr.ee/thewellglobal",
    icon: Gift,
    external: true,
  },
];

const decisionGuide = [
  {
    prompt: "I want to grow",
    description: "Explore mentorship, coaching, and leadership development.",
    href: "/grow",
    icon: Sprout,
  },
  {
    prompt: "I need prayer or care",
    description: "Submit a prayer request or connect with our care team.",
    href: "/pray",
    icon: HeartHandshake,
  },
  {
    prompt: "I want community",
    description: "Join a group, attend an event, or connect at a retreat.",
    href: "/gather",
    icon: Users,
  },
  {
    prompt: "I want to serve",
    description: "Volunteer, partner, or support outreach and youth programs.",
    href: "/serve",
    icon: HandHeart,
  },
];

export default function GetInvolvedPage() {
  return (
    <>
      <PageHero
        title="Get Involved"
        subtitle="There's a place for you at The Well Global. Take your next step today."
      />

      <section className="section-padding bg-white" aria-labelledby="actions-heading">
        <div className="container-wide">
          <SectionHeading title="How Would You Like to Connect?" />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {actionCards.map((card, i) => {
              const Icon = card.icon;
              const content = (
                <article className="group flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-well-blue/10 text-well-blue transition-colors group-hover:bg-well-blue group-hover:text-white">
                    <Icon className="h-7 w-7" aria-hidden="true" />
                  </div>
                  <h3 className="font-serif text-xl font-bold text-deep-navy">
                    {card.title}
                  </h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-deep-navy/70">
                    {card.description}
                  </p>
                  <span className="mt-6 text-sm font-semibold text-well-blue group-hover:underline">
                    Get Started →
                  </span>
                </article>
              );

              return (
                <FadeIn key={card.title} delay={i * 0.08}>
                  {card.external ? (
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block h-full"
                    >
                      {content}
                    </a>
                  ) : (
                    <Link href={card.href} className="block h-full">
                      {content}
                    </Link>
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="guide-heading">
        <div className="container-wide">
          <SectionHeading
            title="Where Should I Start?"
            subtitle="Not sure where to begin? Start with what resonates most."
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {decisionGuide.map((item, i) => {
              const Icon = item.icon;
              return (
                <FadeIn key={item.prompt} delay={i * 0.1}>
                  <Link
                    href={item.href}
                    className="group flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-6 shadow-card transition-all hover:border-well-blue/30 hover:shadow-card-hover"
                  >
                    <Icon className="mb-4 h-8 w-8 text-well-blue" aria-hidden="true" />
                    <h3 className="font-serif text-lg font-bold text-deep-navy group-hover:text-well-blue">
                      {item.prompt}
                    </h3>
                    <p className="mt-2 flex-1 text-sm text-deep-navy/70">
                      {item.description}
                    </p>
                  </Link>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection
        title="We're Glad You're Here"
        subtitle="Reach out anytime — we'd love to help you find your place."
        buttons={[
          { label: "Contact Us", href: "/contact" },
          { label: "Give", href: "https://linktr.ee/thewellglobal", external: true },
        ]}
      />
    </>
  );
}
