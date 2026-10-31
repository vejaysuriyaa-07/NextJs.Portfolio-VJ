"use client";
import React from "react";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Minimum Stuck-at Coverage",
      value: 97.37,
      postfix: "%",
      description:
        "97.37 to 100% across 6 ISCAS-85 circuits, from a C++17 D-Algorithm ATPG engine with SCOAP heuristics."
    },
    {
      metric: "c432 Coverage with TPI",
      value: 99.87,
      postfix: "%",
      description:
        "Up from 98.36% with 4 control points at 6.9% estimated area overhead, using 1,000 LFSR patterns per seed."
    },
    {
      metric: "ecoRoute Baseline on AES",
      value: 15.8,
      postfix: "%",
      description:
        "Fewer DRC violations (57 to 48) in 111 s, touching 1.65% of nets: the baseline the RL agent must beat."
    },
    {
      metric: "AES Violations KLayout Missed",
      value: 82,
      postfix: "%",
      description:
        "Including all 47 shorts, so the RL agent's reward uses Innovus counts instead."
    },
    {
      metric: "RTL Live on the Marketplace",
      value: "0.5.1",
      prefix: "v",
      description:
        "Open-source VS Code extension that renders a live Verilog schematic on every edit."
    }
  ];

  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6">
          {achievementsList.map((achievement, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="text-3xl font-bold text-yellow-500">
                {achievement.prefix && <span>{achievement.prefix}</span>}
                {achievement.value}
                {achievement.postfix && <span>{achievement.postfix}</span>}
              </div>
              <h4 className="mt-2 text-lg font-semibold text-white">
                {achievement.metric}
              </h4>
              <p className="mt-2 text-sm sm:text-base text-gray-400">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
