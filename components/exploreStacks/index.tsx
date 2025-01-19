import {
  IconRocket,
  IconBusiness,
  IconEnterprise,
  IconStack,
  IconNextjs,
  IconReactjs,
  IconFigma,
  IconJavascript,
  IconTypescript,
  IconTailwind,
  IconFramer,
  IconRedux,
  IconGraphql,
  IconSass,
  IconSupabase,
  IconPrisma,
  IconMysql,
  IconPostgres,
  IconMongodb,
  IconNodejs,
  IconFirebase,
  IconPython,
  IconHtml,
  IconCss,
  IconAlgolia,
  IconBootstrap,
  IconAntd,
  IconChakraui,
  Iconi18next,
  IconShadcn,
  IconZod,
} from "@/icons";
import React from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";
import Image from "next/image";

const ExploreStacks = () => {
  return (
    <div className="mt-48 min-h-[530px]">
      <div className="absolute w-full left-0 right-0 bg-secondary py-16">
        <div className="max-w-7xl mx-auto flex flex-col gap-3.5 mb-10 px-8">
          <IconStack />
          <h2 className="subtitle text-primary">Explore our Stacks</h2>
        </div>
        <InfiniteMovingCards
          items={testimonials}
          direction="left"
          speed="slow"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

const testimonials = [
  {
    name: "Next.js",
    logo: <IconNextjs />,
  },
  {
    name: "React.js",
    logo: <IconReactjs />,
  },
  {
    name: "Figma",
    logo: <IconFigma />,
  },
  {
    name: "JavaScript",
    logo: <IconJavascript />,
  },
  {
    name: "TypeScript",
    logo: <IconTypescript />,
  },
  {
    name: "Tailwind CSS",
    logo: <IconTailwind />,
  },
  {
    name: "Framer",
    logo: <IconFramer />,
  },
  {
    name: "Redux",
    logo: <IconRedux />,
  },
  {
    name: "GraphQL",
    logo: <IconGraphql />,
  },
  {
    name: "Sass",
    logo: <IconSass />,
  },
  {
    name: "Supabase",
    logo: <IconSupabase />,
  },
  {
    name: "Prisma",
    logo: <IconPrisma />,
  },
  {
    name: "MySQL",
    logo: <IconMysql />,
  },
  {
    name: "PostgreSQL",
    logo: <IconPostgres />,
  },
  {
    name: "MongoDB",
    logo: <IconMongodb />,
  },
  {
    name: "Node.js",
    logo: <IconNodejs />,
  },
  {
    name: "Firebase",
    logo: <IconFirebase />,
  },
  {
    name: "Python",
    logo: <IconPython />,
  },
  {
    name: "HTML",
    logo: <IconHtml />,
  },
  {
    name: "CSS",
    logo: <IconCss />,
  },
  {
    name: "Algolia",
    logo: <IconAlgolia />,
  },
  {
    name: "Bootstrap",
    logo: <IconBootstrap />,
  },
  {
    name: "Ant Design",
    logo: <IconAntd />,
  },
  {
    name: "Chakra UI",
    logo: <IconChakraui />,
  },
  {
    name: "i18next",
    logo: <Iconi18next />,
  },
  {
    name: "Shadcn",
    logo: <IconShadcn />,
  },
  {
    name: "Zod",
    logo: <IconZod />,
  },
];

export default ExploreStacks;
