import PageHero from "@/components/PageHero";
import PageCta from "@/components/PageCta";
import ContactFormSection from "./components/ContactFormSection";
import { MessageSquare } from "lucide-react";

export const metadata = {
  title: "Contact Us | GYMatch SaaS App",
  description:
    "Get in touch with the GYMatch team for support, partnership inquiries, or general questions about our fitness matching app.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Page Hero */}
      <PageHero
        badgeText="Get In Touch"
        badgeIcon={<MessageSquare className="w-4 h-4" />}
        title={
          <>
            CONTACT <br />
            <span className="text-[var(--color-accent)]">GYMATCH TEAM</span>
          </>
        }
        description="Have a question, feedback, or business inquiry? We'd love to hear from you. Send us a message and our support team will respond promptly."
        bgImage="/assets/img/healthy-young-athletes-friends-doing-exercises-at-B32VH56.webp"
        showStoreButtons={false}
      />

      {/* Contact Form Section */}
      <ContactFormSection />

      {/* Pre-Footer CTA */}
      <PageCta />
    </div>
  );
}
