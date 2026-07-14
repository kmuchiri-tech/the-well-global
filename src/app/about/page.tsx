import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { CTASection } from "@/components/sections/CTASection";
import { siteConfig } from "@/config/site";
import {
  mission,
  vision,
  coreValues,
  beliefs,
  timeline,
  leadershipTeam,
} from "@/data/values";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "About",
  description:
    "Learn about The Well Global — our story, mission, vision, values, and leadership team led by Pastor Nina Anderson.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About The Well Global"
        subtitle="A Christ-centered community helping people encounter God, grow in faith, and live with purpose."
      />

      <section className="section-padding bg-white" aria-labelledby="story-heading">
        <div className="container-wide">
          <div className="mx-auto max-w-3xl">
            <FadeIn>
              <h2 id="story-heading" className="font-serif text-3xl font-bold text-deep-navy">
                Our Story
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-deep-navy/70">
                The Well Global began with a vision to create safe spaces where
                people could encounter God, experience real transformation, and
                receive the practical support needed for everyday life. What
                started as a prayer and mentorship community has grown into a
                global network of pathways for growth, gathering, prayer, and
                service.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-deep-navy/70">
                Today, The Well Global serves individuals, families, couples,
                leaders, and communities through mentorship, care, retreats,
                prayer ministries, youth programs, and outreach initiatives — all
                rooted in faith and guided by love.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="mission-heading">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn>
              <h2 id="mission-heading" className="font-serif text-3xl font-bold text-deep-navy">
                Mission
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-deep-navy/70">
                {mission}
              </p>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2 className="font-serif text-3xl font-bold text-deep-navy">
                Vision
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-deep-navy/70">
                {vision}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="values-heading">
        <div className="container-wide">
          <SectionHeading title="Core Values" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value, i) => (
              <FadeIn key={value.title} delay={i * 0.05}>
                <div className="rounded-2xl border border-silver/60 bg-white p-6 shadow-card">
                  <h3 className="font-serif text-xl font-bold text-well-blue">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-deep-navy/70">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="beliefs-heading">
        <div className="container-wide">
          <SectionHeading title="What We Believe" />
          <ul className="mx-auto max-w-3xl space-y-4">
            {beliefs.map((belief, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <li className="flex gap-3 rounded-xl bg-white p-4 shadow-card">
                  <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-well-blue" aria-hidden="true" />
                  <span className="text-deep-navy/80">{belief}</span>
                </li>
              </FadeIn>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="timeline-heading">
        <div className="container-wide">
          <SectionHeading title="Our Journey" subtitle="Milestones in the growth of The Well Global." />
          <div className="relative mx-auto max-w-3xl">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-well-blue/30 md:left-1/2" aria-hidden="true" />
            {timeline.map((item, i) => (
              <FadeIn key={item.year} delay={i * 0.08}>
                <div className={`relative mb-12 flex ${i % 2 === 0 ? "md:justify-start" : "md:justify-end"}`}>
                  <div className="w-full rounded-2xl border border-silver/60 bg-white p-6 shadow-card md:w-[calc(50%-2rem)]">
                    <span className="text-sm font-bold text-well-blue">{item.year}</span>
                    <h3 className="mt-1 font-serif text-xl font-bold text-deep-navy">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-deep-navy/70">{item.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        id="pastor-nina"
        className="section-padding bg-deep-navy"
        aria-labelledby="pastor-nina-heading"
      >
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl bg-brand-ombre p-1 shadow-card">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={siteConfig.pastorNina.aboutImage}
                    alt={`Portrait of ${siteConfig.pastorNina.name}`}
                    fill
                    className="object-cover object-center" className="font-serif text-3xl font-bold text-white sm:text-4xl">
                {siteConfig.pastorNina.name}
              </h2>
              <p className="mt-2 text-well-blue font-semibold">Founder & Lead Pastor</p>
              <p className="mt-6 text-lg leading-relaxed text-silver">
                Pastor Nina Anderson leads The Well Global with a heart for
                mentorship, prayer, and community transformation. Her vision is
                to help people encounter God, grow in faith, and live with
                purpose — leading and serving with impact in every sphere of life.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/about/pastor-nina" className="btn-primary inline-flex items-center gap-2">
                  About Pastor Nina
                </Link>
                <a
                  href={siteConfig.pastorNina.linktree}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2"
                >
                  Linktree <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={siteConfig.pastorNina.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary inline-flex items-center gap-2"
                >
                  Facebook <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="leadership-heading">
        <div className="container-wide">
          <SectionHeading title="Leadership Team" />
          <div className="grid gap-8 md:grid-cols-3">
            {leadershipTeam.map((leader, i) => (
              <FadeIn key={leader.name} delay={i * 0.1}>
                <div className="rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
                  <h3 className="font-serif text-xl font-bold text-deep-navy">
                    {leader.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-well-blue">
                    {leader.role}
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-deep-navy/70">
                    {leader.bio}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Become Part of Our Story"
        subtitle="Join a community committed to faith, growth, and purposeful living."
        buttons={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
    </>
  );
}
