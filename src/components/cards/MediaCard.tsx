import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { formatShortDate } from "@/lib/utils";

interface MediaCardProps {
  title: string;
  category: string;
  date: string;
  description: string;
  type: "watch" | "listen" | "read";
  thumbnail?: string;
  url?: string;
  index?: number;
}

const actionLabels = {
  watch: "Watch",
  listen: "Listen",
  read: "Read",
};

export function MediaCard({
  title,
  category,
  date,
  description,
  type,
  thumbnail = "/images/media-placeholder.svg",
  url = "https://linktr.ee/thewellglobal",
  index = 0,
}: MediaCardProps) {
  return (
    <FadeIn delay={(index % 3) * 0.1}>
      <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-silver/60 bg-white shadow-card transition-shadow hover:shadow-card-hover">
        <div className="relative aspect-video bg-soft-gray">
          <Image
            src={thumbnail}
            alt=""
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-well-blue px-3 py-1 text-xs font-semibold text-white">
            {category}
          </span>
        </div>
        <div className="flex flex-1 flex-col p-6">
          <time className="text-xs text-deep-navy/50" dateTime={date}>
            {formatShortDate(date)}
          </time>
          <h3 className="mt-2 font-serif text-lg font-bold text-deep-navy">
            {title}
          </h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-deep-navy/70">
            {description}
          </p>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-well-blue hover:underline"
          >
            {actionLabels[type]}{" "}
            <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
          </a>
        </div>
      </article>
    </FadeIn>
  );
}
