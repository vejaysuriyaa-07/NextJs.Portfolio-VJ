"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

// Drawn in the browser to show what each project does. These are illustrations,
// not tool output, so they carry no numbers.

// useReducedMotion is null on the server, so read it only after mount to keep hydration in sync.
const useStill = () => {
  const reduceMotion = useReducedMotion();
  const [still, setStill] = useState(false);
  useEffect(() => setStill(Boolean(reduceMotion)), [reduceMotion]);
  return still;
};

const Frame = ({ caption, children }) => (
  <figure className="relative">
    <div className="relative overflow-hidden rounded-lg border border-slate-700 bg-[#0d0d0d]">
      <span className="absolute left-2 top-2 z-10 rounded bg-black/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-gray-400">
        Illustration
      </span>
      {children}
    </div>
    <figcaption className="mt-2 text-xs text-gray-500">{caption}</figcaption>
  </figure>
);

// Camera ISP: drag to compare the raw frame (lifted black level, green cast)
// with the frame after black-level correction and white balance.
const IspSlider = () => {
  const [pos, setPos] = useState(50);
  const x = (pos / 100) * 320;

  return (
    <Frame caption="Raw sensor frame vs. after black-level correction and white balance.">
      <div className="relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-primary-400 rounded-lg">
        <svg viewBox="0 0 320 200" className="block w-full h-auto" role="img" aria-label="Before and after white balance">
          <defs>
            <linearGradient id="isp-sky" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#7dd3fc" />
              <stop offset="1" stopColor="#fde68a" />
            </linearGradient>
            <g id="isp-scene">
              <rect width="320" height="200" fill="url(#isp-sky)" />
              <circle cx="250" cy="55" r="22" fill="#fbbf24" />
              <path d="M0 140 Q80 95 160 135 T320 125 V200 H0 Z" fill="#22c55e" />
              <path d="M0 165 Q100 135 200 165 T320 160 V200 H0 Z" fill="#15803d" />
              <rect x="70" y="118" width="46" height="34" fill="#f8fafc" />
              <path d="M64 120 L93 96 L122 120 Z" fill="#dc2626" />
              <rect x="88" y="132" width="10" height="20" fill="#1e3a8a" />
            </g>
            <filter id="isp-raw">
              <feColorMatrix type="matrix" values="0.62 0 0 0 0.07  0 0.95 0 0 0.07  0 0 0.55 0 0.07  0 0 0 1 0" />
            </filter>
            <clipPath id="isp-left">
              <rect width={x} height="200" />
            </clipPath>
          </defs>
          <use href="#isp-scene" />
          <use href="#isp-scene" filter="url(#isp-raw)" clipPath="url(#isp-left)" />
          <line x1={x} x2={x} y1="0" y2="200" stroke="white" strokeWidth="2" />
          <circle cx={x} cy="100" r="9" fill="white" />
          <path d={`M${x - 3} 96 l-3 4 l3 4 M${x + 3} 96 l3 4 l-3 4`} stroke="#111" strokeWidth="1.5" fill="none" />
          <text x="8" y="192" fontSize="10" fill="white">Raw</text>
          <text x="312" y="192" fontSize="10" fill="white" textAnchor="end">Corrected</text>
        </svg>
        <input
          type="range"
          min="0"
          max="100"
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          aria-label="Before / after comparison"
          aria-valuetext={`${pos}% raw, ${100 - pos}% corrected`}
          className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
    </Frame>
  );
};

// ATPG: a stuck-at-0 fault on a gate output, and its effect (D) propagating to the output.
const AtpgFault = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const still = useStill();
  const wire = { stroke: "#64748b", strokeWidth: 2, fill: "none" };
  const gate = { stroke: "#94a3b8", strokeWidth: 2, fill: "#151515" };
  const faultPath = "M130 55 H170 V90 H200 M240 100 H296";

  return (
    <Frame caption="A stuck-at-0 fault, activated and propagated to the output as D.">
      <svg ref={ref} viewBox="0 0 320 200" className="block w-full h-auto" role="img" aria-label="Fault propagating through a gate circuit">
        {[
          ["a", 45, "M24 45 H90"],
          ["b", 65, "M24 65 H90"],
          ["c", 135, "M24 135 H96"],
          ["d", 155, "M24 155 H96"],
        ].map(([name, y, d]) => (
          <g key={name}>
            <text x="10" y={y + 4} fontSize="11" fill="#94a3b8">{name}</text>
            <path d={d} {...wire} />
          </g>
        ))}
        <path d="M130 55 H170 V90 H200" {...wire} />
        <path d="M140 145 H170 V110 H200" {...wire} />
        <path d="M240 100 H296" {...wire} />
        <path d="M90 35 H110 A20 20 0 0 1 110 75 H90 Z" {...gate} />
        <path d="M90 125 Q105 145 90 165 Q125 165 140 145 Q125 125 90 125 Z" {...gate} />
        <path d="M200 80 H220 A20 20 0 0 1 220 120 H200 Z" {...gate} />
        {still || !inView ? (
          <path d={faultPath} stroke="#ef4444" strokeWidth="3" fill="none" />
        ) : (
          <motion.path
            d={faultPath}
            stroke="#ef4444"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2.2, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 }}
          />
        )}
        <g>
          <circle cx="150" cy="55" r="5" fill="#ef4444" />
          <text x="150" y="42" fontSize="10" fill="#fca5a5" textAnchor="middle">s-a-0</text>
        </g>
        <text x="303" y="104" fontSize="12" fontWeight="bold" fill="#fca5a5">D</text>
      </svg>
    </Frame>
  );
};

