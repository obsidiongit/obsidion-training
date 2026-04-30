"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  CheckSquare,
  Brain,
  MessageSquareWarning,
  Phone,
  HandshakeIcon,
  Database,
  FileText,
  ArrowRight,
  Lock,
  Star,
  Trophy,
  ExternalLink,
  MessageCircle,
  ClipboardList,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

type GateStatus = "link" | "schedule" | "coming-soon";

interface Gate {
  number: number;
  title: string;
  summary: string;
  detail: string;
  status: GateStatus;
  statusLabel: string;
  linkHref?: string;
  linkLabel?: string;
  passMark?: string;
  bullets: string[];
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

const GATES: Gate[] = [
  {
    number: 1,
    title: "Complete All Onboarding Sections",
    summary: "Work through every section in the hub — actually read them.",
    detail:
      "About the Company, Product Knowledge, Getting Paid, Tech We Use, Performance Expectations, On the Call, Daily Structure, Meeting Cadence, and Accountability. The assessment gates below confirm retention — this gate confirms you've done the work.",
    status: "link",
    statusLabel: "Go to Hub",
    linkHref: "/role/account-executive",
    linkLabel: "Open AE Hub",
    bullets: [
      "All 9 hub sections visited and read",
      "Daily structure and checklist reviewed",
      "Comp structure and bonus tiers understood",
      "On the Call scripts and frameworks reviewed",
    ],
    icon: CheckSquare,
  },
  {
    number: 2,
    title: "Product Knowledge Assessment",
    summary: "Pass the quiz at the end of each vertical playbook.",
    detail:
      "Each playbook ends with a 12-question scored quiz. Pass 9 of 12 to clear the gate per vertical. You must pass all four active verticals — Cannabis, Food & Hospitality, Salon & Med Spa, and Automotive. Re-attempts are unlimited: review the relevant sections and retake when ready.",
    status: "link",
    statusLabel: "Open Playbooks",
    linkHref: "/role/account-executive/playbooks",
    linkLabel: "Go to Training Playbooks",
    passMark: "9 / 12 per vertical",
    bullets: [
      "Cannabis playbook quiz — 9/12 minimum",
      "Food & Hospitality quiz — 9/12 minimum",
      "Salon & Med Spa quiz — 9/12 minimum",
      "Automotive quiz — 9/12 minimum",
    ],
    icon: Brain,
  },
  {
    number: 3,
    title: "Objection Handling Assessment",
    summary: "Scenario-based assessment covering the 7 most common prospect objections.",
    detail:
      "You'll be given a real prospect statement and must choose the correct response — not just any reasonable answer. Objections covered: 'We already have a website,' 'Need to think about it,' 'No budget,' 'Locked in a contract,' 'Send me info,' 'Can you guarantee results?' and more.",
    status: "coming-soon",
    statusLabel: "Coming Soon",
    passMark: "75% or better",
    bullets: [
      "7 objection scenarios covered",
      "Must select the recommended talk track, not just a plausible one",
      "Unlimited re-attempts — review On the Call section between attempts",
    ],
    icon: MessageSquareWarning,
  },
  {
    number: 4,
    title: "Mock Discovery Call",
    summary: "Live or recorded role-play — you run the discovery, your manager plays the prospect.",
    detail:
      "Scored against a rubric across five categories: Opening, Qualification, Discovery, Positioning, and Next Step. You need 70 points out of 100 to pass. Schedule through Discord — your manager will set up a 30-minute session.",
    status: "schedule",
    statusLabel: "Schedule via Discord",
    passMark: "70 / 100 on rubric",
    bullets: [
      "Opening — credibility established, agenda set",
      "Qualification — budget, timeline, decision-maker probed",
      "Discovery — right questions, active listening",
      "Positioning — pain connected to the right product",
      "Next step — committed follow-up action",
    ],
    icon: Phone,
  },
  {
    number: 5,
    title: "Mock Closing Call",
    summary: "Present a proposal and close — with live objections from your manager.",
    detail:
      "Scored across: Proposal Presentation, Price Framing, Objection Handling, Trial Close, and Follow-Up Plan. You need 70/100 to pass. The close doesn't have to succeed — your process is what's being graded.",
    status: "schedule",
    statusLabel: "Schedule via Discord",
    passMark: "70 / 100 on rubric",
    bullets: [
      "Proposal tied clearly to discovery findings",
      "Value anchored before price is revealed",
      "Correct talk tracks used — not improvised",
      "Direct ask for commitment made",
      "Clear next step whether or not they close",
    ],
    icon: HandshakeIcon,
  },
  {
    number: 6,
    title: "CRM Proficiency Demo",
    summary: "Build a sample deal from scratch and walk it through the full pipeline.",
    detail:
      "Record a Loom or do it live with your manager. This gate tests whether you understand pipeline stages and can keep accurate records — not just whether you can click the right buttons.",
    status: "schedule",
    statusLabel: "Submit Loom or book live",
    bullets: [
      "Create a new contact and company record",
      "Log a discovery call with notes and outcome",
      "Set deal stage and close probability correctly",
      "Add a next step with a due date",
      "Move the deal through at least two stage changes",
    ],
    icon: Database,
  },
  {
    number: 7,
    title: "Practice Proposal Submission",
    summary: "Submit a completed proposal for a fictional prospect using the real template.",
    detail:
      "Invent a business, pick a vertical, and write a proposal as if it were a real deal. Must use the official template. Pricing must be accurate. Product recommendations must be tied to real pain points. Your manager reviews and signs off.",
    status: "schedule",
    statusLabel: "Submit to manager for review",
    bullets: [
      "Uses the official Obsidion proposal template",
      "Pricing is accurate and tier-appropriate",
      "Recommended products justified by prospect's stated needs",
      "Professional, specific, no filler language",
      "Includes a clear next step",
    ],
    icon: FileText,
  },
];

const DISCOVERY_RUBRIC = [
  { category: "Opening", what: "Credibility established, agenda set, tone professional", points: 20 },
  { category: "Qualification", what: "Budget, timeline, decision-maker identified or probed", points: 20 },
  { category: "Discovery", what: "Right questions asked, active listening demonstrated", points: 25 },
  { category: "Positioning", what: "Pain-to-product connection made clearly", points: 20 },
  { category: "Next Step", what: "Committed close with specific follow-up action", points: 15 },
];

const CLOSING_RUBRIC = [
  { category: "Proposal Presentation", what: "Clear, confident, tied to discovery findings", points: 20 },
  { category: "Price Framing", what: "Value anchored before price revealed", points: 20 },
  { category: "Objection Handling", what: "Correct talk tracks used — not improvised", points: 25 },
  { category: "Trial Close", what: "Direct ask for commitment made", points: 20 },
  { category: "Follow-Up Plan", what: "Concrete next step even if deal didn't close", points: 15 },
];

/* ─── helpers ─── */

function GateStatusBadge({ gate }: { gate: Gate }) {
  if (gate.status === "link" && gate.linkHref) {
    return (
      <Link
        href={gate.linkHref}
        className="inline-flex items-center gap-1.5 rounded-full bg-accent/10 px-3 py-1 text-[11px] font-semibold text-accent hover:bg-accent/20 transition-colors"
      >
        <ExternalLink size={11} />
        {gate.linkLabel ?? gate.statusLabel}
      </Link>
    );
  }
  if (gate.status === "schedule") {
    const isDiscord = gate.statusLabel.toLowerCase().includes("discord");
    if (isDiscord) {
      return (
        <a
          href="https://discord.gg/X7fE7F2NvK"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-full bg-purple-accent/10 px-3 py-1 text-[11px] font-semibold text-purple-accent hover:bg-purple-accent/20 transition-colors"
        >
          <MessageCircle size={11} />
          {gate.statusLabel}
        </a>
      );
    }
    return (
      <span className="inline-flex items-center gap-1.5 rounded-full bg-purple-accent/10 px-3 py-1 text-[11px] font-semibold text-purple-accent">
        <MessageCircle size={11} />
        {gate.statusLabel}
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-[11px] font-semibold text-muted-foreground">
      <Lock size={11} />
      {gate.statusLabel}
    </span>
  );
}

function RubricTable({
  rows,
}: {
  rows: { category: string; what: string; points: number }[];
}) {
  const total = rows.reduce((sum, r) => sum + r.points, 0);
  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/30">
            <th className="px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Category
            </th>
            <th className="hidden sm:table-cell px-4 py-2.5 text-left text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              What We're Evaluating
            </th>
            <th className="px-4 py-2.5 text-right text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
              Points
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border bg-card">
          {rows.map((row) => (
            <tr key={row.category} className="hover:bg-muted/20 transition-colors">
              <td className="px-4 py-3 text-sm font-semibold text-foreground">
                {row.category}
              </td>
              <td className="hidden sm:table-cell px-4 py-3 text-xs text-muted-foreground leading-relaxed">
                {row.what}
              </td>
              <td className="px-4 py-3 text-right text-sm font-bold text-accent tabular-nums">
                {row.points}
              </td>
            </tr>
          ))}
          <tr className="border-t border-border bg-muted/10">
            <td className="px-4 py-3 text-sm font-black text-foreground">
              Total
            </td>
            <td className="hidden sm:table-cell px-4 py-3 text-xs text-muted-foreground">
              Pass threshold: 70 points
            </td>
            <td className="px-4 py-3 text-right text-sm font-black text-foreground tabular-nums">
              {total}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

/* ─── main component ─── */

export default function CertificationContent({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Certification"
        title="Onboarding Certification & Readiness Gate"
        description="Nobody touches a live prospect until they've passed this gate."
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
            The Obsidion offer is positioned as a premium, expertise-driven
            service. The rep on a call with a prospect is the proof point before
            any contract is signed. This certification makes{" "}
            <span className="text-foreground font-medium">&quot;ready&quot;</span>{" "}
            objective rather than a gut feeling. Complete all seven gates and
            you go live.
          </p>
        </motion.div>

        {/* ── Progress Overview ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-3"
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Seven Gates
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            Every gate must be passed — no skips, no substitutions. Work through
            them in order.
          </motion.p>

          {/* compact gate index */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-2 gap-2"
          >
            {GATES.map((gate) => {
              const Icon = gate.icon;
              return (
                <div
                  key={gate.number}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-muted text-muted-foreground">
                    <Icon size={14} strokeWidth={1.8} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold text-muted-foreground/60 uppercase tracking-widest tabular-nums">
                        {String(gate.number).padStart(2, "0")}
                      </span>
                      <span className="text-xs font-semibold text-foreground truncate">
                        {gate.title}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* ── Gate detail cards ── */}
        <motion.div
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Gate Details
          </SectionLabel>

          <div className="space-y-4">
            {GATES.map((gate) => {
              const Icon = gate.icon;
              const isComingSoon = gate.status === "coming-soon";
              return (
                <motion.div
                  key={gate.number}
                  variants={scaleIn}
                  className={`rounded-2xl border overflow-hidden ${
                    isComingSoon
                      ? "border-border opacity-70"
                      : "border-border"
                  }`}
                >
                  {/* gate header */}
                  <div className="flex items-start gap-4 px-5 py-4 bg-card border-b border-border">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10">
                      <Icon size={17} className="text-accent" strokeWidth={1.8} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap mb-1">
                        <span className="text-[10px] font-black text-accent uppercase tracking-widest tabular-nums">
                          Gate {gate.number}
                        </span>
                        {gate.passMark && (
                          <span className="text-[10px] font-semibold text-emerald-accent bg-emerald-accent/10 px-2 py-0.5 rounded-full">
                            Pass: {gate.passMark}
                          </span>
                        )}
                      </div>
                      <h3 className="text-sm font-bold text-foreground leading-snug">
                        {gate.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {gate.summary}
                      </p>
                    </div>
                    <div className="shrink-0">
                      <GateStatusBadge gate={gate} />
                    </div>
                  </div>

                  {/* gate body */}
                  <div className="px-5 py-4 space-y-3 bg-muted/[0.02]">
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {gate.detail}
                    </p>
                    <ul className="space-y-1.5">
                      {gate.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <ArrowRight
                            size={12}
                            className="text-accent/60 shrink-0 mt-0.5"
                            strokeWidth={2}
                          />
                          <span className="text-xs text-muted-foreground leading-relaxed">
                            {b}
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

        {/* ── Assessment Rubrics ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-5"
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Assessment Rubrics
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed">
            Gates 4 and 5 are scored against these rubrics. Know what you&apos;re
            being evaluated on before you step into the role-play.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-2">
            <div className="flex items-center gap-2 mb-3">
              <Phone size={14} className="text-accent" strokeWidth={1.8} />
              <h3 className="text-sm font-bold text-foreground">
                Gate 4 — Discovery Call Rubric
              </h3>
            </div>
            <RubricTable rows={DISCOVERY_RUBRIC} />
          </motion.div>

          <motion.div variants={fadeUp} className="space-y-2 pt-2">
            <div className="flex items-center gap-2 mb-3">
              <HandshakeIcon size={14} className="text-accent" strokeWidth={1.8} />
              <h3 className="text-sm font-bold text-foreground">
                Gate 5 — Closing Call Rubric
              </h3>
            </div>
            <RubricTable rows={CLOSING_RUBRIC} />
          </motion.div>
        </motion.div>

        {/* ── Re-attempt Policy ── */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="space-y-4"
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Re-Attempt Policy
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 space-y-3"
          >
            <div className="flex items-center gap-2">
              <ClipboardList size={16} className="text-amber-accent" strokeWidth={1.8} />
              <span className="text-sm font-semibold text-foreground">
                No penalty for re-attempts. Review, practice, go again.
              </span>
            </div>
            <ul className="space-y-1.5">
              <li className="flex items-start gap-2">
                <span className="text-amber-accent shrink-0 mt-1.5 h-1 w-1 rounded-full bg-amber-accent block" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Quizzes (Gates 2 &amp; 3) — retake immediately after reviewing the relevant section.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-accent shrink-0 mt-1.5 h-1 w-1 rounded-full bg-amber-accent block" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  Mock calls (Gates 4 &amp; 5) — message your manager on{" "}
                  <a href="https://discord.gg/X7fE7F2NvK" target="_blank" rel="noopener noreferrer" className="text-purple-accent hover:underline font-medium">Discord</a>{" "}
                  to schedule a new session. No waiting period.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-amber-accent shrink-0 mt-1.5 h-1 w-1 rounded-full bg-amber-accent block" />
                <span className="text-xs text-muted-foreground leading-relaxed">
                  CRM demo and proposal (Gates 6 &amp; 7) — resubmit anytime after revisions.
                </span>
              </li>
            </ul>
            <p className="text-xs text-muted-foreground leading-relaxed pt-1 border-t border-amber-accent/15">
              The point isn&apos;t to fail people. The point is to make sure the
              standard is real. If something isn&apos;t clicking, ask for help
              — that&apos;s what the team meetings are for.
            </p>
          </motion.div>
        </motion.div>

        {/* ── Timeline ── */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="rounded-xl border border-border bg-card px-5 py-4 flex items-start gap-4"
        >
          <Star size={18} className="text-accent shrink-0 mt-0.5" strokeWidth={1.8} />
          <div>
            <p className="text-sm font-semibold text-foreground mb-1">
              Target: Certified by Day 14
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              If you haven&apos;t cleared all seven gates within 14 days of your
              start date, that&apos;s a conversation with your manager — not
              because the timeline is arbitrary, but because the gate covers
              the basics and 14 days is enough time to know them.
            </p>
          </div>
        </motion.div>

        {/* ── Certified & Ready Banner ── */}
        <motion.div
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="relative overflow-hidden rounded-2xl border border-emerald-accent/30 bg-gradient-to-br from-emerald-accent/10 via-emerald-accent/5 to-transparent px-6 py-8 text-center shadow-sm"
        >
          {/* background glow */}
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-40 w-40 rounded-full bg-emerald-accent/10 blur-3xl" />
          </div>

          <div className="relative space-y-4">
            <div className="flex justify-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-accent/15 border border-emerald-accent/20">
                <Trophy size={26} className="text-emerald-accent" strokeWidth={1.5} />
              </div>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-emerald-accent mb-3">
                <Star size={10} />
                Certified & Ready
              </div>
              <h2 className="text-xl font-black text-foreground tracking-tight">
                You&apos;re cleared to go live.
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2 max-w-md mx-auto">
                All seven gates passed. Your manager has signed off. You&apos;re
                now an active rep representing Obsidion on real calls with real
                prospects. The ramp period protections still apply — but the gate
                is open.
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 pt-1">
              {[
                "Product Knowledge ✓",
                "Objection Handling ✓",
                "Discovery Call ✓",
                "Closing Call ✓",
                "CRM Proficiency ✓",
                "Practice Proposal ✓",
              ].map((badge) => (
                <span
                  key={badge}
                  className="rounded-full bg-emerald-accent/10 border border-emerald-accent/20 px-3 py-1 text-[11px] font-semibold text-emerald-accent"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="certification"
            upNext={[
              { slug: "playbooks", title: "Training Playbooks" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            Obsidion Training Hub &middot; Certification & Readiness Gate
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
