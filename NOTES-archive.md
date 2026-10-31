# Notes archive

## 2026-10-31: visual polish phases A-D
- A (8f24587): `CountUp.jsx` counts tiles up on first view (final value under reduced motion,
  width reserved so the % doesn't shift); `TileGlow.jsx` shared pointer glow for tiles and cards.
  Check +"data-countup". Review nits fixed: count delay matches fade-in, transition-colors.
- B (4c349aa): `ProjectCard.jsx` featured layout, "Show details" collapse, mouse-only tilt,
  content above the glow; `ProjectVisuals.jsx` ISP before/after slider, ATPG fault path,
  DRC grid (stops at 9 of 14 fixed), RTL Live mock, all labelled "Illustration".
  Hit a hydration mismatch from reading reduced motion during render; fixed with `useStill`.
  Review fixes: inset focus ring, RTL code stacks on phones, ATPG animates only in view,
  slider aria-valuetext, aria-controls target always rendered, tilt reset on pointercancel.
  Check +"Illustration", "Show details", "Before / after comparison", "data-tilt".
- C (832e237): `ExperienceTimeline.jsx` at `#experience` (navbar link used to go nowhere);
  Experience tab removed from About. Review fixes: decorative line moved out of the `<ol>`,
  "(current role)" for screen readers. Check +"Experience timeline".
- D: `Gallery.jsx` CSS-columns photo wall, slight per-frame tilt, reveal on scroll, button
  per photo, modal with Esc, Tab kept on Close, body scroll lock, focus return (opener saved
  on click because autoFocus runs before effects). Check +"Photo wall".
- Running `next build` while `next dev` runs breaks the dev server's CSS (both use `.next/`);
  check pages on the static export instead.
