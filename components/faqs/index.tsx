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
      <div className="mt-36 flex flex-col gap-10 w-full">
        <h2 className="subtitle">Frequently asked questions (FAQs)</h2>
        <Accordion
          type="single"
          collapsible
          className="w-full md:w-2/3 space-y-4"
        >
          {faqsData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index + 1}`}
              className="border rounded-lg"
            >
              <AccordionTrigger className="p-4">
                {item.trigger}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-left">
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
    trigger:
      "What services does QuickSites provide for web and software development?",
    content:
      "QuickSites specializes in custom web development, software solutions, UI/UX design, CRMs, eCommerce platforms, and SaaS development. We offer tailored solutions for businesses looking to scale their digital presence.",
  },
  {
    trigger: "How can I get an instant project quote from QuickSites?",
    content:
      "Our website features an easy-to-use quote calculator that provides instant project estimates. Simply input details such as project type, design, development level, and platform to receive an accurate cost estimate.",
  },
  {
    trigger:
      "What is the process for designing and developing a custom website or app?",
    content:
      "QuickSites follows a comprehensive process, starting with understanding your requirements, followed by designing, developing, and testing your web or software solution. We offer full customization based on your business needs.",
  },
  {
    trigger: "How does QuickSites ensure responsive and user-friendly designs?",
    content:
      "Our design team creates fully responsive websites and apps that deliver a seamless user experience across all devices. We focus on user-centered design principles to ensure optimal usability and engagement.",
  },
  {
    trigger: "Does QuickSites provide ongoing support and maintenance?",
    content:
      "Yes, QuickSites offers maintenance and support packages to ensure your website or app remains secure, up-to-date, and performs optimally. You can select a support plan during the project estimation process.",
  },
  {
    trigger:
      "Can QuickSites redesign my existing website for better performance?",
    content:
      "Absolutely! We specialize in redesigning and enhancing existing websites to improve their functionality, user experience, and overall performance. Contact us to discuss how we can upgrade your current site.",
  },
];
