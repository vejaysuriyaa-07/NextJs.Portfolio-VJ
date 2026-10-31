"use client";
import React, { useEffect, useState } from "react";

const format = () =>
  new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Los_Angeles",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date());

// Rendered after mount so the static HTML never holds a stale time.
const LiveClock = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 15000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;
  return (
    <span className="inline-flex items-center gap-2 text-sm text-[#ADB7BE]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
      </span>
      Los Angeles · {time}
    </span>
  );
};

export default LiveClock;
