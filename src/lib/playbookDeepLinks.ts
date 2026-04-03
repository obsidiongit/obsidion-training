/** Numeric module ids are shared across cannabis, automotive, salon-medspa, and food-hospitality. */
export const PLAYBOOK_MODULE_IDS = {
  website: 4,
  mobileApp: 7,
  pricing: 8,
  onTheCall: 12,
  objections: 13,
} as const;

/** Fragment ids on Module 07 Pricing pages (all verticals). */
export const PRICING_SECTION_IDS = {
  setupSingle: "pricing-setup-single",
  setupMulti: "pricing-setup-multi",
  retainerEssentials: "pricing-retainer-essentials",
  retainerGrowth: "pricing-retainer-growth",
  retainerPremium: "pricing-retainer-premium",
  mobileApp: "pricing-mobile-app",
} as const;
