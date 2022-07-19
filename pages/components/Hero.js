import React from "react";
import PagesSection from "./PagesSection";

const Hero = () => {
  return (
    <div className="w-[80rem] m-auto p-20">
      <h1 className="text-[60px]">
        Hi. I'm Aaron, a high school senior and web-developer based in New York
        City.
      </h1>
      <p className="font-[200] text-[#b1b1b1] mt-[50px] text-lg leading-loose">
        I’m Dale-Anthony, a UK based product designer with over ten years of
        experience. I specialise in interface design for mobile and web-based
        applications with a focus on simplicity & usability. I’m currently
        working at Delicious Brains on some of the worlds best WordPress
        products. Before that, I worked at BaseKit where I helped shape the
        future of website builders and tools to help small businesses thrive
        online. I also build tools like Design Vault and Does.Design.
      </p>
      <PagesSection />
    </div>
  );
};

export default Hero;
