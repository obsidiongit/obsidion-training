"use client";

import { motion } from "framer-motion";
import {
  Eye,
  XCircle,
  TrendingUp,
  Users,
  MessageSquare,
  Search,
  AlertCircle,
  CheckCircle2,
  MinusCircle,
  PlaySquare,
  Instagram,
  Facebook,
  Linkedin,
  ExternalLink,
} from "lucide-react";
import {
  stagger,
  fadeUp,
  SectionLabel,
  PitchQuote,
  ProductPageHero,
} from "../products/shared";

/* ─── data ─── */

const SOCIAL_TLDR = {
  tldr: "DMs should sound human. Lead with paid advertising or Facebook/Instagram ads. Only say 'Meta' when you're explaining how Obsidion runs the campaigns — not as an opener to someone who might not know what it means.",
  meansForYou: [
    "Most small business owners know 'Facebook ads' — not all know 'Meta ads.' Use the language they use.",
    "If they're already running ads, they'll know the terminology. Match their level.",
    "This is a playbook for getting calls booked — not for impressing people with industry terms.",
  ],
} as const;

const FB_SIGNALS_HOT = [
  { signal: "Posting Reels regularly, no sponsored posts visible", hook: "Active content with no paid behind it — the engine is ready, nobody's floored it." },
  { signal: "Good engagement (comments, shares) on organic posts", hook: "The content works. Paid would scale what's already resonating." },
  { signal: "Strong visual content but limited reach", hook: "They've hit the ceiling of organic. Paid breaks through that." },
  { signal: "Bio links to a website or lead form", hook: "They care about conversions, not just likes." },
] as const;

const FB_SIGNALS_MEDIUM = [
  { signal: "Inconsistent posting — good content, then gaps", note: "Overwhelmed owner, not ignoring growth. Good empathy hook." },
  { signal: "Lots of photos, no Reels yet", note: "Haven't made the jump to video. Real opportunity." },
] as const;

const FB_SIGNALS_SKIP = [
  { signal: "No posts in 90+ days", note: "Come back via phone first — hard to engage authentically." },
  { signal: "Only boosted posts, no organic", note: "Likely already has an ad relationship. Adjust angle accordingly." },
] as const;

const IG_SIGNALS_HOT = [
  { signal: "Reels posting consistently, no sponsored label", hook: "Organic-only content that's clearly working — paid would multiply it." },
  { signal: "Strong engagement relative to follower count", hook: "Tight audience means high intent. Ads would reach more of the same." },
  { signal: "Website or booking link in bio", hook: "Conversion-focused. They want leads, not just follows." },
  { signal: "Reels getting strong organic views", hook: "The algorithm already likes them. Paid accelerates what's already happening." },
] as const;

const IG_SIGNALS_MEDIUM = [
  { signal: "Mix of Reels and photos, moderate engagement", note: "Standard local business — not optimized but not absent either." },
  { signal: "Good follower count, low engagement", note: "Grew organically but not converting the audience. Real gap." },
] as const;

const ENGAGEMENT_HABITS = [
  {
    icon: "eye",
    habit: "View 10–15 prospect profiles per day",
    why: "They see the notification. Your name starts to register before the call.",
  },
  {
    icon: "play",
    habit: "Comment on 3–5 Reels per day (not just photos)",
    why: "Comments on Reels carry more algorithmic weight right now. The owner sees your name in their insights.",
  },
  {
    icon: "message",
    habit: "Reply to 2–3 Stories per day",
    why: "Story replies go directly to DMs and feel like a real reaction — not outreach.",
  },
  {
    icon: "search",
    habit: "Check the Meta Ad Library before every research session",
    why: "30 seconds to know if they're running ads before you pick up the phone.",
  },
  {
    icon: "clock",
    habit: "Respond to DMs within a few hours",
    why: "If someone replies, the clock is ticking. Slow responses kill momentum.",
  },
  {
    icon: "share",
    habit: "Share one relevant post or stat per week",
    why: "Position yourself as someone who knows paid advertising. An Obsidion result, an industry benchmark — anything real.",
  },
] as const;

