"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import {
  Phone,
  FileText,
  ShieldAlert,
  Route,
  ChevronRight,
  MessageSquareText,
  Search,
  Presentation,
  ShieldCheck,
  CalendarCheck,
  BookOpenCheck,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  scaleIn,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
  ProductPageFooter,
} from "../products/shared";

/* ─── data ─── */

const TOPICS = [
  {
    slug: "scripts",
    icon: FileText,
    title: "Call Scripts",
    stat: "Talk Tracks",
    description:
      "Opening talk tracks (warm and cold), discovery prompts, voicemail scripts, gatekeeper navigation, and follow-up email templates.",
    iconBg: "bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white",
    borderHover: "hover:border-accent/30",
  },
  {
    slug: "objections",
    icon: ShieldAlert,
    title: "Objection Handling",
    stat: "Live Rebuttals",
    description:
      "Conversational rebuttals organized by call phase — early resistance, mid-call skepticism, and late-stage stalls.",
    iconBg:
      "bg-amber-accent/10 text-amber-accent group-hover:bg-amber-accent group-hover:text-white",
    borderHover: "hover:border-amber-accent/30",
  },
  {
    slug: "frameworks",
    icon: Route,
    title: "Call Frameworks",
    stat: "Full Structure",
    description:
      "The 30-minute discovery call structure, qualifying signals, closing language, and follow-up cadence.",
    iconBg:
      "bg-emerald-accent/10 text-emerald-accent group-hover:bg-emerald-accent group-hover:text-white",
    borderHover: "hover:border-emerald-accent/30",
  },
] as const;

const CALL_FLOW = [
  {
    phase: "1",
    title: "Intro & Permission",
    time: "0–2 min",
    description:
      "Confirm time, name the agenda, ask if now still works. Don't push through a bad moment — reschedule immediately.",
    icon: Phone,
    dotColor: "bg-accent",
    lineColor: "from-accent to-emerald-accent",
  },
  {
    phase: "2",
    title: "Discovery Before Pitch",
    time: "2–15 min",
    description:
      "Map their current setup — site, SEO, lead follow-up. One question at a time. Quantify pain where you can.",
    icon: Search,
    dotColor: "bg-emerald-accent",
    lineColor: "from-emerald-accent to-amber-accent",
  },
  {
    phase: "3",
    title: "Tailored Pitch",
    time: "15–25 min",
    description:
      "Don't pitch features — pitch what they told you. One story beats five feature bullets. Pause every 90 seconds.",
    icon: Presentation,
    dotColor: "bg-amber-accent",
    lineColor: "from-amber-accent to-purple-accent",
  },
  {
    phase: "4",
    title: "Handle Objections",
    time: "Live",
    description:
      "Label it, validate it, reframe it. Sound human, not scripted. Every objection means they're still engaged.",
    icon: ShieldCheck,
    dotColor: "bg-purple-accent",
    lineColor: "from-purple-accent to-accent",
  },
  {
    phase: "5",
    title: "Close or Next Step",
    time: "25–30 min",
    description:
      "Propose a specific next step tied to a specific date. The move is the Quick Sites questionnaire.",
    icon: CalendarCheck,
    dotColor: "bg-accent",
    lineColor: "",
  },
] as const;

const NON_NEGOTIABLES = [
  {
    icon: Search,
    title: "Discovery Before Pitch",
    text: "Every time. You can't tailor a pitch from zero information.",
  },
  {
    icon: MessageSquareText,
    title: "One Story Beats Five Features",
    text: "Pick the result that matches their vertical and lead with it.",
  },
  {
    icon: CalendarCheck,
    title: "Never End Without a Next Step",
    text: "A specific action tied to a specific date. \"I'll follow up\" is not a close.",
  },
  {
    icon: BookOpenCheck,
    title: "Log Everything",
    text: "Status, last contact, next action — in Notion after every call.",
  },
] as const;

/* ─── component ─── */

export default function OnTheCallOverview({
  roleSlug,
}: {
  roleSlug: string;
}) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="On the Call"
        title="Your Live Playbook"
        description="Scripts, objection handling, and call frameworks for inbound and outbound calls. This is where the work happens."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Topic Cards ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Go Deep
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {TOPICS.map((topic) => {
              const Icon = topic.icon;
              return (
                <motion.div key={topic.slug} variants={fadeUp}>
                  <Link
                    href={`/role/${roleSlug}/on-the-call/${topic.slug}`}
                    className={`group block h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 ${topic.borderHover} hover:shadow-lg`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-300 ${topic.iconBg}`}
                      >
                        <Icon size={24} strokeWidth={1.8} />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2.5 py-1 rounded-full">
                        {topic.stat}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold tracking-tight mb-2 group-hover:text-accent transition-colors">
                      {topic.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {topic.description}
                    </p>
                    <span className="inline-flex items-center gap-1 text-sm font-semibold text-accent opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more{" "}
                      <ChevronRight
                        size={14}
                        className="transition-transform group-hover:translate-x-0.5"
                      />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Call Flow Quick Reference ── */}
        <motion.section
          variants={staggerSlow}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Call Flow — Quick Reference
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-10"
          >
            Every call follows this structure. The phases flex based on the
            conversation, but the order doesn&apos;t change — discovery always
            comes before pitch.
          </motion.p>

          {/* Vertical timeline */}
          <div className="relative space-y-0">
            {CALL_FLOW.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.phase}
                  variants={fadeUp}
                  className="relative flex gap-5 sm:gap-8 items-start"
                >
                  <div className="flex flex-col items-center shrink-0">
                    <motion.div
                      variants={scaleIn}
                      className={`relative z-10 flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-2xl ${step.dotColor} text-white shadow-lg`}
                    >
                      <Icon size={22} strokeWidth={1.8} />
                    </motion.div>
                    {i < CALL_FLOW.length - 1 && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          delay: 0.2 + i * 0.1,
                          duration: 0.5,
                          ease: [0.4, 0, 0.2, 1],
                        }}
                        className={`w-0.5 flex-1 min-h-8 bg-gradient-to-b ${step.lineColor} origin-top`}
                      />
                    )}
                  </div>

                  <div className="pb-8 sm:pb-10 pt-1">
                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {step.time}
                    </span>
                    <h3 className="text-lg font-bold tracking-tight mt-1 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed max-w-lg">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div variants={fadeUp} className="mt-4">
            <PitchQuote variant="emerald" label="Opening Agenda">
              Quick agenda: I want to hear how you&apos;re currently handling
              website, local search, and follow-up — share how we typically fix
              that for businesses like yours, and see if it makes sense to go
              deeper. If it doesn&apos;t fit, I&apos;ll tell you straight. Sound good?
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── Non-Negotiables ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            The Non-Negotiables
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            These are the rules that don&apos;t bend. Violate any of them and the
            call breaks down — even if everything else was perfect.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {NON_NEGOTIABLES.map((rule) => {
              const Icon = rule.icon;
              return (
                <motion.div
                  key={rule.title}
                  variants={fadeUp}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:border-amber-accent/30 hover:shadow-lg"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-accent/10 text-amber-accent mb-4 transition-colors group-hover:bg-amber-accent group-hover:text-white">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold tracking-tight mb-2">
                    {rule.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {rule.text}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="on-the-call"
            upNext={[
              { slug: "playbooks", title: "Training Playbooks" },
              { slug: "certification", title: "Certification Gate" },
            ]}
          />
        </div>
      </main>

      <ProductPageFooter />
    </div>
  );
}
