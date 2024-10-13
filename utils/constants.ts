import { FilterObj } from "@/lib/types";

export const filterObj: FilterObj = {
  projectType: {
    label: "Project Type",
    options: [
      {
        label: "Landing page",
        value: "landing-page",
        price: 500,
      },
      {
        label: "CRM",
        value: "crm",
        price: 4000,
      },
      {
        label: "SaaS",
        value: "saas",
        price: 5000,
      },
      {
        label: "Ecommerce store",
        value: "e-commerce",
        price: 3000,
      },
      {
        label: "Classifieds",
        value: "classifieds",
        price: 2500,
      },
      {
        label: "Marketplace",
        value: "marketplace",
        price: 4000,
      },
      {
        label: "Mobile app",
        value: "mobile-app",
        price: 7000,
      },
    ],
  },
  design: {
    label: "Design",
    options: [
      {
        label: "Wireframes",
        value: "wireframes",
        price: 500,
      },
      {
        label: "Low-Fidelity (Lo-Fi) Design",
        value: "lofi",
        price: 1000,
      },
      {
        label: "High-Fidelity (Hi-Fi) Design",
        value: "hifi",
        price: 2000,
      },
      {
        label: "Minimal Viable Product (MVP) Design",
        value: "mvp",
        price: 1500,
      },
      {
        label: "Not Required",
        value: "not-required",
        price: 0,
      },
    ],
  },
  development: {
    label: "Development",
    options: [
      {
        label: "Basic Development",
        value: "basic-development",
        price: 2000,
      },
      {
        label: "Standard Development",
        value: "standard-development",
        price: 4000,
      },
      {
        label: "Custom Development",
        value: "custom-development",
        price: 6000,
      },
      {
        label: "Full Stack Development",
        value: "full-stack-development",
        price: 8000,
      },
      {
        label: "MVP Development",
        value: "mvp-development",
        price: 3000,
      },
      {
        label: "Ongoing Development/Support",
        value: "ongoing-development-support",
        price: 1000,
      },
      {
        label: "Not Required",
        value: "not-required",
        price: 0,
      },
    ],
  },
  numOfPages: {
    label: "No. of pages",
    options: [
      {
        label: "1-3",
        value: "1-5-pages",
        price: 500,
      },
      {
        label: "3-8",
        value: "6-10-pages",
        price: 1000,
      },
      {
        label: "8-12",
        value: "11-20-pages",
        price: 1500,
      },
      {
        label: "12-20",
        value: "21-50-pages",
        price: 2500,
      },
      {
        label: "20+",
        value: "50-plus-pages",
        price: 4000,
      },
    ],
  },
  timeline: {
    label: "Timeline",
    options: [
      {
        label: "1-2 Weeks",
        value: "1-2-weeks",
        price: 1000,
      },
      {
        label: "3-4 Weeks",
        value: "3-4-weeks",
        price: 500,
      },
      {
        label: "1-2 Months",
        value: "1-2-months",
        price: 0,
      },
      {
        label: "3-6 Months",
        value: "3-6-months",
        price: -500,
      },
      {
        label: "6+ Months",
        value: "6-plus-months",
        price: -1000,
      },
    ],
  },
  platformType: {
    label: "Platform Type",
    options: [
      {
        label: "Web",
        value: "web",
        price: 1000,
      },
      {
        label: "Web (Responsive)",
        value: "web-and-mobile",
        price: 2000,
      },
      {
        label: "Mobile (iOS/Android)",
        value: "mobile-ios-android",
        price: 3000,
      },
      {
        label: "Desktop Application",
        value: "desktop-application",
        price: 4000,
      },
      {
        label: "Other Platform",
        value: "other-platform",
        price: 2000,
      },
    ],
  },
  maintainanceAndSupport: {
    label: "Maintenance and Support",
    options: [
      {
        label: "No Support",
        value: "no-support",
        price: 0,
      },
      {
        label: "Basic Support (Bug Fixes & Minor Updates)",
        value: "basic-support",
        price: 500,
      },
      {
        label: "Standard Support (Regular Updates & Bug Fixes)",
        value: "standard-support",
        price: 1000,
      },
      {
        label: "Premium Support (Priority Support & Major Updates)",
        value: "premium-support",
        price: 1500,
      },
      {
        label: "24/7 Support",
        value: "24-7-support",
        price: 2000,
      },
    ],
  },
  budget: {
    label: "Budget",
    min: 200,
    max: 10000,
    step: 100,
  },
};
