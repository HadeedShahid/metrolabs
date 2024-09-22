import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <div className="relative flex justify-between items-center">
      <Image
        src={"/metrolabslogo.svg"}
        alt="metro labs logo"
        width={191}
        height={51}
      />
      <div className="flex justify-between items-center gap-x-6">
        <ul className="flex justify-between items-center gap-x-4 body-base">
          <li>Portfolio</li>
          <li>Careers</li>
          <li>Pricing</li>
          <li>Contact</li>
        </ul>
        <Button variant={"secondary"}>Book a Call</Button>
      </div>
    </div>
  );
};

export default Navbar;
