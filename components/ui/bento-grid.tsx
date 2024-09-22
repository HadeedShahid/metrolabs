import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn("grid md:grid-cols-8 gap-4 mx-auto", className)}>
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input justify-between flex flex-col space-y-4",
        className
      )}
    >
      {header}
      <div className="h-full w-full flex flex-col justify-between group-hover/bento:translate-x-2 transition duration-200">
        <div>
          <div className={cn("heading mb-2 mt-2")}>{title}</div>
          <div className={cn("body-base")}>{description}</div>
        </div>
        {icon}
      </div>
    </div>
  );
};
