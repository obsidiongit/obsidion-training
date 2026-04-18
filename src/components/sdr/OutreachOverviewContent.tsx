"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Phone,
  Mail,
  MessageCircle,
  ShieldAlert,
  ChevronRight,
  Clock,
  AlertTriangle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const TOPICS = [
  {
    slug: "phone-scripts",
    icon: Phone,
    title: "Phone Scripts",
    stat: "Primary Channel",
    description:
      "Openers anchored on paid ads and growth — not generic Google quizzes. Qualify, book, confirm.",
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    borderHover: "hover:border-accent/30",
  },
  {
    slug: "email-templates",
    icon: Mail,
    title: "Email Templates",
    stat: "Copy & Paste",
    description:
      "Ads-first first touches, observation and scaling variants, follow-ups, breakup — short and specific.",
    iconBg: "bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white",
    borderHover: "hover:border-emerald-accent/30",
  },
  {
    slug: "social-outreach",
    icon: MessageCircle,
    title: "Social Outreach",
    stat: "Trust Builder",
    description:
      "DMs that lead with paid social or real hooks — plus LinkedIn/Facebook/IG engagement habits.",
    iconBg: "bg-purple-accent/10 text-purple-accent group-hover:bg-purple-accent group-hover:text-white",
    borderHover: "hover:border-purple-accent/30",
  },
  {
    slug: "objection-handling",
    icon: ShieldAlert,
    title: "Objection Handling",
    stat: "Rebuttals",
    description:
      "Word-for-word responses for \"not interested,\" \"send me info,\" \"we already run ads,\" and more.",
    iconBg: "bg-amber-accent/10 text-amber-accent group-hover:bg-amber-accent group-hover:text-white",
    borderHover: "hover:border-amber-accent/30",
  },
] as const;

const CADENCE = [
  { day: "Day 1", phone: "Call (voicemail if no answer)", email: "Follow-up email after call", social: "View LinkedIn, send connection request" },
  { day: "Day 3", phone: "Call again (different time)", email: "Second email — new angle", social: "Like or comment on a post" },
  { day: "Day 5", phone: "Call one more time", email: "—", social: "Send LinkedIn or Facebook DM" },
  { day: "Day 7", phone: "—", email: "Breakup email", social: "—" },
] as const;

const RULES = [
  "Never rely on one channel. Call + email + social is 3x more effective than three calls alone.",
  "Always reference prior touches. \"I left you a voicemail earlier\" creates continuity.",
  "Log every touch. Call, email, DM — all of it goes in Notion immediately.",
  "Respect the \"no.\" If someone clearly says no, mark it and move on. Today's no can be next quarter's yes.",
  "Speed wins. Hot leads get called within 15 minutes. The first rep to respond wins.",
] as const;

/* ─── component ─── */

export default function OutreachOverviewContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Outreach"
        title="Outreach Playbook"
        description="Outbound with a ≈80/20 bias toward paid advertising (Meta when you get specific); website, SEO, and follow-up still matter — some leads are site-only. Phone, email, social — human tone. Objection handling ties it together."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Topics ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Dive Into Each Channel
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              return (
                <motion.div key={topic.slug} variants={fadeUp}>
                  <Link
                    href={`/role/${roleSlug}/on-the-call/${topic.slug}`}
                    className={`group relative block h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:shadow-lg ${topic.borderHover}`}
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-xl transition-colors ${topic.iconBg}`}>
                        <Icon size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="text-base font-bold tracking-tight">{topic.title}</h3>
                        <span className="text-xs text-muted-foreground">{topic.stat}</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">{topic.description}</p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent transition-all group-hover:gap-2">
                      Open section
                      <ChevronRight size={14} className="transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Multi-Channel Cadence ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Multi-Channel Cadence
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            The best SDRs layer all three channels in a sequence. Here&apos;s a typical outreach cadence:
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Day</th>
                    <th className="text-left px-5 py-3 font-semibold text-accent text-xs uppercase tracking-wider">Phone</th>
                    <th className="text-left px-5 py-3 font-semibold text-emerald-accent text-xs uppercase tracking-wider">Email</th>
                    <th className="text-left px-5 py-3 font-semibold text-purple-accent text-xs uppercase tracking-wider hidden sm:table-cell">Social</th>
                  </tr>
                </thead>
                <tbody>
                  {CADENCE.map((row) => (
                    <tr key={row.day} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-bold text-foreground">{row.day}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.phone}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.email}</td>
                      <td className="px-5 py-3 text-muted-foreground hidden sm:table-cell">{row.social}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── The Rules ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            The Rules
          </SectionLabel>

          <div className="space-y-3">
            {RULES.map((rule, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-border bg-card px-5 py-4 shadow-sm"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-accent/10 text-amber-accent font-bold text-xs">
                  {i + 1}
                </div>
                <p className="text-sm text-foreground leading-relaxed">{rule}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="on-the-call"
            upNext={[
              { slug: "getting-paid", title: "Getting Paid" },
              { slug: "performance", title: "Performance Expectations" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Outreach Playbook</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
