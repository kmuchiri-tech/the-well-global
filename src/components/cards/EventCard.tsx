import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";
import { formatEventDate } from "@/lib/utils";

interface EventCardProps {
  title: string;
  date: string;
  endDate?: string;
  time?: string;
  location: string;
  description: string;
  registerUrl?: string;
  index?: number;
  onSelect?: () => void;
}

export function EventCard({
  title,
  date,
  endDate,
  time,
  location,
  description,
  registerUrl = "/get-involved",
  index = 0,
  onSelect,
}: EventCardProps) {
  return (
    <FadeIn delay={(index % 3) * 0.1}>
      <article className="flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-6 shadow-card transition-shadow hover:shadow-card-hover">
        <div className="mb-4 flex items-center gap-2 text-well-blue">
          <Calendar className="h-4 w-4" aria-hidden="true" />
          <time className="text-sm font-semibold" dateTime={date}>
            {formatEventDate(date, endDate)}
            {time && ` · ${time}`}
          </time>
        </div>
        <h3 className="font-serif text-xl font-bold text-deep-navy">{title}</h3>
        <div className="mt-2 flex items-center gap-2 text-sm text-deep-navy/60">
          <MapPin className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{location}</span>
        </div>
        <p className="mt-4 flex-1 text-sm leading-relaxed text-deep-navy/70">
          {description}
        </p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={registerUrl} className="btn-primary px-4 py-2 text-xs">
            Register
          </Link>
          {onSelect && (
            <button
              type="button"
              onClick={onSelect}
              className="btn-outline px-4 py-2 text-xs"
            >
              Details
            </button>
          )}
        </div>
      </article>
    </FadeIn>
  );
}
