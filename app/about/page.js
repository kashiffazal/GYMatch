import PageHero from "@/components/PageHero";
import { Sparkles } from "lucide-react";
import AboutStorySection from "./components/AboutStorySection";
import AboutVisionSection from "./components/AboutVisionSection";
import AboutMobileAppSection from "./components/AboutMobileAppSection";
import AboutGtvSection from "./components/AboutGtvSection";
import AboutNetworkSection from "./components/AboutNetworkSection";
import AboutCtaSection from "./components/AboutCtaSection";

export const metadata = {
  title: "About Us | GYMatch SaaS Mobile App",
  description:
    "Learn about GYMatch's mission, story by Entrepreneur Otis Jones, location-based GPS gym discovery engine, and global fitness community.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <PageHero
        badgeText="About GYMatch Platform"
        badgeIcon={<Sparkles className="w-4 h-4"/>}
        title={
          <>
            CONNECT, GET FIT AND <br />
            <span className="text-[var(--color-accent)]">HAVE FUN!</span>
          </>
        }
        description="GYMatch is your Global Connection to the World of Fitness. We bridge millions of people to the international fitness community, inviting members to benefit by partnering with like-minded fitness goers worldwide."
        bgImage="/assets/img/page-title-about.webp"
        showStoreButtons={true}
      />
      <AboutStorySection />
      <AboutVisionSection />
      <AboutMobileAppSection />
      <AboutGtvSection />
      <AboutNetworkSection />
      <AboutCtaSection />
    </div>
  );
}
