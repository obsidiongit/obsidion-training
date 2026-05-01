"use client";

import Link from "next/link";
import { publicFile } from "@/lib/basePath";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Layers,
  Globe,
  Target,
  Building2,
  Wrench,
  Store,
  Rocket,
  MessageCircle,
  CheckCircle2,
  UserCheck,
  Brain,
  Users,
  Quote,
} from "lucide-react";

/* ─── animation variants ─── */

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.34, 1.56, 0.64, 1] as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" as const } },
};

/* ─── data ─── */

const DIFFERENTIATORS = [
  {
    icon: Clock,
    title: "7-Day Delivery",
    text: "The average web agency takes six to twelve weeks to launch a site. We launch in seven days. That's not a marketing claim — it's how the company is structured. The onboarding questionnaire, the build process, the revision cycle, and the launch checklist are all designed around that timeline.",
  },
  {
    icon: Layers,
    title: "Integrated System",
    text: "Most businesses piece together a website from one vendor, SEO from another, and some form of follow-up that doesn't exist or runs through a personal inbox. Obsidion owns the whole stack — site, SEO, remarketing, and app — no handoff problems, no integration gaps, no ambiguity about accountability.",
  },
  {
    icon: Globe,
    title: "Vertical Expertise",
    text: "We build for businesses in specific markets: cannabis, automotive, salons and med spas, food & hospitality, contractors. The websites are built around how customers in those industries make decisions. The SEO strategy reflects how those searches actually work. Compliance considerations are already factored in.",
  },
  {
    icon: Target,
    title: "Built for Performance",
    text: "A website that exists is not the same as one that converts. SEO that gets impressions is not the same as SEO that gets calls. Every part of the Obsidion system is measured against business outcomes — leads, calls, bookings, repeat visits — not just deliverables.",
  },
] as const;

interface CompetitorStyles {
  iconBox: string;
  headerBg: string;
  quoteBg: string;
  quoteIcon: string;
  quoteLabel: string;
}

const COMPETITORS = [
  {
    type: "Generic Marketing Agencies",
    icon: Building2,
    styles: {
      iconBox: "bg-accent/10 text-accent",
      headerBg: "bg-accent/[0.03]",
      quoteBg: "bg-accent/[0.04] border-accent/10",
      quoteIcon: "text-accent/30",
      quoteLabel: "text-accent",
    } satisfies CompetitorStyles,
    points: [
      { label: "Timeline", text: "Agencies run 6–12 week timelines. We deliver in seven days." },
      { label: "Vertical Knowledge", text: "A generalist agency adapts. We specialize. There's a quality difference between forty dispensary sites and a first one." },
      { label: "Accountability", text: "At a larger agency, website, SEO, and ads teams are separate. When results are missing, accountability diffuses. At Obsidion, one team owns the outcome." },
      { label: "Cost-to-Value", text: "Agencies price for overhead. We price for output." },
    ],
    framing: "Most agencies will charge more, take longer, and hand your project between three different teams who don't talk to each other. We're one system. If something isn't performing, there's no one else to point at.",
  },
  {
    type: "DIY Tools",
    subtitle: "Wix, Squarespace, GoDaddy",
    icon: Wrench,
    styles: {
      iconBox: "bg-emerald-accent/10 text-emerald-accent",
      headerBg: "bg-emerald-accent/[0.03]",
      quoteBg: "bg-emerald-accent/[0.04] border-emerald-accent/10",
      quoteIcon: "text-emerald-accent/30",
      quoteLabel: "text-emerald-accent",
    } satisfies CompetitorStyles,
    points: [
      { label: "Templates vs. Custom", text: "Every DIY site looks like a DIY site. Template designs don't differentiate, convert, or reflect a brand." },
      { label: "Integration", text: "DIY tools don't connect to a CRM, booking system, or remarketing platform without significant manual work." },
      { label: "Maintenance", text: "Someone has to keep it updated — that someone is usually the owner, or someone who may no longer be available." },
      { label: "Compounding Gap", text: "While the owner maintains a Wix site, their competitor runs an optimized managed system. The gap compounds over time." },
    ],
    framing: "DIY tools are built so anyone can launch something. We build something that actually performs. There's a difference between a site that exists and a site that converts — and most DIY sites are solving the first problem, not the second.",
  },
  {
    type: "Vertical Platforms",
    subtitle: "Weedmaps, DealerSocket, Vagaro",
    icon: Store,
    styles: {
      iconBox: "bg-purple-accent/10 text-purple-accent",
      headerBg: "bg-purple-accent/[0.03]",
      quoteBg: "bg-purple-accent/[0.04] border-purple-accent/10",
      quoteIcon: "text-purple-accent/30",
      quoteLabel: "text-purple-accent",
    } satisfies CompetitorStyles,
    points: [
      { label: "Owned vs. Rented", text: "These platforms host the business on their domain, not the client's. If the platform changes — so does the presence." },
      { label: "Marketplace Exposure", text: "Being listed alongside competitors means the platform profits from comparison shopping at the client's expense." },
      { label: "Single-Function", text: "A dispensary menu platform does menus. It doesn't do the website, the SEO, the follow-up, or the app." },
      { label: "No Infrastructure", text: "The business gets features on a platform. Obsidion builds infrastructure the business owns." },
    ],
    framing: "Those platforms are useful for what they do. But you're building your presence on their asset, not yours. When we're done, you own the site, the SEO foundation, the follow-up system. That's yours regardless of what any platform does.",
  },
] as const;

