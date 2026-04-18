"use client";

import { motion } from "framer-motion";
import {
  MessageCircle,
  Linkedin,
  Facebook,
  Search,
  Eye,
  MessageSquare,
  Share2,
  Clock,
  XCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const ENGAGEMENT_HABITS = [
  { habit: "View 10-15 prospect profiles per day", why: "They see the notification. Your name starts to register." },
  { habit: "Comment on 3-5 posts per day", why: "Real comments, not \"Great post!\" — add something. Builds visibility." },
  { habit: "Share one relevant post per week", why: "Position yourself as someone who knows the space." },
  { habit: "Respond to DMs within a few hours", why: "Slow responses kill momentum." },
] as const;

const DONT_LIST = [
  "Don't pitch in the connection request. Connect first, converse second.",
  "Don't spam DMs. If they don't respond, try another channel.",
  "Don't be fake. \"Love your business!\" when you haven't looked at it is obvious.",
  "Don't argue in comments. Ever. You represent Obsidion now.",
  "Don't mass-message. Personalized outreach beats copy-paste blasts every time.",
] as const;

/* ─── component ─── */

export default function SocialOutreachContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="Back to Outreach"
        eyebrow="Social"
        title="Social Outreach"
        description="LinkedIn and Facebook DM scripts, connection request templates, and engagement tips. Social builds trust before phone and email."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Why Social Matters ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Why Social Matters
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed">
              Phone opens doors. Email follows up. <span className="font-semibold">Social builds trust before either one happens.</span> When
              you call after a profile view and a connection request, you&apos;re not a total stranger — you&apos;re
              &ldquo;that person from LinkedIn.&rdquo; That small edge makes a real difference.
            </p>
          </motion.div>
        </motion.section>

        {/* ── LinkedIn Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            LinkedIn Outreach
          </SectionLabel>

          <div className="space-y-6">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Step 1 — Research (60 seconds)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Before you reach out, check:</p>
              <ul className="space-y-1.5">
                {["What's their business?", "Have they posted recently?", "Mutual connections?", "Anything that tells you what they care about?"].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Step 2 — Connection Request (always add a note)</h4>
              <div className="space-y-3">
                <PitchQuote label="Standard">
                  Hey [Name], I came across your business — looks like you&apos;re doing great work
                  in [their industry] in [their city]. Would love to connect.
                </PitchQuote>
                <PitchQuote label="After Their Content" variant="emerald">
                  Hey [Name], saw your post about [topic] — solid insight. I work with [their industry]
                  businesses on their online growth. Happy to connect.
                </PitchQuote>
                <PitchQuote label="Mutual Connection" variant="purple">
                  Hey [Name], noticed we&apos;re both connected to [mutual connection]. I work with
                  local businesses on websites and online visibility — figured it was worth connecting.
                </PitchQuote>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Keep under 300 characters. Don&apos;t pitch in the request.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Step 3 — The DM (after they accept)</h4>
              <p className="text-xs text-muted-foreground mb-4">Wait a few hours after they accept. Don&apos;t pitch immediately.</p>
              <div className="space-y-3">
                <PitchQuote label="Soft Open">
                  Hey [Name], thanks for connecting. Quick question — how are you currently handling
                  your online presence? Website, Google, that kind of thing. I work with businesses
                  like yours at Obsidion and I&apos;m always curious what&apos;s working.
                </PitchQuote>
                <PitchQuote label="Direct (with reason)" variant="emerald">
                  Hey [Name], I took a look at your business online after we connected. Noticed
                  [specific observation]. Not sure if that&apos;s on your radar, but we help [their
                  industry] businesses fix exactly that. Worth a quick call?
                </PitchQuote>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Facebook Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Facebook Outreach
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Many small business owners — especially in food, salons, contractors, and local
            services — spend more time on Facebook than LinkedIn.
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Finding Prospects</h4>
              <ul className="space-y-1.5">
                {[
                  "Search for local business pages in your target area",
                  "Join local business groups (Chamber of Commerce, industry groups)",
                  "Look at who's posting in those groups — those are active owners",
                  "Check followers of competitor business pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Facebook DM Templates</h4>
              <div className="space-y-3">
                <PitchQuote label="After Engaging Their Page" variant="emerald">
                  Hey [Name], I&apos;ve been following your page — [their business] looks great.
                  Quick question: are you happy with how you&apos;re showing up online, or is that
                  something you&apos;ve been meaning to work on?
                </PitchQuote>
                <PitchQuote label="From a Business Group" variant="emerald">
                  Hey [Name], saw your post in [group name] about [topic]. I work with local
                  businesses on their websites and getting found on Google — sounds like something
                  that might be relevant for you. Open to a quick chat?
                </PitchQuote>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Instagram Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Instagram Outreach
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Instagram is worth adding to your prospecting rotation, especially for verticals like food, salons, med spas, and lifestyle businesses. The approach here mirrors Facebook: engage first, then reach out.
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Finding Prospects</h4>
              <ul className="space-y-1.5">
                {[
                  "Search hashtags for their industry + city (e.g., #austinrestaurant)",
                  "Check local business discovery pages and Explore results in their category",
                  "Look at who's tagged in location posts for their area",
                  "Browse the followers of a well-known local business in their vertical",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Instagram DM Templates</h4>
              <div className="space-y-3">
                <PitchQuote label="After Engaging Their Posts" variant="purple">
                  Hey [Name], love what you&apos;re doing with [their content]. Quick question — are you running any paid ads to promote this, or mostly organic? I work with [their industry] businesses at Obsidion on their Facebook and Instagram ads and wanted to see if it&apos;s on your radar.
                </PitchQuote>
                <PitchQuote label="Direct" variant="purple">
                  Hey [Name], came across [their business] on here — your content looks great. I work with businesses like yours on their online growth (websites, ads, Google). Not a pitch — just curious if any of that is something you&apos;ve been thinking about.
                </PitchQuote>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Engagement Habits ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Daily Engagement Habits
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Small habits that compound over time:
          </motion.p>

          <div className="space-y-3">
            {ENGAGEMENT_HABITS.map((item) => (
              <motion.div
                key={item.habit}
                variants={fadeUp}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent">
                  <Eye size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-0.5">{item.habit}</h4>
                  <p className="text-sm text-muted-foreground">{item.why}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── What Not to Do ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            What Not to Do
          </SectionLabel>

          <div className="space-y-3">
            {DONT_LIST.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-5 py-4"
              >
                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Social Outreach</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
