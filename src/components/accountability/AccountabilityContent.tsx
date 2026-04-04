"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  TrendingUp,
  AlertTriangle,
  XCircle,
  CheckCircle2,
  Activity,
  Shield,
  Users,
  Lightbulb,
  Clock,
  Database,
  Calendar,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  scaleIn,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const SUCCESS_ITEMS = [
  {
    category: "Activity & Output",
    icon: Activity,
    items: [
      {
        headline: "Hitting or exceeding activity minimums",
        detail:
          "Calls, demos, and proposals per week are non-negotiable floors, not soft goals. Top performers treat them as the starting point.",
      },
      {
        headline: "Self-sourcing pipeline",
        detail:
          "Thriving AEs prospect aggressively — LinkedIn, cold outreach, referrals, warm lists. If your only source of deals is inbound, you're one slow week away from a dry pipeline.",
      },
      {
        headline: "Closing at or above quota by end of ramp",
        detail:
          "The ramp period is protection, not permission to be unserious. Use the draw to stabilize while you build — not as a replacement for production.",
      },
    ],
  },
  {
    category: "Process & Discipline",
    icon: Database,
    items: [
      {
        headline: "CRM hygiene",
        detail:
          "Your pipeline is always current, accurately staged, and every deal has a next step. Leadership forecasts from your data — stale records don't just hurt you, they hurt the team.",
      },
      {
        headline: "Showing up prepared to every meeting",
        detail:
          "Numbers memorized, pipeline updated, top 3 deals ready. Coming to a pipeline meeting without your numbers is like showing up to a demo without knowing the product.",
      },
      {
        headline: "Immediate post-call CRM updates",
        detail:
          "Not 'before end of day.' Immediately after hanging up. The deals that fall through are almost always the ones where follow-up was vague and notes were stale.",
      },
    ],
  },
  {
    category: "Mindset & Coachability",
    icon: Lightbulb,
    items: [
      {
        headline: "Implementing feedback quickly",
        detail:
          "When leadership calls out a pattern — a talk track that isn't landing, a close you keep blowing — you adjust in the next rep, not 'eventually.'",
      },
      {
        headline: "Bringing real intel to meetings",
        detail:
          "What's working, what isn't, what objections you're seeing. AEs who contribute this kind of information are the ones who get the most coaching back.",
      },
      {
        headline: "Earning trust through product knowledge",
        detail:
          "You know the products cold. You know pricing. You don't make things up — you say 'let me get you the right answer' and you follow through.",
      },
    ],
  },
] as const;

const EXIT_ITEMS = [
  {
    category: "Activity Failures",
    icon: Clock,
    items: [
      {
        headline: "Consistently falling short of minimum activity metrics",
        detail:
          "There's a threshold where missing targets consistently stops being a coaching conversation and becomes a question about fit.",
      },
      {
        headline: "Lack of urgency",
        detail:
          "Slow follow-ups, missed callbacks, proposals untouched for days. The rep who responds in 10 minutes closes at 4× the rate of the one who waits until tomorrow.",
      },
    ],
  },
  {
    category: "Integrity Failures",
    icon: Shield,
    items: [
      {
        headline: "Misrepresenting the product, pricing, or terms",
        detail:
          "If you're telling prospects things that aren't true to push a deal through, the relationship ends. There is no version of this that gets a second chance.",
      },
      {
        headline: "Stale or inaccurate CRM data",
        detail:
          "Leadership uses your pipeline to forecast real revenue. If you're leaving records empty or carrying phantom deals, everyone above you is making decisions based on fiction.",
      },
    ],
  },
  {
    category: "Engagement Failures",
    icon: Users,
    items: [
      {
        headline: "Missing meetings without communication",
        detail:
          "One absence gets noted. A pattern signals disengagement — and disengagement is usually the first sign that the relationship is already ending in practice.",
      },
      {
        headline: "Showing up unprepared repeatedly",
        detail:
          "To meetings, demos, and calls. Being the person who doesn't know their numbers and is winging it on a live prospect call is a performance issue.",
      },
    ],
  },
  {
    category: "Development Failures",
    icon: TrendingUp,
    items: [
      {
        headline: "Unwillingness to take coaching and adapt",
        detail:
          "If the same feedback surfaces three times with no visible change, that's not a coaching problem — it's a fit problem.",
      },
      {
        headline: "Missing quota after ramp with no improvement trajectory",
        detail:
          "If you're approaching day 90 and the numbers aren't there — and the trend line isn't improving — the conversation shifts from coaching to whether this seat is the right match.",
      },
    ],
  },
] as const;

