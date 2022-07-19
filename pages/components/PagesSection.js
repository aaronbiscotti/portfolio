import React from "react";
import PagesCard from "./PagesCard";

const CardData = [
  {
    title: "Work",
    desc: "I've worked with School Simplified, Tech Kids Unlimited, & more",
  },
  {
    title: "Hobbies",
    desc: "I'm a 3-time hackathon winner with an appetite for innovation",
  },
  {
    title: "Pizza",
    desc: "My very first love. If you don't like pizza, are you even living, bro?",
  },
];

const PagesSection = () => {
  return (
    <div className="flex space-x-5 mt-[100px] justify-between">
      {CardData.map((item) => (
        <PagesCard title={item.title} desc={item.desc} />
      ))}
    </div>
  );
};

export default PagesSection;
