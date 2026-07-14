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
        className="absolute inset-0 bg-gradient-to-br from-lavender/20 via-transparent to-mauve/10"
        aria-hidden="true"
      />
      <div
        className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-well-blue/20 blur-3xl"
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-hot-pink/10 blur-3xl"
        aria-hidden="true"
      />
      <div className="container-wide section-padding relative">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <FadeIn>
            <div>
              <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-lavender">
                {siteConfig.name}
              </p>
              <h1
                id="hero-heading"
                className="font-serif text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
              >
                {siteConfig.tagline}
              </h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-well-blue-light/90">
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
                  className="absolute -inset-6 rounded-full bg-gradient-to-br from-gold/40 via-lavender/30 to-well-blue/30 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative rounded-full p-1 bg-gradient-to-br from-gold via-lavender to-well-blue">
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
