"use client";

import { motion } from "framer-motion";
import MarkCompleteButton from "@/components/ui/MarkCompleteButton";
import { publicFile } from "@/lib/basePath";
import {
  Globe,
  Search,
  RefreshCw,
  Smartphone,
  Lightbulb,
  MessageCircle,
  Megaphone,
  Video,
  Mail,
  Palette,
  Bot,
  TrendingUp,
  Building2,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  scaleIn,
  SectionLabel,
  ProductPageHero,
  StatHighlight,
} from "../products/shared";

/* ─── data ─── */

const PAGE_TLDR = {
  tldr: "Obsidion is a full-scale digital marketing agency focused on advertising, lead acquisition, and customer acquisition. We leverage AI automation and proprietary software to follow up with leads, build custom tools for businesses, and deliver results across every major ad platform.",
  meansForYou: [
    "Lead with results — $350K+ in managed ad spend monthly, 4.5x average ROAS, $1.5M+ in monthly revenue generated for clients.",
    "We're not a one-trick shop. Ads, AI automation, email marketing, web design, branding, content production — know the full stack so you can match it to pain.",
    "If you don't know a detail, hand off to the specialist — never guess pricing or tech specifics.",
  ],
} as const;

const CORE_SERVICES = [
  {
    icon: Megaphone,
    title: "Paid Advertising (Primary)",
    oneLiner: "We run your ads across every major platform — Meta, TikTok, Snapchat, Reddit, YouTube — managing creative, targeting, and optimization so your spend turns into customers.",
    details: "This is the engine. We manage over $350K in monthly ad spend for our book of clients with an average 4.5x ROAS across all verticals. That translates to over $1.5M in monthly revenue generated for our clients. We build the creatives, run the campaigns, and optimize daily — all inside the client's own ad accounts for full transparency.",
    painSignals: [
      "\"We're running ads but don't know if they're working\"",
      "\"Our agency won't give us access to our own ad account\"",
      "\"We boost posts but it doesn't do anything\"",
      "\"We want to scale but don't know which platform to be on\"",
    ],
    color: "accent",
  },
  {
    icon: Bot,
    title: "AI Automation & Follow-Up",
    oneLiner: "We build AI-powered follow-up systems that engage leads instantly and nurture them through to conversion — no lead falls through the cracks.",
    details: "Speed-to-lead is everything. Our AI automation follows up with inquiries in real time via SMS, email, and chat — qualifying leads, booking appointments, and handling objections 24/7. We also build proprietary AI tools for businesses that make their operations faster, more streamlined, and higher quality.",
    painSignals: [
      "\"We get leads but nobody follows up fast enough\"",
      "\"People call after hours and we lose them\"",
      "\"We don't have a system — it's all manual\"",
      "\"I need something that works while I sleep\"",
    ],
    color: "purple-accent",
  },
  {
    icon: Mail,
    title: "Automated Email Marketing",
    oneLiner: "We build and manage automated email flows that turn subscribers into buyers and one-time buyers into repeat customers.",
    details: "Email marketing is a massive revenue channel, especially in e-commerce. We set up abandoned cart sequences, welcome flows, post-purchase follow-ups, win-back campaigns, and promotional blasts — all automated, all segmented, all optimized for conversions.",
    painSignals: [
      "\"We have an email list but never send anything\"",
      "\"Our cart abandonment rate is terrible\"",
      "\"We don't have any automated email flows set up\"",
      "\"We need help with retention, not just new customers\"",
    ],
    color: "emerald-accent",
  },
  {
    icon: Globe,
    title: "High-End Web Design",
    oneLiner: "We build custom, high-converting websites — not templates. Your online presence should match the quality of your business.",
    details: "Every pixel is intentional. We design and develop custom websites built for conversion, speed, and brand impact. These aren't cookie-cutter templates — they're tailored to the business, the vertical, and the customer journey. Bad landing pages waste ad spend; great ones multiply it.",
    painSignals: [
      "\"Our website is outdated / embarrassing\"",
      "\"We built it ourselves on Wix and it's not converting\"",
      "\"We don't even have a website\"",
      "\"Our site doesn't match the quality of our work\"",
    ],
    color: "accent",
  },
  {
    icon: Palette,
    title: "Full Branding & Product Launches",
    oneLiner: "From logo and brand identity to full product launch strategy — we build brands that stand out and launch products that sell.",
    details: "We handle complete brand builds: logo design, brand guidelines, packaging, positioning, and go-to-market strategy. For product launches, we coordinate the creative, the landing pages, the ad campaigns, and the email sequences into one cohesive push.",
    painSignals: [
      "\"We're launching a new product and need everything\"",
      "\"Our branding is all over the place\"",
      "\"We need a professional look — logo, colors, the whole thing\"",
      "\"We want to rebrand and relaunch\"",
    ],
    color: "purple-accent",
  },
  {
    icon: Video,
    title: "Content Production (Video & Photo)",
    oneLiner: "We have subcontractors across nearly every state who can shoot on location — producing high-quality commercials and content for ads, social, and traditional media.",
    details: "For higher-ticket clients, we come on location with professional video and photo crews. The content gets published across paid media, social media, and traditional channels like TV commercials. High-quality creative is the single biggest lever in ad performance.",
    painSignals: [
      "\"We don't have any good video content\"",
      "\"Our ads all look the same — just stock photos\"",
      "\"We want real commercials, not just social media posts\"",
      "\"We need content but don't know where to start\"",
    ],
    color: "amber-accent",
  },
  {
    icon: Search,
    title: "SEO (Search Engine Optimization)",
    oneLiner: "We make sure your business shows up when people Google what you do in your area — organic visibility that compounds over time.",
    details: "Local and organic visibility on Google and Maps. SEO is the long game that complements paid advertising — it builds a foundation of free, compounding traffic. We optimize for local search, Google Business Profile, on-page SEO, and content strategy.",
    painSignals: [
      "\"I don't think we show up on Google\"",
      "\"Our competitors are everywhere online and we're invisible\"",
      "\"We get all our business from referrals — zero online presence\"",
    ],
    color: "emerald-accent",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    oneLiner: "We build branded iOS and Android apps — loyalty programs, push notifications, ordering — all under your name, not a third party's.",
    details: "For businesses with repeat customers, a branded app locks in the relationship. Loyalty rewards, push notifications, direct booking or ordering — owned by the client, not rented from DoorDash or UberEats. Cuts third-party fees and builds a direct line to customers.",
    painSignals: [
      "\"We use DoorDash / UberEats and the fees are killing us\"",
      "\"We want a loyalty program\"",
      "\"We want our customers to order directly from us\"",
    ],
    color: "amber-accent",
  },
] as const;

