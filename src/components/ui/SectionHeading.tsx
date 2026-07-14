import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        centered && "mx-auto text-center",
        className
      )}
    >
      <h2
        className={cn(
          "font-serif text-3xl font-bold tracking-tight sm:text-4xl",
          light ? "text-white" : "text-deep-navy"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-silver" : "text-deep-navy/70"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
