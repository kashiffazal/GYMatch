import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import BlogListingGrid from "./components/BlogListingGrid";
import { BookOpen } from "lucide-react";

export const metadata = {
  title: "Blog & News | GYMatch SaaS App",
  description: "Discover the latest fitness guides, workout partner advice, mobile app updates, and community spotter stories.",
};

export default function BlogListingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero Header */}
      <PageHero
        badgeText="GYMatch Blog & News"
        badgeIcon={<BookOpen className="w-4 h-4" />}
        title={
          <>
            INSIGHTS, TIPS & <br />
            <span className="text-[var(--color-accent)]">SPOTTER STORIES</span>
          </>
        }
        description="Discover the latest fitness guides, workout partner advice, mobile app updates, and community spotlights."
        bgImage="/assets/img/fitness-sport-training-gym-success-and-lifestyle-JKSDH2B.jpg"
        showStoreButtons={false}
      />

      {/* Main Content Section */}
      <BlogListingGrid />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
