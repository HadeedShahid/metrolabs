import { cn } from "@/lib/utils";
import React from "react";

export const HeroHighlight = ({
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "absolute h-[42rem] md:h-screen w-full group top-0 left-0 -z-10",
        containerClassName
      )}
    >
      <div className="absolute inset-0 bg-dot-thick-neutral-200" />
    </div>
  );
};
