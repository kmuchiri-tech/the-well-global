import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { PrayerRequestForm } from "@/components/forms/PrayerRequestForm";
import { CTASection } from "@/components/sections/CTASection";
import { getProgramsBySection } from "@/data/programs";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Pray",
  description:
    "Prayer sits at the center of The Well Global. Join a gathering, submit a prayer request, or grow as an intercessor.",
  path: "/pray",
});

export default function PrayPage() {
  const weekly = getProgramsBySection("weekly-prayer");
  const support = getProgramsBySection("prayer-support");
  const development = getProgramsBySection("prayer-development");

  return (
    <>
      <PageHero
        title="Rooted in Prayer"
        subtitle="Prayer sits at the center of The Well Global. Join a gathering, submit a prayer request, or grow as an intercessor."
      />

      <section className="section-padding bg-white" aria-labelledby="weekly-prayer-heading">
        <div className="container-wide">
          <SectionHeading title="Weekly Prayer" subtitle="Regular rhythms of prayer for the community." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {weekly.map((program, i) => (
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

      <section className="section-padding bg-soft-gray" aria-labelledby="prayer-support-heading">
        <div className="container-wide">
          <SectionHeading title="Prayer Support" subtitle="We're here to pray with you and for you." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {support.map((program, i) => (
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

      <section className="section-padding bg-white" aria-labelledby="prayer-development-heading">
        <div className="container-wide">
          <SectionHeading title="Prayer Development" subtitle="Grow in your calling as an intercessor and prayer leader." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {development.map((program, i) => (
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

      <section
        id="prayer-request"
        className="section-padding bg-soft-gray"
        aria-labelledby="prayer-form-heading"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Submit a Prayer Request"
              subtitle="Share your need with our prayer team. We're honored to stand with you in faith."
            />
            <div className="rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
              <PrayerRequestForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Join Us in Prayer"
        buttons={[
          { label: "Join Prayer Team", href: "/get-involved" },
          { label: "Contact Us", href: "/contact" },
        ]}
      />
    </>
  );
}
