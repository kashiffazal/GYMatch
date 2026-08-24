"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Apple, Smartphone } from "lucide-react";

function renderIcon(IconProp, defaultClassName = "w-4 h-4") {
  if (!IconProp) return null;
  // If it is ALREADY a valid React JSX element (<Icon />), return directly
  if (React.isValidElement(IconProp)) {
    return IconProp;
  }
  // Otherwise, treat as a React Icon Component (Function or ForwardRef Object)
  const IconComponent = IconProp;
  return <IconComponent className={defaultClassName} />;
}

export default function PageHero({
  badgeText = "GYMatch Platform",
  badgeIcon = <Sparkles className="w-4 h-4" />,
  title,
  description,
  bgImage = "/assets/img/discover-your-own-strengths.webp",
  showStoreButtons = true,
}) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-24 sm:pb-32 overflow-hidden bg-[var(--color-bg-primary)] border-b border-[var(--color-border)] min-h-[70vh] flex items-center justify-center no-print">
      {/* Animated Background Image with Slow Zoom Scale */}
      {bgImage && (
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.08 }}
          transition={{
            duration: 15,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <Image
            src={bgImage}
            alt="GYMatch Hero Background"
            fill
            className="object-cover object-center opacity-35"
            priority
          />
        </motion.div>
      )}

      {/* Radial & Gradient Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)]/80 via-[var(--color-bg-primary)]/50 to-[var(--color-bg-primary)]/80 z-0"></div>

      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[var(--color-ambient-glow)] rounded-full blur-[180px] pointer-events-none animate-pulse-slow z-0"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto space-y-6"
        >
          {badgeText && (
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] shadow-md"
            >
              {renderIcon(badgeIcon, "w-4 h-4")}
              <span>{badgeText}</span>
            </motion.div>
          )}

          {title && (
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-bebas text-5xl sm:text-7xl lg:text-8xl tracking-tight leading-[0.95] text-[var(--color-foreground)]"
            >
              {title}
            </motion.h1>
          )}

          {description && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base sm:text-xl text-[var(--color-text-muted)] leading-relaxed font-normal max-w-3xl mx-auto"
            >
              {description}
            </motion.p>
          )}

          {/* Download Buttons matching Home Hero 1:1 */}
          {showStoreButtons && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
            >
              <a
                href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-xl shadow-[var(--color-accent)]/25 hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.34.13-9.14-1.9-14.4-6.09-3.41-2.73-7.3-7.44-11.66-14.13-6.52-10.02-11.66-20.9-15.42-32.63-3.76-11.73-5.64-22.9-5.64-33.51 0-14.4 3.66-26.17 10.98-35.3 7.32-9.13 16.48-13.78 27.48-13.95 4.96 0 10.15 1.21 15.58 3.63 5.43 2.42 9.4 3.63 11.9 3.63 2.15 0 6.1-1.26 11.87-3.78 5.76-2.52 10.83-3.71 15.22-3.57 11.75.63 21.05 4.97 27.91 13.02-10.42 6.32-15.5 15.02-15.25 26.11.26 8.5 3.51 15.8 9.77 21.9 6.26 6.1 13.73 9.43 22.4 9.99-2.22 6.64-4.88 12.87-7.98 18.7zM119.22 31.85c0-6.72 2.4-13.06 7.19-19.03 4.79-5.97 10.74-9.59 17.85-10.86.36 1.48.54 2.87.54 4.18 0 6.62-2.48 13.02-7.44 19.2-4.96 6.18-10.97 9.87-18.04 11.08-.12-.99-.18-4.57-.18-4.57z" />
                </svg>
                <span>DOWNLOAD FOR IOS</span>
              </a>

              <a
                href="https://play.google.com/store/apps/details?id=com.app.gymatch"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-sm font-extrabold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all duration-300 shadow-lg hover:scale-105 active:scale-95 cursor-pointer"
              >
                <svg
                  className="w-5 h-5 fill-current text-[var(--color-accent)]"
                  viewBox="0 0 512 512"
                >
                  <path d="M325.3 234.3L104.6 13l280.8 161.2-59.8 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0zm425.2 225.6l-58.9-34.1-65.7 64.5 65.7 64.5 59-34.1c18-10.4 18-46.3-.1-56.8zM104.6 499l220.7-221.3 59.8 60.1L104.6 499z" />
                </svg>
                <span>GET GOOGLE PLAY</span>
              </a>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
