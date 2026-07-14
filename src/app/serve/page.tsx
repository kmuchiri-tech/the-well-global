import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProgramCard } from "@/components/cards/ProgramCard";
import { VolunteerForm } from "@/components/forms/VolunteerForm";
import { CTASection } from "@/components/sections/CTASection";
import { getProgramsBySection } from "@/data/programs";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Serve",
  description:
    "Serve others and make an impact through youth programs, outreach, missions, and volunteer opportunities at The Well Global.",
  path: "/serve",
});

export default function ServePage() {
  const nextGen = getProgramsBySection("next-gen");
  const outreach = getProgramsBySection("outreach");
  const partnerships = getProgramsBySection("partnerships");

  return (
    <>
      <PageHero
        title="Serve Others and Make an Impact"
        subtitle="From youth camps to community outreach, discover meaningful ways to serve with purpose."
      />

      <section className="section-padding bg-white" aria-labelledby="next-gen-heading">
        <div className="container-wide">
          <SectionHeading
            title="The Well Next Generation"
            subtitle="Investing in the faith and character of the next generation."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {nextGen.map((program, i) => (
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

      <section className="section-padding bg-soft-gray" aria-labelledby="outreach-heading">
        <div className="container-wide">
          <SectionHeading
            title="The Well Outreach"
            subtitle="Serving our community and the world with practical love and generosity."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {outreach.map((program, i) => (
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

      <section className="section-padding bg-white" aria-labelledby="partnerships-heading">
        <div className="container-wide">
          <SectionHeading
            title="Partnerships"
            subtitle="Partner with us through volunteering, ministry collaboration, and giving."
          />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {partnerships.map((program, i) => (
              <ProgramCard
                key={program.id}
                name={program.name}
                description={program.description}
                audience={program.audience}
                href={program.href}
                externalUrl={program.externalUrl}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section
        id="volunteer"
        className="section-padding bg-soft-gray"
        aria-labelledby="volunteer-form-heading"
      >
        <div className="container-wide">
          <div className="mx-auto max-w-2xl">
            <SectionHeading
              title="Become a Volunteer"
              subtitle="Share your gifts and serve alongside our community."
            />
            <div className="rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
              <VolunteerForm />
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Your Service Makes a Difference"
        buttons={[
          { label: "Partner With Us", href: "/get-involved" },
          { label: "Give", href: "https://linktr.ee/thewellglobal", external: true },
        ]}
      />
    </>
  );
}
