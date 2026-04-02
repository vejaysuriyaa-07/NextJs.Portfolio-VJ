"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Circuit ATPG Simulator",
    description:
      "Developed a 6,400+ line C++ ATPG engine for ISCAS-85 benchmarks with D-Algorithm, recursive backtracking, D/J-frontier handling, and SCOAP-guided search heuristics.",
    tag: ["All", "DFT"],
  },
  {
    id: 2,
    title: "BIST Simulator with LFSR / MISR",
    description:
      "Built a BIST controller using Galois LFSR pattern generation and MISR response compression, reaching 100% fault coverage on c17 and strong coverage on c432 and c880.",
    tag: ["All", "DFT"],
  },
  {
    id: 3,
    title: "Scan Chain Simulator",
    description:
      "Implemented full-scan insertion for sequential circuits, modeling shift and capture behavior to transform sequential designs into pseudo-combinational ATPG targets.",
    tag: ["All", "DFT"],
  },
  {
    id: 4,
    title: "RTL-to-GDSII Physical Design Flow",
    description:
      "Completed synthesis, floorplanning, placement, CTS, routing, and signoff for a 28nm digital block, improving worst-case slack from -0.8 ns to +0.2 ns at 150 MHz.",
    tag: ["All", "Physical Design"],
  },
  {
    id: 5,
    title: "Low-Power Arithmetic and Memory Blocks",
    description:
      "Designed Verilog arithmetic and memory blocks including a 32-bit Wallace tree multiplier, Booth multiplier, and dual-port SRAM controller with ModelSim verification.",
    tag: ["All", "RTL / VLSI"],
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
            DFT & EE Projects
          </h2>

          {/* Project Tags */}
          <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12">
            <ProjectTag
              onClick={handleTagChange}
              name="All"
              isSelected={tag === "All"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="DFT"
              isSelected={tag === "DFT"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="RTL / VLSI"
              isSelected={tag === "RTL / VLSI"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Physical Design"
              isSelected={tag === "Physical Design"}
            />
          </div>

          {/* Projects Grid */}
          <div className="w-full">
            <ul
              ref={ref}
              className="grid grid-cols-1 md:grid-cols-2 auto-rows-fr gap-6 sm:gap-8 md:gap-10 lg:gap-12"
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
                    description={project.description}
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
                This portfolio is intentionally centered on DFT, VLSI
                implementation, RTL design, low-power analysis, and
                benchmark-driven validation for semiconductor-oriented roles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
