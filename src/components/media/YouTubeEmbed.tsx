import { cn } from "@/lib/utils";
import { getYouTubeEmbedUrl } from "@/data/youtube";

interface YouTubeEmbedProps {
  videoId?: string;
  playlistId?: string;
  title: string;
  className?: string;
}

export function YouTubeEmbed({
  videoId,
  playlistId,
  title,
  className,
}: YouTubeEmbedProps) {
  const src = getYouTubeEmbedUrl({ videoId, playlistId });

  if (!src) return null;

  return (
    <div
      className={cn(
        "relative aspect-video overflow-hidden rounded-2xl border border-silver/60 bg-deep-navy shadow-card",
        className
      )}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
        className="absolute inset-0 h-full w-full"
        loading="lazy"
      />
    </div>
  );
}
