"use client";

import { motion } from "framer-motion";
import PrintButton from "@/components/PrintButton";
import {
  FileText,
  ShieldAlert,
  CreditCard,
  Scale,
  Lock,
  RefreshCw,
  AlertTriangle,
  HelpCircle,
} from "lucide-react";

export const TERMS_SECTIONS = [
  { id: "legal-agreement", title: "1. Legal Agreement & Amendments", icon: FileText },
  { id: "definitions", title: "2. Definitions", icon: Scale },
  { id: "registration", title: "3. Account Integrity & Registration", icon: RefreshCw },
  { id: "warranty-disclaimer", title: "4. Warranty & Liability", icon: ShieldAlert },
  { id: "spotlight-refunds", title: "5. Spotlight Purchase Policy", icon: CreditCard },
  { id: "payments-invoices", title: "6. Payments & Billing", icon: CreditCard },
  { id: "fraud-monitoring", title: "7. Fraud Monitoring & Safety", icon: AlertTriangle },
  { id: "governing-law", title: "8. Governing Law", icon: Lock },
];

export default function TermsContentSection() {
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
                Active Document
              </span>
              <span className="text-xs text-[var(--color-text-muted)] font-medium">Last Updated: May 2024</span>
            </div>
            <p className="text-xs sm:text-sm text-[var(--color-foreground)] font-semibold">
              Governing All Website Sub-Domains & Mobile Applications
            </p>
          </div>
          
          <PrintButton label="Print Terms" />
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
                {TERMS_SECTIONS.map((section) => {
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

            {/* Legal Support Desk */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-6 rounded-3xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 space-y-3"
            >
              <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-accent)] tracking-wider">
                <HelpCircle className="w-4 h-4" />
                <span>Legal Support Desk</span>
              </div>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                Questions regarding invoice processing, spotlight purchases, or member account policies?
              </p>
              <a
                href="mailto:contact@gymatch.com"
                className="inline-block text-xs font-bold text-[var(--color-accent)] hover:underline"
              >
                contact@gymatch.com →
              </a>
            </motion.div>
          </aside>

          {/* Clause Content Cards with scroll-mt-28 (lg:col-span-8) */}
          <main className="lg:col-span-8 space-y-8 text-xs sm:text-sm text-[var(--color-text-muted)] leading-relaxed">
            
            {/* Section 1 */}
            <motion.section
              id="legal-agreement"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">1. LEGAL AGREEMENT & AMENDMENTS</h2>
              </div>
              <p>
                These Terms of Service, in conjunction with our Privacy Policy and posted operational guidelines (&ldquo;Legal Terms&rdquo;), constitute the entire agreement between you and Gymatch. By accessing or utilizing our platform, you agree to comply with and be bound by these Legal Terms. If you do not accept these terms, you must immediately discontinue use of the Gymatch ecosystem. We reserve the right to update these terms to reflect the evolution of our platform.
              </p>
            </motion.section>

            {/* Section 2 */}
            <motion.section
              id="definitions"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Scale className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">2. DEFINITIONS</h2>
              </div>
              <ul className="space-y-2.5 pl-2">
                <li>
                  <strong className="text-[var(--color-foreground)]">&ldquo;We,&rdquo; &ldquo;Us,&rdquo; &ldquo;Our&rdquo;:</strong>{" "}Refers to Gymatch.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">&ldquo;Visitor&rdquo;:</strong>{" "}Any individual browsing our platform without registration.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">&ldquo;Member&rdquo;:</strong>{" "}Any individual who has successfully completed registration to access our synchronization and discovery tools.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">&ldquo;Service&rdquo;:</strong>{" "}The collective functionality, partner discovery, and facility mapping tools provided via our mobile applications and web interfaces.
                </li>
                <li>
                  <strong className="text-[var(--color-foreground)]">&ldquo;Content&rdquo;:</strong>{" "}All data, text, graphics, audio, and visual assets provided through our platform.
                </li>
              </ul>
            </motion.section>

            {/* Section 3 */}
            <motion.section
              id="registration"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">3. ACCOUNT INTEGRITY & REGISTRATION</h2>
              </div>
              <p>
                To access the Gymatch ecosystem, you must provide accurate registration data, including your legal name, a verified email address, and confirmation that you are 18 years of age or older. You are solely responsible for maintaining the security of your credentials and for all activity occurring under your account. The transmission of malicious code, viruses, or any disruptive software is strictly prohibited and will result in immediate account termination.
              </p>
            </motion.section>

            {/* Section 4 */}
            <motion.section
              id="warranty-disclaimer"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">4. WARRANTY DISCLAIMER & LIMITATION OF LIABILITY</h2>
              </div>
              <p>
                The Gymatch platform is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. We do not provide express or implied warranties regarding uninterrupted operation, merchantability, or fitness for a specific purpose. Gymatch shall not be liable for any indirect, incidental, or consequential damages, including loss of revenue, data, or profits, arising from your use of the platform.
              </p>
            </motion.section>

            {/* Section 5 */}
            <motion.section
              id="spotlight-refunds"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">5. SPOTLIGHT PURCHASE POLICY (NO REFUNDS)</h2>
              </div>
              <div className="p-4 rounded-2xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-foreground)] font-semibold text-xs">
                By purchasing or utilizing the Gymatch &ldquo;Spotlight&rdquo; performance feature, you acknowledge and agree that all transactions are final. We maintain a no-refund policy for Spotlight placements under any circumstances.
              </div>
            </motion.section>

            {/* Section 6 */}
            <motion.section
              id="payments-invoices"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <CreditCard className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">6. PAYMENTS & BILLING</h2>
              </div>
              <p>
                Gymatch reserves the right to specify payment terms for premium features. For business-to-business transactions or specific Spotlight service agreements, payments must be settled via authorized methods (Credit Card, PayPal, or Wire Transfer). Overdue balances on invoiced services are subject to a late-charge penalty of 1% per month.
              </p>
            </motion.section>

            {/* Section 7 */}
            <motion.section
              id="fraud-monitoring"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-28 p-8 sm:p-10 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl space-y-4 hover:border-[var(--color-accent)]/30 transition-all"
            >
              <div className="flex items-center gap-3 border-b border-[var(--color-border)] pb-4">
                <div className="w-10 h-10 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">7. FRAUD MONITORING & SAFETY</h2>
              </div>
              <p>
                Gymatch actively monitors for fraudulent activity, including the creation of fake profiles or impersonation. Any breach of these protocols will result in the immediate removal of the offending account. We reserve the right to pursue all available legal remedies against parties engaging in fraudulent behavior, and offending users shall be responsible for all costs and legal fees incurred by Gymatch.
              </p>
            </motion.section>

            {/* Section 8 */}
            <motion.section
              id="governing-law"
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
                <h2 className="font-bebas text-3xl text-[var(--color-foreground)] tracking-wide">8. GOVERNING LAW</h2>
              </div>
              <p>
                These Legal Terms shall be performed in and governed by the laws of the State of California, United States, without regard to conflict of law principles. Any legal action initiated by a user must be filed within one (1) year of the date the cause of action arose; failure to do so will result in the claim being permanently barred.
              </p>
            </motion.section>

          </main>

        </div>

      </div>
    </section>
  );
}
