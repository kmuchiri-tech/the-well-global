import Link from "next/link";
import { FadeIn } from "@/components/ui/FadeIn";

interface CTAButton {
  label: string;
  href: string;
  external?: boolean;
}

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttons: CTAButton[];
  dark?: boolean;
}

export function CTASection({
  title,
  subtitle,
  buttons,
  dark = true,
}: CTASectionProps) {
  return (
    <section
      className={dark ? "bg-deep-navy" : "bg-soft-gray"}
      aria-labelledby="cta-heading"
    >
      <div className="container-wide section-padding">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h2
              id="cta-heading"
              className={`font-serif text-3xl font-bold sm:text-4xl ${dark ? "text-white" : "text-deep-navy"}`}
            >
              {title}
            </h2>
            {subtitle && (
              <p
                className={`mt-4 text-lg ${dark ? "text-silver" : "text-deep-navy/70"}`}
              >
                {subtitle}
              </p>
            )}
            <div className="mt-10 flex flex-wrap justify-center gap-4">
              {buttons.map((btn) =>
                btn.external ? (
                  <a
                    key={btn.label}
                    href={btn.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    {btn.label}
                  </a>
                ) : (
                  <Link key={btn.label} href={btn.href} className="btn-primary">
                    {btn.label}
                  </Link>
                )
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
