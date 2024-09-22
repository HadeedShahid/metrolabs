import React from "react";
import Navbar from "../components/navbar";
// import Hero from "../components/hero";
import { Button } from "@/components/ui/button";
import Services from "@/components/services";
import OurClients from "@/components/ourClients";
import ExploreStacks from "@/components/exploreStacks";
import { Portfolio } from "@/components/portfolio";
import Faqs from "@/components/faqs";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import Hero from "@/components/hero";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeroHighlight />
      <Services />
      <OurClients />
      <ExploreStacks />
      <Portfolio />
      <Faqs />
    </div>
  );
};

export default Home;
