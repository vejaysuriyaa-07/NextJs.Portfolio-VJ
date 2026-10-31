"use client";
import React, { useEffect, useRef } from "react";

// Faint glow that follows the mouse; skipped on touch screens.
const CursorSpotlight = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = ref.current;
    const move = (e) => {
      el.style.background = `radial-gradient(600px circle at ${e.clientX}px ${e.clientY}px, rgba(59, 130, 246, 0.07), transparent 40%)`;
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return <div ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0 z-0" />;
};

export default CursorSpotlight;
