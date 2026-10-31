"use client"; // Ensure this line is at the top for client-side rendering

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, GraduationCap, Briefcase, BookOpen, Award, ExternalLink } from "lucide-react";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

// Grouped exactly like the resume's Technical Skills section.
const SKILL_GROUPS = [
  {
    title: "Verification and Test",
    heading: "text-blue-500",
    dot: "bg-blue-500",
    skills: [
      "Test planning",
      "Golden/reference models (Python)",
      "Self-checking tests",
      "Test-first (model-before-RTL) flow",
      "Fault simulation",
      "ATPG (D-Algorithm, PODEM, SCOAP)",
      "Scan insertion",
      "BIST (LFSR/MISR)",
      "Stuck-at and transition fault models",
      "Memory test",
    ],
  },
  {
    title: "HDL and Programming",
    heading: "text-green-500",
    dot: "bg-green-500",
    skills: [
      "Verilog",
      "SystemVerilog (RTL and testbench fundamentals)",
      "C++",
      "Python (NumPy)",
      "Tcl (Innovus scripting)",
      "MATLAB",
      "Bash, Make",
      "Linux, Git/GitHub",
    ],
  },
  {
    title: "AI / ML",
    heading: "text-pink-500",
    dot: "bg-pink-500",
    skills: [
      "Reinforcement learning (MDPs, value/policy methods, policy gradient)",
      "LLM fundamentals (transformers, RL fine-tuning)",
      "RL for EDA",
      "In-memory computing for AI hardware (RRAM crossbars, SRAM compute-in-memory)",
    ],
  },
  {
    title: "AI-Native Development",
    heading: "text-purple-500",
    dot: "bg-purple-500",
    skills: [
      "Agentic coding with Claude Code",
      "Spec-driven builds",
      "CLAUDE.md context engineering",
      "Autonomous overnight builds",
      "AI code review in GitHub",
      "Agent workflow design",
      "Prompt engineering",
      "LLM workflow automation",
    ],
  },
  {
    title: "EDA Tools",
    heading: "text-yellow-500",
    dot: "bg-yellow-500",
    skills: [
      "Cadence Xcelium (RTL simulation)",
      "SimVision (waveform debug)",
      "Innovus (place and route, ecoRoute, verify_drc)",
      "Virtuoso (schematic and layout)",
      "KLayout (DRC)",
      "mflowgen",
      "HSPICE",
      "LTspice",
      "ModelSim",
      "SkyWater SKY130 PDK",
    ],
  },
];

const EXPERIENCE = [
  {
    title:
      "Course Producer, EE 658 Diagnosis and Design of Reliable Digital Systems (graduate DFT)",
    place: "University of Southern California",
    dates: "Aug 2026 - Present",
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

const LEADERSHIP = [
  { title: "ECE Senator, Viterbi Graduate Student Association, USC", dates: "Aug - Dec 2025" },
  { title: "Head of Photography, Camogenics, SRM", dates: "2022 - 2024" },
  { title: "Best NSS Coordinator (Institute Award), SRM", dates: "2022 - 2023" },
];

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-6">
        {SKILL_GROUPS.map((group) => (
          <div key={group.title}>
            <h3 className={`${group.heading} font-semibold mb-3 flex items-center gap-2`}>
              <span className={`w-1.5 h-1.5 ${group.dot} rounded-full`}></span>
              {group.title}
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {group.skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base lg:text-lg"
                >
                  <div className={`w-2 h-2 sm:w-2.5 sm:h-2.5 ${group.dot} rounded-full mr-3 sm:mr-4 flex-shrink-0`} />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    icon: <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src={`${basePath}/images/ECE-RGB-FH-GC-W.png`}
                alt="USC Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                University of Southern California, Los Angeles, CA
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Master of Science in Electrical and Computer Engineering
              </p>
              <p className="text-blue-500 text-sm sm:text-base">
                Aug 2025 - May 2027 (Expected)
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Coursework: Diagnosis and Design of Reliable Digital Systems
                (DFT), VLSI System Design, MOS VLSI Circuit Design, Computer
                Systems Organization, Integrated Memory Devices and
                Technologies, Reinforcement Learning and LLMs
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src={`${basePath}/images/ZYPHER - BADGES - FINAL (1).png`}
                alt="SRM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                SRM Institute of Science and Technology, Chennai, India
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                Bachelor of Technology in Electronics and Computer Engineering
              </p>
              <p className="text-blue-500 text-sm sm:text-base">
                Nov 2020 - May 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Experience",
    id: "experience",
    icon: <Briefcase className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        {EXPERIENCE.map((role) => (
          <div
            key={role.title}
            className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
          >
            <h3 className="font-bold text-base sm:text-lg">{role.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{role.place}</p>
            <p className="text-blue-500 text-sm sm:text-base mt-1">{role.dates}</p>
            <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-300 list-disc pl-5">
              {role.bullets.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    ),
  },
  {
    title: "Publication",
    id: "publication",
    icon: <BookOpen className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <h3 className="font-bold text-base sm:text-lg">
            A Food Wastage Reduction App based on Django Python Application
          </h3>
          <p className="text-gray-400 text-sm sm:text-base mt-1">
            D. Manoj Kumar, R. Arthi, M. Gokulakrishnan, T. Praveen Kumar,
            S. Vejaysuriyaa
          </p>
          <p className="text-blue-500 text-sm sm:text-base mt-1">
            3rd Int. Conf. on Applied Artificial Intelligence and Computing
            (ICAAIC), IEEE, June 2024
          </p>
          <a
            href="https://ieeexplore.ieee.org/document/10575000"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-3 text-sm sm:text-base text-gray-300 hover:text-white transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            IEEE Xplore
          </a>
        </div>
      </div>
    ),
  },
  {
    title: "Leadership",
    id: "leadership",
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        {LEADERSHIP.map((item) => (
          <div
            key={item.title}
            className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1"
          >
            <h3 className="font-bold text-base sm:text-lg">{item.title}</h3>
            <p className="text-blue-500 text-sm sm:text-base">{item.dates}</p>
          </div>
        ))}
      </div>
    ),
  },
];

const AboutSection = () => {
  const [selectedTab, setSelectedTab] = useState("skills");

  const handleTabChange = (tabId) => {
    setSelectedTab(tabId);
  };

  const currentTab = TAB_DATA.find((tab) => tab.id === selectedTab);

  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-6 text-center">About Me</h2>
        <div className="text-center text-[#ADB7BE] max-w-3xl mx-auto mb-8 text-sm sm:text-base lg:text-lg space-y-4">
          <p>
            I&apos;m an MS Electrical and Computer Engineering student at USC,
            from Chennai, with a B.Tech in Electronics and Computer Engineering
            from SRM.
          </p>
          <p>
            I write the golden model and the test plan before the RTL. I
            understand the flow from spec to tapeout: RTL, verification,
            synthesis, DFT insertion, place and route, and timing closure. I
            ship with agentic AI coding workflows (Claude Code).
          </p>
          <p>
            It started with in-memory computing research at SRM, simulating
            RRAM crossbars and SRAM compute-in-memory circuits. That is where my
            interest in AI hardware came from.
          </p>
        </div>
        <div className="space-y-4 sm:space-y-6">
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {TAB_DATA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`inline-flex items-center gap-2 text-sm sm:text-base font-semibold py-2 px-4 rounded-lg transition-all duration-300 ${
                  selectedTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-300 hover:bg-gray-700/50"
                }`}
              >
                {tab.icon}
                {tab.title}
              </button>
            ))}
          </div>

          <div className="mt-6 sm:mt-8">{currentTab?.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
