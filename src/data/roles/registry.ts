export interface RoleDefinition {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  iconName: string;
  accentColor: string;
  accentGlow: string;
  status: "active" | "coming-soon";
  sectionCount: number;
}

export const ROLES: RoleDefinition[] = [
  {
    slug: "account-executive",
    title: "Account Executive",
    shortTitle: "AE",
    description:
      "Everything you need to ramp as an AE — product knowledge, sales playbooks, comp structure, scripts, and objection handling.",
    iconName: "Briefcase",
    accentColor: "#2563EB",
    accentGlow: "rgba(37, 99, 235, 0.35)",
    status: "active",
    sectionCount: 8,
  },
  {
    slug: "customer-success",
    title: "Customer Success",
    shortTitle: "CS",
    description:
      "Onboarding flows, retention strategies, QBR playbooks, and escalation procedures for keeping clients thriving.",
    iconName: "HeartHandshake",
    accentColor: "#16A34A",
    accentGlow: "rgba(22, 163, 74, 0.35)",
    status: "coming-soon",
    sectionCount: 0,
  },
  {
    slug: "marketing",
    title: "Marketing",
    shortTitle: "MKT",
    description:
      "Brand guidelines, campaign frameworks, content calendars, and channel strategies to fuel the pipeline.",
    iconName: "Megaphone",
    accentColor: "#9333EA",
    accentGlow: "rgba(147, 51, 234, 0.35)",
    status: "coming-soon",
    sectionCount: 0,
  },
  {
    slug: "operations",
    title: "Operations",
    shortTitle: "OPS",
    description:
      "Internal processes, tooling guides, fulfillment workflows, and cross-team coordination playbooks.",
    iconName: "Settings",
    accentColor: "#CA8A04",
    accentGlow: "rgba(202, 138, 4, 0.35)",
    status: "coming-soon",
    sectionCount: 0,
  },
];

export function getRole(slug: string): RoleDefinition | undefined {
  return ROLES.find((r) => r.slug === slug);
}

export function getAllRoles(): RoleDefinition[] {
  return ROLES;
}

export function getActiveRoles(): RoleDefinition[] {
  return ROLES.filter((r) => r.status === "active");
}
