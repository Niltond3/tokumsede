/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import Icons, {
  LightMode,
  DarkMode,
  NotificationsOn,
  NotificationsOff,
  Add
} from '../DataDisplay/Icons';

import { Slot } from '@radix-ui/react-slot';
import clsx from 'clsx';
import { TypeIcons } from 'utils/Types';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  is?: keyof typeof variantStyles & keyof typeof defaultChildren;
  asChild?: boolean;
  icon?: keyof TypeIcons;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild, title, is = 'Root', icon, ...props }: ButtonProps, ref) => {
    const styles = variantStyles[is];
    const DefaultChildren = defaultChildren[is];
    const Component = asChild ? Slot : 'button';

    return (
      <Component ref={ref} className={styles} {...props}>
        <>
          <DefaultChildren title={title} icon={icon!} />
          {children}
        </>
      </Component>
    );
  }
);

export default Button;

const commonStyles = clsx(
  'group relative flex h-1/2 w-1/3 items-center opacity-50 transition-faster hover:opacity-100',
  '[&>*]:absolute [&>*]:left-1/2  [&>*]:top-1/2 [&>*]:-translate-y-1/2 [&>*]:-translate-x-1/2'
);

const variantStyles = {
  Root: '',
  DarkModeToggle: `${commonStyles}`,
  Settings: `${commonStyles}`,
  Notifications: `${commonStyles}`,
  DropdownControl: clsx(
    'group relative flex h-8 items-center rounded-l-full bg-lg-primary-base/0 pl-m transition-faster',
    'data-[state=off]:hover:bg-lg-primary-base/30 @[70px]:gap-2.5 ',
    'data-[state=on]:bg-lg-primary-base/100 data-[state=on]:text-lg-secondary data-[state=on]:transition-none data-[state=on]:dark:!bg-dk-primary-base/100 data-[state=on]:dark:text-dk-secondary-base',
    'dark:data-[state=on]:bg-dk-primary-base/100 dark:data-[state=on]:text-dk-secondary-base',
    'dark:bg-dk-primary-base/0 dark:before:bg-menu-corner-dark dark:after:bg-menu-corner-dark dark:hover:bg-dk-primary-base/50',
    'data-[state=on]:before:opacity-100 data-[state=on]:before:transition-none',
    'data-[state=on]:after:opacity-100 data-[state=on]:after:transition-none',
    'child:transition-faster',
    "before:pointer-events-none before:absolute before:right-2 before:z-[-1] before:-mr-2 before:h-[25px] before:w-[25px] before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:bg-no-repeat before:opacity-0 before:content-[''] before:transition-faster",
    'before:top-[-1.55rem] before:rotate-90',
    "after:pointer-events-none after:absolute after:right-2 after:z-[-1] after:-mr-2 after:h-[25px] after:w-[25px] after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:bg-no-repeat after:opacity-0 after:content-[''] after:transition-faster",
    'after:bottom-[-1.55rem]'
  ),
  Add: 'opacity-30 hover:opacity-100 transition-faster'
};

const defaultChildren = {
  Root: () => <></>,
  DropdownControl: ({ title, icon }: { title?: string; icon: keyof TypeIcons }) => (
    <>
      <Icons icon={icon} className="min-w-min" />
      <p
        className={`invisible flex w-24 items-start text-sm font-medium opacity-0 @[161px]:visible @[161px]:opacity-100`}
      >
        {title}
      </p>
      <Icons
        icon="Arrow"
        className="absolute right-1 min-w-min group-data-[state=on]:rotate-90 @[161px]:right-2.5"
      />
    </>
  ),
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
