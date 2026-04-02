"use client"; // Ensure this line is at the top for client-side rendering

import React, { useState } from "react";
import Image from "next/image";
import { Cpu, GraduationCap, Briefcase, Award } from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Cpu className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-blue-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            DFT & Test Engineering
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Scan insertion (full-scan)",
              "ATPG: D-Algorithm and PODEM",
              "Stuck-at fault modeling",
              "Parallel and deductive fault simulation",
              "Fault coverage analysis and reduced fault lists",
              "BIST with LFSR / MISR and SCOAP metrics",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-500 rounded-full mr-3 sm:mr-4" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-green-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Hardware / RTL
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Verilog",
              "SystemVerilog",
              "VHDL",
              "Arithmetic and memory block design",
              "Testbenches and verification",
              "Embedded systems fundamentals",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-green-500 rounded-full mr-3 sm:mr-4" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-yellow-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
            EDA & Tools
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Tessent (familiar)",
              "Cadence Virtuoso (schematic/layout/DRC/LVS)",
              "Synopsys Design Compiler",
              "PrimeTime (STA)",
              "ModelSim / Questa",
              "45nm GPDK and 28nm standard cell flows",
              "Linux and Git",
            ].map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-yellow-500 rounded-full mr-3 sm:mr-4" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-purple-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            Programming
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {["C", "C++", "Python", "MATLAB"].map((skill, index) => (
              <div
                key={index}
                className="flex items-center p-4 sm:p-6 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-sm sm:text-base lg:text-lg"
              >
                <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-purple-500 rounded-full mr-3 sm:mr-4" />
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
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
                src="/images/ECE-RGB-FH-GC-W.png"
                alt="USC Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                University of Southern California
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                M.S. in Computer Engineering
              </p>
              <p className="text-blue-500 text-sm sm:text-base">
                Aug 2025 - Present
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Coursework: MOS VLSI Circuit Design, VLSI System Design,
                Computer Systems Organization, Computer System Architecture
              </p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <div className="flex items-center">
            <div className="relative w-12 h-12 sm:w-16 sm:h-16 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src="/images/ZYPHER - BADGES - FINAL (1).png"
                alt="SRM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">
                SRM Institute of Science & Technology
              </h3>
              <p className="text-gray-400 text-sm sm:text-base">
                B.Tech in Electronics and Computer Engineering
              </p>
              <p className="text-blue-500 text-sm sm:text-base">
                Nov 2020 - May 2024
              </p>
              <p className="text-gray-400 text-sm sm:text-base mt-2">
                Coursework: Digital Logic Design, Microprocessors &
                Microcontrollers, Embedded Systems
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
        <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <h3 className="font-bold text-base sm:text-lg">
            Research Assistant, Embedded Systems & VLSI
          </h3>
          <p className="text-gray-400 text-sm sm:text-base">
            SRM Institute of Science & Technology | Jan 2025 - Jul 2025
          </p>
          <p className="text-blue-500 text-sm sm:text-base mt-1">
            Advisor: Prof. Mohanbabu A., M.E, Ph.D
          </p>
          <ul className="mt-4 space-y-2 text-sm sm:text-base text-gray-300 list-disc pl-5">
            <li>
              Optimized low-power VLSI and embedded prototype modules, with
              contributions across 3 hardware-focused prototypes.
            </li>
            <li>
              Designed 5 Verilog arithmetic and memory blocks including a 32-bit
              Wallace tree multiplier, Booth multiplier, and dual-port SRAM
              controller.
            </li>
            <li>
              Ran 12 schematic and layout simulations in Cadence Virtuoso using
              45nm GPDK, measuring timing, leakage, and power.
            </li>
            <li>
              Drove an 18% reduction in dynamic power for optimized designs and
              co-authored 2 internal research documents for publication support.
            </li>
          </ul>
        </div>
      </div>
    ),
  },
  {
    title: "Leadership & Service",
    id: "leadership",
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <h3 className="font-bold text-base sm:text-lg">
            ECE Senator, VGSA, USC
          </h3>
          <p className="text-blue-500 text-sm sm:text-base">
            2025 - 2026
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Elected graduate representative for the Electrical and Computer
            Engineering department at USC.
          </p>
        </div>

        <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <h3 className="font-bold text-base sm:text-lg">
            Best NSS Coordinator, SRM
          </h3>
          <p className="text-blue-500 text-sm sm:text-base">
            2023
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Led and coordinated 300+ student volunteers across health camps,
            donation drives, and public awareness initiatives.
          </p>
        </div>

        <div className="bg-gray-800/50 p-4 sm:p-5 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <h3 className="font-bold text-base sm:text-lg">
            Head Photographer, Camogenics Club
          </h3>
          <p className="text-blue-500 text-sm sm:text-base">
            2023 - 2024
          </p>
          <p className="text-gray-300 text-sm sm:text-base mt-2">
            Kept photography visible as a hobby while leading media coverage for
            20+ major campus events.
          </p>
        </div>
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
        <p className="text-center text-[#ADB7BE] max-w-3xl mx-auto mb-8 text-sm sm:text-base lg:text-lg">
          I build hardware-centric systems with emphasis on scan-based
          testability, ATPG algorithms, BIST architectures, RTL design,
          low-power circuit analysis, and physical design evaluation across
          benchmark and implementation flows.
        </p>
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
