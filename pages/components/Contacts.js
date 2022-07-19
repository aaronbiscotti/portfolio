import Link from "next/link";
import React from "react";
import { BrandGithub, BrandLinkedin, Mail } from "tabler-icons-react";

const Contacts = () => {
  return (
    <div className="h-[250px] w-[80px] fixed left-10">
      <ul className="flex flex-col space-y-5">
        <Link href="https://github.com/aaronbiscotti">
          <a>
            <BrandGithub />
          </a>
        </Link>
        <Link href="/">
          <a>
            <BrandLinkedin />
          </a>
        </Link>
        <Link href="/">
          <a>
            <Mail />
          </a>
        </Link>
      </ul>
    </div>
  );
};

export default Contacts;
