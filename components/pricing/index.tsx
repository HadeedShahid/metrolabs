"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Basic",
      description: "Essential features you need to get started",
      monthlyPrice: 29,
      yearlyPrice: 290,
      features: ["100 AI generations", "Basic support", "Access to community"],
      recommended: false,
    },
    {
      name: "Pro",
      description: "Essential features you need to get started",
      monthlyPrice: 79,
      yearlyPrice: 790,
      features: [
        "Unlimited AI generations",
        "Priority support",
        "Advanced analytics",
        "API access",
      ],
      recommended: true,
    },
    {
      name: "Enterprise",
      description: "Essential features you need to get started",
      monthlyPrice: 199,
      yearlyPrice: 1990,
      features: [
        "Custom AI model",
        "Dedicated account manager",
        "SLA",
        "Custom integrations",
      ],
      recommended: false,
    },
  ];

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="subtitle">Pricing plans</h2>
          <p>
            Get the website you need without breaking the bank. Our pricing is
            clear, competitive, and tailored to fit your goals, whether you're
            just starting or scaling up.
          </p>
        </div>
        <div className="mt-6 flex items-center justify-center gap-x-4">
          <span className="text-sm font-semibold leading-6 text-primary">
            Monthly
          </span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-primary"
          />
          <span className="text-sm font-semibold leading-6 text-primary">
            Yearly
          </span>
        </div>
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.recommended ? "ring-2 ring-teal-400" : "bg-background"
              }`}
            >
              <div className="flex items-center justify-between gap-x-4">
                <h3 className="text-lg font-semibold leading-8 text-primary">
                  {plan.name}
                </h3>
                {plan.recommended && (
                  <span className="text-white rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold leading-5 text-primary bg-gradient-to-r from-purple-500 to-teal-500">
                    Recommended
                  </span>
                )}
              </div>
              <p className="mt-4 text-sm leading-6 text-muted-foreground">
                {plan.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-primary">
                  ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                </span>
                <span className="text-sm font-semibold leading-6 text-muted-foreground"></span>
              </p>
              {isYearly && (
                <div className="mt-2">
                  <span className="inline-flex items-center rounded-full bg-gradient-to-r from-pink-500 to-purple-500 px-2.5 py-1 text-xs font-semibold text-white">
                    Save 20%
                  </span>
                </div>
              )}
              <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-primary" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                className="mt-8 w-full"
                variant={plan.recommended ? "default" : "outline"}
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