const CULTURE_VALUES = [
  {
    icon: Rocket,
    title: "Speed Is a Value",
    text: "Decisions get made, things get shipped, and \"let me circle back on that\" is not acceptable when something is ready to move. Urgency isn't manufactured — it's the default.",
  },
  {
    icon: MessageCircle,
    title: "Direct Over Comfortable",
    text: "If something isn't working, that gets said clearly. Feedback is specific, expectations are explicit, and clarity is more useful than niceness when the two conflict.",
  },
  {
    icon: CheckCircle2,
    title: "Execution Over Talk",
    text: "A plan that doesn't ship is not a plan. Work is measured by what gets delivered and what it produces, not by effort or intention.",
  },
  {
    icon: UserCheck,
    title: "Ownership, Not Task Completion",
    text: "The difference between doing a job and owning an outcome is the question: does it work? Task completion ends at handoff. Ownership ends when the outcome is confirmed.",
  },
  {
    icon: Brain,
    title: "Respect for Intelligence",
    text: "Clients and teammates are treated as capable adults who can handle real information. No hand-holding — straight information and systems that work.",
  },
] as const;

/* ─── section label ─── */

function SectionLabel({
  barClass,
  textClass,
  children,
}: {
  barClass: string;
  textClass: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div variants={fadeUp} className="flex items-center gap-2 mb-6">
      <div className={`h-1 w-6 rounded-full ${barClass}`} />
      <h2 className={`text-xs font-semibold uppercase tracking-wider ${textClass}`}>
        {children}
      </h2>
    </motion.div>
  );
}

/* ─── component ─── */

