"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Target } from "lucide-react";

export default function AboutStorySection() {
  return (
    <section className="py-20 sm:py-28 relative bg-[var(--color-section-bg)] border-b border-[var(--color-border)] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* Left Image Spotlight (Stretched to match right column height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col items-stretch h-full"
          >
            <div className="relative w-full h-full min-h-[380px] sm:min-h-[460px] rounded-3xl overflow-hidden border-2 border-[var(--color-accent)] shadow-2xl shadow-[var(--color-accent)]/10 flex flex-col justify-end">
              <Image
                src="/assets/img/client-image-3.webp"
                alt="Entrepreneur Otis Jones - Founder & GYMatch Visionary"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent z-10"></div>

              <div className="relative z-20 m-6 p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10">
                <div className="text-sm font-bold text-[var(--color-accent)]">
                  Entrepreneur Otis Jones
                </div>
                <div className="text-xs text-zinc-300">
                  Founder & GYMatch Visionary
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Story Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left flex flex-col justify-between h-full"
          >
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                <Target className="w-4 h-4" />
                <span>Our Story & Mission</span>
              </div>

              <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide leading-tight">
                THE STORY BEHIND{" "}
                <span className="text-[var(--color-accent)]">
                  ABOUT GYMATCH
                </span>
              </h2>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Developing the GYMatch mobile app was an extraordinary
                challenge. Entrepreneur{" "}
                <strong className="text-[var(--color-foreground)]">
                  Otis Jones
                </strong>{" "}
                wanted to bring together millions of people from around the
                globe who share one common interest-fitness. The GYMatch
                rallying cry says it all:{" "}
                <em className="text-[var(--color-accent)] font-semibold">
                  Connect, GET FIT and Have Fun!
                </em>
              </p>

              <blockquote className="p-6 rounded-2xl bg-[var(--color-surface)] border-l-4 border-[var(--color-accent)] text-sm italic text-[var(--color-foreground)] shadow-md">
                &ldquo;72% of the modern world is connected to the Internet via
                mobile device-by creating this app, we can connect the
                world&apos;s people to their passion for fitness-it&apos;s a
                universal language,&rdquo; says Jones.
              </blockquote>

              <p className="text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
                GYMatch is a thoroughly unique app for both iOS and Android
                devices, connecting workout enthusiasts with the resources that
                will best help them achieve peak fitness-workout partners, gyms,
                studios, trainers, coaches, nutritionists and more.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