const VERTICALS = [
  {
    icon: Wrench,
    title: "Home Services",
    examples: "Plumbers, HVAC, landscaping, roofing, electricians, general contractors",
    color: "accent",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce",
    examples: "Beauty, health, fitness, supplements, DTC brands",
    color: "emerald-accent",
  },
  {
    icon: Building2,
    title: "Med Spas & Wellness",
    examples: "Med spas, aesthetic clinics, wellness centers, dental practices",
    color: "purple-accent",
  },
  {
    icon: TrendingUp,
    title: "Franchises & Multi-Location",
    examples: "Multi-million dollar franchises, restaurant chains, retail groups",
    color: "amber-accent",
  },
] as const;

const AD_PLATFORMS = [
  "Meta (Facebook & Instagram)",
  "TikTok",
  "YouTube",
  "Snapchat",
  "Reddit",
  "Google Ads",
] as const;

const CHEAT_SHEET = [
  { product: "Paid Ads", oneLiner: "Campaigns across Meta, TikTok, YouTube, Snapchat, Reddit — full visibility.", trigger: "\"Running ads / boosting / don't know if ads work\"" },
  { product: "AI Automation", oneLiner: "Instant AI-powered lead follow-up and custom business tools.", trigger: "\"Leads fall through / no follow-up system / too slow\"" },
  { product: "Email Marketing", oneLiner: "Automated flows — carts, welcome, retention, promos.", trigger: "\"Have a list but don't email / losing repeat buyers\"" },
  { product: "Web Design", oneLiner: "Custom high-converting sites — not templates.", trigger: "\"Site is old / bad / built it ourselves / wasting ad clicks\"" },
  { product: "Branding", oneLiner: "Full brand identity + product launch strategy.", trigger: "\"Launching something / branding is inconsistent\"" },
  { product: "Content Production", oneLiner: "On-location video and photo crews across the US.", trigger: "\"No video content / ads look cheap / want commercials\"" },
  { product: "SEO", oneLiner: "Show up on Google and Maps in your area.", trigger: "\"Invisible vs competitors / no organic traffic\"" },
  { product: "Mobile App", oneLiner: "Branded app — loyalty, orders, push notifications.", trigger: "\"Third-party fees / want loyalty program\"" },
] as const;

