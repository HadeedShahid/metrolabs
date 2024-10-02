"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MetroIcon } from "@/icons";
import { motion } from "framer-motion";

export default function Faqs() {
  return (
    <>
      <motion.div
        className="absolute right-0 mr-40 mt-10 -z-10"
        animate={{ rotate: 360 }} // Rotate from 0 to 360 degrees
        transition={{
          repeat: Infinity, // Infinite loop
          duration: 15, // Duration of 10 seconds for each rotation
          ease: "linear", // Linear easing for smooth, constant speed
        }}
        style={{ display: "inline-block" }}
      >
        <MetroIcon />
      </motion.div>

      <div className="mt-36 flex flex-col gap-10 ">
        <h2 className="subtitle">Frequently asked questions (FAQs)</h2>
        <Accordion type="single" collapsible className="w-2/3 space-y-4 ">
          {faqsData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border rounded-lg"
            >
              <AccordionTrigger className="p-4">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4">
                {item.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

const faqsData = [
  {
    trigger: "Is it accessible?",
    content: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    trigger: "Is it open source?",
    content: "Yes. It is fully open source.",
  },
  {
    trigger: "Is it customizable?",
    content: "Yes. You can customize it as needed.",
  },
  {
    trigger: "Is it responsive?",
    content: "Yes. It is fully responsive.",
  },
];
