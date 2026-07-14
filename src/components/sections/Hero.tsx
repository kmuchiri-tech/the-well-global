import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-brand-hero"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-violet/30 via-transparent to-well-pink/25"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-violet/30 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-well-pink/25 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-wide section-padding relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-soft-pink">
                {siteConfig.name}
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                {siteConfig.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-lilac/95">
                {siteConfig.description}
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link href="/about" className="btn-primary">
                  Explore The Well
                </Link>
                <Link href="/get-involved" className="btn-secondary">
                  Join Our Community
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="none">
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-violet/40 via-lilac/30 to-well-pink/40 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-full p-1 bg-brand-ombre">
                  <Image
                    src={siteConfig.logo}
                    alt={`${siteConfig.name} logo`}
                    width={320}
                    height={320}
                    className="relative rounded-full shadow-2xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
