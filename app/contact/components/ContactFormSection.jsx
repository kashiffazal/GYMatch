"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Clock, Send, CheckCircle2, ShieldCheck } from "lucide-react";

export default function ContactFormSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    captchaInput: "",
  });
  const [captchaCode] = useState("f34d3");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.captchaInput.toLowerCase() !== captchaCode.toLowerCase()) {
      alert("Invalid security code. Please enter the correct code shown.");
      return;
    }
    setSubmitted(true);
  };

  return (
    <section className="py-16 sm:py-24 bg-[var(--color-bg-primary)] border-b border-[var(--color-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          
          {/* Left Column: Direct Info Card (Equal Height) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 p-8 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl h-full flex flex-col justify-between space-y-8"
          >
            <div className="space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[var(--color-accent)]">Direct Support</span>
              <h2 className="font-bebas text-4xl sm:text-5xl text-[var(--color-foreground)] leading-tight">
                WE'RE HERE TO HELP YOU REACH YOUR GOALS
              </h2>
              <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                Send us a message using the contact form, or connect directly through our official email address.
              </p>
            </div>

            {/* Info Cards */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg-primary)]/70 border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-[var(--color-text-muted)] tracking-wider">Email Support</div>
                  <a href="mailto:contact@gymatch.com" className="text-sm font-bold text-[var(--color-accent)] hover:underline">
                    contact@gymatch.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg-primary)]/70 border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-[var(--color-text-muted)] tracking-wider">Headquarters</div>
                  <div className="text-sm font-bold text-[var(--color-foreground)]">GYMatch Inc. Los Angeles, CA</div>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-2xl bg-[var(--color-bg-primary)]/70 border border-[var(--color-border)]">
                <div className="w-12 h-12 rounded-xl bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/20 flex items-center justify-center text-[var(--color-accent)] shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] font-bold uppercase text-[var(--color-text-muted)] tracking-wider">Response Time</div>
                  <div className="text-sm font-bold text-[var(--color-foreground)]">Within 24 hours guaranteed</div>
                </div>
              </div>
            </div>

            {/* Security Banner */}
            <div className="p-4 rounded-2xl bg-[var(--color-accent)]/5 border border-[var(--color-accent)]/20 text-xs text-[var(--color-text-muted)] flex items-center gap-3">
              <ShieldCheck className="w-5 h-5 text-[var(--color-accent)] shrink-0" />
              <span>Your inquiries are encrypted and handled confidentially according to our Privacy Policy.</span>
            </div>
          </motion.div>

          {/* Right Column: Glassmorphism Form (Equal Height) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 p-8 sm:p-12 rounded-3xl bg-[var(--color-surface)] border border-[var(--color-border)] shadow-xl h-full flex flex-col justify-between"
          >
            {submitted ? (
              <div className="py-16 text-center space-y-6 my-auto">
                <div className="w-16 h-16 rounded-full bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)] flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-bebas text-4xl text-[var(--color-foreground)]">MESSAGE SENT SUCCESSFULLY!</h3>
                <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto leading-relaxed">
                  Thank you for reaching out to GYMatch. Our customer support team has received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-8 py-3 rounded-full bg-[var(--color-accent)] text-[var(--color-accent-text)] font-extrabold text-xs uppercase tracking-wider hover:bg-[var(--color-accent-hover)] transition-all shadow-lg"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 my-auto">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                      Name <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                      Email <span className="text-[var(--color-accent)]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                    Subject <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="What is your message regarding?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-wider text-[var(--color-foreground)]">
                    Message <span className="text-[var(--color-accent)]">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Write your message details here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] text-sm text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)] transition-all resize-none"
                  ></textarea>
                </div>

                {/* Captcha Security Verification */}
                <div className="p-4 rounded-2xl bg-[var(--color-bg-primary)] border border-[var(--color-border)] space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-bold uppercase text-[var(--color-text-muted)] tracking-wider">
                      <ShieldCheck className="w-4 h-4 text-[var(--color-accent)]" />
                      <span>Security Verification</span>
                    </div>
                    <div className="px-3 py-1 rounded-lg bg-[var(--color-surface)] border border-[var(--color-accent)]/40 font-mono text-sm font-bold tracking-widest text-[var(--color-accent)] select-none">
                      {captchaCode}
                    </div>
                  </div>
                  <input
                    type="text"
                    required
                    placeholder="Enter code shown above..."
                    value={formData.captchaInput}
                    onChange={(e) => setFormData({ ...formData, captchaInput: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[var(--color-surface)] border border-[var(--color-border)] text-xs text-[var(--color-foreground)] placeholder-[var(--color-text-muted)] focus:outline-none focus:border-[var(--color-accent)]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl text-xs font-extrabold uppercase tracking-widest bg-[var(--color-accent)] text-[var(--color-accent-text)] hover:bg-[var(--color-accent-hover)] transition-all duration-300 shadow-xl shadow-[var(--color-accent)]/20 flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Message</span>
                </button>

              </form>
            )}
          </motion.div>

        </div>

      </div>
    </section>
  );
}