// RL agent: DRC violations (red) being fixed one by one (green) on a routing grid.
const COLS = 12;
const ROWS = 7;
const VIOLATIONS = [3, 9, 14, 20, 27, 31, 38, 44, 49, 56, 61, 67, 72, 79];
// The agent is still being built, so the loop never claims a clean grid.
const FIX_UP_TO = 9;

const DrcGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { amount: 0.4 });
  const still = useStill();
  const [fixed, setFixed] = useState(0);

  useEffect(() => {
    if (still) {
      setFixed(FIX_UP_TO);
      return;
    }
    if (!inView) return;
    const done = fixed >= FIX_UP_TO;
    const t = setTimeout(() => setFixed(done ? 0 : fixed + 1), done ? 1800 : 380);
    return () => clearTimeout(t);
  }, [inView, still, fixed]);

  return (
    <Frame caption="Post-route DRC violations being fixed one at a time on a routing grid.">
      <svg ref={ref} viewBox="0 0 320 200" className="block w-full h-auto" role="img" aria-label="DRC violations turning green as they are fixed">
        {Array.from({ length: ROWS }, (_, r) => (
          <line key={`h${r}`} x1="16" x2="304" y1={30 + r * 24 + 10} y2={30 + r * 24 + 10} stroke="#1e293b" strokeWidth="1" />
        ))}
        {Array.from({ length: COLS * ROWS }, (_, i) => {
          const col = i % COLS;
          const row = Math.floor(i / COLS);
          const v = VIOLATIONS.indexOf(i);
          const fill = v === -1 ? "#1f2937" : v < fixed ? "#16a34a" : "#dc2626";
          return (
            <rect
              key={i}
              x={16 + col * 24}
              y={30 + row * 24}
              width="20"
              height="20"
              rx="3"
              fill={fill}
              style={{ transition: "fill 300ms" }}
            />
          );
        })}
      </svg>
    </Frame>
  );
};

// RTL Live: Verilog in the editor, its schematic drawn beside it.
const CODE = [
  ["module", " mux2("],
  ["  input", "  a, b, sel,"],
  ["  output", " y"],
  ["", ");"],
  ["  assign", " y = sel ? b : a;"],
  ["endmodule", ""],
];

const RtlLiveMock = () => (
  <Frame caption="Verilog in the editor, its schematic redrawn in the sidebar on every edit.">
    <div className="grid grid-cols-1 sm:grid-cols-2 text-[10px] sm:text-xs">
      <pre className="border-b sm:border-b-0 sm:border-r border-slate-800 p-3 pt-8 font-mono leading-relaxed text-gray-300 overflow-x-auto">
        {CODE.map(([kw, rest], i) => (
          <div key={i}>
            <span className="text-primary-400">{kw}</span>
            {rest}
            {i === CODE.length - 2 && <span className="motion-safe:animate-pulse text-white">▍</span>}
          </div>
        ))}
      </pre>
      <svg viewBox="0 0 160 120" className="block w-full h-auto p-2 pt-6" role="img" aria-label="Schematic of a 2-to-1 multiplexer">
        <path d="M60 30 L100 45 V75 L60 90 Z" fill="#151515" stroke="#94a3b8" strokeWidth="2" />
        <path d="M20 45 H60 M20 75 H60 M80 110 V83 M100 60 H140" stroke="#60a5fa" strokeWidth="2" fill="none" />
        <text x="10" y="48" fontSize="10" fill="#94a3b8">a</text>
        <text x="10" y="78" fontSize="10" fill="#94a3b8">b</text>
        <text x="84" y="116" fontSize="10" fill="#94a3b8">sel</text>
        <text x="144" y="63" fontSize="10" fill="#94a3b8">y</text>
      </svg>
    </div>
  </Frame>
);

export const PROJECT_VISUALS = {
  isp: IspSlider,
  atpg: AtpgFault,
  drc: DrcGrid,
  rtl: RtlLiveMock,
};
