import { z } from "zod";

export const qouteFormSchema = z.object({
  projectType: z.string().min(1, { message: "Select a project type" }),
  design: z.string().min(1, { message: "Select design option" }),
  development: z.string().min(1, { message: "Select development option" }),
  numOfPages: z.string().min(1, { message: "Select number of pages" }),
  timeline: z.string().min(1, { message: "Select a project timeline" }),
  platformType: z.string().min(1, { message: "Select the platform type" }),
  maintainanceAndSupport: z
    .string()
    .min(1, { message: "Select a maintainance plan" }),
  budget: z.number().min(1, { message: "Select the project budget" }),
});

export const bookCallFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }).max(50),
  email: z.string().min(1, { message: "Email is required" }).email(),
  country: z.string().min(1, { message: "Country is required" }),
  message: z.string().min(1, { message: "Message is required" }),
});
