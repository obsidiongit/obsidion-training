"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import FlowChart from "@/components/ui/FlowChart";
import {
  Phone,
  BookOpen,
  ListOrdered,
  MessageCircle,
  HelpCircle,
  AlertCircle,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const CALL_FLOW = [
  { label: "Open", sublabel: "10 sec" },
  { label: "Hook", sublabel: "30–60 sec" },
  { label: "Qualify", sublabel: "2–3 min" },
  { label: "Book", sublabel: "30 sec" },
  { label: "Confirm", sublabel: "30 sec" },
];

const READ_FIRST_TLDR = {
  tldr: "Skim Product Knowledge Lite for exact product names; on the phone, open with \"ads\" or \"paid advertising\" before you assume they know Meta.",
  meansForYou: [
    "Many prospects do not run ads yet or do not know what \"Meta\" is — lead plain, then get specific.",
    "This page teaches the map; live calls should sound conversational, not like a glossary.",
  ],
} as const;

const QA_SECTION_TLDR = {
  tldr: "Obsidion is mostly paid social (Meta — Facebook/Instagram) plus site, SEO, follow-up, app; you qualify and book — AEs scope deals.",
  meansForYou: [
    "Explain what we sell in English first; say \"Meta\" or \"Facebook/Instagram\" when you are tying to their setup.",
    "If they go deep on details you do not know, bridge to the specialist — never invent answers.",
  ],
} as const;

const PAIN_TO_HOOK: { label: string; listenFor: string; bridge: string }[] = [
  {
    label: "Spend feels like a black box",
    listenFor: "We're boosting / paying someone but don't know if it's working — can't see the account",
    bridge:
      "Totally get that — we run the ads in your own account so you can actually see where the money goes. Facebook and Instagram side. Our specialist can walk through it on a short call.",
  },
  {
    label: "Wants more than referrals",
    listenFor: "We're busy but want to grow / need more leads than referrals give us",
    bridge:
      "Makes sense — a lot of owners hit that wall. We usually put real budget behind ads first, then make sure the site and follow-up aren't leaking it. I can get you with someone who maps that out.",
  },
  {
    label: "Hard to find on Google / Maps",
    listenFor: "I don't know if we show up… competitors are everywhere online",
    bridge:
      "Yeah, showing up locally matters — we usually connect that to what you're already doing with ads and your site. The specialist ties it together; I'm just trying to get you the right conversation.",
  },
  {
    label: "Site is embarrassing or missing",
    listenFor: "We need a new site / embarrassed by our site / built it on Wix and it doesn't work",
    bridge:
      "Fair — if people land on a rough page after an ad, that's wasted spend. We fix the site as part of the growth stuff, not a random redesign pitch.",
  },
  {
    label: "Leads go cold",
    listenFor: "People inquire and disappear / we're bad at following up",
    bridge:
      "That's super common — we automate follow-up so stuff doesn't slip through, especially behind whatever's already bringing you leads.",
  },
];

const CALL_PLAN_STEPS: { n: number; title: string; body: string }[] = [
  {
    n: 1,
    title: "Prep (before you dial)",
    body: "Google their business + check Facebook/Instagram for posts, boosts, or sponsored labels. Skim their site and GBP (Google Business Profile) if you can. Write down one credible hook — ad activity, a concrete site issue, or a growth angle. Skip generic 'rank on Google' questions.",
  },
  {
    n: 2,
    title: "Open",
    body: "Your name, Obsidion, and a reason for the call in under ten seconds. Sound human. Do not pitch the stack.",
  },
  {
    n: 3,
    title: "Hook",
    body: "One question that creates a gap — usually paid ads/spend, scaling, or a specific thing you saw. Let them talk. Avoid quiz-mode ('do you know where you rank?').",
  },
  {
    n: 4,
    title: "Qualify (light BANT)",
    body: "Need, who decides, signals of budget (spend, headcount, growth goals), and timing. You're checking fit — not pitching every product. If you freeze, the quick bridges in the next section are just ideas, not lines to read.",
  },
  {
    n: 5,
    title: "Bridge to the meeting",
    body: "Position the next step: a short call with a specialist who can review their situation properly. You set the meeting; you do not run the deep dive.",
  },
  {
    n: 6,
    title: "Lock time + confirm",
    body: "Offer a specific slot. Confirm email for the calendar invite. Repeat the time once.",
  },
];

/* ─── component ─── */

export default function PhoneScriptsContent({ roleSlug }: { roleSlug: string }) {
  const productsHref = `/role/${roleSlug}/products`;
  const outreachHref = `/role/${roleSlug}/on-the-call`;

  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={outreachHref}
        backLabel="Back to Outreach"
        eyebrow="Phone"
        title="Phone Scripts"
        description="≈80% paid social (Meta) when it fits; ~20% site, SEO, remarketing, app — website-only is still a real path. Read the Q&A and call plan first — then use the scripts as anchors. Sound human; lead with ads before jargon; anchor on evidence or growth — not generic Google trivia."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── Read this first ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Read This First
          </SectionLabel>

          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-accent/25 bg-accent/[0.06] px-5 py-4 sm:px-6 sm:py-5 flex flex-col sm:flex-row sm:items-center gap-4"
          >
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15">
              <BookOpen className="h-5 w-5 text-accent" aria-hidden />
            </div>
            <div className="space-y-3 flex-1">
              <p className="text-sm text-foreground leading-relaxed">
                <span className="font-semibold">Product Knowledge (Lite)</span> uses{" "}
                <span className="font-semibold">Meta (Facebook/Instagram)</span> by name — that is the
                training layer. On cold calls, you will often say{" "}
                <span className="font-semibold">paid ads</span> or{" "}
                <span className="font-semibold">advertising</span> first. Skim it before your first
                dialing block so you are not inventing Obsidion on the fly.
              </p>
              <div className="rounded-xl border border-accent/30 bg-background/80 px-4 py-3">
                <p className="text-xs font-bold uppercase tracking-wider text-accent mb-1">TL;DR</p>
                <p className="text-sm text-foreground leading-relaxed mb-3">{READ_FIRST_TLDR.tldr}</p>
                <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
                  What this means for you
                </p>
                <ul className="space-y-1.5">
                  {READ_FIRST_TLDR.meansForYou.map((line) => (
                    <li key={line} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                      <span className="mt-1 h-1 w-1 rounded-full bg-accent shrink-0" />
                      {line}
                    </li>
                  ))}
                </ul>
              </div>
              <Link
                href={productsHref}
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-accent hover:underline"
              >
                Open Product Knowledge (Lite)
              </Link>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Q&A: Before you dial ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Before You Dial — Q&amp;A
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Answers below are what you need to hold in your head on a live call. If someone asks
            &ldquo;what do you guys actually do?&rdquo; you answer in plain English — then you return to
            questions and booking.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="rounded-xl border border-emerald-accent/25 bg-emerald-accent/[0.06] px-4 py-3 mb-6"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-accent mb-1">TL;DR</p>
            <p className="text-sm text-foreground leading-relaxed mb-3">{QA_SECTION_TLDR.tldr}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              What this means for you
            </p>
            <ul className="space-y-1.5">
              {QA_SECTION_TLDR.meansForYou.map((line) => (
                <li key={line} className="flex items-start gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span className="mt-1 h-1 w-1 rounded-full bg-emerald-accent shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>

          <div className="space-y-4">
            {[
              {
                q: "What does Obsidion sell?",
                a: "Usually paid social first (~80% of how we talk) — we run Facebook and Instagram (Meta) campaigns in the client's own ad account so spend is visible. The other ~20% is custom website, local SEO, remarketing, optional app — compound or stand-alone (e.g. they only need a site). One team, fast execution. You book a specialist; you do not quote the full stack.",
              },
              {
                q: "What problems are we usually solving?",
                a: "Often: ad spend without clarity, locked ad accounts, or boosting with nothing to show. Or they want to scale beyond word-of-mouth. Sometimes the loudest pain is just a bad or missing website — still our deal. Your job is to hear what's loudest — not to lecture on five products.",
              },
              {
                q: "What is my job on the phone?",
                a: "Start a real conversation, qualify (need, authority, budget signals, timeline), and book a short meeting for an Account Executive / specialist. You do not close deals, run demos, or quote pricing tiers. If they go deep on details, you acknowledge it and move them to the meeting.",
              },
              {
                q: "What should I avoid?",
                a: "Reading scripts robotically, guessing pricing or technical details, debating competitors at length, or staying on the phone past ~5 minutes without booking or scheduling a firm callback. If you do not know something: say the specialist covers it in the meeting — then book the meeting.",
              },
            ].map((item) => (
              <motion.div
                key={item.q}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-5 sm:p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <HelpCircle className="h-5 w-5 text-emerald-accent shrink-0 mt-0.5" aria-hidden />
                  <div>
                    <h3 className="text-sm font-bold text-foreground mb-2">{item.q}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── The call plan ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            The Call Plan
          </SectionLabel>

          <motion.div variants={fadeUp} className="flex items-start gap-3 mb-6 rounded-xl border border-amber-accent/25 bg-amber-accent/[0.06] px-4 py-3">
            <ListOrdered className="h-5 w-5 text-amber-accent shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-foreground leading-relaxed">
              Follow this sequence every time until it is muscle memory. Scripts below plug into
              steps 2–5 — they do not replace the plan.
            </p>
          </motion.div>

          <ol className="space-y-4">
            {CALL_PLAN_STEPS.map((step) => (
              <motion.li
                key={step.n}
                variants={fadeUp}
                className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-sm font-black text-white">
                  {step.n}
                </span>
                <div>
                  <h3 className="text-sm font-bold text-foreground mb-1.5">{step.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </motion.section>

        {/* ── Quick bridges (after you know the flow) ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Quick bridges
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-5 py-4 mb-6">
            <p className="text-sm text-foreground leading-relaxed">
              You already have the six steps above. This bit is just a{" "}
              <span className="font-semibold">cheat sheet</span> — rough ways to move the call forward
              when you recognize what they&apos;re stuck on. Use your own words; the meeting is where the
              real detail happens.
            </p>
          </motion.div>

          <div className="space-y-4">
            {PAIN_TO_HOOK.map((row) => (
              <motion.div
                key={row.label}
                variants={fadeUp}
                className="rounded-2xl border border-border bg-card p-5 shadow-sm"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-purple-accent mb-2">
                  {row.label}
                </p>
                <p className="text-sm text-muted-foreground italic mb-3 border-l-2 border-border pl-3">
                  They might say: &ldquo;{row.listenFor}&rdquo;
                </p>
                <p className="text-sm text-foreground leading-relaxed">
                  <span className="font-semibold text-muted-foreground">You could try: </span>
                  {row.bridge}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── How to use scripts ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            How to Use the Scripts Below
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card px-6 py-5 shadow-sm">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Scripts are <span className="font-semibold text-foreground">structure + wording you can steal</span>
              — not lines to recite. Pause after questions. If they go off-script, follow the pain
              they gave you, then return to qualify and book. Your outcome on every call:{" "}
              <span className="font-semibold text-foreground">
                conversation → fit → booked meeting or firm callback
              </span>
              . You are not closing a deal; you are securing time with someone who can.
            </p>
          </motion.div>
        </motion.section>

        {/* ── Cold Call Openers ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Cold Call Openers
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            You have about ten seconds before they decide whether to stay on the line. Lead with
            clarity — who you are, why you are calling — then one question.
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version A — Paid ads first (default)</h4>
              <PitchQuote label="Say this">
                Hey [Name], it&apos;s [Your name] with Obsidion. I was looking at [their business] on
                Facebook/Instagram before I dialed — are you running paid ads in-house, or is someone
                managing that for you? I ask because we help businesses run advertising with creatives
                and campaigns in your own ad account so you actually see the spend — that&apos;s on Meta,
                Facebook and Instagram.
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold text-foreground">Use when:</span> You see content,
                boosts, or sponsored posts — or their category is a natural fit for paid social.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version B — Scaling (no clear ad signal)</h4>
              <PitchQuote label="Say this" variant="emerald">
                Hey [Name], it&apos;s [Your name] with Obsidion. [Their business] looks like it has real
                traction — I&apos;m curious if you&apos;re trying to scale what&apos;s working or if growth has
                mostly been referral-driven. We spend a lot of our time helping owners put real budget
                behind paid advertising — usually on Meta, Facebook and Instagram — when they&apos;re ready.
              </PitchQuote>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version C — Specific observation (you did prep)</h4>
              <PitchQuote label="Say this" variant="purple">
                Hey [Name], it&apos;s [Your name] with Obsidion. Before this call I noticed [specific
                thing — mobile site, reviews, a post, booking flow]. Wanted to run that by you in
                two minutes — it ties into how we think about growth, usually starting with what
                you&apos;re doing on ads and what happens after someone clicks.
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold text-foreground">Rule:</span> Only if you actually
                looked. Fake specificity kills trust.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-2">Version D — Referral or warm intro</h4>
              <PitchQuote label="Say this">
                Hey [Name], it&apos;s [Your name] with Obsidion. [Referral] suggested I reach out —
                they thought you might be open to a conversation about scaling [leads / the business].
                Got a minute?
              </PitchQuote>
              <p className="text-xs text-muted-foreground mt-3">
                <span className="font-semibold text-foreground">Strongest opener</span> when the intro
                is real.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-amber-accent/20 bg-amber-accent/[0.04] px-5 py-4">
              <h4 className="text-sm font-bold mb-2 flex items-center gap-2">
                <MessageCircle className="h-4 w-4" aria-hidden />
                If they say &ldquo;I&apos;m busy&rdquo;
              </h4>
              <p className="text-sm text-foreground italic leading-relaxed">
                &ldquo;Totally fair — two minutes. Is there a better slot today or tomorrow? I&apos;m asking
                about how you&apos;re handling paid advertising online and whether that&apos;s something you
                want help scaling.&rdquo;
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Qualifying Questions ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Qualifying Questions (BANT, Conversational)
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            You are uncovering need, authority, budget signals, and timing — not reciting an
            interrogation. Ask one question at a time; listen; branch.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold text-emerald-accent mb-3">Need &amp; channel</h4>
              <ul className="space-y-2">
                {[
                  "Are you running any paid ads online right now — in-house, agency, or not yet? (If yes, Facebook/Instagram is usually where we start.)",
                  "If you are spending, are you happy with how visible performance and spend are in your ad account?",
                  "How are most new customers finding you — and where do you want the next chunk of growth to come from?",
                  "When's the last time you looked at your site on your phone after clicking an ad or a post?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold text-accent mb-3">Authority</h4>
              <ul className="space-y-2">
                {[
                  "Are you the one who usually makes calls on marketing and the website, or is someone else in that loop?",
                  "If this looked worthwhile, who else would need to be on a short follow-up call?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <h4 className="text-sm font-bold text-purple-accent mt-5 mb-3">Budget signals (listen, don&apos;t ask &ldquo;what&apos;s your budget&rdquo;)</h4>
              <ul className="space-y-2">
                {[
                  "Mention of ad spend, agencies, or hiring",
                  "Multiple locations, staff, or clear growth goals",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
              <p className="text-xs text-muted-foreground mt-4 leading-relaxed">
                Follow-up:{" "}
                <span className="italic">
                  &ldquo;Are you running any paid social or search right now, or is it mostly organic?&rdquo;
                </span>{" "}
                — if yes, ask whether they are happy with performance. That opens Meta/ads or SEO
                without you pitching.
              </p>
            </motion.div>
          </div>

          <motion.div variants={fadeUp} className="mt-5 rounded-xl border border-border bg-muted/30 px-5 py-4">
            <h4 className="text-sm font-bold mb-2">Timeline</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                &ldquo;Is this something you&apos;ve been thinking about for a while, or did something change
                recently?&rdquo;
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-foreground/40 shrink-0" />
                &ldquo;Any season or date driving this — busy season, reopening, new location?&rdquo;
              </li>
            </ul>
          </motion.div>
        </motion.section>

        {/* ── Booking the Appointment ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Booking the Meeting
          </SectionLabel>

          <div className="space-y-4">
            <motion.div variants={fadeUp}>
              <PitchQuote label="The ask" variant="purple">
                Based on what you&apos;re saying, I think it&apos;s worth a short call with one of our
                specialists — they can actually look at your setup and tell you what would move the
                needle. I&apos;m not the person who does that deep dive; I set those conversations up.
                Can I put you down for [day] at [time] this week?
              </PitchQuote>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-border bg-card px-5 py-4 shadow-sm">
              <h4 className="text-sm font-bold mb-2">If they hesitate</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;No commitment — it&apos;s [15–20] minutes. If it&apos;s not a fit, they&apos;ll say so. I just
                don&apos;t want you to miss it if it is.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-xl border border-accent/20 bg-accent/[0.04] px-5 py-4">
              <p className="text-sm font-semibold text-foreground">
                Always propose a specific time. &ldquo;Sometime this week&rdquo; gets forgotten. &ldquo;Tuesday at
                2:00&rdquo; gets booked.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Voicemail ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Voicemail
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-4">
            Under ~25 seconds. No product dump. One reason to call back + your number twice.
          </motion.p>

          <motion.div variants={fadeUp}>
            <PitchQuote label="Voicemail">
              Hey [Name], it&apos;s [Your name] with Obsidion — [phone number]. Wanted to ask how you&apos;re
              handling paid advertising online — we help businesses run ads with full visibility in
              their own account, including on Meta, Facebook and Instagram. Call me back: [phone number]. Again, [Your name], [phone number].
            </PitchQuote>
          </motion.div>
        </motion.section>

        {/* ── Callback ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            When They Call You Back
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <PitchQuote label="Say this">
              Hey [Name], thanks for getting back. Same topic — are you running paid ads yourself or
              with someone, and are you happy with what you&apos;re seeing in your ad account for spend
              and results? If that&apos;s fuzzy, that&apos;s usually why people talk to us.
            </PitchQuote>
            <p className="text-xs text-muted-foreground mt-3">
              Then run your qualify → bridge → book sequence. Do not restart a monologue they did not
              ask for.
            </p>
          </motion.div>
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">When you know the owner&apos;s name</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                &ldquo;Hey, is [Owner] available? It&apos;s [Your name] from Obsidion.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                If asked what it&apos;s about: &ldquo;It&apos;s about their advertising and paid social — I need
                two minutes with [Owner]. Not a pitch to you.&rdquo;
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">When you don&apos;t know who to ask for</h4>
              <p className="text-sm text-muted-foreground italic leading-relaxed mb-3">
                &ldquo;Who handles paid social or marketing spend? I want the right person.&rdquo;
              </p>
              <p className="text-xs text-muted-foreground">
                Get a name, transfer, or callback window. Do not pitch the gatekeeper.
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* ── When the call goes nowhere ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            When the Call Goes Nowhere
          </SectionLabel>

          <motion.div variants={fadeUp} className="flex gap-3 rounded-xl border border-border bg-card p-5 shadow-sm">
            <AlertCircle className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" aria-hidden />
            <div className="space-y-2 text-sm text-muted-foreground leading-relaxed">
              <p>
                If there is no pain, no interest, and no next step: exit clean.{" "}
                <span className="italic text-foreground">
                  &ldquo;Appreciate the time. If anything shifts on advertising or growth, feel free to reach out.
                  I&apos;ll leave it there for now.&rdquo;
                </span>
              </p>
              <p>Log it. Set a follow-up for 60–90 days if your process allows. Move on.</p>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Call Flow Quick Reference ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            At a Glance — Call Flow
          </SectionLabel>

          <motion.div variants={fadeUp}>
            <FlowChart
              steps={CALL_FLOW}
              accentClass="bg-emerald-accent text-white"
              arrowClass="text-emerald-accent"
            />
          </motion.div>

          <motion.div variants={fadeUp} className="mt-4 flex items-start gap-3 rounded-xl border border-emerald-accent/20 bg-emerald-accent/[0.04] px-5 py-4">
            <Phone className="h-5 w-5 text-emerald-accent shrink-0 mt-0.5" aria-hidden />
            <p className="text-sm text-foreground leading-relaxed">
              Target total: <span className="font-bold">~5 minutes</span> to booked meeting or firm
              callback. If you are past five minutes without a next step, you are either onto
              something real (book now) or drifting (reset and ask for the meeting).
            </p>
          </motion.div>
        </motion.section>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Phone Scripts</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
