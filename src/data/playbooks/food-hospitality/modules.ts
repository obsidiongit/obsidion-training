import type { ModuleSection, PlaybookModule } from "../types";

export const FOOD_HOSPITALITY_MODULES: PlaybookModule[] = [
  { id: 0, title: "The Playbook", eyebrow: "Welcome", section: "Foundation" },
  { id: 1, title: "Who We Are", eyebrow: "Our Identity", section: "Foundation" },
  { id: 2, title: "The Market Opportunity", eyebrow: "Food & Hospitality", section: "Foundation" },
  { id: 3, title: "Website Buildout", eyebrow: "Core Product", section: "Products" },
  { id: 4, title: "Local SEO", eyebrow: "Traffic Generation", section: "Products" },
  { id: 5, title: "Remarketing", eyebrow: "Conversion", section: "Products" },
  { id: 6, title: "Mobile App", eyebrow: "Premium Add-on", section: "Products" },
  { id: 7, title: "Pricing", eyebrow: "Plans & Tiers", section: "Sales" },
  { id: 8, title: "Outreach Strategy", eyebrow: "Tactics", section: "Sales" },
  { id: 9, title: "Objection Handling", eyebrow: "Rebuttals", section: "Sales" },
  { id: 10, title: "Quick Reference", eyebrow: "Cheat Sheet", section: "Reference" },
  { id: 11, title: "Module Quiz", eyebrow: "Knowledge Check", section: "Assessment" },
];

export const FOOD_HOSPITALITY_MODULE_SECTIONS: ModuleSection[] = [
  "Foundation",
  "Products",
  "Sales",
  "Reference",
  "Assessment",
];
