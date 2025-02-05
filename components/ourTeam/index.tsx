import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Facebook, Twitter, Linkedin } from "lucide-react";
import {
  IconBrandLinkedin,
  IconBrandUpwork,
  IconBrandX,
} from "@tabler/icons-react";

const teamMembers = [
  {
    name: "Hadeed",
    designation: "Founder",
    description:
      "Hadeed has been leading our company with vision and passion for over a decade.",
    image: "/images/hadeed.png",
    socials: {
      upwork: "https://facebook.com/janedoe",
      twitter: "https://twitter.com/janedoe",
      linkedin: "https://linkedin.com/in/janedoe",
    },
  },
  {
    name: "Safwan",
    designation: "UX designer & developer",
    description:
      "Safwan brings 15 years of tech expertise to drive our innovation forward.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "https://twitter.com/johnsmith",
      linkedin: "https://linkedin.com/in/johnsmith",
    },
  },
  {
    name: "Hamdoon",
    designation: "UX designer & developer",
    description:
      "Hamdoon creative vision shapes the aesthetic of all our products.",
    image: "/placeholder.svg?height=400&width=400",
    socials: {
      twitter: "https://twitter.com/emilybrown",
      linkedin: "https://linkedin.com/in/emilybrown",
    },
  },
];

export default function OurTeam() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Our Team
          </h2>
          <p className="max-w-[900px] text-zinc-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-zinc-400">
            Meet the passionate individuals driving our success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mt-12">
          {teamMembers.map((member, index) => (
            <Card key={index} className="overflow-hidden border-none">
              <CardContent className="p-0">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover"
                />
                <div className="py-6 text-left">
                  <h3 className="text-2xl font-semibold">{member.name}</h3>
                  <p className="text-sm text-zinc-500">{member.designation}</p>
                  <p className="mt-2 text-zinc-600">{member.description}</p>
                  <div className="flex space-x-4 mt-4">
                    <a
                      href={member.socials.upwork}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                    >
                      <IconBrandUpwork className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socials.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                    >
                      <IconBrandX className="h-5 w-5" />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-500 hover:text-zinc-600 dark:text-zinc-400 dark:hover:text-zinc-300"
                    >
                      <IconBrandLinkedin className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