const BRIGHT_LINE_TIERS = [
  {
    status: "Green",
    label: "Thriving",
    color: "emerald",
    borderClass: "border-emerald-accent/30",
    bgClass: "bg-emerald-accent/[0.04]",
    dotClass: "bg-emerald-accent",
    labelClass: "text-emerald-accent",
    badgeBg: "bg-emerald-accent/10",
    icon: CheckCircle2,
    description:
      "You're on track. Activity metrics hit or beaten. Pipeline healthy and current. CRM clean. Closing at a pace consistent with quota. You bring real contributions to meetings and implement coaching without being asked twice.",
    indicators: [
      "Activity minimums met or exceeded every week",
      "Pipeline has 5+ active opportunities with clear next steps",
      "CRM updated same-day, every day",
      "Closing at quota pace or ahead of it",
      "Implementing feedback within 1–2 reps",
    ],
  },
  {
    status: "Yellow",
    label: "At Risk",
    color: "amber",
    borderClass: "border-amber-accent/30",
    bgClass: "bg-amber-accent/[0.04]",
    dotClass: "bg-amber-accent",
    labelClass: "text-amber-accent",
    badgeBg: "bg-amber-accent/10",
    icon: AlertTriangle,
    description:
      "Something is off. Maybe activity is down, CRM is getting stale, or deals have stalled. You're not in crisis, but the trajectory isn't right. Yellow means a conversation is coming if the trend continues.",
    indicators: [
      "Activity inconsistent — hitting targets some weeks, missing others",
      "Pipeline is thin or deals have sat without movement for 5+ days",
      "CRM updates happening reactively, not daily",
      "Closing below quota pace but showing effort",
      "Feedback implemented slowly or partially",
    ],
  },
  {
    status: "Red",
    label: "Needs Immediate Change",
    color: "red",
    borderClass: "border-red-400/30",
    bgClass: "bg-red-400/[0.04]",
    dotClass: "bg-red-400",
    labelClass: "text-red-400",
    badgeBg: "bg-red-400/10",
    icon: XCircle,
    description:
      "Multiple things are failing simultaneously, the trend line is down, and coaching hasn't produced visible change. This is not a static state — it's a trajectory. You can pull out of red, but it requires a sharp, visible change in a short window of time.",
    indicators: [
      "Activity minimums consistently missed week over week",
      "Pipeline is empty or built on stale phantom deals",
      "CRM data unreliable or updated infrequently",
      "No closed deals or clear near-closes during ramp",
      "Same coaching notes repeated with no visible adjustment",
    ],
  },
] as const;

