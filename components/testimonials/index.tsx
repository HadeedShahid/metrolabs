import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "Hadeed was a joy to work with, he is proactive and communicated everything with us in a clear and understanding manner. He really understood the project and the vision well and completed the work to a high standard - we would love to work with again in the future!",
      name: "Brendan Taylor",
      designation: "Co-Founder - EduBridge Tutoring",
      src: "/images/edubridge.png",
    },
    {
      quote:
        "Hadeed is exceptional at quickly understanding the requirements of a task and rapidly getting up to speed.",
      name: "Imran Husain",
      designation: "Founder - Chef's Door",
      src: "/images/chefsdoor.png",
    },
    {
      quote:
        "Highly recommend, completed exactly as requested ahead of schedule.",
      name: "Thomas Garske",
      designation: "Founder - Sprinkle",
      src: "/images/sprinkle.png",
    },
    {
      quote:
        "Hadeed is a very experienced ui/ux designer. He helped us redesign our website and he gave suggestions which my team liked. He understood what we wanted from the start. Will definitely work with him again.",
      name: "Hiren Gangaramani",
      designation: "Business Consultant - Cosmos Star Consultants",
      src: "/images/cosmos.png",
    },
  ];
  return <AnimatedTestimonials testimonials={testimonials} />;
}
