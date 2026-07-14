import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface SocialLinkCardProps {
  title: string;
  url: string;
  description?: string;
  index?: number;
}

export function SocialLinkCard({
  title,
  url,
  description,
  index = 0,
}: SocialLinkCardProps) {
  return (
    <FadeIn delay={(index % 4) * 0.08}>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-6 shadow-card transition-all hover:-translate-y-0.5 hover:border-well-blue/30 hover:shadow-card-hover"
      >
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-semibold text-deep-navy group-hover:text-well-blue">
            {title}
          </h3>
          <ExternalLink
            className="h-4 w-4 shrink-0 text-deep-navy/40 group-hover:text-well-blue"
            aria-hidden="true"
          />
        </div>
        {description && (
          <p className="mt-2 flex-1 text-sm text-deep-navy/60">{description}</p>
        )}
      </a>
    </FadeIn>
  );
}
