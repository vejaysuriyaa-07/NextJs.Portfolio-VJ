"use client";
import React from "react";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Fault Coverage",
      value: 95,
      postfix: "%+",
      description:
        "Achieved 95%+ stuck-at fault coverage on ISCAS-85 benchmark circuits including c432 and c880 in a custom ATPG flow."
    },
    {
      metric: "Prototype Modules",
      value: 3,
      description:
        "Contributed to 3 low-power VLSI and embedded prototype modules during research work at SRM."
    },
    {
      metric: "Dynamic Power Reduction",
      value: 18,
      postfix: "%",
      description:
        "Reduced dynamic power by 18% through schematic-level and layout-driven optimization in 45nm Cadence Virtuoso studies."
    },
    {
      metric: "Timing Closure",
      value: 0.2,
      prefix: "+",
      postfix: " ns",
      description:
        "Improved worst-case slack from -0.8 ns to +0.2 ns in a 28nm RTL-to-GDSII physical design flow at 150 MHz."
    },
    {
      metric: "Student Volunteers Led",
      value: 300,
      postfix: "+",
      description:
        "Coordinated 300+ volunteers through NSS initiatives spanning health camps, donation drives, and awareness programs."
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
