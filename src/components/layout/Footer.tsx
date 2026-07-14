import Link from "next/link";
import { Facebook, Link as LinkIcon, Mail } from "lucide-react";
import {
  siteConfig,
  footerQuickLinks,
  footerGetInvolvedLinks,
  footerConnectLinks,
} from "@/config/site";
import { Logo } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="bg-brand-footer text-silver" aria-label="Site footer">
      <div className="h-1 bg-gradient-to-r from-well-blue via-lavender to-mauve" aria-hidden="true" />
      <div className="container-wide section-padding">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo light showText size="sm" />
            <p className="mt-4 text-sm leading-relaxed text-silver/80">
              {siteConfig.tagline}
            </p>
            <div className="mt-6 flex gap-4">
              <a
                href="https://www.facebook.com/share/18qGiPdUbS/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver/70 transition-colors hover:text-gold"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href="https://linktr.ee/thewellglobal"
                target="_blank"
                rel="noopener noreferrer"
                className="text-silver/70 transition-colors hover:text-gold"
                aria-label="Linktree"
              >
                <LinkIcon className="h-5 w-5" aria-hidden="true" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-silver/70 transition-colors hover:text-gold"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerQuickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-silver/80 transition-colors hover:text-lavender"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Get Involved
            </h3>
            <ul className="mt-4 space-y-2">
              {footerGetInvolvedLinks.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith("http") ? (
                    <a
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-silver/80 transition-colors hover:text-lavender"
                    >
                      {link.label}
                    </a>
                  ) : (
                    <Link
                      href={link.href}
                      className="text-sm text-silver/80 transition-colors hover:text-lavender"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-lg font-semibold text-white">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              {footerConnectLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("mailto") ? undefined : "_blank"}
                    rel={
                      link.href.startsWith("mailto")
                        ? undefined
                        : "noopener noreferrer"
                    }
                    className="text-sm text-silver/80 transition-colors hover:text-lavender"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-silver/60">
            © 2026 The Well Global. All rights reserved.
          </p>
          <Link
            href="/privacy"
            className="text-sm text-silver/60 transition-colors hover:text-mauve"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
