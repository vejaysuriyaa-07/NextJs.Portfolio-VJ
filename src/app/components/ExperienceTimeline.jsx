"use client";
import React from "react";
import { motion } from "framer-motion";
import TileGlow, { trackPointer } from "./TileGlow";

// Bullets come from the resume, verbatim.
const EXPERIENCE = [
  {
    title:
      "Course Producer, EE 658 Diagnosis and Design of Reliable Digital Systems (graduate DFT)",
    place: "University of Southern California",
    dates: "Aug 2026 - Present",
    current: true,
    bullets: [
      "Selected by Prof. Moe Tabar after earning an A; grade homework, projects and exams on fault modeling, ATPG, fault simulation and BIST.",
      "Hold weekly office hours on test generation, fault simulation and testability problems; set assignment deadlines and proctor exams.",
    ],
  },
  {
    title: "Research Assistant, In-Memory Computing and VLSI",
    place: "Prof. Mohanbabu A.'s lab, SRM IST Chennai (part-time)",
    dates: "Jan 2025 - Jul 2025",
    bullets: [
      "Simulated RRAM crossbar arrays in HSPICE and LTspice for analog in-memory computing (IMC) matrix-vector multiplication; worked on SRAM compute-in-memory circuits in Cadence Virtuoso with Verilog/ModelSim for the digital side.",
      "Modeled in Python and MATLAB how device variation and limited precision degrade neural-network accuracy on IMC hardware.",
    ],
  },
];

const ExperienceTimeline = () => (
  <section id="experience" className="py-16 scroll-mt-24">
    <div className="container mx-auto px-4 sm:px-8">
      <h2 className="text-3xl sm:text-4xl font-semibold mb-10 text-center">Experience</h2>
      <div className="relative max-w-3xl mx-auto">
        <motion.span
          aria-hidden="true"
          className="absolute left-[7px] top-2 bottom-2 w-0.5 origin-top bg-gradient-to-b from-primary-400 to-secondary-600"
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <ol aria-label="Experience timeline">
          {EXPERIENCE.map((role, index) => (
            <motion.li
              key={role.title}
              className="relative pl-10 pb-10 last:pb-0"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <span aria-hidden="true" className="absolute left-0 top-5 flex h-4 w-4">
                {role.current && (
                  <span className="absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-60 motion-safe:animate-ping" />
                )}
                <span className="relative inline-flex h-4 w-4 rounded-full bg-gradient-to-br from-primary-400 to-secondary-600 shadow-[0_0_12px_rgba(96,165,250,0.6)]" />
              </span>
              <div
                onPointerMove={trackPointer}
                className="group relative overflow-hidden bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-colors duration-300"
              >
                <TileGlow />
                <div className="relative">
                  <p className="text-blue-500 text-sm sm:text-base">
                    {role.dates}
                    {role.current && <span className="sr-only"> (current role)</span>}
                  </p>
                  <h3 className="font-bold text-base sm:text-lg mt-1">{role.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{role.place}</p>
                  <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-300 list-disc pl-5">
                    {role.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;
