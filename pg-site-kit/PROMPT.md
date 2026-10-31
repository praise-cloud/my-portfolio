# Master prompt (paste into Antigravity after opening this folder as the workspace)

You are the lead of a small design-and-engineering team building my personal brand website. Start by reading AGENTS.md, then brand/BRAND.md,
brand/DESIGN_BRIEF.md, brand/CONTENT.md, and VIEW every image in /references.

Goal: a design-agency-level portfolio that also earns the trust of CTOs and founders. Direction: "Engineering Editorial": oversized cropped wordmark hero,
two-tone headlines, numbered sections (001-007), monospace metadata, bento cards, index-style project list, navy / blue / paper palette. Take the structure and craft from the
references, reject their loudness (neon, orange/yellow color-blocking, confrontational copy).

Operate as four roles using the skills in .agents/skills: art-director, frontend-builder, copywriter, qa-reviewer. Follow .agents/workflows/build-site.md exactly,
stopping at each CHECKPOINT. Do not invent any fact, metric, client or credential; use [PLACEHOLDER: ...] and track them in /docs/PLACEHOLDERS.md.

Begin with step 1 now: give me a 10-line summary of what you understood, list any missing inputs (portrait, domain, links, bio), then proceed to step 2.

---
## Follow-up prompts you can reuse
- Visual pass: "Adopt art-director. Screenshot home at 360/768/1280/1920, compare against ref1 and ref3 for hero scale and layering, list defects with exact fixes, then apply them."
- New project: "Adopt copywriter + frontend-builder. Add case study '<name>' using the case-study template. Use only these facts: <paste facts>. Mark anything else as placeholder."
- Weekly post: "Adopt copywriter. Turn these notes (what I built / broke / fixed / learned) into a LinkedIn post and an X thread. Run the content filter and show pass/fail."
- Ship: "Adopt infra-deployer. Show the Terraform plan first. Do not apply until I approve."
