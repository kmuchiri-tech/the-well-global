import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { CTASection } from "@/components/sections/CTASection";
import { getProgramsBySection } from "@/data/programs";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Grow",
  description:
    "Grow in faith, leadership, and personal development through mentorship, coaching, and care at The Well Global.",
  path: "/grow",
});

export default function GrowPage() {
  const academy = getProgramsBySection("academy");
  const care = getProgramsBySection("care");

  return (
    <>
      <PageHero
        title="Grow in Faith, Leadership, and Personal Development"
        subtitle="The Well helps people strengthen their faith, relationships, leadership, and personal well-being through mentorship, coaching, teaching, and care."
      />

      <section className="section-padding bg-white" aria-labelledby="academy-heading">
        <div className="container-wide">
          <SectionHeading
            title="The Well Academy"
            subtitle="Mentorship and equipping programs for every stage of your journey."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {academy.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                index={i}
                showContact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="care-heading">
        <div className="container-wide">
          <SectionHeading
            title="The Well Care"
            subtitle="Compassionate coaching, guidance, and pastoral support when you need it most."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {care.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                index={i}
                showContact
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white">
        <div className="container-wide text-center">
          <p className="text-lg text-deep-navy/70">
            Ready to take the next step in your growth journey?
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary">
              Request Mentorship
            </Link>
            <Link href="/get-involved" className="btn-outline">
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title="Your Growth Journey Starts Here"
        buttons={[
          { label: "Contact Us", href: "/contact" },
          { label: "Join The Well", href: "/get-involved" },
        ]}
      />
    </>
  );
}
