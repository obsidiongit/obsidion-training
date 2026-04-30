"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Sparkles,
  Brain,
  Video,
  Search,
  Presentation,
  Mic,
  Palette,
  MessageSquare,
  Smartphone,
  Wrench,
  ExternalLink,
  Lightbulb,
  Target,
  BarChart3,
  Shield,
  Clock,
  CheckCircle2,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── types ─── */

interface ToolCard {
  icon: typeof Sparkles;
  name: string;
  tagline: string;
  color: string;
  bgColor: string;
  borderColor: string;
  url?: string;
}

interface UseCase {
  icon: typeof Sparkles;
  title: string;
  description: string;
}

/* ─── data ─── */

const TOOLS: ToolCard[] = [
  {
    icon: Brain,
    name: "Claude (Anthropic)",
    tagline: "AI force multiplier — research, draft, strategize",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    url: "https://claude.ai",
  },
  {
    icon: Search,
    name: "Facebook Ad Library",
    tagline: "See what ads prospects are running — research before you reach out",
    color: "text-emerald-accent",
    bgColor: "bg-emerald-accent/10",
    borderColor: "border-emerald-accent/20",
    url: "https://www.facebook.com/ads/library",
  },
  {
    icon: Video,
    name: "Loom",
    tagline: "Personalized video outreach that stands out",
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    borderColor: "border-purple-accent/20",
    url: "https://loom.com",
  },
  {
    icon: Target,
    name: "Apollo.io",
    tagline: "Self-service lead engine — find your own prospects",
    color: "text-amber-accent",
    bgColor: "bg-amber-accent/10",
    borderColor: "border-amber-accent/20",
    url: "https://apollo.io",
  },
  {
    icon: Presentation,
    name: "Miro",
    tagline: "Quick visual presentations and pitch boards",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    url: "https://miro.com",
  },
  {
    icon: Palette,
    name: "Canva for Teams",
    tagline: "Brand assets, proposals, and approved graphics",
    color: "text-emerald-accent",
    bgColor: "bg-emerald-accent/10",
    borderColor: "border-emerald-accent/20",
    url: "https://canva.com",
  },
  {
    icon: MessageSquare,
    name: "Slack / Discord",
    tagline: "Internal coordination with team and leadership",
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    borderColor: "border-purple-accent/20",
    url: "https://discord.gg/X7fE7F2NvK",
  },
  {
    icon: Smartphone,
    name: "Your Phone",
    tagline: "Use your personal phone for outbound calls — startup mode",
    color: "text-muted-foreground",
    bgColor: "bg-muted",
    borderColor: "border-border",
  },
];

const CLAUDE_USE_CASES: UseCase[] = [
  {
    icon: Search,
    title: "Prospect Research",
    description:
      "Drop a company URL or LinkedIn profile into Claude and get a full breakdown — what they do, pain points, and what angle to lead with.",
  },
  {
    icon: Target,
    title: "Outreach Drafting",
    description:
      "Generate personalized cold emails, LinkedIn messages, and follow-up sequences tailored to the prospect's industry.",
  },
  {
    icon: Shield,
    title: "Objection Prep",
    description:
      "Feed Claude what you know about a prospect before a call and get back likely objections with suggested responses.",
  },
  {
    icon: Lightbulb,
    title: "Vertical Brainstorming",
    description:
      "Explore new industries, niches, and angles. Identify underserved markets, seasonal opportunities, or emerging verticals.",
  },
  {
    icon: BarChart3,
    title: "Proposal Writing",
    description:
      "Draft custom proposal sections, ROI projections, and executive summaries that are specific to the prospect.",
  },
  {
    icon: CheckCircle2,
    title: "Post-Call Analysis",
    description:
      "Paste your call notes and have Claude extract action items, flag missed opportunities, and suggest next steps.",
  },
];

const CLAUDE_TOOLS_TABLE = [
  {
    tool: "Claude.ai (web/desktop)",
    purpose: "Conversational AI for research, drafting, and analysis",
    when: "Daily — prospect research, email drafts, brainstorming",
  },
  {
    tool: "Claude Co Work",
    purpose: "Collaborative AI workspace for longer projects",
    when: "Proposal building, campaign planning, deep research",
  },
  {
    tool: "Claude Code",
    purpose: "Terminal-based coding assistant",
    when: "Building automations or custom outreach tools",
  },
];

const LOOM_PLAYS = [
  {
    title: "Prospecting VSLs",
    description:
      "60–90 second personalized videos for cold outreach. Pull up their website, Google listing, or social media and narrate what you see and what you'd improve.",
  },
  {
    title: "Follow-Up Videos",
    description:
      "After a demo or proposal, send a Loom recapping key points and next steps. Keeps momentum and shows effort.",
  },
  {
    title: "Proposal Walkthroughs",
    description:
      "Instead of emailing a PDF, record yourself walking through the proposal. Explain pricing, deliverables, and why it's structured that way.",
  },
  {
    title: "Re-Engagement",
    description:
      "For stale deals, a quick personal video can restart a conversation that a text email never would.",
  },
];

