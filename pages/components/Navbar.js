import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="z-[100] bg-gradient-to-r from-cyan-500 to-blue-500 w-full absolute top-0 left-0 h-1 sticky" />
      <div className="navbar z-[99] border-b-[1px] border-[#242424] sticky top-0 left-0 w-full py-4 px-10 flex justify-between items-center">
        <h1>Logo</h1>
        <ul className="flex space-x-1 text-[#b1b1b1]">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
