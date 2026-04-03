"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  FileText,
  Wrench,
  BookOpen,
  Star,
  TrendingUp,
  Clock,
  Sprout,
  Flame,
  Zap,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  DiagnosticQuestion,
  PitchQuote,
  FAQAccordion,
  ProductPageHero,
  ProductPageFooter,
  StatHighlight,
} from "./shared";

/* ─── data ─── */

const FEATURES = [
  {
    icon: MapPin,
    title: "GBP Optimization & Management",
    text: "The single highest-leverage local SEO asset. Photos, service categories, hours, Q&A, review responses, posting cadence — all optimized and managed ongoing.",
  },
  {
    icon: FileText,
    title: "On-Page SEO",
    text: "Title tags, meta descriptions, header structure, keyword targeting, internal linking. Every page tells Google exactly what it's about and for whom.",
  },
  {
    icon: Wrench,
    title: "Technical SEO",
    text: "Site speed, mobile performance, schema markup, crawlability, Core Web Vitals. The under-the-hood factors that quietly suppress rankings.",
  },
  {
    icon: BookOpen,
    title: "Local Citation Building",
    text: "NAP consistency across Yelp, Apple Maps, Bing, and industry directories. Inconsistency hurts local rankings — we audit, clean, and build.",
  },
  {
    icon: Star,
    title: "Review Management Strategy",
    text: "Volume and recency of Google reviews directly affects local pack rankings. We set up a system for consistently requesting and responding to reviews.",
  },
  {
    icon: TrendingUp,
    title: "Monthly Reporting & Rank Tracking",
    text: "Keyword positions, GBP metrics, organic traffic, and call volume — tracked monthly with context on what the data means, not just a PDF of numbers.",
  },
] as const;

const TIMELINE_PHASES = [
  {
    period: "Month 1",
    title: "Setup",
    icon: Clock,
    color: "bg-muted-foreground",
    barWidth: "w-1/4",
    description:
      "GBP optimized and built out. On-page fixes go live. Citation audit runs. Technical issues resolved. Rank tracking baseline established. The client may not see movement yet — this month is infrastructure.",
  },
  {
    period: "Months 2–3",
    title: "Foundation Settles",
    icon: Sprout,
    color: "bg-amber-accent",
    barWidth: "w-2/4",
    description:
      "Google re-indexes updated pages. Citations stabilize. GBP engagement starts ticking up — more calls, direction requests, clicks. Movement on lower-competition keywords.",
  },
  {
    period: "Months 3–4",
    title: "First Measurable Movement",
    icon: Flame,
    color: "bg-emerald-accent",
    barWidth: "w-3/4",
    description:
      "Rank improvements on target terms, especially for less competitive local searches. GBP call volume up meaningfully. This is where skeptical clients become believers.",
  },
  {
    period: "Month 6+",
    title: "Compounding Results",
    icon: Zap,
    color: "bg-accent",
    barWidth: "w-full",
    description:
      "Rankings strengthen, content gains authority, GBP becomes a consistent lead source. Unlike paid ads, the results don't disappear when the spend stops.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "\"How long until I see results?\"",
    answer:
      "Month one is setup and infrastructure. You'll start to see movement around month three — GBP engagement, rank improvements on lower-competition terms. Month six is when the channel is clearly working. I'd rather set that expectation now than have you evaluate us after 30 days.",
  },
  {
    question: "\"Can't I just do this myself?\"",
    answer:
      "You can learn it — there's good information out there. The honest question is whether you have 10–15 hours a month to execute it consistently while running your business. Most owners who try end up doing the research, not the work. We handle the execution.",
  },
  {
    question: "\"My nephew / a freelancer offered to do this cheaper.\"",
    answer:
      "Maybe worth asking what's included — specifically. GBP management, citation cleanup, on-page optimization, technical fixes, monthly rank reporting? Those are the things that move the needle. If the price is much lower, something's usually missing or it's one-time setup with no ongoing work.",
  },
  {
    question:
      "\"We already show up on Google when I search our name — why do we need this?\"",
    answer:
      "Searching your name is branded search — people who already know you exist. What we're optimizing for is category search: someone in your market who's never heard of you, searching for what you do. That's the traffic you're either capturing or missing.",
  },
  {
    question: "\"What's the difference between SEO and paid ads?\"",
    answer:
      "Paid ads buy you placement — the moment you stop paying, the traffic stops. SEO earns placement over time — once you're ranking, you're getting that traffic for free. Both have a role, but SEO compounds. Ads don't.",
  },
  {
    question: "\"How do I know it's working?\"",
    answer:
      "Monthly reports — keyword positions, GBP call volume, organic traffic, direction requests. We show you the baseline at setup so every month is a comparison against where you started, not just a number without context.",
  },
];

