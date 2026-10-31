import React from "react";

// Tracks the pointer inside a tile so the glow overlay can follow it.
export const trackPointer = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

// Soft blue-to-red glow under the pointer. The parent needs `group relative overflow-hidden`.
const TileGlow = ({ size = 400 }) => (
  <div
    aria-hidden="true"
    className="tile-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
    style={{
      background: `radial-gradient(${size}px circle at var(--x, 50%) var(--y, 50%), rgba(96, 165, 250, 0.16), rgba(220, 38, 38, 0.08) 40%, transparent 70%)`,
    }}
  />
);

export default TileGlow;
