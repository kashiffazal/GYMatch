import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import TermsContentSection from "./components/TermsContentSection";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms & Conditions | GYMatch SaaS App",
  description: "Official legal terms and conditions governing the use of GYMatch app, website sub-domains, and fitness spotter services.",
};

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="Terms of Service"
        badgeIcon={<FileText className="w-4 h-4" />}
        title={
          <>
            TERMS & <br />
            <span className="text-[var(--color-accent)]">CONDITIONS</span>
          </>
        }
        description="This document constitutes a legally binding agreement governing your access to and use of GYMatch website, mobile applications, and fitness spotter services."
        bgImage="/assets/img/strong-male-athlete-running-on-modern-treadmill.jpg"
        showStoreButtons={false}
      />

      {/* Terms Content Section */}
      <TermsContentSection />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