/* ─── component ─── */

export default function SEOProduct({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/products`}
        backLabel="All products"
        eyebrow="Product Knowledge"
        title="SEO Services"
        description="Local SEO and Google Business Profile optimization. Makes the website findable for people who don't already know the business exists."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Discovery Question ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <DiagnosticQuestion>
            &ldquo;When did you last Google your business category and city? Not
            your name — your category. Like &lsquo;[their industry] in [their
            city].&rsquo; Do you know where you show up?&rdquo;
          </DiagnosticQuestion>
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-3xl"
          >
            Most won&apos;t know. Some will pull it up on the call and find out
            live. Either way, that&apos;s the moment the pitch earns itself.
          </motion.p>
        </motion.section>

        {/* ── What It Does ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            What It Does
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-emerald-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent mb-4 transition-colors group-hover:bg-emerald-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {f.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {f.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── SEO Timeline ── */}
        <motion.section
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What to Expect — Timeline
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            SEO is not a fast channel. Be direct about the timeline — it builds
            credibility and sets the relationship up correctly.
          </motion.p>

          <div className="space-y-6 mt-8">
            {TIMELINE_PHASES.map((phase, i) => {
              const Icon = phase.icon;
              return (
                <motion.div
                  key={phase.period}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                >
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <motion.div
                        variants={scaleIn}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl ${phase.color} text-white shadow-md`}
                      >
                        <Icon size={20} strokeWidth={1.8} />
                      </motion.div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                          {phase.period}
                        </span>
                        <h3 className="text-lg font-bold tracking-tight">
                          {phase.title}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {phase.description}
                    </p>

                    {/* Progress bar */}
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.8,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={`h-full rounded-full ${phase.color} ${phase.barWidth}`}
                      />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-8">
            <PitchQuote variant="accent" label="Honest Timeline Framing">
              Month one is setup, month three is when you start seeing movement,
              month six is when you look back and realize the channel is working.
              If someone&apos;s promising you page one in 30 days, they&apos;re
              either lying or doing something that&apos;ll get your site
              penalized.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── DIY vs Done-For-You ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            DIY vs. Done-For-You
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
              {/* DIY side */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-amber-accent" />
                  <h3 className="text-base font-bold tracking-tight">
                    DIY Tools
                  </h3>
                </div>
                <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                  Semrush, Moz, Ahrefs
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Shows you what's wrong",
                    "Requires 10–15 hrs/month to execute",
                    "Owner does the work",
                    "Data without action",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Done-for-you side */}
              <div className="p-6 sm:p-8 bg-emerald-accent/[0.02]">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-2 w-2 rounded-full bg-emerald-accent" />
                  <h3 className="text-base font-bold tracking-tight">
                    Obsidion SEO
                  </h3>
                </div>
                <p className="text-xs font-semibold text-emerald-accent uppercase tracking-wider mb-3">
                  Full-Service
                </p>
                <ul className="space-y-2.5">
                  {[
                    "Identifies and fixes the problems",
                    "Executed monthly by our team",
                    "Owner focuses on the business",
                    "Data plus consistent execution",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6">
            <PitchQuote variant="purple" label="DIY Response">
              Those tools will show you exactly what&apos;s wrong with your SEO.
              They won&apos;t fix it. The work is rewriting 40 title tags,
              cleaning up citations across 30 directories, fixing schema errors,
              and doing it consistently every month. Tools give you data; we do
              the work.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── Stats ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="rounded-2xl border border-border bg-muted/30 p-8 sm:p-10"
        >
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <StatHighlight
              value="6"
              label="Services Included"
              colorClass="text-emerald-accent"
            />
            <StatHighlight
              value="30+"
              label="Directories Managed"
              colorClass="text-accent"
            />
            <StatHighlight
              value="Monthly"
              label="Reporting Cadence"
              colorClass="text-purple-accent"
            />
            <StatHighlight
              value="3–6 mo"
              label="To Measurable Results"
              colorClass="text-amber-accent"
            />
          </div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Common Client Questions
          </SectionLabel>

          <FAQAccordion items={FAQ_ITEMS} />
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