const CHECKPOINTS = [
  {
    day: "Day 30",
    title: "Foundation Check",
    color: "accent",
    borderClass: "border-accent/30",
    bgClass: "bg-accent/[0.04]",
    labelClass: "text-accent",
    summary: "Have you internalized the product, the process, and the rhythm?",
    bullets: [
      "All onboarding sections completed or actively in progress",
      "CRM set up with real prospects, not placeholders",
      "Attending meetings prepared and participating",
      "Activity tracked daily, even if volume is still building",
      "Completing at least 1–2 demos per week",
    ],
    note: "We're not asking for closed deals yet. What matters here is that the inputs are in place.",
    noteStyle: "muted",
  },
  {
    day: "Day 60",
    title: "Ramp Check",
    color: "purple-accent",
    borderClass: "border-purple-accent/30",
    bgClass: "bg-purple-accent/[0.04]",
    labelClass: "text-purple-accent",
    summary: "Are you in the game?",
    bullets: [
      "Activity minimums hit consistently for 2–3 weeks",
      "Pipeline has 5+ legitimate opportunities with clear next steps",
      "At least 1 closed deal, or a clear near-close in progress",
      "CRM current and accurate — no coaching needed on this",
      "Feedback from meetings implemented visibly",
    ],
    note: "If activity is still inconsistent and pipeline is thin at day 60, the ramp protection conversation changes.",
    noteStyle: "warning",
  },
  {
    day: "Day 90",
    title: "Production Check",
    color: "emerald-accent",
    borderClass: "border-emerald-accent/30",
    bgClass: "bg-emerald-accent/[0.04]",
    labelClass: "text-emerald-accent",
    summary: "Are you on a path to a real production number?",
    bullets: [
      "Closing at or near quota pace",
      "Self-sourcing a meaningful portion of your own pipeline",
      "No persistent issues with CRM, meeting prep, or follow-up speed",
      "Demonstrating product knowledge independently on calls",
      "Pipeline healthy enough to sustain next month's numbers",
    ],
    note: "If you're not here and you've been getting feedback at 30 and 60 — day 90 is the point where the decision about the relationship gets made. It won't be a surprise.",
    noteStyle: "critical",
  },
] as const;

/* ─── main component ─── */

