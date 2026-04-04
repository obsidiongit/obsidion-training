import type { ModuleSection, PlaybookModule } from "../types";

export const AUTOMOTIVE_MODULES: PlaybookModule[] = [
  { id: 0, title: "The Playbook", eyebrow: "Welcome", section: "Foundation" },
  { id: 1, title: "The Market Opportunity", eyebrow: "Automotive Industry", section: "Foundation" },
  { id: 2, title: "Website Buildout", eyebrow: "Core Product", section: "Products" },
  { id: 3, title: "Local SEO", eyebrow: "Traffic Generation", section: "Products" },
  { id: 4, title: "Remarketing", eyebrow: "Conversion", section: "Products" },
  { id: 5, title: "Mobile App", eyebrow: "Premium Add-on", section: "Products" },
  { id: 6, title: "Pricing", eyebrow: "Plans & Tiers", section: "Sales" },
  { id: 7, title: "Outreach Strategy", eyebrow: "Tactics", section: "Sales" },
  { id: 8, title: "Objection Handling", eyebrow: "Rebuttals", section: "Sales" },
  { id: 9, title: "Quick Reference", eyebrow: "Cheat Sheet", section: "Reference" },
  { id: 10, title: "Module Quiz", eyebrow: "Knowledge Check", section: "Assessment" },
];

export const AUTOMOTIVE_MODULE_SECTIONS: ModuleSection[] = [
  "Foundation",
  "Products",
  "Sales",
  "Reference",
  "Assessment",
];
