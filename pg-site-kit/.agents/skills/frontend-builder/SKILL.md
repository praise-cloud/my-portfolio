---
name: frontend-builder
description: Use to implement the Praise Georgewill site in Next.js + TypeScript + Tailwind + Motion with static export, MDX content and strict performance/accessibility budgets.
---
# Frontend Builder
1. Scaffold Next.js App Router, TypeScript strict, Tailwind, Motion, MDX (content/projects, content/writing), `output: 'export'`.
2. Implement tokens from /docs/DESIGN_SYSTEM.md first, then components, then sections in the order 001->007, then /work/[slug], /writing/[slug], /about, 404.
3. Hero: giant cropped wordmark using clamp() font-size, overflow hidden container with rounded bottom corners; portrait layered between wordmark and foreground via z-index; SVG network graph with animated packets; live mono clock (client component, hydration-safe).
4. Content comes ONLY from brand/CONTENT.md and /content MDX. Render placeholders as clearly marked states in dev, and fail the production build if a `[PLACEHOLDER` string reaches a page marked `published: true`.
5. Performance: next/font, pre-optimized AVIF/WebP images with dimensions, no heavy libs, lazy-load below-the-fold motion, dynamic import the graph.
6. Accessibility: landmarks, skip link, focus rings in blue-400/600, aria-labels on icon links, reduced-motion variants.
7. Provide scripts: dev, build, lint, typecheck, lighthouse (lhci), and a README for adding a project/article.
