import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import BookCall from "../bookCall";

const Navbar = () => {
  return (
    <div className="mx-auto w-full relative flex justify-center md:justify-between items-center">
      <Image
        src={"/coworthlogo.png"}
        alt="metro labs logo"
        width={191}
        height={51}
      />
      <div className="hidden md:flex justify-between items-center gap-x-6">
        <ul className="flex justify-between items-center gap-x-4 body-base">
          <li>Portfolio</li>
          <li>Careers</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <BookCall />
      </div>
    </div>
  );
};

export default Navbar;
