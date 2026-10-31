import React from "react";
import { ExternalLink, Github } from "lucide-react";

// Tracks the pointer inside the card so the tile-glow overlay can follow it.
const trackPointer = (e) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
};

const ProjectCard = ({ title, tech, description, bullets, links }) => {
  return (
    <div
      onPointerMove={trackPointer}
      className="group relative h-full flex flex-col overflow-hidden rounded-xl border border-slate-700 bg-[#151515] p-6 sm:p-7 transition-all duration-300 hover:border-slate-500 hover:bg-[#1a1a1a]"
    >
      <div
        aria-hidden="true"
        className="tile-glow pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), rgba(59, 130, 246, 0.12), transparent 45%)",
        }}
      />
      <h5 className="text-white text-xl font-semibold mb-3">{title}</h5>
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
      <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-300 list-disc pl-5">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
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
  );
};

export default ProjectCard;
