import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-center h-screen text-center gap-y-12">
      <div className="flex flex-col gap-y-5">
        <h1>Ideate. Build. Ship.</h1>
        <h2>
          Metro Labs is a design and development agency, collaborating with
          startups and businesses worldwide
        </h2>
      </div>

      <div className="flex flex-row gap-x-4 mx-auto">
        <Button>Get a Quote</Button>
        <Button>Book a Call</Button>
      </div>
    </div>
  );
};

export default Hero;
