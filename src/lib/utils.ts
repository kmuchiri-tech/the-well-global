import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(" ");
}

export function createMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description?: string;
  path?: string;
}): Metadata {
  const fullTitle =
    title === siteConfig.name ? title : `${title} | ${siteConfig.name}`;
  const desc = description ?? siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: fullTitle,
    description: desc,
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: siteConfig.logo, width: 512, height: 512, alt: siteConfig.name }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [siteConfig.logo],
    },
    alternates: { canonical: url },
  };
}

export function formatEventDate(date: string, endDate?: string) {
  const start = new Date(date + "T12:00:00");
  const options: Intl.DateTimeFormatOptions = {
    month: "long",
    day: "numeric",
    year: "numeric",
  };

  if (endDate) {
    const end = new Date(endDate + "T12:00:00");
    if (start.getMonth() === end.getMonth() && start.getFullYear() === end.getFullYear()) {
      return `${start.toLocaleDateString("en-US", { month: "long", day: "numeric" })} – ${end.toLocaleDateString("en-US", options)}`;
    }
    return `${start.toLocaleDateString("en-US", options)} – ${end.toLocaleDateString("en-US", options)}`;
  }

  return start.toLocaleDateString("en-US", options);
}

export function formatShortDate(date: string) {
  return new Date(date + "T12:00:00").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}