export default function AboutPageContent() {
  return (
    <div className="min-h-screen bg-background">
      {/* ── Hero ── */}
      <header className="relative overflow-hidden border-b bg-muted/20">
        <div className="pointer-events-none absolute inset-0 gradient-mesh opacity-60" />
        <div className="pointer-events-none absolute -top-32 -right-32 h-80 w-80 rounded-full bg-accent/[0.04] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-accent/[0.04] blur-3xl" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 pt-6 pb-10 sm:pb-14">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
            <Link
              href="/"
              className="text-sm text-muted-foreground hover:text-accent transition-colors mb-6 inline-flex items-center gap-1.5"
            >
              <ArrowLeft size={14} />
              Back to Training Hub
            </Link>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.34, 1.56, 0.64, 1] }}
            className="text-4xl sm:text-5xl font-black tracking-tight text-foreground mb-3"
          >
            About Obsidion
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground leading-relaxed max-w-2xl"
          >
            Who we are, what makes us different, how we position against competitors,
            and the culture that drives everything we build.
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 0.5, duration: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
            className="mt-6 h-px w-24 bg-gradient-to-r from-accent via-accent/60 to-transparent origin-left"
          />
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">
        {/* ── Mission ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Our Mission
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
          >
            <p className="text-base sm:text-lg leading-relaxed text-foreground mb-4">
              Obsidion exists because most small and mid-size businesses in specialized industries are underserved.
              Generic agencies are slow, expensive, and don&apos;t understand regulated markets. DIY tools are cheap
              but leave the owner doing the work. Vertical platforms do one thing and lock you in.{" "}
              <span className="font-semibold text-accent">None of them solve the whole problem.</span>
            </p>
            <p className="text-base sm:text-lg leading-relaxed text-foreground mb-4">
              Obsidion builds the full digital infrastructure stack — custom website, local SEO, automated remarketing,
              and branded mobile app — as a single integrated system, purpose-built for the industries we serve.
            </p>
            <div className="mt-6 flex items-center gap-4 rounded-xl bg-accent/[0.06] border border-accent/10 px-5 py-4">
              <div className="hidden sm:flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                <Target size={20} strokeWidth={1.8} />
              </div>
              <p className="text-sm sm:text-base font-semibold text-foreground leading-relaxed">
                One team, one system, one outcome. Speed, integration, and industry knowledge are the foundation.
                Everything else is built on top of those three things.
              </p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── What Makes Us Different ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What Makes Us Different
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {DIFFERENTIATORS.map((d) => {
              const Icon = d.icon;
              return (
                <motion.div
                  key={d.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-lg"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{d.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {d.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Competitive Positioning ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            How We&apos;re Positioned
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Understanding who we&apos;re up against on a call helps frame the value clearly.
            Three categories come up most often — here&apos;s how to handle each.
          </motion.p>

          <div className="grid grid-cols-1 gap-6">
            {COMPETITORS.map((comp) => {
              const Icon = comp.icon;
              const s = comp.styles;
              return (
                <motion.div
                  key={comp.type}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
                >
                  <div className={`flex items-center gap-3 px-6 py-4 border-b border-border ${s.headerBg}`}>
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${s.iconBox}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="font-bold tracking-tight">vs. {comp.type}</h3>
                      {"subtitle" in comp && comp.subtitle && (
                        <p className="text-xs text-muted-foreground">{comp.subtitle}</p>
                      )}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 mb-6">
                      {comp.points.map((pt) => (
                        <div key={pt.label}>
                          <p className="text-sm font-semibold text-foreground mb-1">{pt.label}</p>
                          <p className="text-sm text-muted-foreground leading-relaxed">{pt.text}</p>
                        </div>
                      ))}
                    </div>

                    <div className={`relative rounded-xl border px-5 py-4 ${s.quoteBg}`}>
                      <Quote size={16} className={`absolute top-3 left-3 ${s.quoteIcon}`} />
                      <p className="text-sm italic leading-relaxed text-foreground pl-5">
                        &ldquo;{comp.framing}&rdquo;
                      </p>
                      <p className={`text-[11px] font-semibold uppercase tracking-wider mt-2 pl-5 ${s.quoteLabel}`}>
                        Call Framing
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Culture ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Culture &amp; Values
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Obsidion operates the way it tells clients to run their businesses: with speed,
            accountability, and no tolerance for vague outcomes.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CULTURE_VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={val.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-purple-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent mb-4 transition-colors group-hover:bg-purple-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">{val.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{val.text}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Org Chart ── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={fadeIn}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-dashed border-border bg-muted/30 p-8 sm:p-12 text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-muted-foreground mx-auto mb-4">
              <Users size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-bold tracking-tight mb-2">Team &amp; Org Chart</h3>
            <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
              Team structure and reporting lines are being finalized. This section will be
              updated as the org chart is confirmed.
            </p>
          </motion.div>
        </motion.section>
      </main>

      {/* ── Footer ── */}
      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">
            Obsidion Training Hub &middot; Shared section — visible to all roles
          </p>
          <img
            src={publicFile("/logos/logo.png")}
            alt="Obsidion"
            className="h-6 w-auto opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}
