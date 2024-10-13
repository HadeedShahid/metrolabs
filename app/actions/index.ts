"use server";
import { Option } from "@/lib/types";
import { filterObj } from "@/utils/constants";
import { qouteFormSchema } from "@/utils/formSchema";
import { z } from "zod";

const getPrice = (category: keyof typeof filterObj, value: string): number => {
  const selectedCategory = filterObj[category];

  if ("options" in selectedCategory) {
    const selectedOption = selectedCategory.options.find(
      (option: Option) => option.value === value
    );
    return selectedOption ? selectedOption.price : 0;
  }

  return 0; // Return 0 for 'budget' as it doesn't have options
};
export async function getQouteCost(values: z.infer<typeof qouteFormSchema>) {
  const {
    projectType,
    design,
    development,
    numOfPages,
    timeline,
    platformType,
    maintainanceAndSupport,
    budget,
  } = values;

  const oneTimeCost = {
    projectType: getPrice("projectType", projectType),
    design: getPrice("design", design),
    development: getPrice("development", development),
    numOfPages: getPrice("numOfPages", numOfPages),
    timeline: getPrice("timeline", timeline),
    platformType: getPrice("platformType", platformType),
  };

  const monthlyCost = {
    maintainanceAndSupport: getPrice(
      "maintainanceAndSupport",
      maintainanceAndSupport
    ),
  };

  const totalOneTimeCostBeforeBudget = Object.values(oneTimeCost).reduce(
    (acc, price) => acc + price,
    0
  );
  const totalMonthlyCostBeforeBudget = Object.values(monthlyCost).reduce(
    (acc, price) => acc + price,
    0
  );

  let totalOneTimeCost = totalOneTimeCostBeforeBudget;
  let totalMonthlyCost = totalMonthlyCostBeforeBudget;

  if (budget < totalOneTimeCostBeforeBudget) {
    totalOneTimeCost = budget;
  }

  return {
    oneTimeCost,
    totalOneTimeCost,
    totalOneTimeCostBeforeBudget, // To see how much it would have been without the budget
    monthlyCost,
    totalMonthlyCost,
    totalMonthlyCostBeforeBudget, // To see how much it would have been without the budget
    appliedBudget: budget, // The budget that was applied
  };
}