const colorMap: Record<string, { bg: string; text: string; border: string; badgeBg: string }> = {
  accent: { bg: "bg-accent/10", text: "text-accent", border: "border-accent/20", badgeBg: "bg-accent/[0.04]" },
  "emerald-accent": { bg: "bg-emerald-accent/10", text: "text-emerald-accent", border: "border-emerald-accent/20", badgeBg: "bg-emerald-accent/[0.04]" },
  "purple-accent": { bg: "bg-purple-accent/10", text: "text-purple-accent", border: "border-purple-accent/20", badgeBg: "bg-purple-accent/[0.04]" },
  "amber-accent": { bg: "bg-amber-accent/10", text: "text-amber-accent", border: "border-amber-accent/20", badgeBg: "bg-amber-accent/[0.04]" },
};

/* ─── component ─── */

export default function ProductKnowledgeContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}`}
        backLabel="Back to hub"
        eyebrow="Product Knowledge"
        title="Product Knowledge"
        description="Obsidion is a full-scale digital marketing agency. Advertising and customer acquisition are the core — AI automation, email marketing, web design, branding, and content production are the full stack. Know what we do so you can match it to their pain."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">
        {/* ── TL;DR ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-purple-accent/25 bg-purple-accent/[0.06] px-6 py-5"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-2">TL;DR</p>
            <p className="text-sm text-foreground leading-relaxed font-medium mb-4">{PAGE_TLDR.tldr}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-2">
              What this means for you
            </p>
            <ul className="space-y-2">
              {PAGE_TLDR.meansForYou.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* ── By the Numbers ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            By the Numbers
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-card p-6 sm:p-8 shadow-sm">
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
              <StatHighlight value="$350K+" label="Monthly Ad Spend Managed" colorClass="text-accent" />
              <StatHighlight value="4.5x" label="Average ROAS" colorClass="text-emerald-accent" />
              <StatHighlight value="$1.5M+" label="Monthly Client Revenue" colorClass="text-purple-accent" />
              <StatHighlight value="$1M+" label="Cash Collected (8 Mo)" colorClass="text-amber-accent" />
            </div>
            <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed mt-6 text-center">
              We are a new but rapidly rising force in the digital marketing world — and these numbers back it up.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* ── Who We Serve ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            Who We Serve
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
            We work with businesses from local service providers all the way up to multi-million dollar franchises. If they need customers, we can help.
          </motion.p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {VERTICALS.map((vertical) => {
              const Icon = vertical.icon;
              const c = colorMap[vertical.color];
              return (
                <motion.div
                  key={vertical.title}
                  variants={fadeUp}
                  className={`rounded-2xl border ${c.border} bg-card p-5 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                      <Icon size={20} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-base font-bold tracking-tight">{vertical.title}</h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{vertical.examples}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── Ad Platforms ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Platforms We Advertise On
          </SectionLabel>

          <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
            {AD_PLATFORMS.map((platform) => (
              <span
                key={platform}
                className="inline-flex items-center rounded-full border border-purple-accent/20 bg-purple-accent/[0.06] px-4 py-2 text-sm font-medium text-foreground"
              >
                {platform}
              </span>
            ))}
          </motion.div>
        </motion.section>

        {/* ── Core Services ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            What We Offer
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground text-sm leading-relaxed max-w-3xl mb-6">
            Paid advertising and lead acquisition are the core. Everything else supports, enhances, and multiplies the results.
          </motion.p>

          <div className="space-y-6">
            {CORE_SERVICES.map((service) => {
              const Icon = service.icon;
              const c = colorMap[service.color];
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  className={`rounded-2xl border ${c.border} bg-card p-6 sm:p-8 shadow-sm`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.bg} ${c.text}`}>
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <h3 className="text-lg font-bold tracking-tight">{service.title}</h3>
                  </div>

                  <div className={`rounded-xl ${c.badgeBg} border ${c.border} px-5 py-4 mb-4`}>
                    <p className="text-sm font-medium text-foreground italic">
                      &ldquo;{service.oneLiner}&rdquo;
                    </p>
                  </div>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {service.details}
                  </p>

                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Pain signals to listen for:</span>
                    <ul className="mt-2 space-y-1.5">
                      {service.painSignals.map((signal) => (
                        <li key={signal} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                          <span className={`mt-1.5 h-1.5 w-1.5 rounded-full ${c.bg} shrink-0`} />
                          {signal}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.section>

        {/* ── How It All Connects ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            How It All Connects
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed italic">
              &ldquo;We run paid ads across every major platform to drive leads and customers. Our AI
              automation follows up instantly so nothing slips through. The website converts the
              traffic, email marketing retains and upsells, and our content team produces the
              creative that makes it all perform. Branding ties it together. One team, one
              system — that&apos;s why it works.&rdquo;
            </p>
          </motion.div>
        </motion.section>

        {/* ── Cheat Sheet ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Call Cheat Sheet
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Keep this open during calls:
          </motion.p>

          <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/30">
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">Service</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider">One-Liner</th>
                    <th className="text-left px-5 py-3 font-semibold text-muted-foreground text-xs uppercase tracking-wider hidden sm:table-cell">Use When They Say...</th>
                  </tr>
                </thead>
                <tbody>
                  {CHEAT_SHEET.map((row) => (
                    <tr key={row.product} className="border-b border-border/50 last:border-0 hover:bg-muted/20 transition-colors">
                      <td className="px-5 py-3 font-bold text-foreground">{row.product}</td>
                      <td className="px-5 py-3 text-muted-foreground">{row.oneLiner}</td>
                      <td className="px-5 py-3 text-muted-foreground italic hidden sm:table-cell">{row.trigger}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.section>

        {/* ── Franchise Flag ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-amber-accent" textClass="text-amber-accent">
            Franchise Prospects — Flag Immediately
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-amber-accent/20 bg-amber-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed mb-3">
              If you&apos;re talking to someone who is part of a <strong>franchise or multi-location brand</strong>, flag this to your manager before or immediately after the call.
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed mb-3">
              Landing one location can roll into the entire network if we perform. These are high-value opportunities.
            </p>
            <p className="text-sm font-semibold text-foreground">
              Your move: book the meeting, add <span className="font-mono text-amber-accent">&quot;FRANCHISE — FLAG&quot;</span> at the top of handoff notes.
            </p>
          </motion.div>
        </motion.section>

        {/* ── If They Ask Something You Don't Know ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            If They Ask Something You Don&apos;t Know
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <div className="flex items-start gap-3">
              <MessageCircle size={18} className="text-accent mt-0.5 shrink-0" />
              <div>
                <p className="text-sm text-foreground leading-relaxed italic mb-3">
                  &ldquo;Great question — that&apos;s exactly the kind of thing our specialist covers
                  in the meeting. Let me get you on the calendar so they can walk you through it properly.&rdquo;
                </p>
                <p className="text-sm font-semibold text-foreground">Never guess. Never make something up. Book the meeting.</p>
              </div>
            </div>
          </motion.div>
        </motion.section>

        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <MarkCompleteButton
            roleSlug={roleSlug}
            sectionSlug="products"
            upNext={[
              { slug: "on-the-call", title: "Outreach Playbook" },
              { slug: "getting-paid", title: "Getting Paid" },
            ]}
          />
        </div>
      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Product Knowledge</p>
          <img src={publicFile("/logos/logo.png")} alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
