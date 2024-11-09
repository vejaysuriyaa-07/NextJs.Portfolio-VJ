"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Food Wastage Reduction Website",
    description:
      "A platform connecting food donors with organizations to minimize food wastage and fight hunger.",
    image: "/images/FoodReduction.png",
    tag: ["All", "Web"],
    previewUrl: "https://foodwastagereduction.onrender.com",
  },
  {
    id: 2,
    title: "GO GET All-In-One Donation App",
    description:
      "A mobile and web app for streamlined donations, promoting accessibility and impactful giving.",
    image: "/images/Goget2.png",
    tag: ["All", "Web", "Mobile"],
    previewUrl: "https://goget-42tz.onrender.com",
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
            My Projects
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
              name="Web"
              isSelected={tag === "Web"}
            />
            <ProjectTag
              onClick={handleTagChange}
              name="Mobile"
              isSelected={tag === "Mobile"}
            />
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
                  transition={{ duration: 0.3, delay: index * 0.4 }}
                  className="w-full"
                >
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    imgUrl={project.image}
                    previewUrl={project.previewUrl}
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
                  Note:
                </span>
                These projects are hosted on free-tier servers and may take up to 50 seconds 
                to activate after periods of inactivity. Once live, all features work seamlessly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
