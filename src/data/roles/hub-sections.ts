import {
  BookOpen,
  Phone,
  Package,
  DollarSign,
  BarChart3,
  Wrench,
  Users,
  ShieldAlert,
  BadgeCheck,
  PhoneOutgoing,
  CalendarCheck,
  MessageSquareMore,
  Target,
  UserCheck,
  MapPin,
  ListChecks,
  UserCircle,
  Lightbulb,
} from "lucide-react";

/* ─── Types ─── */

export interface FeaturedSection {
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  badges: readonly string[];
  shared: boolean;
  fullWidth: boolean;
}

export interface QuickAccessSection {
  slug: string;
  title: string;
  description: string;
  icon: React.ElementType;
  shared: boolean;
}

export interface HubConfig {
  featured: FeaturedSection[];
  quickAccess: QuickAccessSection[];
  trackableSections: string[];
}

/* ─── AE Sections ─── */

const AE_CONFIG: HubConfig = {
  featured: [
    {
      slug: "playbooks",
      title: "Training Playbooks",
      description:
        "Vertical-specific sales training for each industry. Deep-dive modules covering positioning, objections, pricing, and closing strategies.",
      icon: BookOpen,
      badges: ["Cannabis", "Food & Hospitality", "Salon & Med-Spa", "Automotive", "Contractors"],
      shared: false,
      fullWidth: false,
    },
    {
      slug: "on-the-call",
      title: "On the Call",
      description:
        "Live call frameworks, scripts, and objection-handling flows to keep conversations on track and close with confidence.",
      icon: Phone,
      badges: ["Scripts", "Objection Handling", "Call Framework"],
      shared: false,
      fullWidth: false,
    },
    {
      slug: "certification",
      title: "Readiness Check",
      description:
        "Nobody touches a live prospect until they've passed all seven gates. Complete every section, pass the assessments, and get manager sign-off before going live.",
      icon: BadgeCheck,
      badges: ["7 Gates", "Role-Play Assessed", "Manager Sign-Off"],
      shared: false,
      fullWidth: true,
    },
  ],
  quickAccess: [
    {
      slug: "products",
      title: "Product Knowledge",
      description: "Every Obsidion product, inside and out.",
      icon: Package,
      shared: false,
    },
    {
      slug: "getting-paid",
      title: "Getting Paid & Bonuses",
      description: "Comp structure, commissions, and bonus tiers.",
      icon: DollarSign,
      shared: false,
    },
    {
      slug: "performance",
      title: "Performance Expectations",
      description: "KPIs, ramp schedule, and activity benchmarks.",
      icon: BarChart3,
      shared: false,
    },
    {
      slug: "tech",
      title: "Tech We Use",
      description: "Claude, Apollo, Loom, Ad Library, and internal systems.",
      icon: Wrench,
      shared: true,
    },
    {
      slug: "meetings",
      title: "Meeting Cadence",
      description: "Daily sales meeting — format, prep, and expectations.",
      icon: Users,
      shared: false,
    },
    {
      slug: "accountability",
      title: "Accountability",
      description: "What wins here and what ends the relationship.",
      icon: ShieldAlert,
      shared: false,
    },
  ],
  trackableSections: [
    "playbooks",
    "on-the-call",
    "certification",
    "products",
    "getting-paid",
    "performance",
    "tech",
    "meetings",
    "accountability",
    "daily-structure",
    "assets",
  ],
};

/* ─── SDR Sections ─── */

const SDR_CONFIG: HubConfig = {
  featured: [
    {
      slug: "your-role",
      title: "Your Role as an SDR",
      description:
        "Talk with owners about growth and scale; Meta is usually the lead (~80%), site/SEO/remarketing/app still matter (~20%). Handoff, BANT, success metrics — start here.",
      icon: MapPin,
      badges: ["Role Overview", "Handoff Flow", "BANT Qualifying", "Success Metrics"],
      shared: false,
      fullWidth: false,
    },
    {
      slug: "on-the-call",
      title: "Outreach Playbook",
      description:
        "Phone scripts, email templates, social DMs, and objection handling — everything you need to book appointments across all three channels.",
      icon: PhoneOutgoing,
      badges: ["Phone Scripts", "Email Templates", "Social DMs", "Objection Handling"],
      shared: false,
      fullWidth: false,
    },
    {
      slug: "certification",
      title: "Readiness Check",
      description:
        "You don't go live until you pass. Complete every section, nail the role-play, and get your manager's sign-off before doing real outreach.",
      icon: BadgeCheck,
      badges: ["4 Gates", "Mock Cold Call", "Manager Sign-Off"],
      shared: false,
      fullWidth: true,
    },
  ],
  quickAccess: [
    {
      slug: "lead-lists",
      title: "Lead Generation & Prospecting",
      description: "Self-source your pipeline — networking, social media, outreach channels, and how to submit leads.",
      icon: ListChecks,
      shared: false,
    },
    {
      slug: "ambassador-setup",
      title: "Ambassador Profile Setup",
      description: "Set up LinkedIn, Facebook, and email signature before you start outreach.",
      icon: UserCircle,
      shared: false,
    },
    {
      slug: "products",
      title: "Product Knowledge",
      description: "Full-scale agency overview — ads, AI automation, email marketing, web design, branding, content production, and more.",
      icon: Lightbulb,
      shared: false,
    },
    {
      slug: "getting-paid",
      title: "Getting Paid",
      description: "Base salary + per-appointment bonuses + close bonuses.",
      icon: DollarSign,
      shared: false,
    },
    {
      slug: "performance",
      title: "Performance Expectations",
      description: "1-3 appointments/day, ramp schedule, and activity benchmarks.",
      icon: Target,
      shared: false,
    },
    {
      slug: "tech",
      title: "Tech We Use",
      description: "Outreach Dashboard, dialer, and internal systems.",
      icon: Wrench,
      shared: true,
    },
    {
      slug: "accountability",
      title: "Accountability",
      description: "What wins here and what gets you cut.",
      icon: ShieldAlert,
      shared: false,
    },
    {
      slug: "meetings",
      title: "Meeting Cadence",
      description: "Daily sales meeting on Discord — format and expectations.",
      icon: Users,
      shared: false,
    },
  ],
  trackableSections: [
    "your-role",
    "on-the-call",
    "certification",
    "lead-lists",
    "ambassador-setup",
    "products",
    "getting-paid",
    "performance",
    "tech",
    "meetings",
    "accountability",
    "daily-structure",
    "assets",
  ],
};

/* ─── Lookup ─── */

const HUB_CONFIGS: Record<string, HubConfig> = {
  "account-executive": AE_CONFIG,
  sdr: SDR_CONFIG,
};

export function getHubConfig(roleSlug: string): HubConfig {
  return HUB_CONFIGS[roleSlug] ?? AE_CONFIG;
}
