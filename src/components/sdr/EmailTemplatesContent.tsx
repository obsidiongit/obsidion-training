"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Clock,
  AlertTriangle,
  CheckCircle2,
  RefreshCw,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── component ─── */

export default function EmailTemplatesContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="Back to Outreach"
        eyebrow="Email"
        title="Email Templates"
        description="Copy, paste, personalize. Every template has brackets where you fill in the prospect's info. 5 sentences max — business owners skim."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── First Touch — After Missed Call ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            First Touch — After a Missed Call
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Subject: Quick question — [their business name]</div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>Tried calling earlier — no worries if you missed it. I had a quick question: when someone Googles [their business type] in [their city], do you know where you show up?</p>
              <p>I work with Obsidion — we help local businesses get found online, fix their websites, and automate follow-up. Not sure if it&apos;s a fit, but figured it was worth a quick ask.</p>
              <p>Worth a 2-minute call this week?</p>
              <p className="text-muted-foreground">[Your name]<br />[Your phone number]</p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── First Touch — Cold ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            First Touch — Cold Email
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Subject: [Their business name] + Google</div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>I was looking at [their business name] online and noticed [one specific observation — e.g., &ldquo;your site hasn&apos;t been updated in a while&rdquo;].</p>
              <p>We work with [their industry] businesses on exactly this — websites, local search, and lead follow-up. Not a long pitch — just curious if it&apos;s something you&apos;ve been thinking about.</p>
              <p>Open to a quick call this week?</p>
              <p className="text-muted-foreground">[Your name]<br />[Your phone number]</p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              The observation needs to be <span className="font-semibold">real</span>. Look at their
              website or Google their business before sending. Generic = deleted.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Follow-Ups ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Follow-Up Sequence
          </SectionLabel>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent text-xs font-black">1</div>
                <h4 className="text-sm font-bold">Follow-Up #1 — Day 3</h4>
              </div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>Following up on my note from [day]. Not trying to be pushy — just want to make sure it didn&apos;t get buried.</p>
                <p>Quick version: we help [their industry] businesses show up on Google and turn website visitors into actual customers. If your online setup is already dialed in, no worries — but if it&apos;s something you&apos;ve been meaning to fix, I can get you 20 minutes with someone who can show you what it looks like.</p>
                <p>Worth a look?</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent text-xs font-black">2</div>
                <h4 className="text-sm font-bold">Follow-Up #2 — Day 5 (New Angle)</h4>
              </div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>One more thought — I looked at how [competitor or &ldquo;other businesses&rdquo;] in [their city] are showing up on Google, and there&apos;s a gap you could fill pretty easily.</p>
                <p>Happy to share what I found if you&apos;ve got 2 minutes. No obligation.</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Tip:</span> Name a competitor who ranks well locally. Business owners pay attention.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-400/10 text-red-400 text-xs font-black">3</div>
                <h4 className="text-sm font-bold">Breakup Email — Day 7</h4>
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Subject: Should I close the file?</div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>I&apos;ve reached out a few times and I know you&apos;re busy — so I don&apos;t want to keep pinging you if the timing isn&apos;t right.</p>
                <p>If getting more customers through Google and a better website is on your radar, I&apos;m here. If not, no hard feelings — I&apos;ll stop reaching out.</p>
                <p>Either way, I&apos;m easy to find: [your phone number] or just reply to this.</p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Why it works:</span> &ldquo;Should I close the file?&rdquo; creates urgency without being aggressive. Many prospects reply to this one.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Post-Call & Reminders ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Post-Call &amp; Reminders
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">After a Good Conversation</h4>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-4 py-3 text-sm text-foreground leading-relaxed space-y-2">
                <p>Hey [Name],</p>
                <p>Good chatting just now. I&apos;m setting you up with [AE name] to walk through how we can help with [specific thing they mentioned].</p>
                <p>Calendar invite sent for [day] at [time]. If that shifts, just reply here.</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Appointment Reminder — Day Before</h4>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-4 py-3 text-sm text-foreground leading-relaxed space-y-2">
                <p>Hey [Name],</p>
                <p>Quick heads up — you&apos;ve got a call with [AE name] tomorrow at [time]. No prep needed — just show up and they&apos;ll walk you through everything.</p>
                <p>Looking forward to it.</p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Template Rules ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Template Rules
          </SectionLabel>

          <div className="space-y-3">
            {[
              "Always personalize. Every bracket gets filled in with real information.",
              "Keep it short. 5 sentences max. Business owners skim.",
              "One ask per email. Don't ask for a call AND send a link AND ask a question.",
              "Use the same subject line for follow-ups (reply threading helps open rates).",
              "Send from your branded email with your Obsidion signature.",
              "Log every email in the CRM — who, when, and which template.",
            ].map((rule, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent font-bold text-xs">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Email Templates</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
