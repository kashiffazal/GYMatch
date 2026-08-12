import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageCta from "@/components/PageCta";
import { getBlogBySlug, BLOG_POSTS, getRelatedBlogs } from "@/lib/blogs";
import { Calendar, Clock, ArrowLeft, Share2, Tag, ChevronRight, BookOpen } from "lucide-react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);
  if (!post) return { title: "Blog Post Not Found | GYMatch" };
  return {
    title: `${post.title} | GYMatch Blog`,
    description: post.excerpt,
  };
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function SingleBlogPage({ params }) {
  const resolvedParams = await params;
  const post = getBlogBySlug(resolvedParams.slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = getRelatedBlogs(post.slug, post.category, 3);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-bg-primary)]">
      
      {/* 1. DISTINCT CUSTOM SINGLE BLOG HERO HEADER */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-b from-[var(--color-surface)] via-[var(--color-bg-primary)] to-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
        
        {/* Subtle Ambient Radial Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6 text-center">
          
          {/* Breadcrumb Navigation */}
          <nav className="inline-flex items-center gap-2 text-xs font-semibold text-[var(--color-text-muted)] bg-[var(--color-surface)] border border-[var(--color-border)] px-4 py-1.5 rounded-full shadow-sm">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <Link href="/blog" className="hover:text-[var(--color-accent)] transition-colors">Blog</Link>
            <ChevronRight className="w-3.5 h-3.5 text-[var(--color-accent)]" />
            <span className="text-[var(--color-accent)] font-bold truncate max-w-[180px] sm:max-w-xs">{post.category}</span>
          </nav>

          {/* Article Title */}
          <h1 className="font-bebas text-4xl sm:text-6xl lg:text-7xl tracking-tight leading-[0.95] text-[var(--color-foreground)] max-w-4xl mx-auto">
            {post.title}
          </h1>

          {/* Metadata Pill Bar: Category, Date, ReadTime & Author */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-[var(--color-text-muted)] pt-2">
            <span className="px-3 py-1 rounded-full bg-[var(--color-accent)] text-black font-extrabold text-[10px] uppercase tracking-wider">
              {post.category}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Calendar className="w-4 h-4 text-[var(--color-accent)]" />
              {post.date}
            </span>
            <span className="flex items-center gap-1.5 font-medium">
              <Clock className="w-4 h-4 text-[var(--color-accent)]" />
              {post.readTime}
            </span>
            <div className="flex items-center gap-2 border-l border-[var(--color-border)] pl-6">
              <div className="relative w-6 h-6 rounded-full overflow-hidden border border-[var(--color-accent)]/40">
                <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
              </div>
              <span className="font-bold text-[var(--color-foreground)]">{post.author.name}</span>
            </div>
          </div>

          {/* Featured Hero Banner Image Container */}
          <div className="relative w-full h-[320px] sm:h-[450px] lg:h-[500px] rounded-3xl overflow-hidden border border-[var(--color-border)] shadow-2xl mt-8">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-bg-primary)] via-transparent to-transparent opacity-80"></div>
          </div>

        </div>
      </section>

      {/* 2. MAIN BODY 2-COLUMN LAYOUT */}
      <section className="py-16 sm:py-24 border-b border-[var(--color-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* LEFT COLUMN: Main Blog Content (lg:col-span-8) */}
            <main className="lg:col-span-8 space-y-12">
              
              {/* Key Takeaways Callout Box */}
              <div className="p-6 sm:p-8 rounded-3xl bg-[var(--color-surface)] border-l-4 border-l-[var(--color-accent)] border border-[var(--color-border)] shadow-xl space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Key Article Summary</span>
                <p className="text-sm sm:text-base text-[var(--color-foreground)] font-semibold leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              {/* Rich HTML Content */}
              <div
                className="prose prose-invert max-w-none text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed space-y-6
                  [&_h2]:font-bebas [&_h2]:text-3xl [&_h2]:sm:text-4xl [&_h2]:text-[var(--color-foreground)] [&_h2]:tracking-wide [&_h2]:pt-4 [&_h2]:border-b [&_h2]:border-[var(--color-border)] [&_h2]:pb-2
                  [&_h3]:font-bebas [&_h3]:text-2xl [&_h3]:text-[var(--color-accent)] [&_h3]:tracking-wide
                  [&_blockquote]:border-l-4 [&_blockquote]:border-[var(--color-accent)] [&_blockquote]:pl-6 [&_blockquote]:py-2 [&_blockquote]:italic [&_blockquote]:text-[var(--color-foreground)] [&_blockquote]:bg-[var(--color-surface)] [&_blockquote]:rounded-r-2xl
                  [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_ul]:text-sm
                  [&_strong]:text-[var(--color-foreground)]"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Tags Cloud Bar */}
              <div className="pt-8 border-t border-[var(--color-border)] flex flex-wrap items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)] mr-2 flex items-center gap-1.5">
                  <Tag className="w-4 h-4 text-[var(--color-accent)]" /> Tags:
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-surface)] border border-[var(--color-border)] text-[var(--color-text-muted)]"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Author Bio Box */}
              <div className="p-8 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
                <div className="relative w-20 h-20 rounded-2xl overflow-hidden border-2 border-[var(--color-accent)] shrink-0 shadow-lg">
                  <Image src={post.author.avatar} alt={post.author.name} fill className="object-cover" />
                </div>
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Article Contributor</span>
                  <h4 className="font-bebas text-2xl text-[var(--color-foreground)]">{post.author.name}</h4>
                  <p className="text-xs font-medium text-[var(--color-accent)]">{post.author.role}</p>
                  <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                    Dedicated to providing gym-goers and fitness enthusiasts with real-time location insights, safety protocols, and workout partner guides.
                  </p>
                </div>
              </div>

              {/* Back to Blog Button */}
              <div className="pt-4">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[var(--color-surface)] border border-[var(--color-border)] text-xs font-extrabold uppercase tracking-wider text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] transition-all cursor-pointer shadow-md"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to Blog Listing</span>
                </Link>
              </div>

            </main>

            {/* RIGHT COLUMN: Sticky Sidebar Widget (lg:col-span-4) */}
            <aside className="lg:col-span-4 sticky top-28 space-y-8">
              
              {/* Recent Articles Widget */}
              <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-6">
                <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                  <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-[var(--color-accent)]" />
                    RECENT ARTICLES
                  </h3>
                </div>

                <div className="space-y-4">
                  {relatedPosts.map((rel) => (
                    <Link
                      key={rel.id}
                      href={`/blog/${rel.slug}`}
                      className="group flex gap-4 items-center p-2 rounded-2xl hover:bg-[var(--color-bg-primary)] transition-all border border-transparent hover:border-[var(--color-border)]"
                    >
                      <div className="relative w-20 h-16 rounded-xl overflow-hidden shrink-0 bg-[var(--color-bg-primary)]">
                        <Image src={rel.coverImage} alt={rel.title} fill className="object-cover group-hover:scale-105 transition-transform" />
                      </div>
                      <div className="space-y-1 overflow-hidden">
                        <div className="text-[10px] font-bold uppercase text-[var(--color-accent)] tracking-wider truncate">{rel.category}</div>
                        <h4 className="font-bebas text-lg text-[var(--color-foreground)] group-hover:text-[var(--color-accent)] transition-colors leading-tight line-clamp-2">
                          {rel.title}
                        </h4>
                        <div className="text-[10px] text-[var(--color-text-muted)]">{rel.date}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Social Share Widget */}
              <div className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 text-center">
                <h3 className="font-bebas text-xl text-[var(--color-foreground)] tracking-wide flex items-center justify-center gap-2">
                  <Share2 className="w-4 h-4 text-[var(--color-accent)]" />
                  SHARE THIS ARTICLE
                </h3>
                <div className="flex items-center justify-center gap-3 pt-1">
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://gymatch.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all shadow-md"
                    aria-label="Share on Facebook"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=https://gymatch.com/blog/${post.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all shadow-md"
                    aria-label="Share on Twitter"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                  <a
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=https://gymatch.com/blog/${post.slug}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[var(--color-bg-primary)] border border-[var(--color-border)] flex items-center justify-center text-[var(--color-foreground)] hover:text-[var(--color-accent)] hover:border-[var(--color-accent)] transition-all shadow-md"
                    aria-label="Share on LinkedIn"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Newsletter Signup Widget */}
              <div className="p-8 rounded-3xl bg-gradient-to-br from-[var(--color-surface)] via-[var(--color-surface)] to-[var(--color-accent)]/10 border border-[var(--color-border)] shadow-xl space-y-4">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-accent)]">Weekly Dispatch</span>
                <h3 className="font-bebas text-2xl text-[var(--color-foreground)] leading-tight">ENJOYED THIS READ?</h3>
                <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                  Subscribe to get the latest fitness technology insights and spotter guides delivered weekly.
                </p>
                <form action="#" className="space-y-3">
                  <input
                    type="email"
                    required
                    placeholder="Your email address"
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-xs text-[var(--color-foreground)] focus:outline-none focus:border-[var(--color-accent)]"
                  />
                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[var(--color-accent)] text-black font-extrabold text-xs uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all cursor-pointer shadow-lg"
                  >
                    Get Updates
                  </button>
                </form>
              </div>

            </aside>

          </div>

        </div>
      </section>

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
