"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Radio,
  ArrowLeft,
  Home,
  HelpCircle,
  Newspaper,
  Mail,
  Compass,
} from "lucide-react";

export default function NotFound() {
  const QUICK_LINKS = [
    {
      title: "Home Base",
      description: "Return to live map & facility discovery engine",
      href: "/",
      icon: Home,
    },
    {
      title: "Protocol FAQ",
      description: "Get immediate answers on platform synchronization",
      href: "/faq",
      icon: HelpCircle,
    },
    {
      title: "Performance Blog",
      description: "Explore elite conditioning guides & spotter safety",
      href: "/blog",
      icon: Newspaper,
    },
    {
      title: "Direct Support",
      description: "Connect directly with the Gymatch operations hub",
      href: "/contact",
      icon: Mail,
    },
  ];

  return (
    <main className="min-h-screen bg-[var(--color-bg-primary)] text-[var(--color-foreground)] flex flex-col justify-center relative overflow-hidden pt-28 pb-20">
      {/* Dynamic Background Elements */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[var(--color-accent)]/10 rounded-full blur-[150px] pointer-events-none animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-red-500/5 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-center">
        
        {/* Signal Lost Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] shadow-lg mb-6"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--color-accent)] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--color-accent)]"></span>
          </span>
          <Radio className="w-3.5 h-3.5" />
          <span>404 // SIGNAL LOST</span>
        </motion.div>

        {/* Large 404 Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-bebas text-7xl sm:text-9xl lg:text-[12rem] tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-b from-[var(--color-foreground)] via-[var(--color-foreground)] to-[var(--color-border)] mb-2"
        >
          OUT OF BOUNDS
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm sm:text-base text-[var(--color-text-muted)] font-medium leading-relaxed mb-10"
        >
          The coordinates you are searching for do not exist in our training registry or the requested protocol has been relocated.
        </motion.p>

        {/* Primary Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-accent)] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shadow-[var(--color-accent)]/20 transition-all hover:scale-105"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Home Base</span>
          </Link>

          <Link
            href="/blog"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] font-bold text-xs uppercase tracking-widest hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-md"
          >
            <Compass className="w-4 h-4 text-[var(--color-accent)]" />
            <span>Explore Training Hub</span>
          </Link>
        </motion.div>

        {/* Quick Jump Directory Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left"
        >
          {QUICK_LINKS.map((link) => {
            const Icon = link.icon;
            return (
              <Link
                key={link.title}
                href={link.href}
                className="group p-5 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/40 transition-all duration-300 shadow-md hover:-translate-y-1 block"
              >
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-bebas text-lg text-[var(--color-foreground)] tracking-wide group-hover:text-[var(--color-accent)] transition-colors">
                  {link.title}
                </h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-2">
                  {link.description}
                </p>
              </Link>
            );
          })}
        </motion.div>

      </div>
    </main>
  );
}
