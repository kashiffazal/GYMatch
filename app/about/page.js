import AboutHeroSection from "./components/AboutHeroSection";
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
      <AboutHeroSection />
      <AboutStorySection />
      <AboutVisionSection />
      <AboutMobileAppSection />
      <AboutGtvSection />
      <AboutNetworkSection />
      <AboutCtaSection />
    </div>
  );
}
