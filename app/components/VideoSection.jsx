"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Sparkles, X } from "lucide-react";
import styles from "./VideoSection.module.css";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  // Close on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-surface)]/80 border-b border-[var(--color-border)] overflow-hidden">
      {/* Static Center Radial Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[var(--color-accent)]/5 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <Sparkles className="w-4 h-4" />
            <span>The Platform Experience</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            SEE GYMATCH IN{" "}
            <span className="text-[var(--color-accent)]">MOTION</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Watch our official overview and see how real-time discovery and
            partner synchronization optimize your entire training workflow.
          </p>
        </div>

        {/* Video Preview Card (Launches Popup Modal) */}
        <div className={styles.videoContainer}>
          <div
            className="relative h-[340px] sm:h-[480px] md:h-[540px] w-full rounded-3xl overflow-hidden group cursor-pointer border border-[var(--color-border)] shadow-2xl bg-[#0d0d12]"
            onClick={() => setIsOpen(true)}
          >
            {/* Expanding Halo Ring Background Animation */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full border border-[var(--color-accent)]/30 animate-ping-slow pointer-events-none z-10"></div>

            {/* GPS Interactive Map App Screen Background */}
            <Image
              src="/assets/app/others/Explore.webp"
              alt="GYMatch Real-Time GPS Map Discovery Preview"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 opacity-70"
            />

            {/* Dark Gradient Overlay for High Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent z-10"></div>

            {/* Play Button & Callout Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 z-20">
              <div className={styles.playButton}>
                <Play className="w-8 h-8 fill-current ml-1" />
              </div>
              <div className="flex flex-col items-center gap-1 text-center px-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-white bg-black/80 px-6 py-2.5 rounded-full border border-white/20 backdrop-blur-md shadow-2xl group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-all">
                  Watch Live GPS Demo (Popup)
                </span>
                <span className="text-[11px] text-[var(--color-text-muted)] font-medium">
                  See live gym discovery & spotter feeds populating in real-time
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Popup Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-3xl overflow-hidden shadow-2xl border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-50 p-3 rounded-full bg-black/80 text-white hover:text-[var(--color-accent)] hover:bg-black transition-all border border-white/20 shadow-xl"
                aria-label="Close Video"
              >
                <X className="w-6 h-6" />
              </button>

              <iframe
                src="https://www.youtube.com/embed/ubKUy3EvYqA?autoplay=1"
                title="GYMatch Mobile App Official Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
