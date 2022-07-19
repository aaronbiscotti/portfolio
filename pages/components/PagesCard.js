import React from "react";
import { ArrowUpRight } from "tabler-icons-react";

const PagesCard = (props) => {
  return (
    <div className="h-[100px] w-[340px] hover:scale-[1.02] cursor-pointer">
      <div className="flex space-x-2 items-center">
        <ArrowUpRight />
        <h1 className="uppercase">{props.title}</h1>
        <div className="w-[20px] h-[0.5px] bg-white" />
      </div>
      <h1 className="font-[200] mt-2">{props.desc}</h1>
    </div>
  );
};

export default PagesCard;
