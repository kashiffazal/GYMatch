"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, XCircle, Zap, Dumbbell, ShieldCheck, MapPin } from "lucide-react";
import styles from "./RevolutionSection.module.css";

export default function RevolutionSection() {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-bg-primary)]">
      
      {/* Background Radial Glow */}
      <div className={styles.crystalGlow}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Crystal Container */}
        <div className={`p-8 sm:p-14 lg:p-16 relative overflow-hidden ${styles.revolutionCard}`}>
          
          {/* Background Fitness Photo Overlay */}
          <div className="absolute inset-0 z-0 opacity-15 pointer-events-none">
            <Image
              src="/assets/img/sportsman-on-training-endurance-workout-with-ropes-e1601866835973.jpg"
              alt="Fitness Revolution"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-surface)] via-transparent to-[var(--color-surface)]"></div>
          </div>

          <div className="relative z-10 space-y-12">
            
            {/* Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--color-accent)]/15 border border-[var(--color-accent)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
                <Zap className="w-4 h-4" />
                <span>The Fitness Shift</span>
              </div>

              <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
                THE GYMATCH <span className="text-[var(--color-accent)]">REVOLUTION</span>
              </h2>

              <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                Compare traditional gym searching friction with GYMatch's real-time SaaS platform.
              </p>
            </div>

            {/* Comparison Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Old Traditional Way */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 space-y-6 ${styles.oldWayCard}`}
              >
                <div className="flex items-center gap-3 text-red-400 font-bebas text-3xl">
                  <XCircle className="w-7 h-7 flex-shrink-0" />
                  <span>OLD TRADITIONAL APPROACH</span>
                </div>

                <ul className="space-y-4 text-sm text-[var(--color-text-muted)]">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg">•</span>
                    <span>Searching Google Maps manually & calling gyms for equipment details</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg">•</span>
                    <span>Lifting heavy weights alone with nobody available to spot heavy sets</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg">•</span>
                    <span>Awkwardly asking random gym members for a workout partnership</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold text-lg">•</span>
                    <span>Privacy concerns sharing personal social media or cell phone numbers</span>
                  </li>
                </ul>
              </motion.div>

              {/* GYMatch SaaS Solution */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`p-8 space-y-6 ${styles.newWayCard}`}
              >
                <div className="flex items-center gap-3 text-[var(--color-accent)] font-bebas text-3xl">
                  <CheckCircle2 className="w-7 h-7 flex-shrink-0" />
                  <span>WITH GYMATCH SAAS APP</span>
                </div>

                <ul className="space-y-4 text-sm text-[var(--color-foreground)] font-medium">
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">•</span>
                    <span>Instant live GPS discovery of verified gyms with full amenity breakdown</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">•</span>
                    <span>Real-time feed showing active spotters currently at your gym</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">•</span>
                    <span>Filter training partners by exact discipline, weight class, or goal</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-[var(--color-accent)] font-bold text-lg">•</span>
                    <span>Privacy-first temporary chat thread without revealing private contact info</span>
                  </li>
                </ul>
              </motion.div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
