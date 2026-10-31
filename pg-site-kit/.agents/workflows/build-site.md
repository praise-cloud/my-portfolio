---
description: End-to-end build of the Praise Georgewill brand site with checkpoints
---
1. Read AGENTS.md, brand/*.md and view every image in /references. Summarize the brand and the "take vs reject" decisions in 10 lines.
2. Adopt art-director: write /docs/DESIGN_SYSTEM.md and section wireframes. CHECKPOINT A: stop, show me, wait for approval.
3. Adopt frontend-builder: scaffold project, tokens, components. Commit.
4. Build sections 001-007 in order, running the dev server and checking each in browser at 360 and 1280. Commit per section.
5. Build /work/[slug], /writing/[slug], /about, 404 with the case-study template. CHECKPOINT B: show me; list all placeholders I must fill.
6. Adopt copywriter: fill all copy from brand/CONTENT.md, draft the first article, produce /docs/PLACEHOLDERS.md.
7. Adopt art-director: visual QA with screenshots at 4 widths; fix defects.
8. Adopt qa-reviewer: full audit -> /docs/QA_REPORT.md. Fix until all PASS. CHECKPOINT C: final summary.
9. Phase 2 (only after I say go): adopt infra-deployer and ship to AWS.
