"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import styles from "./BlogSection.module.css";

const BLOG_POSTS = [
  {
    id: 1,
    title: "HOW TO FIND THE PERFECT GYM SPOTTER FOR HEAVY BENCH & SQUATS",
    category: "Spotter Tips",
    date: "August 4, 2026",
    readTime: "4 min read",
    image: "/assets/img/close-up-of-muscular-young-man-lifting-weights-in-NATDE2X-1.jpg",
    snippet:
      "Lifting heavy weights alone limits your personal records. Discover how GYMatch connects you with verified spotters currently training at your gym.",
  },
  {
    id: 2,
    title: "THE ULTIMATE GYM DISCOVERY GUIDE FOR COMBAT & MMA TRAINEES",
    category: "Fight Training",
    date: "July 28, 2026",
    readTime: "5 min read",
    image: "/assets/img/two-women-boxing-in-the-ring-box-training.jpg",
    snippet:
      "Finding combat academies, boxing rings, and sparring partners in your exact weight class is now effortless with location-based matching.",
  },
  {
    id: 3,
    title: "HOW FITNESS NOMADS TRAIN WORLDWIDE WITHOUT SUBSCRIPTION BARRIERS",
    category: "Travel Fitness",
    date: "July 20, 2026",
    readTime: "3 min read",
    image: "/assets/img/fit-group-of-people-exercising-on-a-treadmill-in-gym-1.jpg",
    snippet:
      "Whether traveling through London, Miami, or Tokyo—use real-time GPS location detection to find open gyms and local workout partners instantly.",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-bg-primary)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center sm:text-left space-y-2">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">
              <Newspaper className="w-4 h-4" />
              <span>Fitness Articles & Tips</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
              LATEST FROM <span className="text-[var(--color-accent)]">OUR BLOG</span>
            </h2>
          </div>

          <a
            href="#blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-md"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={styles.blogCard}
            >
              {/* Card Image */}
              <div className={styles.imageWrapper}>
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute top-4 left-4 bg-[var(--color-accent)] text-black text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full shadow-lg">
                  {post.category}
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-[11px] text-[var(--color-text-muted)] font-medium">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" /> {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide leading-tight group-hover:text-[var(--color-accent)] transition-colors">
                    {post.title}
                  </h3>

                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                  <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider group-hover:underline">
                    Read Article →
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

      </div>
    </section>
  );
}
