import type { ModuleSection, PlaybookModule } from "../types";

export const FOOD_HOSPITALITY_MODULES: PlaybookModule[] = [
  { id: 0, title: "The Playbook", eyebrow: "Welcome", section: "Foundation" },
  { id: 1, title: "Who We Are", eyebrow: "Our Identity", section: "Foundation" },
  { id: 2, title: "Tech We Use", eyebrow: "Stack & tools", section: "Foundation" },
  { id: 3, title: "The Market Opportunity", eyebrow: "Food & Hospitality", section: "Foundation" },
  { id: 4, title: "Website Buildout", eyebrow: "Core Product", section: "Products" },
  { id: 5, title: "Local SEO", eyebrow: "Traffic Generation", section: "Products" },
  { id: 6, title: "Remarketing", eyebrow: "Conversion", section: "Products" },
  { id: 7, title: "Mobile App", eyebrow: "Premium Add-on", section: "Products" },
  { id: 8, title: "Pricing", eyebrow: "Plans & Tiers", section: "Sales" },
  { id: 9, title: "Getting Paid & Bonuses", eyebrow: "Compensation", section: "Sales" },
  { id: 10, title: "Performance Expectations", eyebrow: "KPIs & ramp", section: "Sales" },
  { id: 11, title: "Outreach Strategy", eyebrow: "Tactics", section: "Sales" },
  { id: 12, title: "On the Call", eyebrow: "Scripts & live handling", section: "Sales" },
  { id: 13, title: "Objection Handling", eyebrow: "Rebuttals", section: "Sales" },
  { id: 14, title: "Quick Reference", eyebrow: "Cheat Sheet", section: "Reference" },
  { id: 15, title: "Downloadable Assets", eyebrow: "Brand kit", section: "Reference" },
  { id: 16, title: "Module Quiz", eyebrow: "Knowledge Check", section: "Assessment" },
];

export const FOOD_HOSPITALITY_MODULE_SECTIONS: ModuleSection[] = [
  "Foundation",
  "Products",
  "Sales",
  "Reference",
  "Assessment",
];
