"use client";
import Image from "next/image";
import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "@/hooks/use-outside-click";
import { IconBuildingArch, IconBuildings } from "@tabler/icons-react";
import { IconBusiness, IconEnterprise, IconRocket } from "@/icons";
import Link from "next/link";
import BookCall from "../bookCall";

export default function OurClients() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const id = useId();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <div className="flex flex-col gap-10">
      <h2 className="subtitle mt-52">Types of Clients</h2>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <div className="flex justify-between items-start p-8">
                <div className="flex flex-col justify-between gap-4">
                  <div className="flex flex-col gap-4">
                    <motion.div layoutId={`image-${active.title}-${id}`}>
                      {active.icon}
                    </motion.div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="heading"
                    >
                      {active.title}
                    </motion.h3>
                  </div>

                  <motion.p
                    layoutId={`description-${active.description}-${id}`}
                    className="text-base"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.p>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="w-full grid grid-cols-3 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-6 h-72 flex flex-col border border-gray-300  hover:bg-neutral-50 rounded-xl cursor-pointer"
          >
            <div className="flex flex-col justify-between w-full h-full body-base">
              <div className="flex gap-6 flex-col w-full">
                <motion.div layoutId={`image-${card.title}-${id}`}>
                  {card.icon}
                </motion.div>
                <div className="flex justify-center items-start flex-col gap-2.5">
                  <motion.h3
                    layoutId={`title-${card.title}-${id}`}
                    className="heading text-center md:text-left"
                  >
                    {card.title}
                  </motion.h3>
                  <motion.p
                    layoutId={`description-${card.description}-${id}`}
                    className="text-center md:text-left bosy-base"
                  >
                    {card.description}
                  </motion.p>
                </div>
              </div>
              <div className="text-right">Learn more</div>
            </div>
          </motion.div>
        ))}
      </ul>
    </div>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description:
      "We help early-stage startups launch, grow, and secure funding.",
    title: "Startups",
    src: "https://assets.aceternity.com/demos/lana-del-rey.jpeg",
    ctaText: "Learn more",
    ctaLink: "https://ui.aceternity.com/templates",
    icon: <IconRocket />,
    content: () => {
      return (
        <div>
          <p>
            Startups are the driving force of innovation. We collaborate with
            entrepreneurs to turn ideas into reality, focusing on building{" "}
            <strong>Minimum Viable Products (MVPs)</strong>
            that help you enter the market quickly and efficiently.
          </p>
          <br></br>
          <p>
            Our <strong>agile development process</strong> ensures you are
            always moving forward.
          </p>
          <br></br>
          <p>
            Whether you’re at the ideation stage or ready to scale, our team
            provides the <strong>technical expertise</strong> and strategic
            guidance you need to grow.
          </p>
        </div>
      );
    },
  },
  {
    description:
      "We empower established businesses to deliver value faster, using innovative and scalable technology solutions.",
    title: "Businesses",
    src: "https://assets.aceternity.com/demos/babbu-maan.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    icon: <IconBusiness />,
    content: () => {
      return (
        <div>
          <p>
            Businesses thrive on operational efficiency and growth. We work with
            you to optimize your processes and create{" "}
            <strong>custom solutions</strong> that address your unique
            challenges, helping you scale smoothly and sustainably.
          </p>
          <br></br>
          <p>
            Our <strong>agile development approach</strong> enables quick
            adaptation to your changing business needs, ensuring continuous
            improvement.
          </p>
          <br></br>
          <p>
            Whether it's improving existing systems or building new platforms,
            we offer the <strong>technical expertise</strong> and strategic
            support to drive your business forward.
          </p>
        </div>
      );
    },
  },

  {
    description:
      "We provide comprehensive services to large enterprises, enabling them to stay ahead in the competitive market.",
    title: "Enterprises",
    src: "https://assets.aceternity.com/demos/metallica.jpeg",
    ctaText: "Visit",
    ctaLink: "https://ui.aceternity.com/templates",
    icon: <IconEnterprise />,
    content: () => {
      return (
        <div>
          <p>
            Enterprises require robust, scalable solutions to manage complex
            operations and drive growth. We specialize in delivering{" "}
            <strong>enterprise-grade systems</strong> that support your
            large-scale needs while maintaining flexibility for future
            innovation.
          </p>
          <br></br>
          <p>
            With our <strong>agile methodology</strong>, we ensure your
            organization stays competitive by continuously refining your digital
            infrastructure.
          </p>
          <br></br>
          <p>
            From optimizing existing systems to creating{" "}
            <strong>customized enterprise solutions</strong>, our team brings
            the <strong>technical expertise</strong>
            and strategic foresight to help you succeed in a dynamic market.
          </p>
        </div>
      );
    },
  },
];
