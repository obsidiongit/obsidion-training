"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  MessageSquare,
  PhoneOutgoing,
  PhoneIncoming,
  Search,
  ArrowRightLeft,
  Voicemail,
  Mail,
  DoorOpen,
  Users,
  ChevronDown,
} from "lucide-react";
import {
  stagger,
  staggerSlow,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
  ProductPageFooter,
} from "../products/shared";

/* ─── data ─── */

const DISCOVERY_CATEGORIES = [
  {
    id: "visibility",
    label: "Online Presence",
    icon: Search,
    questions: [
      "When someone searches for what you do in your city, where do you show up — maps, organic, both, neither?",
      "Have you Googled yourself recently? What did you see?",
      "Are you on the first page for any local search terms, or is that something you honestly don't know yet?",
    ],
  },
  {
    id: "leads",
    label: "Lead Flow",
    icon: PhoneIncoming,
    questions: [
      "What happens to a lead who calls after hours or DMs you — who touches it, and how fast?",
      "If a lead fills out a form on your site today, what's the actual process — where does it go, who picks it up?",
      "How many leads do you think go cold just because nobody followed up fast enough? Ballpark.",
    ],
  },
  {
    id: "growth",
    label: "Capacity & Growth",
    icon: ArrowRightLeft,
    questions: [
      "If we 10x'd web leads tomorrow, could your team handle the volume without chaos?",
      "Is growth the goal right now, or is the focus more on tightening up what you already have?",
    ],
  },
  {
    id: "vendors",
    label: "Current Marketing",
    icon: Users,
    questions: [
      "Are you on any kind of marketing retainer right now, or handling it in-house?",
      "Have you worked with an agency or vendor before? What happened?",
      "What's pushed you to think about this now — something change recently?",
    ],
  },
  {
    id: "competition",
    label: "Competition",
    icon: Search,
    questions: [
      "Are you seeing more competition in your area lately, or has your market stayed pretty stable?",
      "When a customer chooses a competitor over you, do you usually know why?",
    ],
  },
  {
    id: "referrals",
    label: "Referrals",
    icon: MessageSquare,
    questions: [
      "Right now, where do most of your new customers come from — word of mouth, Google, social, something else?",
      "Is referral business consistent, or does it come in waves?",
    ],
  },
] as const;

const GATEKEEPER_SCENARIOS = [
  {
    title: "When you know the owner's name",
    lines: [
      { role: "You", text: "Hey, is [Owner's name] around? It's [Your name] from Obsidion." },
      { role: "If asked what it's about", text: "I work with [their industry] businesses on their website and local search — I had a quick question for [Owner's name] specifically. Is he / she available?" },
    ],
    tip: "Don't oversell to the gatekeeper. Keep it short and confident.",
  },
  {
    title: "When you don't know who to ask for",
    lines: [
      { role: "You", text: "Hey, quick question — who handles the marketing or website side of things there? I just want to make sure I'm talking to the right person." },
      { role: "Once named", text: "Perfect — is [Name] available? It's [Your name] from Obsidion." },
      { role: "If asked what it's about", text: "We work with [their industry] businesses on websites and local search. I had a specific question for them — takes about two minutes." },
    ],
    tip: "Don't pitch the gatekeeper. Get a name, get a transfer, or get a callback time.",
  },
] as const;

/* ─── component ─── */

