"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const useAnimatedNumber = (targetValue, duration) => {
  const [currentValue, setCurrentValue] = useState(0);

  useEffect(() => {
    const startTime = Date.now();
    
    const animate = () => {
      const currentTime = Date.now();
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      const easeOut = (t) => 1 - Math.pow(1 - t, 3);
      const currentNumber = Math.floor(easeOut(progress) * targetValue);
      
      setCurrentValue(currentNumber);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
    
    return () => setCurrentValue(0);
  }, [targetValue, duration]);

  return currentValue;
};

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
          {achievementsList.map((achievement, index) => {
            const animatedValue = useAnimatedNumber(achievement.value, 2000);

            return (
              <div
                key={index}
                className="bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-300 text-center"
              >
                <div className="text-3xl font-bold text-yellow-500">
                  {achievement.prefix && <span>{achievement.prefix}</span>}
                  {animatedValue}
                  {achievement.postfix && <span>{achievement.postfix}</span>}
                </div>
                <h4 className="mt-2 text-lg font-semibold text-white">
                  {achievement.metric}
                </h4>
                <p className="mt-2 text-sm sm:text-base text-gray-400">
                  {achievement.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
