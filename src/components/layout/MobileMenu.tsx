"use client";

import { useEffect } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { navLinks, primaryButtons } from "@/config/site";
import { Logo } from "@/components/ui/Logo";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
    }
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      <div
        className={cn(
          "fixed inset-0 z-50 bg-deep-navy/60 backdrop-blur-sm transition-opacity lg:hidden",
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        )}
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        id="mobile-menu"
        className={cn(
          "fixed right-0 top-0 z-50 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ease-in-out lg:hidden",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
      >
        <div className="flex items-center justify-between border-b border-silver/60 p-4">
          <Logo size="sm" />
          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 items-center justify-center rounded-full text-deep-navy hover:bg-soft-gray"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-4">
          <ul className="space-y-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={onClose}
                  className="block rounded-lg px-4 py-3 text-base font-medium text-deep-navy hover:bg-soft-gray hover:text-well-blue"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="border-t border-silver/60 p-4 space-y-3">
          <Link
            href={primaryButtons.join.href}
            onClick={onClose}
            className="btn-primary w-full"
          >
            {primaryButtons.join.label}
          </Link>
          <a
            href={primaryButtons.give.href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="btn-outline w-full"
          >
            {primaryButtons.give.label}
          </a>
        </div>
      </nav>
    </>
  );
}
