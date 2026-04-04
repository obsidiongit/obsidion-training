import type { ModuleSection, PlaybookModule } from "../types";

export const CONTRACTORS_MODULES: PlaybookModule[] = [
  { id: 0, title: "The Playbook", eyebrow: "Welcome", section: "Foundation", readTime: "2 min" },
  { id: 1, title: "The Market Opportunity", eyebrow: "Home Services Industry", section: "Foundation", readTime: "3 min" },
  { id: 2, title: "Website Buildout", eyebrow: "Core Product", section: "Products", readTime: "4 min" },
  { id: 3, title: "Local SEO", eyebrow: "Traffic Generation", section: "Products", readTime: "4 min" },
  { id: 4, title: "Remarketing", eyebrow: "Conversion", section: "Products", readTime: "4 min" },
  { id: 5, title: "Mobile App", eyebrow: "Premium Add-on", section: "Products", readTime: "3 min" },
  { id: 6, title: "Pricing", eyebrow: "Plans & Tiers", section: "Sales", readTime: "5 min" },
  { id: 7, title: "Outreach Strategy", eyebrow: "Tactics", section: "Sales", readTime: "7 min" },
  { id: 8, title: "Objection Handling", eyebrow: "Rebuttals", section: "Sales", readTime: "8 min" },
  { id: 9, title: "Quick Reference", eyebrow: "Cheat Sheet", section: "Reference", readTime: "3 min" },
  { id: 10, title: "Module Quiz", eyebrow: "Knowledge Check", section: "Assessment", readTime: "15 min" },
];

export const CONTRACTORS_MODULE_SECTIONS: ModuleSection[] = [
  "Foundation",
  "Products",
  "Sales",
  "Reference",
  "Assessment",
];
