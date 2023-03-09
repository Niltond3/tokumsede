export interface IColors {
  transparent: string;
  primary: string;
  secondary: string;
  tertiary: string;
}
export const Colors: IColors = {
  transparent:
    'bg-transparent text-primary-contrast dark:bg-transparent dark:text-primary-contrast ',
  primary:
    'bg-primary-default text-primary-contrast dark:bg-primary-dark dark:text-primary-contrast ',
  secondary:
    'bg-secondary-default text-secondary-contrast dark:bg-secondary-dark dark:text-secondary-contrast ',
  tertiary:
    'bg-tertiary-default text-tertiary-contrast dark:bg-tertiary-dark dark:text-tertiary-contrast '
};