export default function ScriptsContent({ roleSlug }: { roleSlug: string }) {
  const [activeCategory, setActiveCategory] = useState(0);
  const cat = DISCOVERY_CATEGORIES[activeCategory];

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/on-the-call`}
        backLabel="On the Call"
        eyebrow="On the Call"
        title="Call Scripts"
        description="Opening talk tracks, discovery prompts, voicemail scripts, gatekeeper navigation, and follow-up templates. Starting points — not lines to read verbatim."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Opening Talk Tracks ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Opening Talk Tracks
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Warm Lead */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <PhoneIncoming size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Warm Lead</h3>
                  <p className="text-xs text-muted-foreground">They booked or inquired</p>
                </div>
              </div>
              <PitchQuote variant="emerald" label="Talk Track">
                Thanks for making the time. I&apos;d love to understand what&apos;s
                working with how you attract and retain customers today, and where it
                feels brittle — website, Google, or follow-up after someone shows
                interest. I&apos;ll share how we usually fix that stack for businesses
                like yours, and you can tell me if it&apos;s relevant.
              </PitchQuote>
            </motion.div>

            {/* Cold Lead */}
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <PhoneOutgoing size={22} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Cold Lead</h3>
                  <p className="text-xs text-muted-foreground">First contact — get them talking</p>
                </div>
              </div>
              <div className="space-y-4">
                <PitchQuote variant="accent" label="First Attempt">
                  Hey [Name], this is [Your name] with Obsidion — we build websites,
                  local search, and lead follow-up systems for [their industry]
                  businesses. Quick question: when someone Googles [their category] in
                  [their city], do you know where you&apos;re showing up?
                </PitchQuote>
                <PitchQuote variant="accent" label="Fallback — Book the Call">
                  Totally fair — I know I&apos;m calling cold. I&apos;m not trying to
                  pitch you right now, just figure out if there&apos;s a fit worth a
                  real conversation. Is there a 20-minute window this week I could get
                  on the calendar?
                </PitchQuote>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Discovery Prompts ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Discovery Prompts
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            One question at a time. Ask, then stop talking. The silence does the
            work.
          </motion.p>

          <motion.div variants={fadeUp}>
            <div className="flex flex-wrap gap-2 mb-6">
              {DISCOVERY_CATEGORIES.map((c, i) => (
                <button
                  key={c.id}
                  onClick={() => setActiveCategory(i)}
                  className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                    activeCategory === i
                      ? "bg-emerald-accent text-white shadow-md"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-accent/10 text-emerald-accent">
                  <cat.icon size={20} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold tracking-tight">{cat.label}</h3>
              </div>
              <ul className="space-y-4">
                {cat.questions.map((q, i) => (
                  <li
                    key={i}
                    className="relative rounded-xl border border-emerald-accent/15 bg-emerald-accent/[0.03] px-5 py-4"
                  >
                    <p className="text-sm sm:text-base italic leading-relaxed text-foreground">
                      &ldquo;{q}&rdquo;
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* ── Transition to Offer ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Transition to Offer
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            Use this after discovery — restate their pain before you pitch
            anything.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4">
            <PitchQuote variant="accent" label="Primary Transition">
              Based on what you said — especially [repeat their specific pain] —
              here&apos;s how we typically solve that in three layers: the site as
              the hub, local visibility so people find you first, and automated
              follow-up so leads don&apos;t go cold between touchpoints. I&apos;ll
              keep it tight and you steer if I&apos;m off.
            </PitchQuote>
            <PitchQuote variant="accent" label="Multiple Pain Points">
              You mentioned a few things, but the one that stood out to me was
              [specific pain]. That&apos;s exactly the kind of problem we built
              our system around — let me walk you through how we usually fix it.
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── Voicemail & Follow-Up ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Voicemail &amp; Follow-Up
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                  <Voicemail size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Voicemail Script</h3>
                  <p className="text-xs text-muted-foreground">Under 30 seconds. Don&apos;t pitch.</p>
                </div>
              </div>
              <PitchQuote variant="purple" label="Voicemail">
                Hey [Name], this is [Your name] with Obsidion — [Your number]. I
                was calling because we work with a lot of [their industry]
                businesses in [their market] on websites, local search, and
                follow-up — and I had a specific question about how you&apos;re set
                up. Give me a call back when you get a chance: [Your number].
              </PitchQuote>
              <p className="text-sm text-muted-foreground leading-relaxed mt-4">
                Read your number at normal pace. Repeat it once. That&apos;s the
                whole job of a voicemail.
              </p>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-purple-accent/10 text-purple-accent">
                  <Mail size={20} strokeWidth={1.8} />
                </div>
                <div>
                  <h3 className="text-base font-bold">Follow-Up Email</h3>
                  <p className="text-xs text-muted-foreground">No answer / no VM pickup</p>
                </div>
              </div>
              <div className="rounded-xl border border-purple-accent/15 bg-purple-accent/[0.03] px-5 py-5 space-y-3">
                <p className="text-xs font-bold uppercase tracking-wider text-purple-accent">
                  Subject: Quick question — [their business name]
                </p>
                <div className="text-sm leading-relaxed text-foreground space-y-3">
                  <p>Hey [Name],</p>
                  <p>
                    Tried reaching you earlier — no big deal. One question I was
                    going to ask: when someone Googles [their category] in [their
                    city], do you know where you&apos;re showing up?
                  </p>
                  <p>
                    If it&apos;s not a fit, I&apos;ll leave you alone. If it&apos;s
                    worth 20 minutes, I&apos;m easy to reach: [your number].
                  </p>
                  <p className="text-muted-foreground">[Your name]</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Gatekeeper Navigation ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Gatekeeper Navigation
          </SectionLabel>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {GATEKEEPER_SCENARIOS.map((scenario) => (
              <motion.div
                key={scenario.title}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <DoorOpen size={20} strokeWidth={1.8} />
                  </div>
                  <h3 className="text-base font-bold">{scenario.title}</h3>
                </div>
                <div className="space-y-3">
                  {scenario.lines.map((line, i) => (
                    <div key={i} className="rounded-xl border border-accent/15 bg-accent/[0.03] px-5 py-4">
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-accent mb-1.5">
                        {line.role}
                      </p>
                      <p className="text-sm italic leading-relaxed text-foreground">
                        &ldquo;{line.text}&rdquo;
                      </p>
                    </div>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed mt-4 italic">
                  {scenario.tip}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── Referral Ask ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Referral Ask
          </SectionLabel>

          <motion.p
            variants={fadeUp}
            className="text-muted-foreground leading-relaxed max-w-3xl mb-6"
          >
            Use this with clients who are actively happy — after a win, a
            compliment, or a strong check-in. Don&apos;t rush it.
          </motion.p>

          <motion.div variants={fadeUp} className="space-y-4">
            <PitchQuote variant="emerald" label="Primary Ask">
              Really glad to hear it&apos;s working. Quick question — is there
              anyone else in your network running a business like yours who you
              think could use the same kind of system? I&apos;m not asking you to
              sell them on anything, just a name and a heads up that I might reach
              out.
            </PitchQuote>
            <PitchQuote variant="emerald" label="If They Hesitate">
              No pressure at all — I just find the best clients come from people
              who already know what we do. If anyone comes to mind, even a few
              weeks from now, I&apos;d appreciate the intro.
            </PitchQuote>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-6 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4 flex items-start gap-3"
          >
            <Users size={18} className="text-emerald-accent mt-0.5 shrink-0" />
            <p className="text-sm leading-relaxed text-foreground">
              Log referral names in Notion the same day. Follow up on every one.
            </p>
          </motion.div>
        </motion.section>
      </main>

      <ProductPageFooter />
    </div>
  );
}
