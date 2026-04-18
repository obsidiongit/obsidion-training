"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import FlowChart from "@/components/ui/FlowChart";
import {
  ListChecks,
  Search,
  Users,
  Flame,
  Thermometer,
  Snowflake,
  Clock,
  Database,
  AlertTriangle,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const LEAD_FIELDS = [
  { field: "Business name", tells: "Who they are", matters: "Context for your opening line" },
  { field: "Owner / contact name", tells: "Who you're calling", matters: "Always use their name" },
  { field: "Phone number", tells: "How to reach them", matters: "Verify it's a direct line" },
  { field: "Industry / vertical", tells: "What they do", matters: "Determines your pitch angle" },
  { field: "Website URL", tells: "Current online presence", matters: "Check it before you call" },
  { field: "Last contact date", tells: "When last reached out", matters: "Don't call if contacted yesterday" },
  { field: "Status / disposition", tells: "Pipeline position", matters: "New, contacted, interested, callback, etc." },
] as const;

const PRIORITIES = [
  {
    level: "Priority 1 — Hot",
    icon: Flame,
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    borderColor: "border-red-400/20",
    instruction: "Call these first",
    items: [
      "Scheduled callbacks (someone told you to call back today)",
      "Inbound inquiries (they reached out to us)",
      "Referrals (someone vouched for us)",
      "Leads who engaged with an email or social post recently",
    ],
  },
  {
    level: "Priority 2 — Warm",
    icon: Thermometer,
    color: "text-amber-accent",
    bgColor: "bg-amber-accent/10",
    borderColor: "border-amber-accent/20",
    instruction: "Call these second",
    items: [
      "Previously contacted, showed some interest, no appointment yet",
      "Leads in industries where Obsidion has strong case studies",
      "Businesses with obviously bad or missing websites",
    ],
  },
  {
    level: "Priority 3 — Cold",
    icon: Snowflake,
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
    instruction: "Fill your remaining time",
    items: [
      "Fresh list, never contacted",
      "No prior engagement or signal",
      "Volume plays — looking for the ones who pick up and engage",
    ],
  },
  {
    level: "Priority 4 — Long-Term",
    icon: Clock,
    color: "text-purple-accent",
    bgColor: "bg-purple-accent/10",
    borderColor: "border-purple-accent/20",
    instruction: "Set reminders and circle back",
    items: [
      "Said \"not now\" but gave a future window",
      "Locked in a contract (note end date, follow up 60 days before)",
      "Expressed interest but timing was off",
    ],
  },
] as const;

const DAILY_WORKFLOW = [
  { label: "Open Notion", sublabel: "Pipeline sorted by priority" },
  { label: "Claim Inbounds", sublabel: "Within 15 min" },
  { label: "Work Hot/Warm", sublabel: "Priority 1 & 2" },
  { label: "Cold Volume", sublabel: "Priority 3" },
  { label: "Close Out", sublabel: "Update Notion & prep tomorrow" },
];

const HYGIENE_RULES = [
  "Never skip a lead without attempting contact at least 3 times across multiple channels.",
  "Update the lead in Notion after every touch. Called and left a voicemail? Log it on the record.",
  "Don't hoard leads. 30+ days with no movement? Disposition it or escalate.",
  "Flag bad data in Notion. Wrong number? Business closed? Mark it so the database stays clean for everyone.",
] as const;

/* ─── component ─── */

export default function LeadListsContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Lead Management"
        title="Lead Lists & Accounts"
        description="Obsidion runs leads in Notion — your pipeline database, views, and properties. How to read a record, work your list, and prioritize who gets called first."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Notion = CRM ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Notion Is Your CRM
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-6 py-5 space-y-3">
            <p className="text-sm text-foreground leading-relaxed">
              We use <span className="font-semibold">Notion</span> for lead tracking — not a separate legacy CRM.
              Your list is a <span className="font-semibold">Notion database</span> (or linked databases) with
              properties for each business, status, last touch, and notes. You&apos;ll filter and sort with{" "}
              <span className="font-semibold">views</span> — e.g. callbacks today, hot, by owner — so the right
              leads float to the top.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Rule of thumb: if it happened on a call, email, or DM, it belongs on the{" "}
              <span className="font-semibold text-foreground">Notion page for that lead</span> before you move
              on. Your manager and AEs rely on it for handoffs.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Two Types of Accounts ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Two Types of Accounts
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Users size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">Assigned Accounts</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Leads given to you by the company — purchased lists, inbound inquiries,
                marketing campaigns, and re-engagement lists.
              </p>
              <div className="rounded-lg bg-accent/[0.04] border border-accent/15 px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  Work every assigned lead. Don&apos;t cherry-pick. Volume wins.
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <Search size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-base font-bold">Self-Sourced Accounts</h3>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Leads you find on your own — LinkedIn, Facebook, Google Maps, referrals,
                networking events, community groups.
              </p>
              <div className="rounded-lg bg-emerald-accent/[0.04] border border-emerald-accent/15 px-4 py-3">
                <p className="text-sm font-semibold text-foreground">
                  SDRs who self-source outperform assigned-only SDRs. Every time.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── How to Read a Lead ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            How to Read a Lead Record
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-4">
            In Notion, each lead is a row with <span className="font-semibold text-foreground">properties</span>{" "}
            (columns). Exact names may match your workspace — use this as a checklist of what to look for before
            you dial.
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Field</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">What It Tells You</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Why It Matters</th>
                  </tr>
                </thead>
                <tbody>
                  {LEAD_FIELDS.map((row) => (
                    <tr key={row.field} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-semibold text-foreground">{row.field}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.tells}</td>
                      <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{row.matters}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4 flex items-start gap-3">
            <AlertTriangle size={16} className="text-amber-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              <span className="font-semibold">Before every call, check the website.</span> If
              it&apos;s outdated, broken, or missing — that&apos;s your opening. If it looks
              great, shift to SEO, follow-up automation, or the mobile app.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Prioritization ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Who to Call First
          </SectionLabel>

          <div className="space-y-4">
            {PRIORITIES.map((p) => {
              const Icon = p.icon;
              return (
                <motion.div
                  key={p.level}
                  variants={fadeUp}
                  className={`rounded-2xl border ${p.borderColor} bg-card p-6 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg ${p.bgColor} ${p.color}`}>
                      <Icon size={18} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold">{p.level}</h4>
                      <span className="text-xs text-muted-foreground">{p.instruction}</span>
                    </div>
                  </div>
                  <ul className="space-y-1.5 pl-12">
                    {p.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                        <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${p.bgColor} shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Daily Workflow ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Daily List Workflow
          </SectionLabel>

          <motion.div variants={fadeUp}>
            <FlowChart
              steps={DAILY_WORKFLOW}
              accentClass="bg-amber-accent text-white"
              arrowClass="text-amber-accent"
            />
          </motion.div>
        </motion.section>

        {/* ── List Hygiene ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            List Hygiene Rules
          </SectionLabel>

          <div className="space-y-3">
            {HYGIENE_RULES.map((rule) => (
              <motion.div
                key={rule}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <Database size={16} className="text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── The Math ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            The Math
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Metric</th>
                    <th className="text-right px-5 py-3 font-semibold text-emerald-accent text-xs uppercase tracking-wider">Typical Range</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { metric: "Connect rate (someone picks up)", range: "15-20%" },
                    { metric: "Conversations that lead to interest", range: "20-30% of connects" },
                    { metric: "Interested conversations that book", range: "40-60%" },
                    { metric: "Appointments booked per day", range: "1-3 (target), 4-6 (high performer)" },
                  ].map((row) => (
                    <tr key={row.metric} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-medium text-foreground">{row.metric}</td>
                      <td className="px-5 py-3 text-right font-semibold text-emerald-accent">{row.range}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
            <p className="text-sm font-semibold text-foreground">
              More calls = more connects = more conversations = more appointments. If your
              appointment count is low, check your call volume first. It&apos;s almost always the answer.
            </p>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="lead-lists"
            upNext={[
              { slug: "ambassador-setup", title: "Ambassador Profile Setup" },
              { slug: "products", title: "Product Knowledge (Lite)" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Lead Lists</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
