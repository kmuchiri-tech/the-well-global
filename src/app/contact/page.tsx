import type { Metadata } from "next";
import { Mail } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/forms/ContactForm";
import { SocialLinkCard } from "@/components/cards/SocialLinkCard";
import { siteConfig } from "@/config/site";
import { socialLinks, socialCategories } from "@/data/social-links";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Contact",
  description:
    "Contact The Well Global. Send a message, connect on social media, or reach our team at thewell@newlife.global.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="We'd love to hear from you. Reach out with questions, prayer needs, or to learn more about getting involved."
      />

      <section className="section-padding bg-white" aria-labelledby="contact-info-heading">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 id="contact-info-heading" className="font-serif text-2xl font-bold text-deep-navy">
                Get in Touch
              </h2>
              <p className="mt-4 text-deep-navy/70">
                Whether you have a question, need prayer, or want to explore how
                to get involved, our team is here for you.
              </p>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-6 inline-flex items-center gap-3 rounded-xl border border-silver/60 bg-soft-gray px-6 py-4 text-deep-navy transition-colors hover:border-well-blue hover:text-well-blue"
              >
                <Mail className="h-5 w-5 text-well-blue" aria-hidden="true" />
                <span className="font-semibold">{siteConfig.email}</span>
              </a>
            </div>
            <div className="rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-soft-gray" aria-labelledby="social-links-heading">
        <div className="container-wide">
          <SectionHeading
            title="Connect Online"
            subtitle="Find us on social media, program pages, and community groups."
          />
          {socialCategories.map((category) => {
            const links = socialLinks.filter((l) => l.category === category);
            if (links.length === 0) return null;
            return (
              <div key={category} className="mb-12">
                <h3 className="mb-6 font-serif text-xl font-bold text-deep-navy">
                  {category}
                </h3>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                  {links.map((link, i) => (
                    <SocialLinkCard
                      key={link.id}
                      title={link.title}
                      url={link.url}
                      description={link.description}
                      index={i}
                    />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
