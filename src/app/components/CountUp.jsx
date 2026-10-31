"use client";
import React, { useEffect, useRef, useState } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

// Counts from 0 to `value` the first time it scrolls into view.
// Non-numeric values (like a version string) are shown as-is.
const CountUp = ({ value, duration = 1.6, delay = 0 }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const numeric = typeof value === "number";
  const decimals = numeric ? (String(value).split(".")[1] || "").length : 0;
  const [shown, setShown] = useState(numeric ? 0 : value);

  useEffect(() => {
    if (!numeric || !inView) return;
    if (reduceMotion) {
      setShown(value);
      return;
    }
    const controls = animate(0, value, {
      duration,
      delay,
      ease: "easeOut",
      onUpdate: (v) => setShown(v),
    });
    return () => controls.stop();
  }, [numeric, inView, reduceMotion, value, duration, delay]);

  const text = numeric ? Number(shown).toFixed(decimals) : shown;
  return (
    // The invisible final value reserves the width, so the number doesn't shift while counting.
    <span ref={ref} data-countup className="inline-grid tabular-nums">
      <span aria-hidden="true" className="invisible col-start-1 row-start-1">{value}</span>
      <span aria-hidden="true" className="col-start-1 row-start-1">{text}</span>
      <span className="sr-only">{value}</span>
    </span>
  );
};

export default CountUp;
