"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { navLinks, primaryButtons } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { MobileMenu } from "@/components/layout/MobileMenu";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-silver/40 bg-white/95 backdrop-blur-md">
      <div className="container-wide flex items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Logo size="sm" />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-deep-navy/80 transition-colors hover:bg-blush hover:text-well-blue-deep"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={primaryButtons.join.href}
            className="hidden btn-primary px-4 py-2 text-xs sm:inline-flex"
          >
            {primaryButtons.join.label}
          </Link>
          <a
            href={primaryButtons.give.href}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden btn-outline px-4 py-2 text-xs sm:inline-flex"
          >
            {primaryButtons.give.label}
          </a>
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-deep-navy hover:bg-soft-gray lg:hidden"
            onClick={() => setMenuOpen(true)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
