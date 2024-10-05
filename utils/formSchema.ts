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
