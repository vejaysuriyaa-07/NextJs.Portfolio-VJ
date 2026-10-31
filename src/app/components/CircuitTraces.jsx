import React from "react";

// Orthogonal routes like metal traces on a die; each carries a travelling pulse.
const TRACES = [
  "M 0 80 H 220 V 160 H 420",
  "M 0 260 H 120 V 200 H 340 V 120 H 520",
  "M 0 420 H 180 V 500 H 460",
  "M 0 540 H 300 V 460 H 380",
  "M 1200 60 H 1000 V 140 H 860",
  "M 1200 220 H 1080 V 300 H 900 V 380 H 760",
  "M 1200 470 H 960 V 560 H 820",
  "M 600 600 V 520 H 700 V 440",
  "M 520 0 V 50 H 700 V 20",
  "M 1200 350 H 1120 V 420",
];

const VIAS = TRACES.map((d) => {
  const nums = d.match(/-?\d+/g).map(Number);
  // Endpoint: last H/V value combined with the latest coordinate on the other axis.
  let x = nums[0];
  let y = nums[1];
  const ops = d.match(/[HV]/g) || [];
  ops.forEach((op, i) => {
    if (op === "H") x = nums[i + 2];
    else y = nums[i + 2];
  });
  return { x, y };
});

const CircuitTraces = () => (
  <svg
    aria-label="Circuit traces"
    role="img"
    viewBox="0 0 1200 600"
    preserveAspectRatio="xMidYMid slice"
    className="pointer-events-none absolute -inset-x-12 -top-24 bottom-0 -z-10 h-[calc(100%+6rem)] w-[calc(100%+6rem)] opacity-80"
    style={{
      maskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
      WebkitMaskImage: "radial-gradient(ellipse at center, black 30%, transparent 75%)",
    }}
  >
    <defs>
      <linearGradient id="trace-pulse" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#60a5fa" />
        <stop offset="100%" stopColor="#dc2626" />
      </linearGradient>
    </defs>
    {TRACES.map((d, i) => (
      <g key={d}>
        <path d={d} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
        <path
          d={d}
          pathLength="100"
          fill="none"
          stroke="url(#trace-pulse)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="10 90"
          className="motion-safe:animate-trace"
          style={{ animationDuration: `${5 + (i % 4)}s`, animationDelay: `${-i * 0.9}s` }}
        />
      </g>
    ))}
    {VIAS.map(({ x, y }, i) => (
      <circle key={i} cx={x} cy={y} r="4" fill="#121212" stroke="rgba(96,165,250,0.5)" strokeWidth="2" />
    ))}
  </svg>
);

export default CircuitTraces;
