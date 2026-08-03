import HeroSection from "./components/HeroSection";
import WhatIsItSection from "./components/WhatIsItSection";
import AdvantageSection from "./components/AdvantageSection";
import WhyItExistsSection from "./components/WhyItExistsSection";
import HowItWorksSection from "./components/HowItWorksSection";
import ForWhomSection from "./components/ForWhomSection";
import VideoSection from "./components/VideoSection";
import AppFeaturesShowcase from "./components/AppFeaturesShowcase";
import AppScreensGallery from "./components/AppScreensGallery";
import BlogSection from "./components/BlogSection";
import TestimonialsSection from "./components/TestimonialsSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-0">
      <HeroSection />
      <WhatIsItSection />
      <AdvantageSection />
      <WhyItExistsSection />
      <HowItWorksSection />
      <ForWhomSection />
      <VideoSection />
      <AppFeaturesShowcase />
      <AppScreensGallery />
      <BlogSection />
      <TestimonialsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}

