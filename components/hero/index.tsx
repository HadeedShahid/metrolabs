import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative bg-transparent flex flex-col justify-center h-screen text-center gap-y-12">
      <div className="flex flex-col max-w-2xl mx-auto gap-y-5">
        <h1 className="title-hero">Ideate. Build. Ship.</h1>
        <h2 className="desc-hero">
          Metro Labs is a design and development agency, collaborating with
          startups and businesses worldwide
        </h2>
      </div>

      <div className="flex flex-row gap-x-4 mx-auto">
        <Button>Get a Quote</Button>
        <Button variant={"secondary"}>Book a Call</Button>
      </div>
    </div>
  );
};

export default Hero;
