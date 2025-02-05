
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Pricing() {

  const plans = [
    {
      name: "Custom Web Design",
      description: "4-6 weeks",
      price: 3000,
      features: ["Strategy & design PDF", "Figma mockup", "Custom website build", "SEO optimization", "Mobile optimization", "Launch support"],
      recommended: false,
    },
    {
      name: "Website in a Day",
      description: "1 day",
      min: 1500,
      max: 2000,
      discount: 20,
      features: [
        "5 core pages",
        "Template-based design",
        "Set features",
        "Logo design",
        "Font selection",
        "Font selection",
        "Color scheme"
      ],
    },
    {
      name: "Website Audit",
      description: "1-2 hours",
      min: 100,
      max: 1000,
      features: [
        "Performance analysis",
        "Conversion optimization",
        "Content strategy review",
        "SEO assessment",
        "Accessibility review",
        "Mobile optimization check",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="py-24 w-full">
      <div className="mx-auto max-w-7xl px-6 flex flex-col gap-y-4  lg:px-8">
        <div className="mx-auto flex flex-col gap-y-6 max-w-2xl text-center">
          <h2 className="subtitle">Pricing plans</h2>
          <p>
           {" Get the website you need without breaking the bank. Our pricing is clear, competitive, and tailored to fit your goals, whether you're just starting or scaling up."}
          </p>
        </div>
        <div className="isolate mx-auto w-full mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.recommended ? "ring-2 ring-teal-400" : "bg-background"
              }`}
            >
<h3 className="text-lg font-semibold leading-8">
                  {plan.name}
                </h3>
              <p className=" text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>
                
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">
                  {plan.min ? `$${plan.min + "-" + plan.max}` :  `$${plan.price}`}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground"></span>
              </p>
              {plan.discount && (
                <div className="mt-2">
                  <span className="text-white inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-2.5 py-1 text-xs font-semibold ">
                    Save {plan.discount}%
                  </span>
                </div>
              )}
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={"primary"}
              >
                Get started
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
