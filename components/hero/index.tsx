import React from "react";
import { Button } from "../ui/button";
import BookCall from "../bookCall";
import GetQoute from "../getQoute";
const Hero = () => {
  return (
    <div className="relative bg-transparent flex flex-col justify-center h-screen text-left gap-y-12">
      <div className="flex flex-col max-w-5xl gap-y-5">
        <h1 className="title-hero">Websites Built to Grow Your Business</h1>
        <h2 className="desc-hero max-w-4xl">
          We build websites that tackle your challenges head-on. From boosting
          leads to streamlining user journeys, we design solutions that work as
          hard as you do.
        </h2>
      </div>

      <div className="flex flex-row gap-x-4">
        <GetQoute />
        <BookCall />
      </div>
    </div>
  );
};

export default Hero;
