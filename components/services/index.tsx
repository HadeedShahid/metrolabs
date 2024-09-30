"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconCloud,
  IconDeviceMobile,
  IconFileBroken,
  IconShoppingCart,
  IconSignature,
  IconTableColumn,
  IconUserCog,
} from "@tabler/icons-react";
import Image from "next/image";
// import { IconCrm } from "@/icons";

export default function Services() {
  return (
    <div className="flex flex-col gap-y-10">
      <h2 className="subtitle">Our Services</h2>
      <BentoGrid className="w-full mx-auto md:auto-rows-[20rem]">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            className={cn("[&>p:text-lg] p-10", item.className)}
            icon={item.icon}
            header={item.header}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

const items = [
  {
    title: "SAAS Development",
    description:
      "Scalable, secure, and efficient Software as a Service solutions.",
    className: "text-secondary md:col-span-3",
    icon: <IconCloud className="h-9 w-9 text-secondary" />,
  },
  {
    title: "CRM Solutions",
    description:
      "Custom CRMs to enhance customer relationships and operations.",
    className: "bg-secondary text-primary md:col-span-3",
    icon: <IconUserCog className="h-9 w-9 text-primary" />,
  },
  {
    title: "Mobile Apps",
    description: "Coming Soon",
    className: "relative bg-secondary text-primary md:row-span-2 col-span-2",
    header: (
      <Image
        src="/images/app-mockup.png"
        width="206"
        height="426"
        alt="app mockup"
        className="position absolute right-0 bottom-3"
      />
    ),
  },
  {
    title: "Ecommerce Platforms",
    description: "User-friendly online stores designed to drive sales.",
    className: "bg-secondary text-primary md:col-span-3",
    icon: <IconShoppingCart className="h-9 w-9 text-primary" />,
  },
  {
    title: "Classifieds & Marketplaces",
    description: "Develop thriving online communities and marketplaces.",
    className: "md:col-span-3",
    icon: <IconTableColumn className="h-9 w-9 text-secondary" />,
  },
];
