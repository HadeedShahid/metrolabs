import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandX,
} from "@tabler/icons-react";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-48 mb-8 flex flex-col gap-6 justify-center items-center">
      <Image
        src={"/metrolabslogo.svg"}
        alt="metro labs logo"
        width={221}
        height={81}
      />
      <div className="flex gap-4">
        <IconBrandInstagram className="w-8 h-8" />
        <IconBrandLinkedin className="w-8 h-8" />
        <IconBrandX className="w-8 h-8" />
        <IconBrandUpwork className="w-8 h-8" />
      </div>
    </div>
  );
};

export default Footer;
