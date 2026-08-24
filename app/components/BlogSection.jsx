"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Newspaper, Calendar, Clock, ArrowRight } from "lucide-react";
import { getFeaturedOrRecentBlogs } from "@/lib/blogs";
import styles from "./BlogSection.module.css";

export default function BlogSection() {
  const blogs = getFeaturedOrRecentBlogs(3);

  return (
    <section
      id="blog"
      className="py-20 sm:py-28 relative overflow-hidden bg-[var(--color-bg-primary)] border-t border-[var(--color-border)]"
    >
      {/* Animated Top-Center Breathing Ambient Glow Separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[var(--color-accent)]/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with increased spacing between badge and title */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-16">
          <div className="text-center sm:text-left space-y-4">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-bold uppercase tracking-widest text-[var(--color-accent)] shadow-md">
              <Newspaper className="w-4 h-4" />
              <span>Fitness Articles & Tips</span>
            </div>
            <h2 className="font-bebas text-4xl sm:text-6xl text-[var(--color-foreground)] tracking-wide">
              LATEST FROM{" "}
              <span className="text-[var(--color-accent)]">OUR BLOG</span>
            </h2>
          </div>

          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all shadow-md cursor-pointer"
          >
            <span>View All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Blog Cards Grid dynamically loaded from lib/blogs.js */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((post, index) => (
            <Link
              key={post.id}
              href={`/blog/${post.slug}`}
              className="block h-full group"
            >
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className={`${styles.blogCard} h-full hover:border-[var(--color-accent)]/50 transition-all`}
              >
                {/* Card Image */}
                <div className={styles.imageWrapper}>
                  <Image
                    src={post.coverImage}
                    alt={post.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
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
                        <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />{" "}
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />{" "}
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide leading-tight group-hover:text-[var(--color-accent)] transition-colors line-clamp-2">
                      {post.title}
                    </h3>

                    <p className="text-xs text-[var(--color-text-muted)] leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[var(--color-border)] flex items-center justify-between">
                    <span className="text-xs font-bold text-[var(--color-accent)] uppercase tracking-wider group-hover:translate-x-1 transition-transform flex items-center gap-1">
                      Read Article <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
