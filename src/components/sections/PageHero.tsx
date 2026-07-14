import { FadeIn } from "@/components/ui/FadeIn";

interface PageHeroProps {
  title: string;
  subtitle?: string;
}

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section aria-labelledby="page-hero-heading" className="relative overflow-hidden bg-brand-hero">
      <div
        className="absolute inset-0 bg-gradient-to-r from-lavender/15 via-transparent to-mauve/10"
        aria-hidden="true"
      />
      <div className="container-wide relative px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <FadeIn>
          <div className="mx-auto max-w-3xl text-center">
            <h1
              id="page-hero-heading"
              className="font-serif text-4xl font-bold text-white sm:text-5xl"
            >
              {title}
            </h1>
            {subtitle && (
              <p className="mt-6 text-lg leading-relaxed text-well-blue-light/90">
                {subtitle}
              </p>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
