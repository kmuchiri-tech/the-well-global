import type { Metadata } from "next";
import Link from "next/link";
import {
  Youtube,
  Instagram,
  Facebook,
  Music,
  Link as LinkIcon,
} from "lucide-react";

import { PageHero } from "@/components/sections/PageHero";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MediaCard } from "@/components/cards/MediaCard";
import { YouTubeEmbed } from "@/components/media/YouTubeEmbed";
import { FadeIn } from "@/components/ui/FadeIn";
import { getMediaByType, socialMediaPlatforms } from "@/data/media";
import { youtubeMedia } from "@/data/youtube";
import { createMetadata } from "@/lib/utils";

export const metadata: Metadata = createMetadata({
  title: "Media",
  description:
    "Watch, listen, read, and grow with sermons, teachings, devotionals, and resources from The Well Global.",
  path: "/media",
});

const socialIcons = {
  youtube: Youtube,
  instagram: Instagram,
  facebook: Facebook,
  music: Music,
  link: LinkIcon,
};

export default function MediaPage() {
  const watch = getMediaByType("watch");
  const listen = getMediaByType("listen");
  const read = getMediaByType("read");
  const { playlist, armedAndDangerous } = youtubeMedia;

  return (
    <>
      <PageHero
        title="Watch, Listen, Read, and Grow"
        subtitle="Resources to strengthen your faith and deepen your walk with God."
      />

      <section
        className="section-padding bg-white"
        aria-labelledby="youtube-playlist-heading"
      >
        <div className="container-wide">
          <SectionHeading
            title="YouTube Playlist"
            subtitle="Teachings, messages, and moments from The Well Global."
          />
          <FadeIn>
            <YouTubeEmbed
              playlistId={playlist.id}
              title={playlist.title}
              className="mx-auto max-w-5xl"
            />
          </FadeIn>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={playlist.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Youtube className="h-4 w-4" aria-hidden="true" />
              Open on YouTube
            </a>
            <Link
              href="/about/pastor-nina"
              className="btn-outline inline-flex items-center gap-2"
            >
              About Pastor Nina
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section-padding section-blush"
        aria-labelledby="featured-video-heading"
      >
        <div className="container-wide">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <FadeIn>
              <p className="text-sm font-semibold uppercase tracking-widest text-well-blue-deep">
                Featured Message
              </p>
              <h2
                id="featured-video-heading"
                className="mt-3 font-serif text-3xl font-bold text-deep-navy"
              >
                {armedAndDangerous.title}
              </h2>
              <p className="mt-4 leading-relaxed text-deep-navy/70">
                {armedAndDangerous.description}
              </p>
              <Link
                href="/about/pastor-nina"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-well-blue-deep hover:text-hot-pink hover:underline"
              >
                Read Pastor Nina&apos;s story →
              </Link>
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

      <section className="section-padding bg-white" aria-labelledby="watch-heading">
        <div className="container-wide">
          <SectionHeading title="Watch" subtitle="Sermons, teachings, retreats, and event highlights." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {watch.map((item, i) => (
              <MediaCard
                key={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                description={item.description}
                type="watch"
                thumbnail={item.thumbnail}
                url={item.url}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding section-lavender" aria-labelledby="listen-heading">
        <div className="container-wide">
          <SectionHeading title="Listen" subtitle="Podcasts, prayer recordings, and audio teachings." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {listen.map((item, i) => (
              <MediaCard
                key={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                description={item.description}
                type="listen"
                thumbnail={item.thumbnail}
                url={item.url}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-white" aria-labelledby="read-heading">
        <div className="container-wide">
          <SectionHeading title="Read" subtitle="Devotionals, articles, and testimonies." />
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {read.map((item, i) => (
              <MediaCard
                key={item.id}
                title={item.title}
                category={item.category}
                date={item.date}
                description={item.description}
                type="read"
                thumbnail={item.thumbnail}
                url={item.url}
                index={i}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-deep-navy" aria-labelledby="social-heading">
        <div className="container-wide">
          <SectionHeading
            title="Social Media"
            subtitle="Follow The Well Global across platforms."
            light
          />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {socialMediaPlatforms.map((platform, i) => {
              const Icon = socialIcons[platform.icon];
              return (
                <FadeIn key={platform.name} delay={i * 0.08}>
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col items-center rounded-2xl border border-white/10 bg-white/5 p-8 text-center transition-colors hover:border-lavender hover:bg-lavender/10"
                  >
                    <Icon className="mb-4 h-10 w-10 text-well-blue" aria-hidden="true" />
                    <span className="font-semibold text-white">{platform.name}</span>
                  </a>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
