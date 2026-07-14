import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
  light?: boolean;
}

const sizes = {
  sm: { image: 40, text: "text-lg" },
  md: { image: 56, text: "text-xl" },
  lg: { image: 80, text: "text-2xl" },
};

export function Logo({
  className,
  showText = true,
  size = "md",
  light = false,
}: LogoProps) {
  const s = sizes[size];

  return (
    <Link
      href="/"
      className={cn("flex items-center gap-3", className)}
      aria-label={`${siteConfig.name} — Home`}
    >
      <Image
        src={siteConfig.logo}
        alt={`${siteConfig.name} logo`}
        width={s.image}
        height={s.image}
        className="rounded-full"
        priority
      />
      {showText && (
        <span
          className={cn(
            "font-serif font-bold leading-tight",
            s.text,
            light ? "text-white" : "text-deep-navy"
          )}
        >
          {siteConfig.name}
        </span>
      )}
    </Link>
  );
}
