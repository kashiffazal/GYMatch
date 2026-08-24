import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import TermsContentSection from "./components/TermsContentSection";
import { FileText } from "lucide-react";

export const metadata = {
  title: "Terms of Service | GYMatch Legal Protocols",
  description:
    "This document constitutes a legally binding agreement governing your access to and use of the GYMatch ecosystem, including our website, mobile applications, and partner synchronization services.",
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
            LEGAL AGREEMENT &{" "}
            <span className="text-[var(--color-accent)]">
              GOVERNING PROTOCOLS
            </span>
          </>
        }
        description="This document constitutes a legally binding agreement governing your access to and use of the GYMatch ecosystem, including our website, mobile applications, and partner synchronization services."
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
