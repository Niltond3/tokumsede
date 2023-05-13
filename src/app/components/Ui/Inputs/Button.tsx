'use client';
import React from 'react';

import Icons from '../DataDisplay/Icons';

import * as TogglePrimitive from '@radix-ui/react-toggle';
import clsx from 'clsx';
import { TypeIcons } from 'utils/Types';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  iconL?: keyof TypeIcons;
  iconR?: keyof TypeIcons;
  typeOf?: keyof typeof mappingStyles;
  className?: string;
};

type ConditionalProps =
  | {
      typeOf?: 'primary' | 'secondary' | undefined | null;
      toggleVariant?: never;
      children?: React.ReactNode;
    }
  | {
      typeOf?: 'toggle';
      toggleVariant?: keyof typeof toggleVariantStyles;
      children?: React.ReactNode;
    }
  | {
      typeOf?: 'toggle';
      toggleVariant?: 'between';
      children?: never;
    };

type Props = ButtonProps & ConditionalProps;

const Button = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      children,
      typeOf = 'primary',
      iconL,
      iconR,
      toggleVariant = 'default',
      className,
      ...props
    }: Props,
    ref
  ) => {
    const Component = typeOf === 'toggle' ? TogglePrimitive.Root : 'button';

    const styles = `${mappingStyles[typeOf]} ${
      typeOf === 'toggle' && toggleVariantStyles[toggleVariant]
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

const mappingStyles = {
  primary: defaultStyle,
  secondary: `${defaultStyle} bg-white/30 p-0.5 shadow-md backdrop-blur-sm focus-visible:outline-none data-state-open:shadow-lg`,
  toggle: `${defaultStyle} group peer`
};

const toggleVariantStyles = {
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
