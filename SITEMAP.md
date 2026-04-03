# Obsidion Training Hub — Site Map

This document describes the full information architecture of the training hub. It is the canonical reference for what exists, what routes map where, and what content lives in each section. Update this document whenever the structure changes.

---

## Overview

The Obsidion Training Hub is organized around **roles**. An employee selects their role on the landing page and enters that role's hub, which contains sections relevant to their position. The first role is **Account Executive (AE)**; additional roles will follow the same pattern.

Each role hub contains up to 8 sections, some of which use **shared content** (identical across all roles) and some of which are **role-specific**.

---

## URL Structure

```
/                                              Landing — role selection
/role/[roleSlug]                               Role hub dashboard
/role/[roleSlug]/about                         About the Company
/role/[roleSlug]/products                      Product Knowledge
/role/[roleSlug]/products/[productSlug]        Individual product deep-dive
/role/[roleSlug]/getting-paid                  Getting Paid & Bonuses
/role/[roleSlug]/performance                   Performance Expectations
/role/[roleSlug]/tech                          Tech We Use
/role/[roleSlug]/assets                        Downloadable Assets
/role/[roleSlug]/on-the-call                   On the Call (overview)
/role/[roleSlug]/on-the-call/[topicSlug]       On the Call sub-topic
/role/[roleSlug]/playbooks                     Playbooks index
/role/[roleSlug]/playbooks/[slug]/[moduleId]   Individual playbook module
```

---

## Roles

| Slug                | Display Name        | Status       |
|---------------------|---------------------|--------------|
| `account-executive` | Account Executive   | In progress  |
| *(future)*          | Customer Success    | Planned      |
| *(future)*          | Marketing           | Planned      |
| *(future)*          | Operations          | Planned      |

---

## Sections (Account Executive)

### 1. About the Company

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/about`                |
| Content type | Shared                                         |
| Source       | `content/shared/about-the-company.md`          |
| Extracted from | `Module01WhoWeAre` (generalized)             |

Company history, mission, values, org chart, culture. This is the same regardless of role — every new hire reads the same "who we are" content.

### 2. Product Knowledge

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/products`             |
| Content type | Shared (product facts) + Role-specific (selling angle) |
| Source       | `content/roles/account-executive/product-knowledge/` |

Covers every Obsidion product in a role-agnostic way:

| Sub-route    | Product      | Content file                         |
|--------------|-------------|--------------------------------------|
| `/products`  | Overview     | `product-knowledge/overview.md`      |
| `/products/websites` | Custom Websites | `product-knowledge/websites.md` |
| `/products/seo`      | SEO Services    | `product-knowledge/seo.md`      |
| `/products/remarketing` | Remarketing  | `product-knowledge/remarketing.md` |
| `/products/mobile-app`  | Mobile App   | `product-knowledge/mobile-app.md`  |

The playbooks retain vertical-specific selling angles for each product (e.g., "SEO for Cannabis" lives in the cannabis playbook, not here).

### 3. Getting Paid & Bonuses

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/getting-paid`         |
| Content type | Role-specific                                  |
| Source       | `content/roles/account-executive/getting-paid.md` |
| Extracted from | `Module09Compensation`                       |

Compensation structure, commission tiers, bonus programs, payout schedule. This is role-specific because AEs, CSMs, and ops all have different comp plans.

### 4. Performance Expectations

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/performance`          |
| Content type | Role-specific                                  |
| Source       | `content/roles/account-executive/performance.md` |
| Extracted from | `Module10Performance`                        |

KPIs, ramp schedule, quota expectations, review cadence. Role-specific — each role has its own targets.

### 5. Tech We Use

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/tech`                 |
| Content type | Shared                                         |
| Source       | `content/shared/tech-we-use.md`                |
| Extracted from | `Module02TechWeUse`                          |

CRM, communication tools, project management, internal systems. Same tools for everyone.

### 6. Downloadable Assets

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/assets`               |
| Content type | Shared                                         |
| Source       | `content/shared/assets.md`                     |
| Extracted from | `Module15Assets`                             |

Company logo, banner images, email footers, brand guidelines, templates. Employees download these to incorporate into their communications. Files live in `public/assets/`.

### 7. On the Call

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/on-the-call`          |
| Content type | Role-specific                                  |
| Source       | `content/roles/account-executive/on-the-call/` |
| Extracted from | `Module12OnTheCall` + new content            |

Everything related to live calls — inbound and outbound. Sub-sections:

| Sub-route            | Topic               | Content file               |
|----------------------|---------------------|----------------------------|
| `/on-the-call`       | Overview            | `on-the-call/overview.md`  |
| `/on-the-call/scripts` | Call Scripts       | `on-the-call/scripts.md`   |
| `/on-the-call/objections` | Objection Handling | `on-the-call/objection-handling.md` |
| `/on-the-call/frameworks` | Call Frameworks  | `on-the-call/call-frameworks.md` |

### 8. Training Playbooks

| Field        | Value                                          |
|--------------|------------------------------------------------|
| Route        | `/role/account-executive/playbooks`            |
| Content type | Role-specific, vertical-specific               |
| Source       | Existing `src/data/playbooks/` registry + TSX modules |

After extraction of shared modules, each playbook focuses on **vertical-specific sales training**:

| Playbook            | Slug               | Modules remaining after extraction        |
|---------------------|---------------------|------------------------------------------|
| Cannabis            | `cannabis`          | Welcome, Market Opp, Website, SEO, Remarketing, Mobile App, Pricing, Outreach, Objections, Quick Ref, Quiz |
| Automotive          | `automotive`        | Same structure, automotive-specific content |
| Salon & Med Spa     | `salon-medspa`      | Same structure, salon/medspa-specific content |
| Food & Hospitality  | `food-hospitality`  | Same structure, food/hospitality-specific content |
| Contractors         | `contractors`       | Stub — content being added                |

---

## Navigation Flow

```
Landing (role selection)
  └─> Role Hub Dashboard (card grid)
        ├─> About the Company (single page)
        ├─> Product Knowledge (overview + sub-pages per product)
        ├─> Getting Paid & Bonuses (single page)
        ├─> Performance Expectations (single page)
        ├─> Tech We Use (single page)
        ├─> Downloadable Assets (single page with download links)
        ├─> On the Call (overview + sub-pages: scripts, objections, frameworks)
        └─> Playbooks (index → pick vertical → module-by-module with sidebar)
```

---

## Content Source Map

| Section                | Shared / Role-specific | Content location                              |
|------------------------|----------------------|-----------------------------------------------|
| About the Company      | Shared               | `content/shared/about-the-company.md`         |
| Tech We Use            | Shared               | `content/shared/tech-we-use.md`               |
| Downloadable Assets    | Shared               | `content/shared/assets.md`                    |
| Product Knowledge      | Role-specific        | `content/roles/account-executive/product-knowledge/` |
| Getting Paid & Bonuses | Role-specific        | `content/roles/account-executive/getting-paid.md` |
| Performance            | Role-specific        | `content/roles/account-executive/performance.md` |
| On the Call            | Role-specific        | `content/roles/account-executive/on-the-call/` |
| Playbooks              | Role-specific        | `src/data/playbooks/` (existing TSX + registry) |

---

## Legacy Routes

During migration, old routes remain functional:

| Old route                           | Redirect target                                         |
|-------------------------------------|---------------------------------------------------------|
| `/playbooks/[slug]/[moduleId]`      | `/role/account-executive/playbooks/[slug]/[moduleId]`   |
| `/playbook/:moduleId`               | `/playbooks/cannabis/:moduleId` (existing redirect)     |
