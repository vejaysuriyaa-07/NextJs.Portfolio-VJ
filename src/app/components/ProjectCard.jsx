"use client";
import React, { useId, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronDown, ExternalLink, Github } from "lucide-react";
import TileGlow, { trackPointer } from "./TileGlow";

const MAX_TILT_DEG = 4;

// Tilts the card toward the pointer; mouse only, so touch scrolling stays still.
const tilt = (e, maxDeg) => {
  if (e.pointerType !== "mouse") return;
  const rect = e.currentTarget.getBoundingClientRect();
  const px = (e.clientX - rect.left) / rect.width - 0.5;
  const py = (e.clientY - rect.top) / rect.height - 0.5;
  e.currentTarget.style.transform = `perspective(1000px) rotateX(${-py * maxDeg}deg) rotateY(${px * maxDeg}deg)`;
};

const ProjectCard = ({ title, tech, description, bullets, links, visual: Visual, featured = false }) => {
  const [open, setOpen] = useState(featured);
  const reduceMotion = useReducedMotion();
  const detailsId = useId();
  const maxDeg = featured ? MAX_TILT_DEG / 2 : MAX_TILT_DEG;

  const onPointerMove = (e) => {
    trackPointer(e);
    if (!reduceMotion) tilt(e, maxDeg);
  };
  const onPointerLeave = (e) => {
    e.currentTarget.style.transform = "";
  };

  return (
    <div
      data-tilt
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      onPointerCancel={onPointerLeave}
      className="group relative h-full overflow-hidden rounded-xl border border-slate-700 bg-[#151515] p-6 sm:p-7 transition-[transform,border-color,background-color] duration-200 ease-out hover:border-slate-500 hover:bg-[#1a1a1a]"
    >
      <TileGlow />
      <div className={`relative h-full ${featured ? "flex flex-col gap-8 lg:grid lg:grid-cols-2" : "flex flex-col"}`}>
        {Visual && (
          <div className={featured ? "lg:order-2" : "mb-6"}>
            <Visual />
          </div>
        )}
        <div className="flex flex-1 flex-col">
          {featured && (
            <span className="mb-3 w-fit rounded-full bg-gradient-to-r from-primary-400 to-secondary-600 px-3 py-1 text-xs font-semibold text-white">
              Featured
            </span>
          )}
          <h5 className={`text-white font-semibold mb-3 ${featured ? "text-2xl" : "text-xl"}`}>{title}</h5>
          <div className="flex flex-wrap gap-2 mb-4">
            {tech.map((item) => (
              <span
                key={item}
                className="rounded-md bg-gray-800/50 px-2 py-1 text-xs sm:text-sm text-gray-300"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="text-[#ADB7BE] text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls={detailsId}
            className="mt-4 inline-flex w-fit items-center gap-1 text-sm font-semibold text-primary-400 hover:text-primary-300 transition-colors"
          >
            {open ? "Hide details" : "Show details"}
            <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
          </button>
          <div id={detailsId}>
            <AnimatePresence initial={false}>
              {open && (
                <motion.ul
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden space-y-2 text-sm sm:text-base text-gray-300 list-disc pl-5"
                >
                  {bullets.map((bullet, index) => (
                    <li key={index} className={index === 0 ? "mt-3" : ""}>{bullet}</li>
                  ))}
                </motion.ul>
              )}
            </AnimatePresence>
          </div>
          <div className="mt-auto pt-6 flex flex-wrap gap-4">
            {links.length === 0 ? (
              <span className="text-sm sm:text-base italic text-gray-500">
                Write-up coming
              </span>
            ) : (
              links.map(({ label, href }) => {
                const Icon = href.includes("github.com") ? Github : ExternalLink;
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </a>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
