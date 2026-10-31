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
| B | projects: featured ISP card, expandable cards, per-project illustrations, tilt | next |
| C | experience timeline (`#experience`, fixes dead nav link) | todo |
| D | photo gallery wall (same photos) | todo |

## Decisions
- Project illustrations are labelled "Illustration" and carry no numbers, so none reads as tool output.
- Animations respect reduced motion (`MotionConfig reducedMotion="user"` plus `useReducedMotion` where framer can't).
- Page title stays "Vejay Suriyaa Senguttuvan | USC MS ECE" (role wording dropped on purpose in 53fe072).
- RTL Live card uses a drawn mock until a real screen recording exists.

## Last update
Phase A: count-up on number tiles, glow moved into `TileGlow.jsx` and used by tiles and
project cards. Content check 24/24 required, 22/22 forbidden absent; lint clean.

## Next step
Phase B: rewrite `ProjectCard.jsx` (featured layout, "Show details" collapse, tilt, content
above the glow layer) and wire `ProjectVisuals.jsx` into `ProjectsSection.jsx`.
