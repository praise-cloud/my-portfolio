# AGENTS.md — Praise Georgewill personal brand site

You are building the flagship website for Praise Georgewill, a Systems Builder
(DevOps & Cloud Engineer). The site must feel like a design-agency-grade portfolio
AND be credible to CTOs, engineering managers and founders.

## Read before doing anything (in this order)
1. brand/BRAND.md        — identity, positioning, voice, audience
2. brand/DESIGN_BRIEF.md — design system, tokens, layout, motion, reference analysis
3. brand/CONTENT.md      — all copy and content slots
4. references/           — visual references (see DESIGN_BRIEF section 2 for what to take and what to reject)

## Stack
Next.js (App Router) + TypeScript + Tailwind CSS + Motion (framer-motion).
Static export (`output: 'export'`) so it can be hosted on S3 + CloudFront.
Content in MDX under /content (projects, writing). Fonts via next/font (Manrope, Inter, JetBrains Mono).

## Non-negotiable rules
- NEVER invent facts: no fake metrics, employers, clients, testimonials, certifications or project results.
  Anything unknown is a visible `[PLACEHOLDER: …]` token in CONTENT.md and rendered as an obvious "In progress" state.
- Voice: calm, analytical, structured. No hustle language, no hype, no politics, no emojis.
- Palette: only tokens in DESIGN_BRIEF. No neon, no purple, no gradients-as-decoration, no crypto look.
- No stock photos of people, no AI-generated faces. Use the supplied portrait (public/portrait.*) or a clean typographic fallback.
- Every section earns its place: "Would a CTO respect this?" If no, cut it.
- Accessibility: WCAG AA contrast, semantic HTML, keyboard nav, visible focus, `prefers-reduced-motion` honored.
- Performance budget: Lighthouse >= 95 on all four categories, LCP < 2.0s on mobile, initial JS < 150 KB gz, images AVIF/WebP with dimensions.
- Mobile-first. Test 360px, 768px, 1280px, 1920px.

## Working method
Use the skills in .agents/skills: art-director -> frontend-builder -> copywriter -> qa-reviewer (-> infra-deployer in phase 2).
Follow .agents/workflows/build-site.md. Stop at each CHECKPOINT and summarize what was done and what you need from me.
Commit small, with clear messages. Keep a running /docs/DECISIONS.md of design and architecture decisions with the reason for each.

## Definition of done
Site builds with zero errors/warnings, passes qa-reviewer checklist, all placeholders are listed in /docs/PLACEHOLDERS.md,
and README explains how to add a project or article in under 5 minutes.
