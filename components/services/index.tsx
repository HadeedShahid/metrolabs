"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconBoxAlignRightFilled,
  IconBuildings,
  IconClipboardCopy,
  IconCloud,
  IconDeviceDesktop,
  IconDeviceMobile,
  IconFileBroken,
  IconGavel,
  IconReportMoney,
  IconShoppingBag,
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
      <h2 className="subtitle">Designs That Work for Your Business</h2>
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
    title: "Tech & SaaS Companies",
    description:
      "We build scalable, modern websites that highlight your innovation and convert visitors into users.",
    className: "text-secondary md:col-span-3",
    icon: <IconDeviceDesktop className="h-9 w-9 text-secondary" />,
  },
  {
    title: "For Finance & Accountants",
    description:
      "Simplify client onboarding and showcase your financial expertise with sleek, user-friendly designs tailored for trust and accuracy.",
    className: "bg-secondary text-primary md:col-span-3",
    icon: <IconReportMoney className="h-9 w-9 text-primary" />,
  },
  {
    icon: <IconShoppingBag className="h-9 w-9 text-primary" />,
    title: "For Retail",
    description: "From showcasing products to driving conversions",
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
    title: "For Lawyers",
    description:
      "Your clients want confidence and clarity. We build websites that reflect your expertise and make it easy for clients to connect.",
    className: "bg-secondary text-primary md:col-span-3",
    icon: <IconGavel className="h-9 w-9 text-primary" />,
  },
  {
    title: "For Real Estate",
    description:
      "Make a lasting impression with websites that are visually stunning and designed to attract buyers and sellers alike.",
    className: "md:col-span-3",
    icon: <IconBuildings className="h-9 w-9 text-secondary" />,
  },
];