const DONT_LIST = [
  "Don't pitch in the connection request or cold DM. Connect first, add value second, pitch on the call.",
  "Don't spam DMs. Two messages max with no reply — then switch to phone or email.",
  "Don't be fake. One specific detail proves you actually looked. 'Love your business!' when you clearly haven't is obvious.",
  "Don't post sales pitches in Facebook Groups. Groups are communities. You'll get removed and lose credibility with everyone watching.",
  "Don't argue in comments. Ever. You represent Obsidion now.",
  "Don't over-follow-up on Instagram. Two unreplied DMs is the hard limit — more triggers spam filters.",
] as const;

/* ─── small helpers ─── */

function SignalRow({
  signal,
  subtext,
  color,
  icon: Icon,
}: {
  signal: string;
  subtext: string;
  color: "green" | "yellow" | "gray";
  icon: React.ElementType;
}) {
  const colorMap = {
    green: "text-emerald-accent border-emerald-accent/20 bg-emerald-accent/[0.04]",
    yellow: "text-yellow-400 border-yellow-400/20 bg-yellow-400/[0.04]",
    gray: "text-muted-foreground border-border bg-card/50",
  };
  const iconColor = {
    green: "text-emerald-accent",
    yellow: "text-yellow-400",
    gray: "text-muted-foreground",
  };
  return (
    <div className={`rounded-xl border px-4 py-3 ${colorMap[color]}`}>
      <div className="flex items-start gap-2.5">
        <Icon size={15} className={`mt-0.5 shrink-0 ${iconColor[color]}`} />
        <div>
          <p className="text-sm font-medium leading-snug">{signal}</p>
          <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{subtext}</p>
        </div>
      </div>
    </div>
  );
}

/* ─── component ─── */

