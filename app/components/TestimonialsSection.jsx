"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Star, Quote, MessageSquare } from "lucide-react";

const TESTIMONIALS = [
  {
    id: 1,
    name: "Mike P.",
    location: "Fort Lauderdale, FL",
    image: "/assets/testimonials/1.webp",
    rating: 5,
    quote:
      "I'm glad there is an app out there that can help big guys like me find a spotter in the gym. No more weight lifting alone-now I can find spotters all day long. Great stuff GYMatch!",
    role: "Bodybuilder & Powerlifter",
  },
  {
    id: 2,
    name: "Louisa",
    location: "Miami, FL",
    image: "/assets/testimonials/2.webp",
    rating: 5,
    quote:
      "I was trying to figure out how to find new clients and meet new people... then BAM! This app is like a God-send! As a fitness instructor, GYMatch answered my prayers. ¡Estoy enamorado de este APP!",
    role: "Fitness Instructor",
  },
  {
    id: 3,
    name: "Erica Stone",
    location: "Houston, TX",
    image: "/assets/testimonials/3.webp",
    rating: 5,
    quote:
      "I thought I had seen it all until I was introduced to GYMatch. This app is amazing! I've been on it everyday setting up my profile and inviting friends. Great job #Team GYMatch!",
    role: "CrossFit Trainee",
  },
  {
    id: 4,
    name: "Karan",
    location: "Miami, FL",
    image: "/assets/testimonials/4.webp",
    rating: 5,
    quote:
      "WOW, what can I say?! This App is so super cool! I'm definitely telling all of my friends. Where else can you find an app that connects you to so many fitness experiences? GYMatch Rocks!",
    role: "Gym Goer",
  },
  {
    id: 5,
    name: "Mark D.",
    location: "Los Angeles, CA",
    image: "/assets/testimonials/5.webp",
    rating: 5,
    quote:
      "What a great APP! I can now find new clients and workout partners for myself all from the touch of a button. I'm loving it!",
    role: "Personal Trainer",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="testimonials"
      className="py-20 sm:py-28 bg-[var(--color-surface)]/50 border-y border-[var(--color-border)] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
            <MessageSquare className="w-4 h-4" />
            <span>Community Validation</span>
          </div>

          <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
            BUILT FOR COMMITMENT.
            <br />
            <span className="text-[var(--color-accent)]">
              PROVEN BY MEMBERS.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
            Discover how GYMatch is redefining the training experience for
            athletes, coaches, and practitioners nationwide.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] hover:border-[var(--color-accent)]/50 transition-all duration-300 shadow-xl flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Quote Icon & Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[var(--color-accent)]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-[var(--color-accent)]/20 group-hover:text-[var(--color-accent)]/40 transition-colors" />
                </div>

                {/* Quote Text */}
                <p className="text-sm text-[var(--color-foreground)] leading-relaxed italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              {/* Author Footer */}
              <div className="flex items-center gap-4 pt-6 border-t border-[var(--color-border)] mt-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-[var(--color-accent)] flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bebas text-xl text-[var(--color-foreground)] tracking-wide leading-none">
                    {item.name}
                  </h3>
                  <div className="text-xs text-[var(--color-accent)] font-semibold mt-0.5">
                    {item.role}
                  </div>
                  <div className="text-[10px] text-[var(--color-text-muted)]">
                    {item.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Client Spotlight Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-bg-primary)] to-[var(--color-surface)] border border-[var(--color-accent)]/40 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--color-accent)] text-black text-[10px] font-extrabold uppercase tracking-widest">
                ★ THE PERFORMANCE SHIFT
              </div>
              <h3 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">
                50,000+ STRONG. NO COMPROMISE.
              </h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Stop training in isolation. Join the infrastructure built for
                those who treat performance as a discipline.
              </p>
            </div>

            <div className="pt-6 border-t border-[var(--color-border)] mt-6">
              <a
                href="https://apps.apple.com/pk/app/gymatch/id6780825578"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-black hover:bg-[var(--color-accent-hover)] transition-all block shadow-md"
              >
                Download GYMatch App
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
