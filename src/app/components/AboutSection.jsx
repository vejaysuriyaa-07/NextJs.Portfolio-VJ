"use client"; // Ensure this line is at the top for client-side rendering

import React, { useState } from "react";
import Image from "next/image";
import { Code2, GraduationCap, Award, ChevronRight } from "lucide-react";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    icon: <Code2 className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-6">
        {/* Frontend Skills */}
        <div>
          <h3 className="text-blue-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
            Frontend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "HTML5 & CSS3",
              "Bootstrap",
              "Tailwind CSS",
              "React JS",
              "Next JS",
              "TypeScript",
              "JavaScript",
              
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

        {/* Backend Skills */}
        <div>
          <h3 className="text-green-500 font-semibold mb-3 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            Backend Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              "Python",
              "Django",
              "PHP",
              "MySQL",
              "Node.js",
              "MongoDB",
             
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
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src="/images/logo-removebg-preview.png"
                alt="SBOA Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">SBOA Matric Higher Secondary School</h3>
              <p className="text-gray-400 text-sm sm:text-base">Graduated 2020</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-800/50 p-3 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300">
          <div className="flex items-center">
            <div className="relative w-8 h-8 sm:w-12 sm:h-12 mr-3 sm:mr-4 flex-shrink-0">
              <Image
                src="/images/ZYPHER - BADGES - FINAL (1).png"
                alt="SRM Logo"
                fill
                className="object-contain"
              />
            </div>
            <div>
              <h3 className="font-bold text-base sm:text-lg">SRM University</h3>
              <p className="text-gray-400 text-sm sm:text-base">B.Tech in Electronics and Computer Engineering</p>
              <p className="text-blue-500 text-sm sm:text-base">Class of 2024</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    icon: <Award className="w-4 h-4 sm:w-5 sm:h-5" />,
    content: (
      <div className="space-y-3 sm:space-y-4">
        {[
          {
            title: "Python with Data Structures",
            issuer: "Spryntas Software Solutions, Chennai",
            type: "Training Program",
          },
          {
            title: "IOI using Smart Devices",
            issuer: "TVS Training and Services Ltd.",
            type: "Value-Added Course",
          },
          {
            title: "Government of India NSS Certificate",
            issuer: "National Service Scheme",
            type: "Achievement",
          },
          {
            title: "Certificate of Appreciation",
            issuer: "Volunteer for India, supported by UNICEF",
            type: "Recognition",
          },
        ].map((cert, index) => (
          <div
            key={index}
            className="bg-gray-800/50 p-3 sm:p-4 rounded-lg hover:bg-gray-700/50 transition-all duration-300"
          >
            <h3 className="font-bold text-base sm:text-lg">{cert.title}</h3>
            <p className="text-gray-400 text-sm sm:text-base">{cert.issuer}</p>
            <span className="inline-block mt-2 text-xs sm:text-sm bg-blue-500/20 text-blue-400 px-2 py-1 rounded">
              {cert.type}
            </span>
          </div>
        ))}

        <a
          href="https://drive.google.com/drive/folders/1-IuETGWUYxsxBwatkSqJA8935n3QqiN2?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 sm:gap-2 mt-4 text-sm sm:text-base text-blue-500 hover:text-blue-400 transition-colors"
        >
          View All Certifications
          <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4" />
        </a>
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
        <div className="space-y-4 sm:space-y-6">
          <div className="flex justify-center gap-6">
            {TAB_DATA.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`text-sm sm:text-base font-semibold py-2 px-4 rounded-lg ${
                  selectedTab === tab.id
                    ? "bg-blue-500 text-white"
                    : "text-gray-500 hover:bg-gray-700/50"
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
