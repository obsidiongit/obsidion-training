# Obsidion Training Platform — Restructure Roadmap

> **Context:** Obsidion is transitioning from a niche-specific entry-offer agency into a high-performance, industry-agnostic full-stack digital agency. The training platform must reflect that shift. This roadmap is written for execution in Claude Code / Cursor. Each task is a discrete, checkable unit of work.

> **Key decision:** The owner (sole AE) is onboarding 2-3 SDRs immediately. SDR training is the priority. AE training will be built later once the closing process is refined through live reps.

---

## Current State Summary

### What exists
- Next.js app with two active roles: **Account Executive** and **SDR**
- Role-based hub system (`src/data/roles/registry.ts`, `src/data/roles/hub-sections.ts`)
- Five vertical-specific playbooks: Cannabis, Automotive, Food & Hospitality, Salon & Med Spa, Contractors (`src/data/playbooks/registry.ts`)
- SDR hub with 13 sections: Your Role, Outreach Playbook, Certification, Lead Lists, Ambassador Setup, Product Knowledge Lite, Getting Paid, Performance, Tech, Accountability, Meetings, Daily Structure, Assets
- AE hub with 7 sections: Training Playbooks, On the Call, Certification, Product Knowledge, Getting Paid, Performance, Tech, Meetings, Accountability
- Shared components: PlaybookShell, Sidebar, Topbar, ProgressTracker, quiz system
- SDR-specific components in `src/components/sdr/`
- On-the-call content: ScriptsContent, ObjectionHandlingContent, CallFrameworksContent
- UI component library: StatBox, HighlightBox, ObjectionCard, StepList, PullQuote, CheatTable, Tag, PriceCard, Card, NavButtons

### What's wrong
1. **SDR/AE role blending:** The AE modules (especially Module08 Outreach and Module12 OnTheCall) teach both setting AND closing. The SDR hub exists separately but references some shared content that still conflates the two roles.
2. **Offer gap:** Pricing module only covers the entry website offer ($5-8K setup, $597-$1,497/mo retainers). No mention of: Quick Sites entry offer ($97 setup / ~$600/mo), full-stack Meta ads management ($3-5K+ setup, $2K+/mo), sales funnels, pipeline management, creative production, or the free audit hook.
3. **Vertical playbooks are outdated:** Five niche-specific playbooks (cannabis, automotive, etc.) teach niche-specific details (Dutchie, Weedmaps, etc.) that don't apply to an industry-agnostic agency serving firearms companies, boutiques, and eventually influencers/high-end brands.
4. **Weak scripts:** Call scripts, email templates, and talk tracks are generic AI one-shots. They read like cheap pitches and don't reflect the actual sales motion (audit-first approach, consultative scoping, etc.).
5. **UI/UX feels immature:** Color scheme is off-the-shelf (blue accent on white), the overall design reads "starter template" rather than premium internal tool. Some content overlaps and navigation inconsistencies.
6. **Content accuracy:** Much of the copy was generated in one shot across multiple markdown sections simultaneously. Individual modules need iterative attention to become contextual and accurate.

---

## Phase 1 — SDR Training Rebuild

> **Goal:** Rebuild the SDR training to reflect the actual role: prospecting, qualifying, booking audit calls, and handing off to the AE. Remove all closing content from SDR-facing material. Introduce the audit-first sales motion and the full product lineup.

