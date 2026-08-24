"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import ThemeToggle from "./ThemeToggle";
import { Menu, X, ArrowUpRight, Apple, Smartphone } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
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
  const logoSrc = theme === "dark" ? "/logo.webp" : "/logo-black.webp";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--color-bg-primary)]/85 backdrop-blur-xl border-b border-[var(--color-border)] py-3 shadow-xl"
          : "bg-transparent backdrop-blur-sm py-5"
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
            <Link
              key={link.label}
              href={link.href}
              className="px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden lg:flex items-center gap-4">
          <ThemeToggle />
          <a
            href="https://apps.apple.com/pk/app/gymatch/id6780825578"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-lg shadow-[var(--color-accent)]/20 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <svg
              className="w-4 h-4 fill-current shrink-0"
              viewBox="0 0 170 170"
            >
              <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
            </svg>
            <span>Get App</span>
            <ArrowUpRight className="w-4 h-4 shrink-0" />
          </a>
        </div>

        {/* Mobile Controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <ThemeToggle />
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            type="button"
            aria-label="Toggle Mobile Menu"
            className="p-2.5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] transition-all"
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-[var(--color-surface)]/95 backdrop-blur-2xl border-b border-[var(--color-border)] p-6 shadow-2xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 rounded-xl text-sm font-bold text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-primary)] transition-all"
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-[var(--color-border)] mt-2 grid grid-cols-2 gap-2.5">
              <a
                href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-2 rounded-xl text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] flex items-center justify-center gap-1.5 shadow-lg"
              >
                <svg
                  className="w-4 h-4 fill-current shrink-0"
                  viewBox="0 0 170 170"
                >
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
                </svg>
                <span>iOS App</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 px-2 rounded-xl text-xs font-extrabold uppercase tracking-wider border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] flex items-center justify-center gap-1.5"
              >
                <svg
                  className="w-4 h-4 fill-current text-[var(--color-accent)] shrink-0"
                  viewBox="0 0 512 512"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-59.8 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 59-34.1c18-10.4 18-46.3-.1-56.8zM104.6 499l220.7-221.3 59.8 60.1L104.6 499z" />
                </svg>
                <span>Android</span>
                <ArrowUpRight className="w-3.5 h-3.5 shrink-0" />
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
