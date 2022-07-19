import React from "react";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div className="h-[100rem] mt-[100px] w-[80rem] m-auto p-20">
      <div className="flex justify-center text-[35px] mb-[200px]">
        FEATURED PROJECTS
      </div>
      <ProjectCard
        desc="We Care Act NYC is a non-profit chapter dedicated to helping
          underprivileged students gain an equal footing in their education by
          providing them with electronic devices, skills in digital literacy,
          and coding experience."
        languages={["JavaScript", "HTML", "CSS", "Bootstrap"]}
      />
    </div>
  );
};

export default Projects;
