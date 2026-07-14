import { Quote } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

interface TestimonialCardProps {
  quote: string;
  name: string;
  context: string;
  isSample?: boolean;
  index?: number;
}

export function TestimonialCard({
  quote,
  name,
  context,
  isSample,
  index = 0,
}: TestimonialCardProps) {
  return (
    <FadeIn delay={index * 0.12}>
      <blockquote className="flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-8 shadow-card">
        <Quote
          className="mb-4 h-8 w-8 text-well-blue/30"
          aria-hidden="true"
        />
        <p className="flex-1 text-lg leading-relaxed text-deep-navy/80">
          &ldquo;{quote}&rdquo;
        </p>
        <footer className="mt-6 border-t border-silver/60 pt-6">
          <cite className="not-italic">
            <p className="font-semibold text-deep-navy">{name}</p>
            <p className="mt-1 text-sm text-deep-navy/60">{context}</p>
          </cite>
          {isSample && (
            <p className="mt-2 text-xs font-medium uppercase tracking-wide text-well-blue/70">
              Sample content
            </p>
          )}
        </footer>
      </blockquote>
    </FadeIn>
  );
}
