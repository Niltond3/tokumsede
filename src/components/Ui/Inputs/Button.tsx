'use client';
import React from 'react';

import Icons from '../DataDisplay/Icons';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import clsx from 'clsx';
import * as types from 'common/types';

const Button = React.forwardRef<HTMLButtonElement, types.ButtonProps>(
  (
    {
      children,
      typeOf = 'primary',
      iconL,
      iconR,
      toggleVariant = 'default',
      className,
      ...props
    }: types.ButtonProps,
    ref
  ) => {
    const Component = typeOf === 'toggle' ? TogglePrimitive.Root : 'button';

    const styles = `${mappingButtonStyles[typeOf]} ${
      typeOf === 'toggle' && toggleButtonStyles[toggleVariant]
    } ${className}`;

    const Childrens = () => (
      <>
        {iconL && <Icons icon={iconL} />}
        {children}
        {iconR && <Icons icon={iconR} />}
      </>
    );

    return (
      <Component ref={ref} className={styles} {...props}>
        <Childrens />
      </Component>
    );
  }
);

export default Button;

const defaultStyle =
  'transition-faster justify-center whitespace-nowrap text-sm font-medium flex items-center opacity-50 hover:opacity-100 rounded';

const mappingButtonStyles = {
  primary: defaultStyle,
  secondary: `${defaultStyle} bg-white/30 p-0.5 shadow-md backdrop-blur-sm focus-visible:outline-none data-state-open:shadow-lg`,
  toggle: `${defaultStyle} group peer`
};

const toggleButtonStyles = {
  default: '',
  text: clsx(
    'select-none overflow-hidden backface-hidden transition-faster',
    'pseudos:absolute pseudos:flex pseudos:h-full pseudos:w-full pseudos:select-none pseudos:items-center pseudos:justify-center pseudos:text-center pseudos:text-[0.5rem] pseudos:font-extrabold pseudos:transition-faster pseudos:[text-shadow:0_4px_8px_rgba(0,0,0,0.12)]',
    'before:left-0 before:content-[attr(data-tg-off)] active:before:left-[-25%] data-state-on:before:-left-full data-state-on:active:before:left-[-25%]',
    'after:left-full after:content-[attr(data-tg-on)] active:after:left-[50%] data-state-on:after:left-0 data-state-on:active:after:left-[50%]'
  ),
  between: clsx(
    'relative child:absolute child:transition-faster child:center',
    '[&>*:nth-child(1)]:data-state-on:opacity-0 [&>*:nth-child(2)]:data-state-off:opacity-0'
  ),
  dropdown: clsx(
    'group relative h-8 rounded-l-full bg-lg-primary-base/0 pl-m transition-faster',
    'dark:bg-dk-primary-base/0 dark:hover:bg-dk-primary-base/50 dark:pseudos:bg-menu-corner-dark',
    'data-state-off:hover:bg-lg-primary-base/30',
    'data-state-on:bg-lg-primary-base/100 data-state-on:text-lg-secondary data-state-on:transition-none data-state-on:dark:!bg-dk-primary-base/100 data-state-on:dark:text-dk-secondary-base',
    'dark:data-state-on:bg-dk-primary-base/100 dark:data-state-on:text-dk-secondary-base',
    'child:transition-faster',
    "pseudos:pointer-events-none pseudos:absolute pseudos:right-2 pseudos:z-[-1] pseudos:-mr-2 pseudos:h-[25px] pseudos:w-[25px] pseudos:scale-[1.04] pseudos:bg-menu-corner pseudos:bg-[length:100%] pseudos:bg-no-repeat pseudos:opacity-0 pseudos:content-[''] pseudos:transition-faster",
    'data-state-on:pseudos:opacity-100 data-state-on:pseudos:transition-none',
    'before:top-[-1.55rem] before:rotate-90',
    'after:bottom-[-1.55rem]'
  )
};

export { mappingButtonStyles, toggleButtonStyles };
