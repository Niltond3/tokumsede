'use client';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import clsx from 'clsx';

type ToggleProps = {
  children: React.ReactNode;
  type: keyof typeof mappingStyles;
  className?: string;
};

const Toggle = ({ children, type, className = '' }: ToggleProps) => {
  const style = mappingStyles[type];
  return (
    <TogglePrimitive.Root
      className={`group peer ${style} ${className}`}
      aria-label="Toggle italic"
      asChild
    >
      {children}
    </TogglePrimitive.Root>
  );
};
//[&>*:nth-child(6)>a>p]
const mappingStyles = {
  root: clsx(''),
  between: clsx(
    'relative flex min-h-[50%] flex-1 child:absolute child:transition-faster child:center',
    '[&>*:nth-child(1)]:data-state-on:opacity-0 [&>*:nth-child(2)]:data-state-off:opacity-0'
  ),
  dropdown: clsx(
    'group relative h-8 rounded-l-full bg-lg-primary-base/0 pl-m transition-faster',
    'dark:bg-dk-primary-base/0 dark:before:bg-menu-corner-dark dark:after:bg-menu-corner-dark dark:hover:bg-dk-primary-base/50',
    'data-state-off:hover:bg-lg-primary-base/30',
    'data-state-on:bg-lg-primary-base/100 data-state-on:text-lg-secondary data-state-on:transition-none data-state-on:dark:!bg-dk-primary-base/100 data-state-on:dark:text-dk-secondary-base',
    'dark:data-state-on:bg-dk-primary-base/100 dark:data-state-on:text-dk-secondary-base',
    'data-state-on:before:opacity-100 data-state-on:before:transition-none',
    'data-state-on:after:opacity-100 data-state-on:after:transition-none',
    'child:transition-faster',
    "before:pointer-events-none before:absolute before:right-2 before:z-[-1] before:-mr-2 before:h-[25px] before:w-[25px] before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:bg-no-repeat before:opacity-0 before:content-[''] before:transition-faster",
    'before:top-[-1.55rem] before:rotate-90',
    "after:pointer-events-none after:absolute after:right-2 after:z-[-1] after:-mr-2 after:h-[25px] after:w-[25px] after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:bg-no-repeat after:opacity-0 after:content-[''] after:transition-faster",
    'after:bottom-[-1.55rem]'
  )
};

export default Toggle;