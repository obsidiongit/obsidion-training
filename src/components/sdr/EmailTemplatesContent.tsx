"use client";

import { motion } from "framer-motion";
import { publicFile } from "@/lib/basePath";
import {
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

const HOW_TO_USE_TLDR = {
  tldr: "Write like a human: lead with paid ads or advertising when it fits; name Meta (Facebook/Instagram) when you are explaining how we execute — not in the first line every time.",
  meansForYou: [
    "If they may not run ads yet, do not assume they know the word Meta.",
    "Product Knowledge is where the full service stack and wording lives; emails can stay plain.",
  ],
} as const;

export default function EmailTemplatesContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="Back to Outreach"
        eyebrow="Email"
        title="Email Templates"
        description="≈80% paid ads (Facebook and Instagram) when it fits — creatives and campaigns in their ad account. The other ~20% is website, SEO, remarketing (website-only is fine). Lead with ads before jargon; keep emails short and human — no quiz-style hooks about where they rank on Google."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── How to use ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            How to Use These Templates
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5 space-y-4">
            <p className="text-sm text-foreground leading-relaxed">
              <span className="font-semibold">Lead with paid ads or advertising when it fits (~80% pattern).</span> If
              you see boosts, sponsored posts, or ad activity — open there and the account-access angle.
              If you don&apos;t see ads, open on{" "}
              <span className="font-semibold">scaling what&apos;s already working</span>, a{" "}
              <span className="font-semibold">specific observation</span> (their site, a post, reviews),
              or a <span className="font-semibold">website-only</span> angle if that&apos;s clearly the need — never a fake &ldquo;quick question about Google.&rdquo; Use{" "}
              <span className="font-semibold">Meta (Facebook/Instagram)</span> when you are explaining how we run campaigns, not as the first word to every stranger.
            </p>
            <div className="rounded-xl border border-accent/30 bg-background/60 px-4 py-3">
              <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">TL;DR</p>
              <p className="text-sm text-foreground leading-relaxed mb-3">{HOW_TO_USE_TLDR.tldr}</p>
              <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                What this means for you
              </p>
              <ul className="space-y-1.5">
                {HOW_TO_USE_TLDR.meansForYou.map((line) => (
                  <li key={line} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                    <span className="mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Copy, personalize every bracket, keep it under five sentences. One ask per email.
            </p>
          </motion.div>
        </motion.section>

        {/* ── First Touch — Meta-led (default) ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            First Touch — Ads-Led (Default)
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Use when you see activity on Facebook or Instagram, or when their business type is a
            natural fit for paid ads. This is your primary first-touch pattern.
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Subject: Quick question — [their business name]
            </div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>
                I&apos;ve been looking at how [their business name] shows up on Facebook/Instagram —
                looks like you&apos;re putting content out there. Are you running paid ads yourself, or
                is someone else managing campaigns for you?
              </p>
              <p>
                I work with Obsidion — we run paid advertising end-to-end (creatives + management) in{" "}
                <span className="font-semibold">your</span>
                {" "}
                ad account, so you always see where the
                money goes. On Meta, that&apos;s Facebook and Instagram. Figured it might be relevant if
                you&apos;re trying to scale what&apos;s already working.
              </p>
              <p>Worth a two-minute call this week?</p>
              <p className="text-muted-foreground">
                [Your name]
                <br />
                [Your phone number]
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <CheckCircle2 size={16} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Don&apos;t drop:</span> &ldquo;Inside your ad account&rdquo; — that&apos;s
              the differentiator vs. agencies that lock clients out.
            </p>
          </motion.div>
        </motion.section>

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
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Subject: Tried you earlier — [their business name]
            </div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>
                Called earlier — no stress if you missed it. I wanted to ask whether you&apos;re running
                paid ads in-house or with someone, and if you&apos;re happy with how performance and
                spend are visible on your side.
              </p>
              <p>
                We help businesses run advertising — creatives and management — in their own ad
                account (including on Meta, Facebook and Instagram). Happy to compare notes for two minutes if you&apos;re open to it.
              </p>
              <p className="text-muted-foreground">
                [Your name]
                <br />
                [Your phone number]
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── First Touch — Observation cold ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            First Touch — Cold (Specific Observation)
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Subject: Noticed something — [their business name]
            </div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>
                I was looking at [their business name] before writing — [one specific observation:
                e.g. booking flow on mobile, thin reviews, site speed, a post that drove real
                engagement].
              </p>
              <p>
                We help [their industry] businesses turn that kind of footprint into growth — paid
                advertising is usually the engine (for us that&apos;s Meta, Facebook and Instagram), and
                we layer site/SEO/follow-up where it matters. Not a novel — just curious if scaling is on
                your mind this quarter.
              </p>
              <p>Open to a quick call?</p>
              <p className="text-muted-foreground">
                [Your name]
                <br />
                [Your phone number]
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              The observation must be <span className="font-semibold">real</span>. Vague = deleted.
            </p>
          </motion.div>
        </motion.section>

        {/* ── First Touch — Scaling (no clear ad signal) ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            First Touch — Scaling (No Clear Ad Signal)
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Use when you don&apos;t see paid activity but the brand is strong — open on growth, not on
            &ldquo;Google rankings.&rdquo;
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
              Subject: [Their business name] + growth
            </div>
            <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
              <p>Hey [Name],</p>
              <p>
                [Their business name] clearly has traction — I&apos;m curious whether you&apos;re trying to
                scale what&apos;s already working, or if growth has mostly been word-of-mouth so far.
              </p>
              <p>
                We work with a lot of [their industry] owners on paid ads — Facebook and Instagram
                (Meta) — plus the site and follow-up pieces so spend isn&apos;t wasted. If putting real
                budget behind demand is on your radar, I can get you a short call with someone who does
                this every day.
              </p>
              <p className="text-muted-foreground">
                [Your name]
                <br />
                [Your phone number]
              </p>
            </div>
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
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent text-xs font-black">
                  1
                </div>
                <h4 className="text-sm font-bold">Follow-Up #1 — Day 3</h4>
              </div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>
                  Following up on my note — not trying to flood your inbox. Short version: we help
                  [their industry] businesses run paid ads with creatives and full visibility in
                  their own account (Meta — Facebook and Instagram), and we fix the site/follow-up pieces so money isn&apos;t leaking.
                </p>
                <p>
                  If that&apos;s not a priority, all good. If it is, I can line up 20 minutes with a
                  specialist — no pitch deck, just a real look at your situation.
                </p>
                <p>Worth it?</p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent text-xs font-black">
                  2
                </div>
                <h4 className="text-sm font-bold">Follow-Up #2 — Day 5 (New Angle)</h4>
              </div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>
                  One more angle — I looked at [competitor or &ldquo;who&apos;s running ads&rdquo;] in [city] in your
                  space. There&apos;s a gap in how aggressively [their category] is showing up with paid
                  ads. Happy to share what I saw in two minutes if you&apos;re curious.
                </p>
                <p className="text-muted-foreground">
                  [Your name]
                  <br />
                  [Your phone number]
                </p>
              </div>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold">Tip:</span> Name a competitor or a concrete pattern
                you actually checked.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-red-400/20 bg-card p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-400/10 text-red-400 text-xs font-black">
                  3
                </div>
                <h4 className="text-sm font-bold">Breakup Email — Day 7</h4>
              </div>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Subject: Should I close the file?
              </div>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-5 py-4 text-sm text-foreground leading-relaxed space-y-3">
                <p>Hey [Name],</p>
                <p>
                  I&apos;ve reached out a few times — I know you&apos;re busy. If scaling with paid
                  advertising (or fixing the site/follow-up behind your traffic) isn&apos;t on your radar
                  right now, I&apos;ll stop here.
                </p>
                <p>
                  If it is, I&apos;m one reply away. [Your phone number] — or just reply to this.
                </p>
              </div>
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
                <p>
                  Good chatting. I&apos;m setting you up with [AE name] to walk through [what they
                  mentioned — e.g. Meta, site, follow-up].
                </p>
                <p>
                  Calendar invite for [day] at [time]. If that shifts, reply here.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Appointment Reminder — Day Before</h4>
              <div className="rounded-xl bg-muted/20 border border-border/60 px-4 py-3 text-sm text-foreground leading-relaxed space-y-2">
                <p>Hey [Name],</p>
                <p>
                  Reminder — you&apos;ve got a call with [AE name] tomorrow at [time]. They&apos;ll walk
                  through what makes sense for your business (usually what&apos;s happening with your ads
                  and your site — we focus a lot on Meta, Facebook and Instagram).
                </p>
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
              "Personalize every bracket. Generic = deleted.",
              "Paid ads first when there's a signal; otherwise scaling or a real observation.",
              "Keep it short — five sentences max.",
              "One ask per email.",
              "Same subject line for follow-ups in a thread when possible.",
              "Log every send in the Outreach Dashboard.",
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
          <img src={publicFile("/logos/logo.png")} alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
