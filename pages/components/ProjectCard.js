import React from "react";
import Project1 from "../../assets/project1.png";
import Image from "next/image";
import { ExternalLink } from "tabler-icons-react";
const ProjectCard = (props) => {
  return (
    <div className="relative flex items-center">
      <div className="absolute left-0 z-10 w-[50%] flex flex-col justify-center space-y-5">
        <h1 className="text-[25px]">We Care Act NYC</h1>
        <div className="h-[150px] w-[500px] rounded border p-5 text-sm font-[200] bg-[#111111]">
          {props.desc}
        </div>
        <div className="flex space-x-5 font-[100] text-[13px]">
          {props.languages.map((item) => (
            <p>{item}</p>
          ))}
        </div>
        <a href="https://www.wecareactnyc.org/" target="_blank">
          <ExternalLink strokeWidth={1} />
        </a>
      </div>
      <div className="w-[60%] absolute right-0 rounded object-cover">
        <Image src={Project1} className="object-cover w-[60%] rounded-[15px]" />
      </div>
    </div>
  );
};

export default ProjectCard;
