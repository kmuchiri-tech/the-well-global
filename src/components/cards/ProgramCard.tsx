import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface ProgramCardProps {
  name: string;
  description: string;
  audience: string;
  category?: string;
  href?: string;
  externalUrl?: string;
  index?: number;
  showContact?: boolean;
}

export function ProgramCard({
  name,
  description,
  audience,
  category,
  href = "/contact",
  externalUrl,
  index = 0,
  showContact = false,
}: ProgramCardProps) {
  return (
    <FadeIn delay={(index % 4) * 0.08}>
      <article className="flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
        {category && (
          <span className="mb-3 inline-block w-fit rounded-full bg-well-blue/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-well-blue">
            {category}
          </span>
        )}
        <h3 className="font-serif text-xl font-bold text-deep-navy">{name}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-deep-navy/70">
          {description}
        </p>
        <p className="mt-4 text-xs font-medium text-deep-navy/50">
          Serves: {audience}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={href} className="btn-outline px-4 py-2 text-xs">
            Learn More
          </Link>
          {showContact && (
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-silver px-4 py-2 text-xs font-semibold text-deep-navy transition-colors hover:border-well-blue hover:text-well-blue"
            >
              Contact
            </Link>
          )}
          {externalUrl && (
            <a
              href={externalUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-well-blue hover:underline"
            >
              Community <ExternalLink className="h-3 w-3" aria-hidden="true" />
            </a>
          )}
        </div>
      </article>
    </FadeIn>
  );
}
