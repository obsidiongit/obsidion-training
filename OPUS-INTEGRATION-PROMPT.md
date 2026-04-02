# Opus Integration Prompt — New Onboarding Topics

Copy everything below the line and paste it as your prompt.

---

## Context

You are working on a Next.js training/playbook application at the root of this project. Each vertical (cannabis, automotive, food-hospitality, salon-medspa) has its own playbook with the same module structure. The current 12-module layout per playbook is:

| ID | Title | Section |
|----|-------|---------|
| 0 | The Playbook (Welcome) | Foundation |
| 1 | Who We Are | Foundation |
| 2 | The Market Opportunity | Foundation |
| 3 | Website Buildout | Products |
| 4 | Local SEO | Products |
| 5 | Remarketing | Products |
| 6 | Mobile App | Products |
| 7 | Pricing | Sales |
| 8 | Outreach Strategy | Sales |
| 9 | Objection Handling | Sales |
| 10 | Quick Reference | Reference |
| 11 | Module Quiz | Assessment |

## Task

Integrate the following new topics into **every existing vertical playbook** by adding new modules. Do NOT create a separate onboarding playbook — these go inside each vertical.

### New topics to add:

1. **Getting Paid & Bonuses** — How the comp plan works, commission structure, bonus tiers, payout schedule. Scaffold with realistic placeholder content (we'll fill in real numbers later). This fits in the **Sales** section.

2. **Performance Expectations** — KPIs, quotas, ramp timeline, what "good" looks like at 30/60/90 days. Scaffold with placeholder content. This fits in the **Sales** section.

3. **Tech We Use** — General categories of tools reps need to know: CRM, dialer/phone system, project management, design/creative tools, communication (Slack/email), and any vertical-specific tech. Scaffold with category headers and placeholder tool names. This fits in **Foundation**.

4. **Downloadable Assets** — A module with actual download links to files in `/public/assets/` (logo, banner, email footer/signature). Create the `/public/assets/` directory and add placeholder files or a README explaining what files to add. The module should use `<a href="/assets/filename.ext" download>` links. This fits in **Reference**.

5. **On the Call** — Expanded call scripts, talk tracks, discovery questions, and live objection handling frameworks. This is a deeper companion to the existing Outreach Strategy (Module 8) and Objection Handling (Module 9) modules. This fits in **Sales**.

### New module layout

Renumber and reorganize the modules to this structure (15 modules + quiz):

| ID | Title | Section |
|----|-------|---------|
| 0 | The Playbook | Foundation |
| 1 | Who We Are | Foundation |
| 2 | Tech We Use | Foundation |
| 3 | The Market Opportunity | Foundation |
| 4 | Website Buildout | Products |
| 5 | Local SEO | Products |
| 6 | Remarketing | Products |
| 7 | Mobile App | Products |
| 8 | Pricing | Sales |
| 9 | Getting Paid & Bonuses | Sales |
| 10 | Performance Expectations | Sales |
| 11 | Outreach Strategy | Sales |
| 12 | On the Call | Sales |
| 13 | Objection Handling | Sales |
| 14 | Quick Reference | Reference |
| 15 | Downloadable Assets | Reference |
| 16 | Module Quiz | Assessment |

## Implementation steps — follow this order exactly:

### 1. Update the type system
Read `src/data/playbooks/types.ts`. The `ModuleSection` type and interfaces should still work, but verify the quiz module ID references are flexible (now 16 instead of 11).

### 2. Update module definitions for every vertical
For each vertical (`cannabis`, `automotive`, `food-hospitality`, `salon-medspa`), update `src/data/playbooks/{vertical}/modules.ts`:
- Renumber all modules to match the new layout above
- Add the 5 new module entries with correct `id`, `title`, `eyebrow`, and `section`
- Update `MODULE_SECTIONS` if needed (should still be `["Foundation", "Products", "Sales", "Reference", "Assessment"]`)

### 3. Create new module components
Read at least 2 existing module components to match the exact patterns (animation classes, header structure, component imports, `<NavButtons>` at the bottom). Then create:

**For each new module, create a shared/base version first:**

- `Module02TechWeUse.tsx` — Use `<CardGrid>` with `<Card>` for each tool category (CRM, Dialer, Project Management, Design, Communication). Each card should have a category title, placeholder tool name, and a 1-sentence description of what it's used for. Include a `<HighlightBox variant="info">` with a note like "Your team lead will walk you through account setup during your first week."

- `Module09Compensation.tsx` — Use `<CheatTable>` for a commission tier table (placeholder percentages), `<StatRow>` with `<StatBox>` for key numbers (base pay, OTE, payout frequency), and `<StepList>` for how payouts are calculated. Include a `<HighlightBox variant="warning">` noting that specific numbers will be confirmed by management.

- `Module10Performance.tsx` — Use `<StepList>` for 30/60/90 day milestones, `<StatRow>` for KPI targets (calls/day, demos/week, closes/month as placeholders), and `<CardGrid>` for what "exceeds expectations" vs "meets expectations" vs "needs improvement" looks like.

- `Module12OnTheCall.tsx` — This should be the most content-rich new module. Use `<StepList>` for a call flow framework (intro → discovery → pitch → handle objections → close), `<HighlightBox>` blocks for sample scripts/talk tracks, and `<ObjectionCard>` components for live objection handling (distinct from Module 13's reference-style objections — these should be more conversational and situational).

- `Module15Assets.tsx` — Use `<CardGrid>` with `<Card>` for each downloadable asset. Each card should contain an `<a href="/assets/{filename}" download className="...">Download</a>` link styled as a button. Categories: Company Logo (PNG + SVG), Email Banner, Email Footer/Signature, Brand Guidelines PDF. Also create the `/public/assets/` directory with a `README.md` listing what files need to be added.

**If a vertical needs customization** (e.g., different tool stacks), create a vertical-specific override following the existing pattern in `src/app/playbook/modules/{vertical}/`.

### 4. Update renderModule.tsx
Read `src/data/playbooks/renderModule.tsx` carefully. Add imports and cases for all 5 new module components. Update the ID mappings for ALL verticals since every module from the old ID 2+ has shifted. This is the most error-prone step — double-check every mapping.

### 5. Update quiz references
For each vertical's `quiz.ts`, update `quizModuleId` references. In `registry.ts`, update every playbook entry's `quizModuleId` from `11` to `16`.

### 6. Update NavButtons and any hardcoded module IDs
Search the entire codebase for hardcoded module IDs (e.g., references to module `11` as the quiz, module `10` as the last content module). Update all of them. Check:
- `NavButtons.tsx`
- `Sidebar.tsx`
- `ProgressTracker.tsx`
- `PlaybookContext.tsx`
- Any route generation logic in `page.tsx` or `layout.tsx`

### 7. Add placeholder asset files
Create `/public/assets/` with:
- `README.md` explaining what files to add (logo.png, logo.svg, email-banner.png, email-footer.html, brand-guidelines.pdf)
- Optionally create minimal SVG placeholder files so the download links don't 404 during development

### 8. Verify the build
Run `npm run build` and fix any TypeScript or routing errors. Then run `npm run dev` and manually verify:
- Navigation through all 17 modules works for at least one vertical
- Sidebar shows correct section groupings
- Progress tracking still works
- Quiz loads at module 16
- Download links on module 15 point to `/assets/`

## Important constraints

- Read the Next.js docs in `node_modules/next/dist/docs/` before writing any code — this project uses Next.js with potentially breaking changes from what you know.
- Follow the existing animation pattern: `className="animate-in fade-in slide-in-from-bottom-8 duration-500 max-w-4xl space-y-12"` on every module's root div.
- Every module must end with `<NavButtons currentModuleId={ID} />` using its correct new ID.
- Use the existing UI component library (`@/components/ui/*`) — do not create new UI components.
- Placeholder content should feel realistic and professional, not obviously fake. Use language like "Your compensation details will be confirmed during onboarding" rather than "Lorem ipsum."
- Do NOT touch the Contractors playbook (it's a stub).
