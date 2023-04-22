import React from 'react';
import Icons, {
  LightMode,
  DarkMode,
  NotificationsOn,
  NotificationsOff,
  Add
} from '../DataDisplay/Icons';

import { Slot, SlotProps } from '@radix-ui/react-slot';

type ButtonProps = React.ElementType<'button'> & {
  title?: string;
  is: keyof typeof variantStyles & keyof typeof defaultChildren;
  asChild?: boolean;
};

const Button: React.ButtonHTMLAttributes<HTMLButtonElement> = (props: ButtonProps) => {
  const { asChild, title, is } = props;
  const styles = variantStyles[is];
  const DefaultChildren = defaultChildren[is];

  const defaultElement: typeof React.Component = 'button' as React.Component;

  const Component = asChild ? Slot : defaultElement;

  return (
    <Component className={`${styles}`} {...props}>
      <DefaultChildren title={title} />
    </Component>
  );
});
export default Button;

const commonStyles = [
  'group relative flex h-1/2 w-1/3 items-center opacity-50 transition-faster hover:opacity-100',
  '[&>*]:absolute [&>*]:left-1/2  [&>*]:-translate-y-1/2 [&>*]:top-1/2 [&>*]:-translate-x-1/2'
].join(' ');

const variantStyles = {
  DarkModeToggle: `${commonStyles}`,
  Settings: `${commonStyles}`,
  Notifications: `${commonStyles}`,
  Add: 'opacity-30 hover:opacity-100 transition-faster'
};

const defaultChildren = {
  DarkModeToggle: () => (
    <>
      <LightMode className="opacity-100 dark:opacity-0" />
      <DarkMode className="opacity-0 dark:opacity-100" />
    </>
  ),
  Settings: () => <Icons icon="Settings" />,
  Notifications: () => (
    <>
      <NotificationsOn className="opacity-100 transition-slow dark:opacity-0" />
      <NotificationsOff className="opacity-0 transition-slow dark:opacity-100" />
    </>
  ),
  Add: ({ title }: { title?: string }) => (
    <div className="flex items-center text-sm font-medium">
      <Add className="h-auto w-5" />
      <span className="ml-s whitespace-nowrap">{title}</span>
    </div>
  )
};
