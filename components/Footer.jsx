"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { ChevronRight, ArrowRight, Apple, Smartphone } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  const { theme } = useTheme();
  const logoSrc = theme === "dark" ? "/logo.webp" : "/logo-black.webp";

  return (
    <footer className="relative bg-[var(--color-surface)]/90 backdrop-blur-xl border-t border-[var(--color-border)] pt-16 pb-8 overflow-hidden">
      {/* Ambient Radial Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Custom Width Columns Flexbox Layout: 40% | 20% | 20% | 20% */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row items-stretch gap-8 lg:gap-6 pb-16 border-b border-[var(--color-border)]"
        >
          {/* Column 1: Brand Info & Callout (40% width) */}
          <div className="w-full lg:w-[40%] lg:border-r border-[var(--color-border)]/50 lg:pr-8 h-full flex flex-col justify-between space-y-3">
            <div className="space-y-3">
              <Link href="/" className="inline-flex items-center group">
                <div className="relative w-44 h-12">
                  <Image
                    src={logoSrc}
                    alt="GYMatch Logo"
                    fill
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed max-w-md">
                GYMatch is a real-time, location-based fitness platform that
                helps users discover nearby gyms and instantly connect with
                workout partners and spotters.
              </p>
            </div>

            {/* Direct Contact Callout Link */}
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-wider text-[var(--color-accent)] hover:text-[var(--color-foreground)] transition-colors group"
              >
                <span>Get in Touch with us Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>

            {/* Interactive Social Icons Bar */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.facebook.com/GYMATCH"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GYMatch Facebook Page"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://x.com/gymatch"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GYMatch X Twitter Profile"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/gymatch/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GYMatch Instagram Profile"
                className="w-9 h-9 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:bg-[var(--color-accent)] hover:text-black hover:border-[var(--color-accent)] hover:scale-110 transition-all duration-300 shadow-md"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation Links (20% width) */}
          <div className="w-full lg:w-[20%] lg:border-r border-[var(--color-border)]/50 lg:pr-6 h-full flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-bebas text-2xl tracking-wider text-[var(--color-foreground)]">
                  Quick Navigation
                </h3>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mt-1"></div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm font-medium">
                <li>
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>About GYMatch</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Blog & News</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>FAQ & Support</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Contact Us</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 3: Platform & Legal Links (20% width) */}
          <div className="w-full lg:w-[20%] lg:border-r border-[var(--color-border)]/50 lg:pr-6 h-full flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-bebas text-2xl tracking-wider text-[var(--color-foreground)]">
                  Platform & Legal
                </h3>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mt-1"></div>
              </div>

              <ul className="space-y-4 text-xs sm:text-sm font-medium">
                <li>
                  <Link
                    href="/privacy"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Terms & Conditions</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms#spotlight-refunds"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Spotlight Refunds</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy#data-protection"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Security & Protection</span>
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="group inline-flex items-center gap-2 text-[var(--color-text-muted)] hover:text-[var(--color-accent)] transition-all"
                  >
                    <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)] group-hover:translate-x-1 transition-transform" />
                    <span>Support Desk</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Column 4: Mobile Apps (20% width) */}
          <div className="w-full lg:w-[20%] h-full flex flex-col justify-between space-y-6">
            <div>
              <div className="mb-4">
                <h3 className="font-bebas text-2xl tracking-wider text-[var(--color-foreground)]">
                  Mobile Apps
                </h3>
                <div className="w-8 h-0.5 bg-[var(--color-accent)] mt-1"></div>
              </div>

              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed mb-4">
                Available worldwide on iOS App Store & Android Google Play
                Store.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-1 gap-2.5 sm:gap-3">
                <a
                  href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] group transition-all cursor-pointer shadow-md"
                >
                  <svg
                    className="w-5 h-5 fill-current text-[var(--color-accent)] shrink-0"
                    viewBox="0 0 170 170"
                  >
                    <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] uppercase text-[var(--color-text-muted)] tracking-wider">
                      Download on the
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)]">
                      App Store
                    </div>
                  </div>
                </a>

                <a
                  href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 px-3.5 sm:px-4 py-2.5 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] hover:border-[var(--color-accent)] group transition-all cursor-pointer shadow-md"
                >
                  <svg
                    className="w-5 h-5 fill-current text-[var(--color-accent)] shrink-0"
                    viewBox="0 0 512 512"
                  >
                    <path d="M325.3 234.3L104.6 13l280.8 161.2-59.8 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 59-34.1c18-10.4 18-46.3-.1-56.8zM104.6 499l220.7-221.3 59.8 60.1L104.6 499z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[9px] sm:text-[10px] uppercase text-[var(--color-text-muted)] tracking-wider">
                      GET IT ON
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-[var(--color-foreground)] group-hover:text-[var(--color-accent)]">
                      Google Play
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar: Copyright & Innotech Cloud Developer Credit */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[var(--color-text-muted)]">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-3 gap-y-1 text-center md:text-left">
            <span>
              © {new Date().getFullYear()} GYMatch Inc. All rights reserved.
            </span>
            <span className="hidden md:inline text-[var(--color-border)]">
              •
            </span>
            <span>
              Designed & Developed by{" "}
              <a
                href="http://innotechcloud.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--color-accent)] font-bold hover:underline"
              >
                Innotech Cloud
              </a>
            </span>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <Link
              href="/privacy"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/contact"
              className="hover:text-[var(--color-accent)] transition-colors"
            >
              Support
            </Link>
          </div>
        </div>

        {/* High-Contrast Crystal Watermark Typography */}
        <div className="mt-8 pt-6 border-t border-[var(--color-border)]/50 text-center overflow-hidden">
          <span className={styles.footerWatermark}>GYMATCH</span>
        </div>
      </div>
    </footer>
  );
}
