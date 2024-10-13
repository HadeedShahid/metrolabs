export type typeIconProps = {
  width?: string;
  height?: string;
  className?: any;
};

export type Option = {
  label: string;
  value: string;
  price: number;
};

// Category type with optional options array
export type CategoryWithOptions = {
  label: string;
  options: Option[];
};

// Category type for budget without options
export type BudgetCategory = {
  label: string;
  min: number;
  max: number;
  step: number;
};

export type FilterObj = {
  projectType: CategoryWithOptions;
  design: CategoryWithOptions;
  development: CategoryWithOptions;
  numOfPages: CategoryWithOptions;
  timeline: CategoryWithOptions;
  platformType: CategoryWithOptions;
  maintainanceAndSupport: CategoryWithOptions;
  budget: BudgetCategory; // Using the separate BudgetCategory type
};
