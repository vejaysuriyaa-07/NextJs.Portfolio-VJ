"use client";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SECRET = "verilog";

// Square waves for clk, a, and y = a & clk, drawn as SVG paths.
const wave = (bits, y0, step = 40, high = 0, low = 24) => {
  let d = `M 0 ${y0 + (bits[0] ? high : low)}`;
  bits.forEach((bit, i) => {
    const y = y0 + (bit ? high : low);
    d += ` L ${i * step} ${y} L ${(i + 1) * step} ${y}`;
  });
  return d;
};

const CLK = [1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0];
const A = [0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1];
const Y = CLK.map((c, i) => c & A[i]);

const SIGNALS = [
  { name: "clk", bits: CLK, color: "#60a5fa" },
  { name: "a", bits: A, color: "#f87171" },
  { name: "y = a & clk", bits: Y, color: "#4ade80" },
];

const EasterEgg = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let typed = "";
    const onKey = (e) => {
      const tag = e.target.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || e.key.length !== 1) return;
      typed = (typed + e.key.toLowerCase()).slice(-SECRET.length);
      if (typed === SECRET) {
        setShow(true);
        setTimeout(() => setShow(false), 4500);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 bottom-6 z-50 flex justify-center px-4">
      <AnimatePresence>
      {show && (
        <motion.div
          className="pointer-events-auto w-full max-w-[560px] rounded-xl border border-slate-700 bg-[#181818]/95 p-5 shadow-2xl backdrop-blur"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          onClick={() => setShow(false)}
        >
          <p className="mb-3 font-mono text-xs text-gray-400">$ vvp sim · you found the waveform</p>
          <svg viewBox="-110 -10 600 170" className="w-full" aria-hidden="true">
            {SIGNALS.map((s, i) => (
              <g key={s.name}>
                <text x="-105" y={i * 55 + 18} fill="#ADB7BE" fontSize="13" fontFamily="monospace">
                  {s.name}
                </text>
                <motion.path
                  d={wave(s.bits, i * 55)}
                  fill="none"
                  stroke={s.color}
                  strokeWidth="2.5"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, delay: i * 0.25, ease: "linear" }}
                />
              </g>
            ))}
          </svg>
        </motion.div>
      )}
      </AnimatePresence>
    </div>
  );
};

export default EasterEgg;
