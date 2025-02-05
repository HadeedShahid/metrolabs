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
import { AnimatedTestimonialsDemo } from "@/components/testimonials";

const Home = () => {
  return (
    <div className="flex flex-col justify-between items-center md:items-baseline gap-y-32 md:gap-0">
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
      <AnimatedTestimonialsDemo/>
      <Faqs />
      <Footer />
    </div>
  );
};

export default Home;
