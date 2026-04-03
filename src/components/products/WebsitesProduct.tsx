"use client";

import { motion } from "framer-motion";
import {
  Paintbrush,
  Smartphone,
  Target,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  LayoutDashboard,
  CreditCard,
  Rocket,
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
} from "./shared";

/* ─── data ─── */

const FEATURES = [
  {
    icon: Paintbrush,
    title: "Custom Design — Not Templates",
    text: "Every site is built from scratch for the client's industry. The design reflects their brand and is built to convert — not just look good in a screenshot.",
  },
  {
    icon: Smartphone,
    title: "Mobile-First, Performance-Optimized",
    text: "Built mobile-first with fast load times, clean layouts, and CTA placement designed for a thumb. Core Web Vitals scores are factored into the build.",
  },
  {
    icon: Target,
    title: "Conversion-Focused Structure",
    text: "Every page has a job. The homepage establishes trust; service pages handle objections. Structured around how a local customer evaluates and chooses a business.",
  },
  {
    icon: ShieldCheck,
    title: "Compliance-Conscious Design",
    text: "For regulated industries — cannabis, automotive, healthcare-adjacent — compliance is baked in. Age gates, disclosures, and content that doesn't trip ad policies.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Conversion Tracking",
    text: "Google Analytics, call tracking, and form submission tracking configured at launch. The client knows from day one what's working.",
  },
] as const;

const BEFORE_STATES = [
  {
    icon: AlertTriangle,
    title: "DIY Wix or Squarespace",
    description:
      "Slow load times, template design, no integrations, no tracking. Hasn't been updated since the day it launched.",
    severity: "bg-amber-accent/10 text-amber-accent border-amber-accent/20",
  },
  {
    icon: AlertTriangle,
    title: "Outdated WordPress",
    description:
      "Built 4–6 years ago. Plugins out of date, poor mobile experience. The original agency either doesn't exist or charges hourly for changes.",
    severity: "bg-amber-accent/10 text-amber-accent border-amber-accent/20",
  },
  {
    icon: AlertTriangle,
    title: "No Site At All",
    description:
      "Runs off a Google Business Profile and a Facebook page. No owned web presence, no conversion surface, no SEO foundation.",
    severity: "bg-destructive/10 text-destructive border-destructive/20",
  },
] as const;

const TIMELINE_STEPS = [
  {
    day: "Day 1",
    title: "Kickoff",
    description:
      "Onboarding questionnaire reviewed, kickoff call with build team. Brand assets collected, scope locked — pages, features, integrations, and compliance requirements.",
  },
  {
    day: "Days 2–3",
    title: "Build",
    description:
      "Design and development. Pages built, content written, integrations configured. Obsidion Dashboard connected — booking, contacts, calendar, and invoicing synced.",
  },
  {
    day: "Days 4–5",
    title: "Review",
    description:
      "Preview link goes to client. Desktop and mobile review. One revision round included. Call tracking numbers assigned and analytics wired up.",
  },
  {
    day: "Day 6",
    title: "Pre-Launch QA",
    description:
      "Final internal review. Forms tested, integrations confirmed, load speed benchmarked, mobile layout checked across device sizes.",
  },
  {
    day: "Day 7",
    title: "Launch",
    description:
      "DNS updated, site goes live, hosting confirmed, client gets dashboard access. Brief walkthrough so they can update basic content without calling.",
  },
] as const;

const FAQ_ITEMS = [
  {
    question: "\"Why not just use Wix or Squarespace ourselves?\"",
    answer:
      "You can — and a lot of our clients tried that first. Template builders are built for ease, not performance or conversion. The sites come out slow, look like templates, and don't connect to a CRM, booking system, or remarketing platform. We build something purpose-built for your industry in seven days.",
  },
  {
    question: "\"What do you need from us to get started?\"",
    answer:
      "An onboarding questionnaire that takes about ten minutes, your logo and any brand assets you have, and one kickoff call. If you have an existing site with content worth keeping, share the link. That's it on your end for the build phase.",
  },
  {
    question: "\"What happens if we need changes after launch?\"",
    answer:
      "Basic content updates — hours, services, pricing — you can handle yourself through your dashboard. Structural changes, new pages, or anything more involved comes through us. How that's scoped depends on the tier you're on.",
  },
  {
    question: "\"Do we own the site?\"",
    answer:
      "Yes. The site is yours. We host it as part of your plan, but the asset belongs to you — if you ever moved away from Obsidion, you'd take it with you.",
  },
  {
    question: "\"Can you redesign an existing site or just build new?\"",
    answer:
      "Both. If there's existing content worth keeping — copy, photography, service descriptions — we bring it into the new build. If the current site is too far gone, we start fresh. Either way, the output is purpose-built, not a patch job.",
  },
  {
    question: "\"What about the domain?\"",
    answer:
      "If you already have a domain, we connect to it. If you don't have one yet, we help you get one. Domain registration is separate from the build — we walk through that at kickoff so it doesn't hold up the launch.",
  },
];

