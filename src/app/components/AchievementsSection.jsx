"use client";
import React from "react";
import { motion } from "framer-motion";

const AchievementsSection = () => {
  const achievementsList = [
    {
      metric: "Impactful Projects",
      value: 2,
      description:
        "Contributed to the development of two full-stack applications addressing social causes, integrating scalable technology for community impact."
    },
    {
      prefix: "~",
      metric: "Volunteer Hours",
      value: 1000,
      description:
        "Contributed to non-profit initiatives through extensive volunteer work, creating meaningful change."
    },
    {
      metric: "Workshops",
      value: 10,
      postfix: "+",
      description:
        "Organized and led technical workshops to empower peers with skills in web and app development."
    },
    {
      metric: "Freelance Experience",
      value: 6,
      postfix: "+ Months",
      description:
        "Collaborated with clients to deliver tailored web solutions, balancing creativity and technical execution."
    }
  ];

  return (
    <section id="achievements" className="py-16">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
