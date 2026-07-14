import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { youtubeMedia } from "@/data/youtube";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Pastor Nina Anderson",
  description:
    "Meet Pastor Nina Anderson — founder of The Well Global. Watch Armed and Dangerous, a testimony of her life with The LORD.",
  path: "/about/pastor-nina",
});

const lifeHighlights = [
  {
    title: "Rooted in Prayer",
    description:
      "Pastor Nina's ministry is built on a deep, daily relationship with God — prayer is not an activity, it is the foundation of everything she leads.",
  },
  {
    title: "Called to Equip",
    description:
      "Through mentorship, teaching, and pastoral care, she helps people encounter God, grow in faith, and discover their God-given purpose.",
  },
  {
    title: "Leading The Well Global",
    description:
      "As founder and lead pastor, she guides a Christ-centered community committed to growth, gathering, prayer, and service with impact.",
  },
  {
    title: "Armed and Dangerous",
    description:
      "Her testimony — shared in Armed and Dangerous — reflects a life fully surrendered to The LORD: spiritually armed, purposefully dangerous to the works of darkness, and steadfast in faith.",
  },
];

export default function PastorNinaPage() {
  const { armedAndDangerous, playlist } = youtubeMedia;

  return (
    <>
      <PageHero
        title={siteConfig.pastorNina.name}
        subtitle="Founder & Lead Pastor of The Well Global"
      />

      <section
        className="section-padding bg-white"
        aria-labelledby="armed-dangerous-heading"
      >
        <div className="container-wide">
          <div className="grid items-start gap-12 lg:grid-cols-2">
            <FadeIn>
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-well-blue">
                  Featured Message
                </p>
                <h2
                  id="armed-dangerous-heading"
                  className="mt-3 font-serif text-3xl font-bold text-deep-navy sm:text-4xl"
                >
                  {armedAndDangerous.title}
                </h2>
                <p className="mt-6 text-lg leading-relaxed text-deep-navy/70">
                  {armedAndDangerous.description}
                </p>
                <p className="mt-4 text-lg leading-relaxed text-deep-navy/70">
                  This message captures the heart of Pastor Nina&apos;s journey —
                  a life marked by faith, obedience, spiritual authority, and
                  unwavering devotion to Jesus Christ. Watch and be encouraged
                  in your own walk with The LORD.
                </p>
                <a
                  href={armedAndDangerous.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-well-blue-deep hover:text-hot-pink hover:underline"
                >
                  Watch on YouTube{" "}
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <YouTubeEmbed
                videoId={armedAndDangerous.id}
                playlistId={playlist.id}
                title={`${armedAndDangerous.title} — Pastor Nina Anderson`}
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <section className="section-padding section-blush" aria-labelledby="life-heading">
        <div className="container-wide">
          <SectionHeading
            title="A Life With The LORD"
            subtitle="Pastor Nina's calling, ministry, and leadership at The Well Global."
          />
          <div className="grid gap-8 sm:grid-cols-2">
            {lifeHighlights.map((item, i) => (
              <FadeIn key={item.title} delay={i * 0.08}>
                <article className="h-full rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
                  <h3 className="font-serif text-xl font-bold text-deep-navy">
                    {item.title}
                  </h3>
                  <p className="mt-3 leading-relaxed text-deep-navy/70">
                    {item.description}
                  </p>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section
        className="section-padding bg-deep-navy"
        aria-labelledby="connect-nina-heading"
      >
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <div className="relative mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-2xl bg-brand-ombre p-1 shadow-card">
                <div className="relative h-full w-full overflow-hidden rounded-xl">
                  <Image
                    src={siteConfig.pastorNina.image}
                    alt={`Portrait of ${siteConfig.pastorNina.name}`}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 24rem"
                    priority
                  />
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <h2
                id="connect-nina-heading"
                className="font-serif text-3xl font-bold text-white"
              >
                Connect With Pastor Nina
              </h2>
              <p className="mt-6 text-lg leading-relaxed text-silver">
                Follow Pastor Nina for teachings, encouragement, and updates on
                ministry, mentorship, and community life at The Well Global.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
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
                <Link href="/contact" className="btn-secondary">
                  Contact The Well
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      <section
        className="section-padding bg-white"
        aria-labelledby="playlist-heading"
      >
        <div className="container-wide">
          <SectionHeading
            title="Watch More"
            subtitle={playlist.description}
          />
          <FadeIn>
            <YouTubeEmbed
              playlistId={playlist.id}
              title={playlist.title}
              className="mx-auto max-w-5xl"
            />
          </FadeIn>
          <p className="mt-8 text-center">
            <a
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline inline-flex items-center gap-2"
            >
              Open Full Playlist on YouTube{" "}
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </a>
          </p>
        </div>
      </section>

      <CTASection
        title="Grow With The Well Global"
        subtitle="Explore pathways for faith, community, prayer, and service."
        buttons={[
          { label: "Get Involved", href: "/get-involved" },
          { label: "Watch Media", href: "/media" },
        ]}
      />
    </>
  );
}
