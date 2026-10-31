# Notes

## Status
Content rewrite against `public/resume.pdf` is done. Now building the visual polish list
(16 ideas, all approved). Test: `npm run build && npm run test:content` (string checks on
the static export), plus `npm run lint`.

| Phase | What | State |
|---|---|---|
| Site-wide | progress bar, cursor glow, reveals, LA clock, command menu, easter egg | done |
| Hero | circuit traces, results terminal, photo ring | done |
| A | number tiles: count-up, pointer glow (shared `TileGlow`) | done |
| B | projects: featured ISP card, expandable cards, per-project illustrations, tilt | done |
| C | experience timeline (`#experience`, fixes dead nav link) | next |
| D | photo gallery wall (same photos) | todo |

## Decisions
- Project illustrations are labelled "Illustration" and carry no numbers, so none reads as tool output.
- Animations respect reduced motion (`MotionConfig reducedMotion="user"` plus `useReducedMotion` where framer can't).
- Page title stays "Vejay Suriyaa Senguttuvan | USC MS ECE" (role wording dropped on purpose in 53fe072).
- RTL Live card uses a drawn mock until a real screen recording exists.
- DRC illustration loops to 9 of 14 cells fixed, never a clean grid, since the agent is still being built.
- Reduced motion is read after mount in visuals (`useStill`); reading it during render caused a hydration mismatch.

## Last update
Phase B: `ProjectCard.jsx` rewritten (featured layout, "Show details" collapse, mouse tilt,
content above the glow), new `ProjectVisuals.jsx`. Checked in Chrome on localhost: no console
errors after the hydration fix. Content check 28/28 required, 22/22 forbidden absent; lint clean.

## Next step
Phase C: wire `ExperienceTimeline.jsx` (written, untracked) into `page.js`, remove the
Experience tab from `AboutSection.jsx`, add "Experience timeline" to the content check.
