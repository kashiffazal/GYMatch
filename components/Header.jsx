"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "What is GYMatch", href: "#what-is-gymatch" },
  { label: "Features", href: "#features" },
  { label: "UI Screens", href: "#screens" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Header() {
  const { theme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Determine current logo path based on active theme
  const logoSrc = theme === "dark" ? "/logo.png" : "/logo-black.png";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg-primary)]/85 backdrop-blur-xl border-b border-[var(--color-border)] py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo - Responsive for Light/Dark Mode */}
        <Link href="/" className="flex items-center group focus:outline-none">
          <div className="relative w-36 h-10 sm:w-44 sm:h-12 transition-transform duration-300 group-hover:scale-105">
            <Image
              src={logoSrc}
              alt="GYMatch SaaS Mobile App Showcase"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Nav Menu Pill */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2 bg-[var(--color-surface)]/80 backdrop-blur-xl border border-[var(--color-border)] rounded-full px-6 py-2 shadow-md">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://apps.apple.com/pk/app/gymatch/id6780825578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Get App</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle Mobile Menu"
            className="p-2 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:text-[var(--color-accent)] focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[var(--color-bg-primary)]/95 backdrop-blur-2xl border-b border-[var(--color-border)] px-4 pt-4 pb-6 shadow-2xl transition-all">
          <nav className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold uppercase tracking-wider text-[var(--color-foreground)] hover:bg-[var(--color-surface)] hover:text-[var(--color-accent)] transition-all"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t border-[var(--color-border)] mt-2 flex flex-col gap-3">
              <a
                href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-black flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Download iOS App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-xl text-sm font-extrabold uppercase tracking-wider border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] flex items-center justify-center gap-2"
              >
                <span>Download Android App</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