export default function AccountabilityContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Accountability"
        title="What Wins Here & What Gets You Exited"
        description="No ambiguity. Here's exactly what separates top performers from reps who don't last."
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-16">

        {/* ── Framing callout ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            This is a commission-only role. Nobody is going to micromanage you
            into success — but nobody is going to quietly ignore a rep who is
            consistently falling short of the basics either. This section exists
            so there is zero confusion about what{" "}
            <span className="text-foreground font-medium">doing the job</span>{" "}
            actually means.
          </p>
        </motion.div>

        {/* ── What Success Looks Like ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            What Success Looks Like
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            These are specific, observable behaviors — not aspirational traits. Top performers
            do all of these, consistently.
          </motion.p>

          <div className="space-y-4">
            {SUCCESS_ITEMS.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  variants={fadeUp}
                  className="rounded-2xl border border-emerald-accent/15 bg-emerald-accent/[0.03] overflow-hidden"
                >
                  <div className="flex items-center gap-3 px-5 py-3.5 border-b border-emerald-accent/10">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-accent/10">
                      <Icon size={14} className="text-emerald-accent" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-accent">
                      {group.category}
                    </span>
                  </div>
                  <ul className="divide-y divide-emerald-accent/[0.08]">
                    {group.items.map((item) => (
                      <li key={item.headline} className="px-5 py-3.5 flex items-start gap-3">
                        <CheckCircle2
                          size={16}
                          className="text-emerald-accent shrink-0 mt-0.5"
                          strokeWidth={1.8}
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.headline}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── What Gets You Exited ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            What Gets You Exited
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            These aren&apos;t gray areas. These are the behaviors that end the
            relationship — slowly or quickly, depending on how fast they compound.
          </motion.p>

          <div className="space-y-4">
            {EXIT_ITEMS.map((group) => {
              const Icon = group.icon;
              return (
                <motion.div
                  key={group.category}
                  variants={fadeUp}
                  className="rounded-2xl border border-red-400/15 bg-red-400/[0.03] overflow-hidden"
                >
                  <div className="flex items-center gap-3 px-5 py-3.5 border-b border-red-400/10">
                    <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-400/10">
                      <Icon size={14} className="text-red-400" strokeWidth={1.8} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-red-400">
                      {group.category}
                    </span>
                  </div>
                  <ul className="divide-y divide-red-400/[0.08]">
                    {group.items.map((item) => (
                      <li key={item.headline} className="px-5 py-3.5 flex items-start gap-3">
                        <XCircle
                          size={16}
                          className="text-red-400 shrink-0 mt-0.5"
                          strokeWidth={1.8}
                        />
                        <div>
                          <p className="text-sm font-semibold text-foreground">
                            {item.headline}
                          </p>
                          <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">
                            {item.detail}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Bright Line Framework ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Bright Line Framework
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            This isn&apos;t a formal review tool — it&apos;s a self-assessment.
            Use it to check where you stand before leadership has to tell you.
          </motion.p>

          <div className="space-y-4">
            {BRIGHT_LINE_TIERS.map((tier) => {
              const Icon = tier.icon;
              return (
                <motion.div
                  key={tier.status}
                  variants={scaleIn}
                  className={`rounded-2xl border ${tier.borderClass} ${tier.bgClass} overflow-hidden`}
                >
                  <div className={`flex items-center gap-3 px-5 py-4 border-b ${tier.borderClass}`}>
                    <div className={`h-2.5 w-2.5 rounded-full ${tier.dotClass} shrink-0`} />
                    <Icon size={16} className={`${tier.labelClass} shrink-0`} strokeWidth={1.8} />
                    <div className="flex-1 flex items-center gap-2">
                      <span className={`text-sm font-bold ${tier.labelClass}`}>
                        {tier.status}
                      </span>
                      <span className={`text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${tier.badgeBg} ${tier.labelClass}`}>
                        {tier.label}
                      </span>
                    </div>
                  </div>

                  <div className="px-5 py-4 space-y-3">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {tier.description}
                    </p>
                    <ul className="space-y-1.5">
                      {tier.indicators.map((indicator) => (
                        <li key={indicator} className="flex items-start gap-2">
                          <div className={`h-1.5 w-1.5 rounded-full ${tier.dotClass} shrink-0 mt-1.5`} />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {indicator}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── 30/60/90-Day Checkpoints ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            30 / 60 / 90-Day Checkpoints
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            Accountability expectations aren&apos;t uniform across the ramp period.
            Here&apos;s what each checkpoint looks like and what&apos;s being evaluated.
          </motion.p>

          <div className="space-y-4">
            {CHECKPOINTS.map((cp, i) => (
              <motion.div
                key={cp.day}
                variants={fadeUp}
                className={`rounded-2xl border ${cp.borderClass} ${cp.bgClass} overflow-hidden`}
              >
                <div className={`flex items-center gap-3 px-5 py-3.5 border-b ${cp.borderClass}`}>
                  <span className={`text-xs font-black uppercase tracking-widest ${cp.labelClass} tabular-nums`}>
                    {cp.day}
                  </span>
                  <span className="text-sm font-bold text-foreground">
                    — {cp.title}
                  </span>
                </div>

                <div className="px-5 py-4 space-y-3">
                  <p className={`text-xs font-semibold uppercase tracking-wider ${cp.labelClass}`}>
                    {cp.summary}
                  </p>

                  <ul className="space-y-1.5">
                    {cp.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <CheckCircle2 size={13} className={`${cp.labelClass} shrink-0 mt-0.5`} strokeWidth={2} />
                        <span className="text-xs text-muted-foreground leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div
                    className={`rounded-lg px-3.5 py-2.5 text-xs leading-relaxed ${
                      cp.noteStyle === "critical"
                        ? "border border-red-400/20 bg-red-400/[0.04] text-red-400/80"
                        : cp.noteStyle === "warning"
                        ? "border border-amber-accent/20 bg-amber-accent/[0.04] text-amber-accent/80"
                        : "border border-border bg-muted/30 text-muted-foreground"
                    }`}
                  >
                    {cp.note}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── Bottom Line ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-muted/20 px-5 py-5 space-y-2"
        >
          <p className="text-sm text-muted-foreground leading-relaxed">
            The reps who win here know what they need to do, do it without being
            asked, and bring back results. The reps who don&apos;t make it usually
            know they&apos;re struggling before leadership does — and they wait too
            long to say something.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            If something is off, say something early. The window to fix it is
            always bigger than it looks from inside the problem.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="accountability"
            upNext={[
              { slug: "certification", title: "Certification & Readiness Gate" },
              { slug: "meetings", title: "Meeting Cadence" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Obsidion Training Hub &middot; Accountability
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
