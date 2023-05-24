export type GroupType = {
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
  indicator?: React.ReactNode;
  default?: boolean;
  disabled?: boolean;
};

export type RadioGroupStyleProp = {
  RadioGroupRoot: string;
  RadioGroupItem: string;
  RadioGroupIndicator: string;
  RadioGroupLabel: string;
};

export type ObjectDefaultProps<T> = T & {
  id: number;
  name: string;
  unavailable: boolean;
};