### 1.1 — Redefine the SDR role content
- [ ] Rewrite `src/components/sdr/YourRoleContent.tsx` — the SDR is a setter, not a closer. Redefine: prospect, qualify via BANT or equivalent, pitch the free audit, book the meeting, hand off to AE with context notes. Remove any language about closing deals or presenting proposals.
- [ ] Update the SDR-to-AE handoff flow to reflect reality: SDR books the audit call, AE (owner) runs the audit and closes. Define what a "qualified handoff" looks like (who the prospect is, what their pain is, what they're currently spending on ads, confirmation of decision-maker availability).
- [ ] Update success metrics — SDR is measured on meetings booked and handoff quality, not revenue closed.

### 1.2 — Rebuild the audit-first sales motion
- [ ] Create new content (or overhaul existing outreach content) introducing the free 10-15 minute ad audit as the primary door-opener. This replaces the current approach of cold-pitching websites.
- [ ] Define what the audit covers at a high level (so SDRs can articulate it): current ad spend efficiency, pixel/CAPI setup, funnel structure, creative quality, and whether an agency could improve ROI. SDRs don't run the audit — they sell the audit.
- [ ] Update `src/components/sdr/OutreachOverviewContent.tsx` to center the entire outreach strategy around the audit offer rather than the website pitch.

### 1.3 — Overhaul SDR scripts and frameworks
- [ ] Rewrite `src/components/sdr/PhoneScriptsContent.tsx` — replace word-for-word low-level scripts with conversational frameworks that include key phrases, intent at each stage, and room for personality. Structure: opener (permission-based), bridge to the audit offer, qualify (are they spending on ads, who makes decisions), book the meeting.
- [ ] Rewrite `src/components/sdr/EmailTemplatesContent.tsx` — current templates are generic. New templates should reference the audit offer, be personalized to the prospect's visible ad presence (Meta ad library, website, Google presence), and read like a real person wrote them.
- [ ] Rewrite `src/components/sdr/SocialOutreachContent.tsx` — Instagram/LinkedIn DM frameworks should lead with the audit, not a website pitch. Include examples of how to reference a prospect's existing ads or social presence before pitching.
- [ ] Rewrite `src/components/on-the-call/ScriptsContent.tsx` — this is shared content that currently conflates SDR and AE responsibilities. Either split it into role-specific versions or refactor so SDR only sees the sections relevant to them (opening, discovery, booking — not closing, proposal presentation, or trial closes).

### 1.4 — Rebuild SDR objection handling
- [ ] Rewrite `src/components/sdr/SDRObjectionHandlingContent.tsx` — current objections are framed around selling websites. New objections should address: "We already have an agency," "We run our own ads," "We're not spending on ads right now," "What's the catch with a free audit?", "Just send me info," "I'm too busy," "Is this a sales call?" Frame rebuttals as frameworks, not memorized lines.
- [ ] Ensure objection handling content does NOT include closing-stage objections (pricing negotiation, contract terms, competitor comparisons on deliverables). Those belong in future AE training.

### 1.5 — Update SDR product knowledge
- [ ] Rewrite `src/components/sdr/ProductKnowledgeLiteContent.tsx` — currently only covers the entry website/SEO/remarketing offer. Add: Quick Sites ($97 entry), full-stack Meta ads management, sales funnel builds, pipeline management, creative production. SDRs don't need to know the deep details but need enough to articulate value and handle surface-level questions.
- [ ] Frame product knowledge around the audit: "Here's what we typically find and fix" rather than "here are our product features."

### 1.6 — Update SDR lead lists and prospecting
- [ ] Rewrite `src/components/sdr/LeadListsContent.tsx` — update to reflect industry-agnostic prospecting. Remove niche-specific list-building advice. Add: how to use Meta Ad Library to identify businesses actively spending on ads (warm audit prospects), how to assess a prospect's current digital presence quickly, and how to prioritize leads by ad spend visibility.
- [ ] Ensure lead qualification criteria reflect the new offer structure — the ICP is any business spending on digital ads (or should be) with $2K+/mo potential, not just cannabis dispensaries or salons.

### 1.7 — Update supporting SDR sections
- [ ] Review and update `src/components/sdr/SDRAccountabilityContent.tsx` — ensure accountability metrics match the new role definition (meetings booked, audit calls set, handoff quality).
- [ ] Review and update `src/components/sdr/SDRPerformanceContent.tsx` — align KPIs and ramp schedule with audit-first motion.
- [ ] Review and update `src/components/sdr/SDRGettingPaidContent.tsx` — ensure comp structure reflects the actual compensation plan for SDRs booking audit calls.
- [ ] Review and update `src/components/sdr/SDRMeetingCadenceContent.tsx` — ensure meeting format reflects the SDR/AE handoff workflow.
- [ ] Review and update `src/components/sdr/SDRCertificationContent.tsx` — certification gates should test on the audit pitch, qualification framework, and handoff process, not on product features or closing techniques.
- [ ] Review and update `src/components/sdr/AmbassadorSetupContent.tsx` — ensure profile setup guidance reflects the agency's current positioning (full-stack digital agency, not niche website builder).

### 1.8 — Content quality pass
- [ ] Audit every SDR-facing module for AI-generated filler language. Rewrite anything that sounds like a "cheap pitch they've heard a thousand times." The voice should be direct, confident, and specific to how Obsidion actually operates.
- [ ] Remove all cannabis/niche-specific language from SDR content (references to Dutchie, Weedmaps, dispensaries, GBP for cannabis, etc.). Replace with industry-agnostic examples or use varied real examples (firearms company, clothing boutique, restaurant, etc.).
- [ ] Ensure consistency across all SDR sections — terminology, offer descriptions, pricing references, and the audit pitch should be identical everywhere they appear.

---

## Phase 2 — Offer & Pricing Overhaul

> **Goal:** Replace all inaccurate pricing and product content with real numbers and real deliverables. Restructure from a fixed-tier menu to a consultative pricing framework that reflects how deals actually close.

### 2.1 — Redefine the offer structure
- [ ] Create or rewrite the core pricing/offer content to reflect three tiers:
  - **Quick Sites (Entry):** ~$97 setup / ~$297-$600/mo — low-friction door-opener, high volume, fully scalable. Links to obsidion.ai/quick-sites.
  - **Website + Retainer (Mid-tier):** Custom scoping, ~$1,000-$3,000 setup, $297-$997/mo depending on scope. Website buildout, SEO, basic remarketing.
  - **Full-Stack Management (High-ticket):** $3,000-$5,000+ setup, $2,000+/mo. Meta ads management, creative production (35+ creatives), sales funnels, pipeline management, CAPI/pixel setup. Price scales with scope, creative volume, and ad spend managed.
- [ ] Make clear that pricing is consultative/custom per engagement — the tiers are frameworks for conversation, not a fixed menu. This is standard for agencies and the training should teach SDRs to be comfortable with that.
- [ ] Document the upsell path: Quick Sites client → mid-tier retainer → full-stack management. This is a real pattern (existing customers have followed this path) and both SDRs and future AEs need to understand it.

### 2.2 — Update pricing module content
- [ ] Rewrite `src/app/playbook/modules/Module07Pricing.tsx` — replace all current pricing cards, tiers, and cannabis-specific references with the real offer structure defined in 2.1. Remove Dutchie/POS integration references, Weedmaps/Leafly sync, and other niche items.
- [ ] Update the PriceCard components or create new ones that reflect the consultative nature — show ranges with "starting at" language rather than fixed prices.
- [ ] Add context on competitive positioning: Obsidion delivers the full stack (ads + funnels + creative + management) where most agencies specialize in one piece. Frame the value accordingly.

### 2.3 — Update product knowledge content (AE-facing)
- [ ] Rewrite `src/components/products/WebsitesProduct.tsx` — add Quick Sites as the entry product, update website buildout to reflect current capabilities.
- [ ] Rewrite `src/components/products/SEOProduct.tsx` — update to reflect current SEO offering within the broader full-stack context.
- [ ] Rewrite `src/components/products/RemarketingProduct.tsx` — expand to cover Meta ads management, sales funnels, pipeline management, and creative production. This is no longer just "remarketing" — it's the full-stack service.
- [ ] Rewrite `src/components/products/MobileAppProduct.tsx` — assess whether this is still a current offer or needs to be deprioritized/removed.
- [ ] Consider adding a new product page for the full-stack Meta ads management offering if it doesn't fit cleanly into the existing product pages.

### 2.4 — Update all cross-references
- [ ] Search entire codebase for hardcoded pricing ($597, $997, $1,497, $5K-$8K, $8K-$12K, $15K-$25K) and update or remove each instance.
- [ ] Search for niche-specific product references (Dutchie, Weedmaps, Leafly, cannabis menu integration, dispensary, etc.) in non-playbook files and update to industry-agnostic language.
- [ ] Ensure the Quick Sites entry offer is referenced appropriately in SDR content as the low-friction door-opener alongside the audit.

---

## Phase 3 — UI/UX Overhaul

> **Goal:** Transform the platform from a "starter template" feel to a premium internal tool. Collapse the vertical playbook structure into a single unified training path. Fix visual hierarchy, color scheme, and navigation.

### 3.1 — Collapse vertical playbooks
- [ ] Remove the five vertical-specific playbooks (cannabis, automotive, food-hospitality, salon-medspa, contractors) from the registry (`src/data/playbooks/registry.ts`).
- [ ] Remove or archive all vertical-specific module components:
  - `src/app/playbook/modules/food-hospitality/` (11 modules)
  - `src/app/playbook/modules/salon-medspa/` (11 modules)
  - `src/app/playbook/modules/contractors/` (7+ modules)
  - Automotive-specific modules (`*Automotive.tsx` files)
  - Cannabis-specific root modules that were the originals
- [ ] Remove vertical-specific data files:
  - `src/data/playbooks/cannabis/`
  - `src/data/playbooks/automotive/`
  - `src/data/playbooks/food-hospitality/`
  - `src/data/playbooks/salon-medspa/`
  - `src/data/playbooks/contractors/`
- [ ] Design and build a single universal training path that replaces the vertical playbooks. Keep the module progression format (Foundation → Products → Sales → Reference → Assessment) — that structure works. The content should be industry-agnostic.
- [ ] Preserve the quiz system — quizzes are valuable for engagement and knowledge retention. Build one universal quiz that tests on the real offer, the audit pitch, and consultative selling rather than niche-specific trivia.

### 3.2 — Restructure the AE hub
- [ ] Update `src/data/roles/hub-sections.ts` AE_CONFIG — remove the "Training Playbooks" featured section that pointed to vertical playbooks. Replace with a unified training path or restructure the AE hub to reflect the actual AE workflow (audit execution, proposal building, closing, client onboarding).
- [ ] For now, the AE role can remain as a shell/placeholder since the owner is the sole AE. Mark it clearly as "in development" rather than showing inaccurate content.
- [ ] Consider whether the AE role should stay "active" in the roles registry or move to "coming-soon" until Phase 4 is complete.

### 3.3 — Color scheme and visual identity refresh
- [ ] Redesign the color palette in `src/app/globals.css`. The current scheme (blue accent `#2563eb` on pure white `#ffffff`) is clean but generic. Options to explore:
  - Dark mode or dark-accented theme for a more premium/agency feel
  - Richer accent colors that feel more intentional (not default Tailwind blue)
  - Better use of the existing emerald, amber, and purple accents — they're defined but underutilized
  - Subtle background textures or gradients that add depth without clutter
- [ ] Update the gradient-mesh background and glow-card effects to match the new palette.
- [ ] Ensure the new color scheme carries through all components — cards, highlights, badges, price cards, step lists, etc.

### 3.4 — Typography and spacing refinement
- [ ] Review font sizing hierarchy — ensure there's clear visual distinction between section headers, module titles, body text, and captions without relying on just size changes.
- [ ] Audit spacing consistency across all module pages — some feel cramped, some feel loose.
- [ ] Consider upgrading from the current Inter font to something with more character while still being highly readable (or pairing Inter with a display font for headers).

### 3.5 — Navigation and layout fixes
- [ ] Audit the Sidebar component (`src/components/Sidebar.tsx`) for usability — ensure the navigation hierarchy is clear and doesn't present irrelevant sections.
- [ ] Review the Topbar component (`src/components/Topbar.tsx`) — ensure it provides useful context about where the user is in the training.
- [ ] Fix any overlapping content or layout issues identified during the content rebuild phases.
- [ ] Ensure mobile responsiveness is solid — SDRs may reference training on their phones during calls.

### 3.6 — Landing page update
- [ ] Update `src/components/landing/LandingPage.tsx` and `src/components/landing/HeroSection.tsx` to reflect the new structure — prominently feature the SDR training, show AE as coming soon (or in development), and remove the impression that this is a niche-vertical-specific platform.
- [ ] Update the RoleCard components to reflect any changes to role status or descriptions.
- [ ] Update the AboutCompanyPanel if it exists with outdated company positioning.

### 3.7 — Component polish
- [ ] Review and improve the shared UI components for visual consistency:
  - `StatBox` — used for metrics display
  - `HighlightBox` — used for callouts (info, warning, success variants)
  - `ObjectionCard` — used for objection/rebuttal pairs
  - `StepList` — used for sequential processes
  - `PullQuote` — used for featured quotes
  - `CheatTable` — used for reference tables
  - `PriceCard` — needs update for consultative pricing
  - `Card` / `CardGrid` — general purpose containers
- [ ] Ensure Framer Motion animations are tasteful and consistent — not overused or distracting.
- [ ] Remove the FloatingShapes component or redesign it if it contributes to the "immature" feel.

---

## Phase 4 — AE Training (Future Build)

> **Goal:** Build the Account Executive training once the closing process has been refined through live reps. This phase is intentionally deferred — the content should be based on what actually works, not guesses.

### 4.1 — Define the AE role and training structure
- [ ] Document the AE role based on real closing experience: what the audit call looks like, how proposals are built, how pricing is presented consultatively, and how contracts are closed.
- [ ] Define the module structure for AE training — likely: Audit Execution, Proposal Building, Consultative Pricing, Closing Techniques, Client Onboarding Handoff, Upsell Playbook.
- [ ] Determine what content is shared between SDR and AE (company overview, product knowledge, tech stack) versus AE-specific.

### 4.2 — Build AE-specific content
- [ ] Create AE audit execution module — how to run the 10-15 minute ad audit, what to look for, how to present findings as a natural bridge to the proposal.
- [ ] Create AE proposal building module — how to scope engagements, build custom proposals, and present pricing ranges confidently.
- [ ] Create AE closing module — objection handling at the decision stage (pricing pushback, competitor comparisons, timeline concerns, need to talk to partner, etc.).
- [ ] Create AE upsell playbook — how to identify expansion opportunities in existing accounts and move Quick Sites / entry clients into full-stack engagements.

### 4.3 — Build AE certification
- [ ] Design certification gates for AE role — likely includes: mock audit presentation, mock proposal walkthrough, mock closing call with objections, and manager sign-off.
- [ ] Build the quiz for AE training covering: audit process, pricing framework, closing techniques, and upsell triggers.

---

## Ongoing — Content Iteration

> **This runs in parallel with all phases.** Every module that was AI-generated in one shot needs individual attention to become accurate, contextual, and genuinely useful.

- [ ] Establish a voice guide for the training — Obsidion's tone should be direct, confident, not corporate. The training is for smart, capable people, not entry-level call center reps.
- [ ] Iterate on each module individually after the structural changes are in place — rewrite copy to be specific, remove filler, add real examples from actual client engagements.
- [ ] Add real case studies / social proof where possible — the firearms client, the boutique, the upsell success story. Anonymize if needed but use real scenarios.
- [ ] Regularly validate content against what's actually happening in sales — as the SDRs start booking and the owner starts closing, update scripts, objections, and frameworks based on real call recordings and outcomes.
- [ ] Review the About page (`src/components/about/AboutPageContent.tsx`) and Founder Message (`src/components/FounderMessage.tsx`) for accuracy against current company positioning.

---

## File Reference — Key Files for Each Phase

### Phase 1 (SDR Rebuild) — Primary files
```
src/components/sdr/YourRoleContent.tsx
src/components/sdr/PhoneScriptsContent.tsx
src/components/sdr/EmailTemplatesContent.tsx
src/components/sdr/SocialOutreachContent.tsx
src/components/sdr/SDRObjectionHandlingContent.tsx
src/components/sdr/ProductKnowledgeLiteContent.tsx
src/components/sdr/LeadListsContent.tsx
src/components/sdr/OutreachOverviewContent.tsx
src/components/sdr/SDRAccountabilityContent.tsx
src/components/sdr/SDRPerformanceContent.tsx
src/components/sdr/SDRGettingPaidContent.tsx
src/components/sdr/SDRMeetingCadenceContent.tsx
src/components/sdr/SDRCertificationContent.tsx
src/components/sdr/AmbassadorSetupContent.tsx
src/components/on-the-call/ScriptsContent.tsx
src/components/on-the-call/ObjectionHandlingContent.tsx
src/components/on-the-call/CallFrameworksContent.tsx
```

### Phase 2 (Offer & Pricing) — Primary files
```
src/app/playbook/modules/Module07Pricing.tsx
src/components/products/WebsitesProduct.tsx
src/components/products/SEOProduct.tsx
src/components/products/RemarketingProduct.tsx
src/components/products/MobileAppProduct.tsx
src/components/products/shared.tsx
src/components/products/ProductsOverview.tsx
```

### Phase 3 (UI/UX) — Primary files
```
src/app/globals.css
src/data/playbooks/registry.ts
src/data/roles/registry.ts
src/data/roles/hub-sections.ts
src/components/landing/LandingPage.tsx
src/components/landing/HeroSection.tsx
src/components/landing/FloatingShapes.tsx
src/components/PlaybookShell.tsx
src/components/Sidebar.tsx
src/components/Topbar.tsx
src/components/ui/* (all shared UI components)
src/app/playbook/modules/ (all vertical-specific modules to remove)
src/data/playbooks/ (all vertical-specific data to remove)
```

### Phase 4 (AE Training) — Files to create
```
src/components/ae/ (new directory for AE-specific components)
  AuditExecutionContent.tsx
  ProposalBuildingContent.tsx
  ClosingTechniquesContent.tsx
  UpsellPlaybookContent.tsx
  AECertificationContent.tsx
```

---

*Last updated: 2026-04-15*
*Status: Phase 1 is priority — SDR onboarding is immediate.*
