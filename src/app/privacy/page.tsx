import type { Metadata } from "next";
import { PageHero } from "@/components/sections/PageHero";
import { siteConfig } from "@/config/site";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Privacy Policy",
  description: `Privacy policy for ${siteConfig.name}. Learn how we handle your information.`,
  path: "/privacy",
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" />
      <section className="section-padding bg-white">
        <div className="container-wide">
          <div className="prose prose-lg mx-auto max-w-3xl text-deep-navy/80">
            <p className="text-sm text-deep-navy/50">Last updated: March 2026</p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Introduction
            </h2>
            <p className="mt-4 leading-relaxed">
              {siteConfig.name} (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) respects your privacy.
              This policy explains how we collect, use, and protect information when you
              visit our website or submit forms.
            </p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Information We Collect
            </h2>
            <p className="mt-4 leading-relaxed">
              When you submit a contact form, prayer request, or volunteer application,
              we collect the information you provide — such as your name, email address,
              phone number, and message content.
            </p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              How We Use Your Information
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>To respond to your inquiries and requests</li>
              <li>To process prayer requests with our prayer team</li>
              <li>To coordinate volunteer opportunities</li>
              <li>To improve our website and services</li>
            </ul>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Confidential Prayer Requests
            </h2>
            <p className="mt-4 leading-relaxed">
              If you mark a prayer request as confidential, it will only be shared with
              our designated prayer team and will not be posted publicly.
            </p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Data Security
            </h2>
            <p className="mt-4 leading-relaxed">
              We take reasonable measures to protect your information. However, no method
              of transmission over the internet is 100% secure.
            </p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Third-Party Links
            </h2>
            <p className="mt-4 leading-relaxed">
              Our website contains links to external sites such as Facebook, Linktree, and
              HiHello. We are not responsible for the privacy practices of those sites.
            </p>

            <h2 className="mt-8 font-serif text-2xl font-bold text-deep-navy">
              Contact Us
            </h2>
            <p className="mt-4 leading-relaxed">
              For privacy-related questions, contact us at{" "}
              <a href={`mailto:${siteConfig.email}`} className="text-well-blue hover:underline">
                {siteConfig.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
