"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const FILTERS = ["All", "Verification", "DFT", "AI for EDA", "Tooling"];

// Bullets come from the resume, verbatim or lightly trimmed.
const projectsData = [
  {
    id: 1,
    title: "Camera ISP Pipeline for Tiny Tapeout (SKY130)",
    status: { kind: "progress", label: "In progress · shuttle Nov 30, 2026" },
    tech: ["Python", "NumPy", "Verilog", "Cadence Xcelium", "SKY130"],
    description:
      "RTL and verification for a camera image signal processing pipeline on the Tiny Tapeout TTSKY26d shuttle (SkyWater SKY130), built test-first: the test plan and golden model came before any RTL.",
    bullets: [
      "Wrote the test plan, a fixed-point Python golden model for 2 ISP stages (black-level correction, white balance with Q2.6 gains) and self-checking unit tests before any RTL existed, the reference for RTL verification.",
      "Next: Verilog RTL for the first stages, verified in Cadence Xcelium against the model's vectors, for the Nov 30, 2026 shuttle.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/vejaysuriyaa-07/tt-camera-isp" }],
    tag: ["All", "Verification"],
  },
  {
    id: 2,
    title: "RL Agent for Post-Route DRC Closure (AI for EDA)",
    status: { kind: "progress", label: "In progress · EE 599 team project" },
    tech: ["Python", "Tcl", "Cadence Innovus", "mflowgen", "KLayout", "SKY130"],
    description:
      "A 4-person team building an RL agent that fixes post-route DRC violations with minimal layout disruption. I own the measurement side: the flow, the reward inputs and the baseline the agent must beat.",
    bullets: [
      "Brought up the mflowgen + Innovus + SKY130 flow on the USC server and froze the IBEX (RISC-V, 12.4k cells) benchmarks.",
      "Wrote the DRC report parser (Innovus verify_drc, KLayout) and a DEF-diff disruption metric (nets rerouted, wirelength, vias, cells moved), both reward inputs; found KLayout misses 82% of AES violations (all 47 shorts), so the reward uses Innovus counts.",
      "Built the native ecoRoute baseline and measured it on 5 frozen designs (AES 57 to 48 violations, a 15.8% reduction, in 111 s touching 1.65% of nets; IBEX 838 to 0 touching 12% of nets); fixed a router setting that made ecoRoute a no-op on onepass runs.",
    ],
    links: [],
    tag: ["All", "AI for EDA"],
  },
  {
    id: 3,
    title: "Combinational ATPG Engine, Test Point Insertion, BIST Simulator and Scan Insertion",
    status: { kind: "done", label: "Done · EE 658" },
    tech: ["C++17", "Python", "ISCAS-85"],
    description:
      "A DFT toolkit for the EE 658 course project: ATPG, test point insertion, fault simulation, BIST and full-scan insertion, evaluated on ISCAS-85 benchmarks.",
    bullets: [
      "Implemented a combinational ATPG engine in C++17 (D-Algorithm with D/J-frontier tracking and SCOAP heuristics); 97.37 to 100% stuck-at fault coverage across 6 ISCAS-85 circuits using checkpoint-collapsed fault lists.",
      "Evaluated test-point insertion with 1,000 LFSR patterns per seed across 5 seeds; raised c432 coverage from 98.36% to 99.87% with 4 control points at 6.9% estimated area overhead.",
      "Built fault simulation, Galois LFSR/MISR BIST and full-scan insertion for sequential .bench netlists; 22 GoogleTest cases.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/vejaysuriyaa-07/atpg-tpi-ppa" }],
    tag: ["All", "DFT"],
  },
  {
    id: 4,
    title: "RTL Live, VS Code Extension",
    status: { kind: "published", label: "Published · v0.5.1" },
    tech: ["VS Code", "Verilog", "Agentic AI workflow"],
    description:
      "An open-source VS Code extension, published on the VS Code Marketplace, that renders a live Verilog schematic in the sidebar.",
    bullets: [
      "Built and published a VS Code extension that renders a live Verilog schematic in the sidebar on every edit, with 2 synthesized views.",
      "Delivered with an agentic AI coding workflow (Claude Code): spec, acceptance criteria, overnight autonomous build, release in a week.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/vejaysuriyaa-07/rtl-live" }],
    tag: ["All", "Tooling"],
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    tag === "All" ? true : project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="w-full py-12 sm:py-16 md:py-20 bg-[#181818]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Box with Border */}
        <div className="border-2 border-gray-600 p-6 rounded-lg">
          {/* Section Header */}
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12">
            Projects
          </h2>

          {/* Project Tags */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
            {FILTERS.map((name) => (
              <ProjectTag
                key={name}
                onClick={handleTagChange}
                name={name}
                isSelected={tag === name}
              />
            ))}
          </div>

          {/* Projects Grid */}
          <div className="w-full">
            <ul
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12"
            >
              {filteredProjects.map((project, index) => (
                <motion.li
                  key={project.id}
                  variants={cardVariants}
                  initial="initial"
                  animate={isInView ? "animate" : "initial"}
                  transition={{ duration: 0.3, delay: index * 0.2 }}
                  className="w-full"
                >
                  <ProjectCard
                    title={project.title}
                    status={project.status}
                    tech={project.tech}
                    description={project.description}
                    bullets={project.bullets}
                    links={project.links}
                  />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Notice Section */}
          <div className="mt-12 sm:mt-16 md:mt-20 px-4 sm:px-6 md:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-[#ADB7BE] text-base sm:text-lg leading-relaxed">
                <span className="block text-white text-xl sm:text-2xl font-bold mb-2 sm:mb-3">
                  Focus:
                </span>
                Design verification and DFT, test-first: golden model and test
                plan before RTL.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
