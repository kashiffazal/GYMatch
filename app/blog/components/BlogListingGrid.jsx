"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { BLOG_POSTS, getCategories, getAllTags } from "@/lib/blogs";
import { Search, Calendar, Clock, ArrowRight, ChevronLeft, ChevronRight, Tag, Mail, Send, RotateCcw } from "lucide-react";

export default function BlogListingGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const categories = getCategories();
  const tags = getAllTags();

  // Filter posts
  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTag = !selectedTag || post.tags.includes(selectedTag);
    return matchesCategory && matchesSearch && matchesTag;
  });

  // Calculate pagination
  const totalPages = Math.ceil(filteredPosts.length / itemsPerPage) || 1;
  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleCategoryChange = (cat) => {
    setSelectedCategory(cat);
    setCurrentPage(1);
  };

  const handleTagChange = (t) => {
    setSelectedTag(selectedTag === t ? null : t);
    setCurrentPage(1);
  };

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Main Blog Cards Column (lg:col-span-8) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* Category Filter Tabs */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap items-center gap-2 pb-4 border-b border-[var(--color-border)]"
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-5 py-2 rounded-full text-xs font-extrabold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-lg shadow-[var(--color-accent)]/20"
                      : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-accent)]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </motion.div>

            {/* Blog Posts Grid */}
            {paginatedPosts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {paginatedPosts.map((post, idx) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group block h-full focus:outline-none"
                    >
                      <article className="h-full rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] overflow-hidden shadow-xl hover:border-[var(--color-accent)]/50 transition-all duration-300 flex flex-col justify-between group-hover:-translate-y-1.5">
                        
                        {/* Cover Image Header */}
                        <div>
                          <div className="relative w-full h-52 overflow-hidden bg-[var(--color-bg-primary)]">
                            <Image
                              src={post.coverImage}
                              alt={post.title}
                              fill
                              className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="absolute top-4 left-4 z-10">
                              <span className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-md">
                                {post.category}
                              </span>
                            </div>
                          </div>

                          {/* Card Content */}
                          <div className="p-6 space-y-3">
                            <div className="flex items-center gap-4 text-xs text-[var(--color-text-muted)] font-medium">
                              <span className="flex items-center gap-1.5">
                                <Calendar className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                                {post.date}
                              </span>
                              <span className="flex items-center gap-1.5">
                                <Clock className="w-3.5 h-3.5 text-[var(--color-accent)]" />
                                {post.readTime}
                              </span>
                            </div>

                            <h3 className="font-bebas text-2xl text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-tight">
                              {post.title}
                            </h3>

                            <p className="text-xs text-[var(--color-text-muted)] line-clamp-3 leading-relaxed">
                              {post.excerpt}
                            </p>
                          </div>
                        </div>

                        {/* Card Footer: Author + Read More */}
                        <div className="px-6 py-4 border-t border-[var(--color-border)]/50 mt-4 flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="relative w-7 h-7 rounded-full overflow-hidden border border-[var(--color-accent)]/30 shrink-0">
                              <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                            </div>
                            <span className="text-xs font-bold text-[var(--color-foreground)]">{post.author.name}</span>
                          </div>
                          
                          <span className="inline-flex items-center gap-1 text-xs font-bold text-[var(--color-accent)] group-hover:translate-x-1 transition-transform shrink-0">
                            READ MORE <ArrowRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                      </article>
                    </Link>
                  </motion.div>
                ))}
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] text-center space-y-4"
              >
                <p className="text-base text-[var(--color-text-muted)]">No blog posts match your current search or category filter.</p>
                <button
                  onClick={() => {
                    setSelectedCategory("All");
                    setSearchQuery("");
                    setSelectedTag(null);
                    setCurrentPage(1);
                  }}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-extrabold text-xs uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all cursor-pointer shadow-lg"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Reset All Filters</span>
                </button>
              </motion.div>
            )}

            {/* Functional Pagination Bar */}
            {totalPages > 1 && (
              <div className="pt-8 flex items-center justify-center gap-2 border-t border-[var(--color-border)]">
                <button
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    onClick={() => setCurrentPage(pageNum)}
                    className={`w-10 h-10 rounded-xl text-xs font-extrabold transition-all ${
                      currentPage === pageNum
                        ? "bg-[var(--color-accent)] text-[var(--color-accent-text)] shadow-lg shadow-[var(--color-accent)]/20 scale-105"
                        : "bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)]"
                    }`}
                  >
                    {pageNum}
                  </button>
                ))}

                <button
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="p-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] disabled:opacity-30 disabled:pointer-events-none transition-all"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}

          </div>

          {/* Sidebar Column (lg:col-span-4) */}
          <div className="lg:col-span-4 space-y-8">
            
            {/* Search Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4"
            >
              <h3 className="font-bebas text-xl text-[var(--color-foreground)] tracking-wide">
                SEARCH ARTICLES
              </h3>
              <div className="relative">
                <Search className="w-4 h-4 text-[var(--color-text-muted)] absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search keywords..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setCurrentPage(1);
                  }}
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                />
              </div>
            </motion.div>

            {/* Tags Cloud Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4"
            >
              <h3 className="font-bebas text-xl text-[var(--color-foreground)] tracking-wide">
                POPULAR TAGS
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <button
                    key={tag}
                    onClick={() => handleTagChange(tag)}
                    className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                      selectedTag === tag
                        ? "bg-[var(--color-accent)] text-[var(--color-accent-text)]"
                        : "bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-[var(--color-text-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-foreground)]"
                    }`}
                  >
                    <Tag className="w-3 h-3" />
                    <span>{tag}</span>
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Newsletter Subscription Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface)] to-[var(--color-accent)]/10 border border-[var(--color-border)] shadow-xl space-y-4"
            >
              <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Weekly Dispatch</span>
              <h3 className="font-bebas text-2xl text-[var(--color-foreground)] leading-tight">JOIN THE GYMATCH NEWSLETTER</h3>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Get spotter tips, gym discovery guides, and feature drops delivered straight to your inbox once a week.
              </p>
              <form onSubmit={(e) => { e.preventDefault(); alert("Thank you for subscribing to GYMatch Newsletter!"); }} className="space-y-3">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)]"
                />
                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-[var(--color-accent)] text-[var(--color-accent-text)] font-extrabold text-xs uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all cursor-pointer shadow-lg inline-flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Subscribe Now</span>
                </button>
              </form>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