/* ─── component ─── */

export default function WebsitesProduct({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/products`}
        backLabel="All products"
        eyebrow="Product Knowledge"
        title="Custom Websites"
        description="The foundation of every client engagement. Custom-built sites optimized for speed, conversion, and the client's specific industry."
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
            &ldquo;If someone found your business on Google right now and landed
            on your website — would you be comfortable with that?&rdquo;
          </DiagnosticQuestion>
          <motion.p
            variants={fadeUp}
            className="text-sm text-muted-foreground leading-relaxed mt-4 max-w-3xl"
          >
            Most business owners pause. They know the answer. The site is
            outdated, loads slow on mobile, or was built by someone&apos;s nephew
            five years ago. Some don&apos;t even have a site. The website is the
            foundation of everything else Obsidion builds on top of.
          </motion.p>
        </motion.section>

        {/* ── What It Does ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What It Does
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {FEATURES.map((f) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent mb-4 transition-colors group-hover:bg-accent group-hover:text-white">
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

        {/* ── What Clients Have Before ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            What Clients Typically Have Before
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-6">
            {BEFORE_STATES.map((state) => {
              const Icon = state.icon;
              return (
                <motion.div
                  key={state.title}
                  variants={fadeUp}
                  className={`rounded-2xl border p-6 ${state.severity}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Icon size={18} strokeWidth={2} />
                    <h3 className="text-sm font-bold">{state.title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed opacity-80">
                    {state.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <PitchQuote variant="accent" label="Call Framing">
            Whatever you have right now — whether it&apos;s outdated, DIY, or
            nothing — we&apos;re building the thing you can actually be proud to
            send people to. Custom, fast, integrated with your systems, live in
            seven days.
          </PitchQuote>
        </motion.section>

        {/* ── 7-Day Delivery Timeline ── */}
        <motion.section
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            7-Day Delivery Process
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Seven days from kickoff to live site. Here&apos;s what happens
            inside that window:
          </motion.p>

          <div className="relative space-y-0">
            {TIMELINE_STEPS.map((step, i) => (
              <motion.div
                key={step.day}
                variants={fadeUp}
                className="relative flex gap-5 sm:gap-8 items-start"
              >
                {/* Timeline spine */}
                <div className="flex flex-col items-center shrink-0">
                  <motion.div
                    variants={scaleIn}
                    className="relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl bg-emerald-accent text-white font-black text-lg shadow-lg"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </motion.div>
                  {i < TIMELINE_STEPS.length - 1 && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.2 + i * 0.1,
                        duration: 0.5,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      className="w-0.5 flex-1 min-h-8 bg-gradient-to-b from-emerald-accent/60 to-emerald-accent/10 origin-top"
                    />
                  )}
                </div>

                {/* Content */}
                <div className="pb-8 sm:pb-10 pt-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent">
                    {step.day}
                  </span>
                  <h3 className="text-lg font-bold tracking-tight mt-1 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            {/* Launch celebration */}
            <motion.div
              variants={scaleIn}
              className="flex items-center gap-3 pl-3 sm:pl-4"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-accent/10">
                <Rocket size={16} className="text-emerald-accent" />
              </div>
              <span className="text-sm font-semibold text-emerald-accent">
                Site is live!
              </span>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Integrations ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Integrations
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                  <LayoutDashboard size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">Obsidion Dashboard</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                All sites integrate with the Obsidion Dashboard by default —
                booking management, contact records, calendar, and invoicing.
                Form submissions become CRM entries, booking widgets sync with
                the calendar, and invoicing is accessible from one place.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                  <CreditCard size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">
                  POS &amp; Third-Party Systems
                </h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                POS integration depends on what the client already has. If
                they&apos;re running Square, Toast, Clover, or another system,
                we assess and connect where possible. If they need a new one, we
                find the right fit before the build starts.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-6">
            <PitchQuote variant="purple" label="Integration Framing">
              If they have a system they&apos;re already using, we figure out
              whether we can integrate it. If they don&apos;t have one, or the
              one they have isn&apos;t working well, we&apos;re not going to
              force them into something that doesn&apos;t fit — we&apos;ll look
              at what makes sense for the business.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── FAQ ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Common Client Questions
          </SectionLabel>

          <FAQAccordion items={FAQ_ITEMS} />
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