const CALL_RECORDING_TIPS = [
  {
    icon: Lightbulb,
    title: "Team Review",
    text: "Recorded calls get reviewed in team meetings so everyone can learn from real conversations — what worked, what didn't.",
  },
  {
    icon: BarChart3,
    title: "Self-Coaching",
    text: "Listen back to your own calls to catch patterns you miss in the moment — filler words, missed objections, pacing.",
  },
  {
    icon: Shield,
    title: "Quality & Consistency",
    text: "Recordings help leadership verify that the product is being positioned correctly and prospects are being treated well.",
  },
  {
    icon: Sparkles,
    title: "Training Library",
    text: "Great calls become training material for the team. Your best calls can be the example others learn from.",
  },
];

const ONBOARDING_PRIORITY = [
  { day: "Day 1–2", tools: ["Claude (account + prompting walkthrough)", "Loom (account + first test recording)", "Slack / Discord (channels + introductions)", "Apollo.io (account + first list build)"] },
  { day: "Day 3–5", tools: ["Miro (account + first board)", "Canva (workspace + brand asset review)", "Facebook Ad Library walkthrough", "Call recording setup (OBS or phone app)"] },
];

/* ─── component ─── */

export default function TechWeUseContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Your Tech Stack"
        title="Tech We Use"
        description="The tools you'll use daily to prospect, sell, close, and manage your pipeline. Learn them well — they're the difference between grinding and scaling."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Tool Overview Grid ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Your Stack at a Glance
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Eight tools. That&apos;s it. You don&apos;t need to master all of them on day
            one, but you need to know what each one does and where it fits into
            your daily workflow.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {TOOLS.map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.name}
                  variants={fadeUp}
                  className={`group relative rounded-xl border ${tool.borderColor} bg-card p-5 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5`}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${tool.bgColor} ${tool.color} transition-colors`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="text-sm font-bold tracking-tight">
                          {tool.name}
                        </h3>
                        {tool.url && (
                          <a
                            href={tool.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-muted-foreground/40 hover:text-accent transition-colors"
                          >
                            <ExternalLink size={12} />
                          </a>
                        )}
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed mt-1">
                        {tool.tagline}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Claude Deep Dive ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Claude — Your AI Force Multiplier
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            Claude is woven into how Obsidion operates. As an AE, you should be
            using Claude constantly to think sharper, move faster, and do more
            than any single rep could on their own.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4 mb-8 flex items-start gap-3"
          >
            <Sparkles size={18} className="text-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">
                Reps who learn to prompt Claude well will consistently
                outperform reps who don&apos;t.
              </span>{" "}
              Treat it like a junior analyst who&apos;s available 24/7 — the better
              your questions, the better the output. The goal is to multiply
              your capacity so one AE can do the work of three.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {CLAUDE_USE_CASES.map((uc) => {
              const Icon = uc.icon;
              return (
                <motion.div
                  key={uc.title}
                  variants={fadeUp}
                  className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent/10 text-accent mb-3">
                    <Icon size={18} strokeWidth={1.8} />
                  </div>
                  <h4 className="text-sm font-bold tracking-tight mb-1.5">
                    {uc.title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {uc.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm"
          >
            <div className="px-6 py-4 border-b border-border bg-accent/[0.03]">
              <h3 className="font-bold tracking-tight text-sm">
                Claude Tools You Should Know
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">
                      Tool
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">
                      What It Does
                    </th>
                    <th className="text-left px-6 py-3 font-semibold text-accent text-xs uppercase tracking-wider">
                      When to Use
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {CLAUDE_TOOLS_TABLE.map((row) => (
                    <tr
                      key={row.tool}
                      className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors"
                    >
                      <td className="px-6 py-4 font-medium text-foreground whitespace-nowrap">
                        {row.tool}
                      </td>
                      <td className="px-6 py-4 text-muted-foreground hidden sm:table-cell">
                        {row.purpose}
                      </td>
                      <td className="px-6 py-4 text-foreground">
                        {row.when}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Facebook Ad Library Deep Dive ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Facebook Ad Library — Prospect Research
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            Before you reach out to a prospect, check if they&apos;re already
            running ads. The{" "}
            <a
              href="https://www.facebook.com/ads/library"
              target="_blank"
              rel="noopener noreferrer"
              className="text-emerald-accent hover:underline font-medium"
            >
              Meta Ad Library
            </a>{" "}
            is free, public, and shows every active ad a business is running
            on Facebook and Instagram.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4 mb-8 flex items-start gap-3"
          >
            <Search size={18} className="text-emerald-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">
                If a prospect is already spending money on ads, they&apos;re a
                warmer lead.
              </span>{" "}
              You can reference their current creatives in your outreach —
              &quot;I saw the ad you&apos;re running for X, here&apos;s what I&apos;d
              tweak&quot; is a much stronger opener than a generic cold email.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                title: "Pre-Call Research",
                text: "Search the prospect's business name to see if they have active ads. Note what they're promoting and what their creative looks like.",
              },
              {
                title: "Outreach Personalization",
                text: "Reference their ads in your cold email or Loom. Showing you've done homework sets you apart from every other rep.",
              },
              {
                title: "Competitive Intelligence",
                text: "Search competitors in the prospect's market to understand what's running in their space and where the gaps are.",
              },
              {
                title: "Upsell Opportunities",
                text: "For existing clients, check their ad library to see if there are services they're paying someone else for that Obsidion could handle.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-emerald-accent/30 hover:shadow-md"
              >
                <h4 className="text-sm font-bold tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Loom Deep Dive ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Loom — Video Sales Letters
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            A personalized video in a prospect&apos;s inbox stands out. While every
            other agency sends templated emails, you&apos;re sending a 60-second
            video where you&apos;ve pulled up their website, walked through what&apos;s
            broken, and shown them exactly what you&apos;d fix. That&apos;s the play.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4 mb-8 flex items-start gap-3"
          >
            <Video size={18} className="text-purple-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Outbound VSLs are one of the strongest tools in a modern sales stack.</span>{" "}
              We expect every AE to be using Loom aggressively for prospecting, follow-ups, and proposal delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {LOOM_PLAYS.map((play, i) => (
              <motion.div
                key={play.title}
                variants={fadeUp}
                className="group relative rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-purple-accent/30 hover:shadow-md"
              >
                <div className="absolute top-4 right-4 text-2xl font-black text-muted/30 select-none">
                  {i + 1}
                </div>
                <h4 className="text-sm font-bold tracking-tight mb-2">
                  {play.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed pr-6">
                  {play.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-sm font-bold tracking-tight mb-4">
              Loom Best Practices
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Keep videos under 2 minutes for cold outreach",
                "Always show their actual business — generic videos get ignored",
                "Clean background, good lighting, look professional",
                "Include a clear CTA at the end of every video",
                "Track opens and views to prioritize follow-ups",
                "Use screen share + camera for maximum engagement",
              ].map((tip) => (
                <div
                  key={tip}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 text-purple-accent shrink-0"
                  />
                  {tip}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── Apollo.io Deep Dive ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Apollo.io — Lead Generation
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Don&apos;t wait for marketing to hand you leads — go find them. Apollo is
            your self-service lead engine for building targeted prospect lists
            across LinkedIn, company databases, and social platforms.
          </motion.p>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <motion.div
              variants={fadeUp}
              className="lg:col-span-2 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-bold tracking-tight mb-4">
                What Apollo Does
              </h3>
              <ul className="space-y-3">
                {[
                  "Search and filter prospects by industry, location, company size, and revenue",
                  "Pull verified email addresses and phone numbers",
                  "Build targeted prospect lists for outreach campaigns",
                  "Research companies before calls — funding, team size, tech stack",
                  "Use intent data to prioritize actively searching prospects",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-3 rounded-2xl border border-border bg-card p-6 shadow-sm"
            >
              <h3 className="text-base font-bold tracking-tight mb-4">
                Where to Prospect
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    platform: "LinkedIn",
                    note: "Primary B2B prospecting channel. Search by title, company, industry.",
                  },
                  {
                    platform: "Company Websites",
                    note: "Apollo enriches with website info, tech stack, employee data.",
                  },
                  {
                    platform: "X (Twitter)",
                    note: "Find engaged business owners and decision-makers in certain verticals.",
                  },
                  {
                    platform: "Facebook",
                    note: "Local business owners (restaurants, salons, contractors) active on FB pages.",
                  },
                ].map((p) => (
                  <div
                    key={p.platform}
                    className="rounded-lg border border-border/60 bg-background p-4"
                  >
                    <div className="text-sm font-bold text-foreground mb-1">
                      {p.platform}
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {p.note}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <Target size={18} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Refresh lists weekly.</span>{" "}
              Build lists by vertical and geography, enrich contacts with
              verified emails and direct dials, then export into your outreach
              sequence (email + Loom + phone). Don&apos;t work stale data.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Miro ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Miro — Quick Visual Pitches
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Sometimes a prospect needs to <em>see</em> the plan, not just hear
            it. Miro is a free collaborative whiteboard tool that lets you throw
            together something polished in 10 minutes.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              {
                title: "Discovery Visuals",
                text: "Map out a prospect's current state vs. where you'll take them.",
              },
              {
                title: "Quick Proposals",
                text: "For smaller deals or early conversations where a full PDF is overkill.",
              },
              {
                title: "Process Diagrams",
                text: "Show onboarding flow, build timeline, or how our products integrate.",
              },
              {
                title: "Competitive Comparisons",
                text: "Visual side-by-side of Obsidion vs. their current solution.",
              },
            ].map((item) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className="rounded-xl border border-border bg-card p-5 shadow-sm transition-all duration-300 hover:border-accent/30 hover:shadow-md"
              >
                <h4 className="text-sm font-bold tracking-tight mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Recording Your Calls ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-rose-500" textClass="text-rose-500">
            Recording Your Calls
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-4"
          >
            We&apos;re a startup, so there&apos;s no fancy call recording platform —
            but we still expect you to record your sales calls. Recordings
            get pulled up in team meetings so we can all listen back and
            sharpen how we handle conversations.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-rose-500/20 bg-rose-500/[0.04] px-5 py-4 mb-8 flex items-start gap-3"
          >
            <Mic size={18} className="text-rose-500 mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">How to record:</span>{" "}
              For desktop/Zoom calls,{" "}
              <a
                href="https://obsproject.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-rose-500 hover:underline font-medium"
              >
                OBS Studio
              </a>{" "}
              (free) works great — just hit record before the call. For phone
              calls, use a call-recording app on your device. The tool
              doesn&apos;t matter as long as you have the recording.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {CALL_RECORDING_TIPS.map((tip) => {
              const Icon = tip.icon;
              return (
                <motion.div
                  key={tip.title}
                  variants={fadeUp}
                  className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-rose-500/10 text-rose-500">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold mb-1">{tip.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tip.text}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <h3 className="text-sm font-bold tracking-tight mb-4">
              Your Responsibilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Record every sales call — OBS for desktop, a recording app for phone",
                "Save recordings where they can be pulled for team meetings",
                "Flag any calls where you need coaching or review",
                "Listen back to your own calls weekly to self-assess",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                >
                  <CheckCircle2
                    size={14}
                    className="mt-0.5 text-rose-500 shrink-0"
                  />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ── Supporting Tools (Canva, Slack, Mobile) ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Supporting Tools
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              {
                icon: Palette,
                title: "Canva for Teams",
                color: "text-emerald-accent",
                bg: "bg-emerald-accent/10",
                points: [
                  "Pull approved brand assets for proposals and emails",
                  "Access proposal templates and one-pager designs",
                  "Do not create off-brand graphics — use approved assets",
                ],
              },
              {
                icon: MessageSquare,
                title: "Slack / Discord",
                color: "text-purple-accent",
                bg: "bg-purple-accent/10",
                url: "https://discord.gg/X7fE7F2NvK",
                points: [
                  "Day-to-day coordination with managers and delivery",
                  "Sensitive details belong in CRM and email, not chat",
                  "Check channels at minimum start and end of each day",
                ],
              },
              {
                icon: Smartphone,
                title: "Your Phone",
                color: "text-muted-foreground",
                bg: "bg-muted",
                points: [
                  "Use your personal phone for outbound and inbound calls",
                  "Always have your phone ready during business hours",
                  "Every call should have a purpose and a plan",
                ],
              },
            ].map((tool) => {
              const Icon = tool.icon;
              return (
                <motion.div
                  key={tool.title}
                  variants={fadeUp}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-xl ${tool.bg} ${tool.color}`}
                    >
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight flex items-center gap-2">
                      {tool.title}
                      {"url" in tool && tool.url && (
                        <a href={tool.url as string} target="_blank" rel="noopener noreferrer" className="text-muted-foreground/40 hover:text-purple-accent transition-colors">
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </h3>
                  </div>
                  <ul className="space-y-2.5">
                    {tool.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-border shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── First-Week Setup ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            First-Week Setup
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-8"
          >
            Your team lead will walk you through account creation, permissions,
            and setup for every tool. If you&apos;re missing access to anything after
            your first week, open a single thread with your manager — don&apos;t work
            around the stack.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {ONBOARDING_PRIORITY.map((phase) => (
              <motion.div
                key={phase.day}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Clock size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight">
                    {phase.day}
                  </h3>
                </div>
                <ol className="space-y-2.5">
                  {phase.tools.map((tool, i) => (
                    <li
                      key={tool}
                      className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent text-xs font-bold">
                        {i + 1}
                      </span>
                      {tool}
                    </li>
                  ))}
                </ol>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="tech"
            upNext={[
              { slug: "daily-structure", title: "Daily Structure" },
              { slug: "meetings", title: "Meeting Cadence" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">
            Obsidion Training Hub &middot; AE Tech Stack
          </p>
          <img
            src="/logos/logo.png"
            alt="Obsidion"
            className="h-6 w-auto opacity-30"
          />
        </div>
      </footer>
    </div>
  );
}
