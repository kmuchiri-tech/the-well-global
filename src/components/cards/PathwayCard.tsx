import Link from "next/link";
import {
  Sprout,
  Users,
  HeartHandshake,
  HandHeart,
  type LucideIcon,
} from "lucide-react";
import { FadeIn } from "@/components/ui/FadeIn";

const iconMap: Record<string, LucideIcon> = {
  sprout: Sprout,
  users: Users,
  "heart-handshake": HeartHandshake,
  "hand-heart": HandHeart,
};

const accentStyles = [
  { bg: "bg-well-blue/10", hover: "group-hover:bg-well-blue", text: "text-well-blue" },
  { bg: "bg-lavender/20", hover: "group-hover:bg-lavender", text: "text-lavender" },
  { bg: "bg-mauve/20", hover: "group-hover:bg-mauve", text: "text-mauve" },
  { bg: "bg-hot-pink/10", hover: "group-hover:bg-hot-pink", text: "text-hot-pink" },
];

interface PathwayCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  index?: number;
}

export function PathwayCard({
  title,
  description,
  href,
  icon,
  index = 0,
}: PathwayCardProps) {
  const Icon = iconMap[icon] ?? Sprout;
  const accent = accentStyles[index % accentStyles.length];

  return (
    <FadeIn delay={index * 0.1}>
      <article className="group flex h-full flex-col rounded-2xl border border-silver/60 bg-white p-8 shadow-card transition-all hover:-translate-y-1 hover:border-lavender/30 hover:shadow-card-hover">
        <div
          className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${accent.bg} ${accent.text} transition-colors ${accent.hover} group-hover:text-white`}
        >
          <Icon className="h-7 w-7" aria-hidden="true" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-deep-navy">{title}</h3>
        <p className="mt-3 flex-1 leading-relaxed text-deep-navy/70">
          {description}
        </p>
        <Link
          href={href}
          className="mt-6 inline-flex items-center text-sm font-semibold text-well-blue-deep hover:text-hot-pink hover:underline"
        >
          Learn More →
        </Link>
      </article>
    </FadeIn>
  );
}
