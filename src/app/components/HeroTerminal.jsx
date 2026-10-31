"use client";
import React, { useEffect, useState } from "react";

// Every number here is from the resume (EE 658 ATPG and TPI results).
const LINES = [
  { kind: "cmd", text: "$ atpg --bench iscas85" },
  { kind: "out", text: "stuck-at coverage: 97.37–100% (6 circuits)" },
  { kind: "cmd", text: "$ tpi c432 --control-points 4" },
  { kind: "out", text: "coverage: 98.36% → 99.87%" },
];

const TYPE_MS = 45;
const OUTPUT_DELAY_MS = 500;
const RESTART_MS = 4000;

const HeroTerminal = () => {
  const [line, setLine] = useState(0);
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= LINES.length) {
      const t = setTimeout(() => {
        setLine(0);
        setChars(0);
      }, RESTART_MS);
      return () => clearTimeout(t);
    }
    const current = LINES[line];
    if (current.kind === "out") {
      const t = setTimeout(() => {
        setLine(line + 1);
        setChars(0);
      }, OUTPUT_DELAY_MS);
      return () => clearTimeout(t);
    }
    if (chars < current.text.length) {
      const t = setTimeout(() => setChars(chars + 1), TYPE_MS);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => {
      setLine(line + 1);
      setChars(0);
    }, OUTPUT_DELAY_MS);
    return () => clearTimeout(t);
  }, [line, chars]);

  return (
    <figure className="mt-8 mx-auto sm:mx-0 w-full max-w-md overflow-hidden rounded-lg border border-slate-700 bg-black/50 text-left shadow-lg backdrop-blur-sm">
      <div className="flex items-center gap-1.5 border-b border-slate-700 px-3 py-2">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 font-mono text-xs text-gray-500">ee658 — zsh</span>
      </div>
      <pre className="h-28 px-4 py-3 font-mono text-xs sm:text-sm leading-relaxed whitespace-pre-wrap">
        {LINES.map((l, i) => {
          if (i > line) return null;
          const text = i === line && l.kind === "cmd" ? l.text.slice(0, chars) : l.text;
          if (i === line && l.kind === "out") return null;
          return (
            <span key={i} aria-hidden="true" className={`block ${l.kind === "cmd" ? "text-gray-200" : "text-green-400"}`}>
              {text}
              {i === line && <span className="motion-safe:animate-pulse">▋</span>}
            </span>
          );
        })}
        {line >= LINES.length && <span aria-hidden="true" className="block text-gray-200">$ <span className="motion-safe:animate-pulse">▋</span></span>}
        {/* Full text for crawlers and screen readers. */}
        <span className="sr-only">{LINES.map((l) => l.text).join("\n")}</span>
      </pre>
    </figure>
  );
};

export default HeroTerminal;
