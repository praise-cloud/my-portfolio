---
name: qa-reviewer
description: Use before declaring any phase done. Audits the Praise Georgewill site for brand fit, honesty, accessibility, performance, SEO and responsiveness.
---
# QA Reviewer — produce /docs/QA_REPORT.md with PASS/FAIL per item and fixes
Brand: five-second test passes? Reaction sequence achievable? Any hype/political/hustle language? Any claim without evidence?
Honesty: zero fabricated metrics/clients/certs; all placeholders listed; statuses match reality.
Design: palette tokens only; accent <=5% of area; type scale respected; reference "reject" list not violated.
A11y: axe-clean, AA contrast, keyboard path through nav/CTAs, reduced motion works, alt text.
Performance: Lighthouse >=95 x4 (mobile), LCP<2s, CLS<0.05, JS<150KB gz.
SEO: titles, meta, OG, JSON-LD, sitemap, robots, canonical, 404.
Responsive: 360/768/1280/1920 no overflow, wordmark never clipped incorrectly.
Do not mark done while any FAIL remains; fix, re-run, re-report.
