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
import { NavDock } from "@/components/navDock";
import Footer from "@/components/footer";
import Pricing from "@/components/pricing";
import OurTeamSection from "@/components/ourTeam";

const Home = () => {
  return (
    <div>
      {/* <NavDock /> */}
      <Navbar />
      <Hero />
      <HeroHighlight />
      <Services />
      <OurClients />
      <ExploreStacks />
      <Portfolio />
      <Pricing />
      <OurTeamSection/>
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
