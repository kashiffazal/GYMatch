"use client";

import { motion } from "framer-motion";
import PrintButton from "@/components/PrintButton";
import {
  ShieldCheck,
  Database,
  Eye,
  Share2,
  Cookie,
  UserCheck,
  Lock,
  Bell,
} from "lucide-react";

export const PRIVACY_SECTIONS = [
  { id: "overview", title: "1. Overview & Scope", icon: ShieldCheck },
  { id: "information-collection", title: "2. Information We Collect", icon: Database },
  { id: "use-of-information", title: "3. How We Use Data", icon: Eye },
  { id: "data-sharing", title: "4. Third-Party Sharing", icon: Share2 },
  { id: "cookies-tracking", title: "5. Cookies & Tracking", icon: Cookie },
  { id: "user-rights", title: "6. Your Privacy Rights", icon: UserCheck },
  { id: "data-protection", title: "7. Security & Retention", icon: Lock },
  { id: "updates-contact", title: "8. Policy Updates", icon: Bell },
];

export default function PrivacyContentSection() {
  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Document Header & Quick Actions Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 rounded-2xl bg-[var(--color-surface)] border border-[var(--color-border)] mb-12 shadow-lg"
        >
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20 text-[10px] font-bold uppercase tracking-widest">
                Official Policy v2.0
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">Last Updated: June 14, 2026</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-foreground)] font-semibold">
              Governing GYMatch Mobile App & Web Platform Services Worldwide
            </p>
          </div>
          
          <PrintButton label="Print Policy" />
        </motion.div>

        {/* 2-Column Grid Layout: Sticky TOC + Clause Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Sticky Table-of-Contents Navigation (lg:col-span-4) */}
          <aside className="lg:col-span-4 lg:sticky lg:top-28 space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-6 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between border-b border-[var(--color-border)] pb-4">
                <h3 className="font-bebas text-2xl text-[var(--color-foreground)] tracking-wide">
                  DOCUMENT SECTIONS
                </h3>
                <span className="text-[10px] font-bold uppercase text-[var(--color-accent)]">Quick Jump</span>
              </div>
              <nav className="flex flex-col gap-1.5 text-xs font-semibold">
                {PRIVACY_SECTIONS.map((section) => {
                  const Icon = section.icon;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-[var(--color-text-muted)] hover:text-[var(--color-accent)] hover:bg-[var(--color-bg-primary)] border border-transparent hover:border-[var(--color-border)] transition-all"
                    >
                      <Icon className="w-4 h-4 text-[var(--color-accent)] shrink-0" />
                      <span className="truncate">{section.title}</span>
                    </a>
                  );
                })}
              </nav>
            </motion.div>

            {/* Data Officer Support Contact Box */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-accent)] tracking-wider">
                <Lock className="w-4 h-4" />
                <span>Data Protection Support</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Have questions about your personal data or wish to submit a data deletion request?
              </p>
              <a
                href="mailto:privacy@gymatch.com"
                className="inline-block text-xs font-bold text-[var(--color-accent)] hover:underline"
              >
                privacy@gymatch.com →
              </a>
            </motion.div>
          </aside>

          {/* Clause Content Cards with scroll-mt-28 (lg:col-span-8) */}
          <main className="lg:col-span-8 space-y-8 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            
            {/* Section 1 */}
            <motion.section
              id="overview"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">1. OVERVIEW & SCOPE</h2>
              </div>
              <p>
                At GYMatch, we take your privacy seriously. This Privacy Policy details how GYMatch Inc. (&ldquo;GYMatch&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, processes, stores, and safeguards personal information when you utilize our website (http://www.GYMatch.com), sub-domains, and associated mobile applications available on iOS and Android.
              </p>
              <p>
                By creating a GYMatch account or using our real-time gym discovery and workout partner matching features, you agree to the collection and use of information in accordance with this policy.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="information-collection"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Database className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">2. INFORMATION WE COLLECT</h2>
              </div>
              <p>
                We collect information to provide better services, enable real-time spotter connections, and verify registered fitness profiles. Information collected includes:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li><strong className="text-[var(--color-foreground)]">Account Registration Data:</strong> Full legal name, email address, chosen username, encrypted password, and age verification (18+).</li>
                <li><strong className="text-[var(--color-foreground)]">Fitness Profile Information:</strong> Workout goals, preferred gym facilities, fitness discipline, avatar photo, and bio details.</li>
                <li><strong className="text-[var(--color-foreground)]">Location Data:</strong> Precise GPS coordinates (when enabled) to display nearby workout partners and fitness centers.</li>
                <li><strong className="text-[var(--color-foreground)]">Device & Log Data:</strong> IP address, device type, operating system version, and mobile app usage metrics.</li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="use-of-information"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Eye className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">3. HOW WE USE YOUR DATA</h2>
              </div>
              <p>
                Your information is processed for core platform operations and personalized user experiences:
              </p>
              <ul className="list-disc pl-5 space-y-2 text-xs">
                <li>To display location-based gym recommendations and spotter discovery near your current area.</li>
                <li>To process subscription features, Spotlight promotions, and user rewards points.</li>
                <li>To prevent fraudulent accounts, monitor abusive behavior, and ensure community safety.</li>
                <li>To communicate service updates, security alerts, and customer support notifications.</li>
              </ul>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="data-sharing"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Share2 className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">4. THIRD-PARTY SHARING</h2>
              </div>
              <p>
                GYMatch does not sell or rent your personal contact information to third-party advertisers. We only share data under the following circumstances:
              </p>
              <p className="text-xs">
                • <strong className="text-[var(--color-foreground)]">Service Providers:</strong> Trusted third-party vendors for payment processing (PayPal, credit card gateways), push notifications, and hosting infrastructure.
                <br />
                • <strong className="text-[var(--color-foreground)]">Legal Compliance:</strong> When required by court order, law enforcement investigation, or to enforce our Terms & Conditions.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="cookies-tracking"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Cookie className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">5. COOKIES & TRACKING TECHNOLOGIES</h2>
              </div>
              <p>
                Our web application uses essential session cookies and local storage to keep you authenticated, remember your theme preference (Dark/Light mode), and analyze aggregated web traffic patterns. You can manage cookie preferences directly in your web browser.
              </p>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="user-rights"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <UserCheck className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">6. YOUR PRIVACY RIGHTS</h2>
              </div>
              <p>
                Depending on your jurisdiction (including GDPR and CCPA regulations), you possess the right to access, export, correct, or permanently delete your GYMatch user profile and associated history at any time through account settings or by emailing <a href="mailto:privacy@gymatch.com" className="text-[var(--color-accent)] underline">privacy@gymatch.com</a>.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="data-protection"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Lock className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">7. SECURITY & RETENTION</h2>
              </div>
              <p>
                We implement high-grade SSL/TLS encryption, secure server architecture, and access controls to prevent unauthorized access. User passwords are stored using salted cryptographic hash functions. Data is retained as long as your account remains active or as required by financial auditing laws.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="updates-contact"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Bell className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">8. POLICY UPDATES & CONTACT</h2>
              </div>
              <p>
                We may periodically revise this Privacy Policy. Continued use of GYMatch after revisions are posted constitutes acceptance of the updated terms. For inquiries regarding this document, please contact us at <a href="mailto:contact@gymatch.com" className="text-[var(--color-accent)] underline">contact@gymatch.com</a> or by physical mail to GYMatch Inc., Los Angeles, CA.
              </p>
            </motion.section>

          </main>

        </div>

      </div>
    </section>
  );
}