export default function SocialOutreachContent({ roleSlug }: { roleSlug: string }) {
  return (
    <div className="min-h-screen bg-background">
      <ProductPageHero
        backHref={`/role/${roleSlug}/outreach`}
        backLabel="Back to Outreach"
        eyebrow="Social"
        title="Social Outreach"
        description="Engage first, then reach out. Lead with paid advertising — Facebook and Instagram ads. 'Meta' is for when you're explaining how Obsidion works, not for opening a cold DM."
      />

      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 pb-20 space-y-20">

        {/* ── Why Social Matters ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            Why Social Matters
          </SectionLabel>

          <motion.div variants={fadeUp} className="rounded-2xl border border-accent/20 bg-accent/[0.04] px-6 py-5">
            <p className="text-sm text-foreground leading-relaxed">
              Phone opens doors. Email follows up.{" "}
              <span className="font-semibold">Social builds trust before either one happens.</span>{" "}
              When you call after viewing their profile and engaging with a post, you&apos;re not a total
              stranger. That small edge makes a real difference in connect rates.
            </p>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="mt-5 rounded-2xl border border-purple-accent/25 bg-purple-accent/[0.06] px-5 py-4"
          >
            <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-1">TL;DR</p>
            <p className="text-sm text-foreground leading-relaxed mb-3">{SOCIAL_TLDR.tldr}</p>
            <p className="text-xs font-bold uppercase tracking-wider text-foreground mb-1.5">
              What this means for you
            </p>
            <ul className="space-y-1.5">
              {SOCIAL_TLDR.meansForYou.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm text-muted-foreground leading-relaxed">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                  {line}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* ── LinkedIn Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            <Linkedin size={14} className="inline mr-1.5 -mt-0.5" />
            LinkedIn Outreach
          </SectionLabel>

          <div className="space-y-6">
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Step 1 — Research (60 seconds)</h4>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">Before you reach out, check:</p>
              <ul className="space-y-1.5">
                {[
                  "What's their business?",
                  "Have they posted recently?",
                  "Mutual connections?",
                  "Anything that tells you what they care about?",
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent shrink-0" />
                    {q}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Step 2 — Connection Request (always add a note)</h4>
              <div className="space-y-3">
                <PitchQuote label="Standard">
                  Hey [Name], I came across your business — looks like you&apos;re doing great work in
                  [their industry] in [their city]. Would love to connect.
                </PitchQuote>
                <PitchQuote label="After Their Content" variant="emerald">
                  Hey [Name], saw your post about [topic] — solid insight. I work with [their industry]
                  businesses on paid advertising and growth. Happy to connect.
                </PitchQuote>
                <PitchQuote label="Mutual Connection" variant="purple">
                  Hey [Name], noticed we&apos;re both connected to [mutual connection]. I work with local
                  businesses on ads and growth — figured it was worth connecting.
                </PitchQuote>
              </div>
              <p className="text-xs text-muted-foreground mt-3">Keep under 300 characters. Don&apos;t pitch in the request.</p>
            </motion.div>

            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-4">Step 3 — The DM (after they accept)</h4>
              <p className="text-xs text-muted-foreground mb-4">Wait a few hours after they accept. Don&apos;t pitch immediately.</p>
              <div className="space-y-3">
                <PitchQuote label="Soft Open (Ads-first)">
                  Hey [Name], thanks for connecting. I peeked at what [company] is doing on Facebook
                  and Instagram — curious if you&apos;re running paid ads right now or mostly organic. We
                  help businesses like yours with advertising at Obsidion. Open to a quick call if
                  that&apos;s on your mind?
                </PitchQuote>
                <PitchQuote label="Direct (with reason)" variant="emerald">
                  Hey [Name], looked at your business after we connected. Noticed [specific
                  observation — e.g. you&apos;re running ads, strong content, active page]. We help [their
                  industry] businesses scale with paid ads plus the site and follow-up behind it.
                  Worth two minutes?
                </PitchQuote>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Facebook Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-emerald-accent" textClass="text-emerald-accent">
            <Facebook size={14} className="inline mr-1.5 -mt-0.5" />
            Facebook Outreach
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Facebook is the highest-volume prospecting platform for the verticals Obsidion serves — local
            services, food, salons, contractors, med spas. The average small business owner in these
            industries checks Facebook more often than their email. Reels now drive more reach than static
            posts, and Groups are where the most engaged owners spend their time.
          </motion.p>

          <div className="space-y-6">
            {/* Reading a page */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-1">Reading a Facebook Page Before You Reach Out</h4>
              <p className="text-xs text-muted-foreground mb-4">60 seconds of research, three tiers of signal:</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-emerald-accent mb-2">Hot prospects</p>
                  <div className="space-y-2">
                    {FB_SIGNALS_HOT.map((s) => (
                      <SignalRow key={s.signal} signal={s.signal} subtext={s.hook} color="green" icon={CheckCircle2} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">Worth pursuing</p>
                  <div className="space-y-2">
                    {FB_SIGNALS_MEDIUM.map((s) => (
                      <SignalRow key={s.signal} signal={s.signal} subtext={s.note} color="yellow" icon={AlertCircle} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-2">Skip for now</p>
                  <div className="space-y-2">
                    {FB_SIGNALS_SKIP.map((s) => (
                      <SignalRow key={s.signal} signal={s.signal} subtext={s.note} color="gray" icon={MinusCircle} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Finding prospects */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Finding Prospects</h4>
              <ul className="space-y-1.5">
                {[
                  "Search for local business pages in your target area and vertical",
                  "Join local business groups — Chamber of Commerce, industry groups, \"businesses of [city]\"",
                  "Look at who's posting in those groups — active posters are active owners",
                  "Check the follower list of a well-known local business in their vertical",
                  "Search \"[industry] + [city]\" in Facebook and filter to Pages",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Groups */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-emerald-accent/20 bg-emerald-accent/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <Users size={15} className="text-emerald-accent" />
                <h4 className="text-sm font-bold">Facebook Groups — The Underused Channel</h4>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                Groups are the highest-engagement surface on Facebook right now. Business owners who
                participate are self-selected: active, growth-minded, and more receptive to peer
                conversations than cold outreach. The play is to be a real participant first, then DM.
              </p>
              <div className="space-y-2">
                {[
                  { step: "1", text: "Join the right groups — local business, Chamber, industry-specific for your verticals" },
                  { step: "2", text: "Lurk for a few days before reaching out — understand the tone and who the regulars are" },
                  { step: "3", text: "When an owner posts about growth, leads, or marketing, comment with something genuinely useful — not a pitch" },
                  { step: "4", text: "After a real interaction in the group, DM — you're no longer a stranger" },
                ].map((s) => (
                  <div key={s.step} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-accent/15 text-xs font-bold text-emerald-accent">
                      {s.step}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-red-400 mt-4">
                ✕ Don&apos;t drop a pitch post, your company link, or &ldquo;DM me for help&rdquo; in a group.
                Admins remove it and it kills your credibility with everyone watching.
              </p>
            </motion.div>

            {/* Engaging before DM */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Engage Before You DM</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Do this 24–48 hours before the DM. When your message arrives, they&apos;ve already seen your name.
              </p>
              <ul className="space-y-2">
                {[
                  "Like a recent post from their business page",
                  "Leave a real comment — specific to the content, not generic ('That remodel came out great' not 'Nice post!')",
                  "If they posted a Reel, watch it fully and comment — Facebook shows owners who engaged with their video, and a Reel comment carries more weight than a photo comment right now",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DM Templates */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-1">Facebook DM Templates</h4>
              <p className="text-xs text-muted-foreground mb-4">Keep under 150 words. Lead with a real observation. Ask one question. Done.</p>
              <div className="space-y-3">
                <PitchQuote label="Strong Content, No Paid" variant="emerald">
                  Hey [Name], been following [their business] — you&apos;re putting out good content. Quick
                  question: are you running any paid ads behind it, or is it all organic right now? I
                  work with businesses like yours on Facebook and Instagram advertising at Obsidion.
                  Worth a quick chat?
                </PitchQuote>
                <PitchQuote label="Organic Content Ready to Scale" variant="emerald">
                  Hey [Name], saw [their business page] and the content is solid — you&apos;re just not
                  running paid behind it. That&apos;s actually a good spot to be in, it usually means the
                  creative&apos;s already there. We help [their vertical] businesses put real budget behind
                  what&apos;s working on Facebook and Instagram. Worth a quick chat?
                </PitchQuote>
                <PitchQuote label="From a Business Group" variant="emerald">
                  Hey [Name], saw your post in [group] about [topic] — made sense. I help local
                  businesses put paid behind what&apos;s already working, usually starting with Facebook
                  and Instagram. Open to a quick chat if growth is on your mind?
                </PitchQuote>
              </div>
              <div className="mt-4 rounded-xl border border-border bg-background/60 px-4 py-3">
                <p className="text-xs font-semibold mb-1">Follow-up rule</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  If no reply, follow up once at day 5 with a new angle — not a bump. Reference
                  something new you saw on their page. Two DMs max, then switch to phone or email.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Instagram Outreach ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            <Instagram size={14} className="inline mr-1.5 -mt-0.5" />
            Instagram Outreach
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-8">
            Instagram is the most direct line to owners in food, salons, med spas, and lifestyle
            businesses. These owners post daily, check DMs more than email, and make decisions based on
            what they see. Reels now drive 35–40% more reach than photos for business accounts — if
            someone&apos;s creating that content without paid behind it, that&apos;s your hook.
          </motion.p>

          <div className="space-y-6">
            {/* Reading a profile */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-1">Reading an Instagram Profile Before You Reach Out</h4>
              <p className="text-xs text-muted-foreground mb-4">Same 60-second check, slightly different signals:</p>

              <div className="space-y-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-purple-accent mb-2">Hot prospects</p>
                  <div className="space-y-2">
                    {IG_SIGNALS_HOT.map((s) => (
                      <SignalRow key={s.signal} signal={s.signal} subtext={s.hook} color="green" icon={CheckCircle2} />
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-yellow-400 mb-2">Worth pursuing</p>
                  <div className="space-y-2">
                    {IG_SIGNALS_MEDIUM.map((s) => (
                      <SignalRow key={s.signal} signal={s.signal} subtext={s.note} color="yellow" icon={AlertCircle} />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Finding prospects */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">Finding Prospects</h4>
              <ul className="space-y-1.5">
                {[
                  "Search hashtags combining their industry and city: #austinrestaurant, #dallasmassage, #denversalon",
                  "Check the Explore page in your area — Instagram surfaces active local businesses automatically",
                  "Look at who's tagged in location-based posts for their city and vertical",
                  "Browse the follower list of a well-known local competitor or anchor business",
                  "Search the business name directly — most have Instagram even if it's not linked anywhere",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Engagement */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-purple-accent/20 bg-purple-accent/[0.04] p-6">
              <div className="flex items-center gap-2 mb-3">
                <PlaySquare size={15} className="text-purple-accent" />
                <h4 className="text-sm font-bold">Engage Before You DM</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Same rule as Facebook — put your name on their radar first. Instagram-specific tactics:
              </p>
              <ul className="space-y-2">
                {[
                  "Watch their most recent Reel in full — this registers in their account insights",
                  "Leave a specific comment on a Reel (not a photo — Reels get more algorithmic weight): 'That before/after is wild' not 'Love this!'",
                  "Reply to one of their Stories — Story replies go directly to DMs and feel like a real reaction, not outreach. This is the warmest possible entry into a conversation.",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* DM Templates */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-1">Instagram DM Templates</h4>
              <p className="text-xs text-muted-foreground mb-4">Under 100 words is ideal. Two or three sentences, a genuine observation, one question.</p>
              <div className="space-y-3">
                <PitchQuote label="After Engaging Their Reels" variant="purple">
                  Hey [Name], your Reels have been great lately — the [specific one] caught my eye.
                  Quick question: are you running any paid ads behind the content, or is it all
                  organic? I work with [their vertical] businesses at Obsidion on Facebook and
                  Instagram advertising — wanted to see if it&apos;s on your radar.
                </PitchQuote>
                <PitchQuote label="Strong Content, No Paid" variant="purple">
                  Hey [Name], love what you&apos;re doing with [specific detail]. The content&apos;s clearly
                  working. Curious if you&apos;re trying to scale it with paid or keeping it organic — we
                  help businesses like yours run ads on Facebook and Instagram to get more eyes on
                  what&apos;s already working. Happy to compare notes.
                </PitchQuote>
                <PitchQuote label="Story Reply Entry" variant="purple">
                  [React genuinely to the Story first — &ldquo;That looks incredible&rdquo; or &ldquo;Results on that are
                  crazy.&rdquo;] If they respond: &ldquo;Glad it landed! Quick question — are you running any paid
                  ads behind this content or mostly organic? That&apos;s what I do — help businesses like
                  yours run Facebook and Instagram ads to get more reach on what&apos;s already working.&rdquo;
                </PitchQuote>
              </div>
              <div className="mt-4 rounded-xl border border-border bg-background/60 px-4 py-3">
                <p className="text-xs font-semibold mb-1">Follow-up rule</p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Follow up once at day 5 with a new angle — reference a recent Reel, a Story, or a
                  seasonal offer. Two DMs max before switching to phone or email. Don&apos;t just send
                  &ldquo;following up on my last message.&rdquo;
                </p>
              </div>
            </motion.div>

            {/* Sponsored label */}
            <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h4 className="text-sm font-bold mb-3">What the &ldquo;Sponsored&rdquo; Label Tells You</h4>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                While you&apos;re researching, scroll their profile and Explore. If you see a &ldquo;Sponsored&rdquo; tag:
              </p>
              <div className="space-y-3">
                {[
                  {
                    label: "They're already running ads",
                    text: "Adjust the angle — 'we manage and optimize in your account — have you been happy with results?' Don't pitch it like they've never heard of ads.",
                    color: "text-emerald-accent",
                    bg: "bg-emerald-accent/[0.04] border-emerald-accent/15",
                  },
                  {
                    label: "They're boosting posts manually",
                    text: "Most small business owners who boost posts are leaving a lot on the table vs. a properly managed campaign. That gap is your pitch.",
                    color: "text-yellow-400",
                    bg: "bg-yellow-400/[0.04] border-yellow-400/15",
                  },
                  {
                    label: "No ads, strong content",
                    text: "Hot prospect. They've done the hard part — built an audience, created the content. They just haven't turned the engine on yet.",
                    color: "text-purple-accent",
                    bg: "bg-purple-accent/[0.04] border-purple-accent/15",
                  },
                ].map((s) => (
                  <div key={s.label} className={`rounded-xl border px-4 py-3 ${s.bg}`}>
                    <p className={`text-xs font-bold mb-0.5 ${s.color}`}>{s.label}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{s.text}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* ── Platform Intelligence ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-accent" textClass="text-accent">
            <Search size={14} className="inline mr-1.5 -mt-0.5" />
            Platform Intelligence
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Before any call or DM, run a two-minute check. This gives you material that makes you sound
            like you&apos;ve actually done your homework — because you have.
          </motion.p>

          <div className="space-y-5">
            <motion.div variants={fadeUp} className="rounded-2xl border border-accent/25 bg-accent/[0.04] p-6">
              <div className="flex items-start gap-3 mb-4">
                <ExternalLink size={15} className="text-accent mt-0.5 shrink-0" />
                <div>
                  <h4 className="text-sm font-bold">Meta Ad Library — Use This Every Time</h4>
                  <p className="text-xs text-muted-foreground mt-0.5">facebook.com/ads/library — search any business name, it&apos;s public</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                In 30 seconds you can see if any business is running active ads on Facebook or Instagram.
                No login needed. Search their business name before every research session — it tells you
                immediately whether they have an active ad relationship or not.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { label: "Active ads found", action: "They're spending. Angle toward optimization and results." },
                  { label: "No active ads", action: "Cold on paid. Angle toward what they're missing." },
                ].map((r) => (
                  <div key={r.label} className="rounded-xl border border-accent/15 bg-background/60 px-4 py-3">
                    <p className="text-xs font-semibold text-accent mb-0.5">{r.label}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{r.action}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Facebook size={14} className="text-emerald-accent" />
                  <h4 className="text-sm font-bold">What to Check on Facebook</h4>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Last post date — gaps are a hook ('lot of owners tell me that's when they start thinking about paid')",
                    "Page review rating — high stars with low reach is a common gap",
                    "Whether they have a 'Book Now' or 'Shop' button — signals conversion focus",
                    "Any sponsored posts visible — if yes, they're already spending somewhere",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 h-1 w-1 rounded-full bg-emerald-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div variants={fadeUp} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <Instagram size={14} className="text-purple-accent" />
                  <h4 className="text-sm font-bold">What to Check on Instagram</h4>
                </div>
                <ul className="space-y-1.5">
                  {[
                    "Reel view counts — low views on a good account means they need reach behind them",
                    "Link in bio — does it go to a real website or outdated links?",
                    "Posting frequency — daily Stories vs. weekly Reels tells you their content comfort zone",
                    "Location tags and niche hashtags — owners who don't use them are missing organic discovery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
                      <span className="mt-1 h-1 w-1 rounded-full bg-purple-accent shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* ── Engagement Habits ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-purple-accent" textClass="text-purple-accent">
            Daily Engagement Habits
          </SectionLabel>

          <motion.p variants={fadeUp} className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            Small habits that compound over time:
          </motion.p>

          <div className="space-y-3">
            {ENGAGEMENT_HABITS.map((item) => (
              <motion.div
                key={item.habit}
                variants={fadeUp}
                className="flex gap-4 rounded-xl border border-border bg-card p-5 shadow-sm"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-accent/10 text-purple-accent">
                  <Eye size={16} />
                </div>
                <div>
                  <h4 className="text-sm font-bold mb-0.5">{item.habit}</h4>
                  <p className="text-sm text-muted-foreground">{item.why}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* ── What Not to Do ── */}
        <motion.section
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <SectionLabel barClass="bg-red-400" textClass="text-red-400">
            What Not to Do
          </SectionLabel>

          <div className="space-y-3">
            {DONT_LIST.map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="flex items-start gap-3 rounded-xl border border-red-400/15 bg-red-400/[0.04] px-5 py-4"
              >
                <XCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
                <p className="text-sm text-foreground leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

      </main>

      <footer className="border-t border-border-light">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-foreground-subtle">Obsidion Training Hub &middot; SDR Social Outreach</p>
          <img src="/logos/logo.png" alt="Obsidion" className="h-6 w-auto opacity-30" />
        </div>
      </footer>
    </div>
  );
}
