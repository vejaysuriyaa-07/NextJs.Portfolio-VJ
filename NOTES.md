# Notes

## Status
Content rewrite against `public/resume.pdf` is done. The visual polish list
(16 ideas, all approved) is built. Test: `npm run build && npm run test:content` (string checks on
the static export), plus `npm run lint`.

| Phase | What | State |
|---|---|---|
| Site-wide | progress bar, cursor glow, reveals, LA clock, command menu, easter egg | done |
| Hero | circuit traces, results terminal, photo ring | done |
| A | number tiles: count-up, pointer glow (shared `TileGlow`) | done |
| B | projects: featured ISP card, expandable cards, per-project illustrations, tilt | done |
| C | experience timeline (`#experience`, fixes dead nav link) | done |
| D | photo gallery wall (same photos) | done |

## Decisions
- Project illustrations are labelled "Illustration" and carry no numbers, so none reads as tool output.
- Animations respect reduced motion (`MotionConfig reducedMotion="user"` plus `useReducedMotion` where framer can't).
- Page title stays "Vejay Suriyaa Senguttuvan | USC MS ECE" (role wording dropped on purpose in 53fe072).
- RTL Live card uses a drawn mock until a real screen recording exists.
- DRC illustration loops to 9 of 14 cells fixed, never a clean grid, since the agent is still being built.
- Reduced motion is read after mount in visuals (`useStill`); reading it during render caused a hydration mismatch.

## Last update
Phase D: `Gallery.jsx` is a masonry photo wall (same 9 photos), modal with Esc, focus
trap, scroll lock and focus return. Checked in Chrome. Content check 30/30 required, 22/22
forbidden absent; lint clean. Per-phase log in `NOTES-archive.md`.

## Open
- RTL Live card: replace the drawn mock with a real screen recording when one exists.
- Live GitHub Pages deploy not confirmed (runs on push to main).
- Brief's final "matches resume: yes/no" checklist not written yet.

## Next step
None queued. Push to main to deploy, then check the live site.
