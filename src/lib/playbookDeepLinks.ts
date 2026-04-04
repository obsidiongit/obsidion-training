/** Numeric module ids after Phase 4 renumbering (shared Foundation/Reference modules removed). */
export const PLAYBOOK_MODULE_IDS = {
  website: 2,
  mobileApp: 5,
  pricing: 6,
  objections: 8,
} as const;

/** Fragment ids on Module 06 Pricing pages (all verticals). */
export const PRICING_SECTION_IDS = {
  setupSingle: "pricing-setup-single",
  setupMulti: "pricing-setup-multi",
  retainerEssentials: "pricing-retainer-essentials",
  retainerGrowth: "pricing-retainer-growth",
  retainerPremium: "pricing-retainer-premium",
  mobileApp: "pricing-mobile-app",
} as const;
