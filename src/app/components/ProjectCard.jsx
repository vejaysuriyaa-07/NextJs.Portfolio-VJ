import React from "react";

const ProjectCard = ({ title, description }) => {
  return (
    <div className="h-full rounded-xl border border-slate-700 bg-[#151515] p-6 sm:p-7 transition-all duration-300 hover:border-slate-500 hover:bg-[#1a1a1a]">
      <h5 className="text-white text-xl font-semibold mb-3">{title}</h5>
      <p className="text-[#ADB7BE] text-sm sm:text-base leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default ProjectCard;
