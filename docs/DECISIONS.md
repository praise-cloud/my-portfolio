# Architectural & Design Decisions

| Decision | Context | Reason |
| :--- | :--- | :--- |
| **Engineering Editorial Theme** | Replaced generic dark template with alternating Navy-900 / Paper (#F8FAFC) palette. | Balances agency-level visual impact with the trust and gravitas expected by enterprise CTOs and founders. |
| **Oversized Cropped Wordmark** | Ref 1 (Kinetic) & Ref 3 (Gazu) architectural scale. | Establishes immediate authority and sculptural depth, layered seamlessly behind portrait cutout in hero and repeated in footer. |
| **Strict 001–007 Numbered Sequence** | Ref 4 & Ref 5 editorial layout. | Clear systemic structure that frames the narrative as an engineered publication. |
| **3-Mode Project Representation** | User requested creative agency project visualization. | Provides Cinematic Reel (3D cards), Matrix (Blueprint Bento), and Editorial Index (interactive row table with cursor-following preview). |
| **4-Block Post-Mortem Format (005 Build Log)** | What I built / What broke / How I fixed it / Lesson. | Enforces deep engineering credibility and operational honesty over surface-level marketing claims. |
| **Systems Direction Section (006)** | Ref 2 Mindly editorial whitespace and Newsreader italic quote. | Communicates Praise's long-term systems trajectory without premature commercial posturing. |
| **Integrated Contact & Repeated Wordmark (007)** | Navy-950 high-contrast close with direct Formspree transmission + Cal.com scheduling. | Provides instant technical intake with real-time response SLAs and verified communication channels. |
| **Web Audio Synthesizer** | Tactile sound design without external MP3 assets. | Uses browser-native Web Audio API for zero latency and zero bundle overhead, with global off/on toggle. |
| **Canvas Particle Constellation** | Interactive motion requirement. | Subtle interactive particle mesh that responds to cursor velocity without causing layout shifts or CPU drain. |
| **Suspense & Code Splitting** | Frontend-expert guideline. | Lightweight chunking with Vite Rollup options ensures sub-5s builds and all chunks under 220kB. |
