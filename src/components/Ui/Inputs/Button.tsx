import React, { ReactNode } from 'react';

import Icons, {
  DragBar,
  LightMode,
  DarkMode,
  Settings,
  NotificationsOn,
  NotificationsOff,
  ArrowRight
} from '../DataDisplay/Icons';
import Img from '../DataDisplay/Image';
import Typography from '../DataDisplay/Typography';

const buttonsMapping = {
  InteractiveLogo: {
    style: `group flex cursor-pointer rounded-full absolute p-xs w-16 h-16 right-[-7rem] top-0 z-[51] border-secondary-default dark:border-secondary-dark
      [&>img]:opacity-50 transition-slow`,
    defaultChildren: () => (
      <>
        <Img
          size={24}
          image="logo"
          className="absolute w-6 transition-slow group-hover:opacity-100"
        ></Img>
        <Img
          size={26}
          image="name"
          className="absolute top-5 right-3 transition-slow group-hover:opacity-100"
        ></Img>
        <Img
          size={48}
          image="waves"
          className="absolute bottom-1 transition-slow group-hover:opacity-100"
        ></Img>
      </>
    )
  },
  InteractiveBar: {
    style: 'wrapper_bar transition-slow',
    defaultChildren: () => <DragBar className="rotate-90" />
  },
  DarkModeToggle: {
    style: 'transition-slow',
    defaultChildren: () => {
      return (
        <>
          <LightMode className="absolute top-1/2 -translate-y-1/2 opacity-100 transition-slow dark:opacity-0"></LightMode>
          <DarkMode className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-slow dark:opacity-100"></DarkMode>
        </>
      );
    }
  },
  Settings: {
    style: 'transition-slow',
    defaultChildren: () => (
      <>
        <Settings></Settings>
      </>
    )
  },
  Notifications: {
    style: 'transition-slow',
    defaultChildren: () => (
      <>
        <NotificationsOn className="absolute top-1/2 -translate-y-1/2 opacity-100 transition-slow dark:opacity-0"></NotificationsOn>
        <NotificationsOff className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-slow dark:opacity-100"></NotificationsOff>
      </>
    )
  },
  MenuControl: {
    style: `group relative mr-m flex h-10 w-full items-center rounded-l-full bg-primary-default  bg-opacity-0 pl-m  text-secondary-contrast-df transition-faster
    before:absolute
    before:top-[-1.58rem] before:right-0
    before:z-50 before:-mr-7
    before:h-[25px] before:w-[25px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:bg-no-repeat before:opacity-0 before:transition-faster
    after:absolute after:bottom-[-1.58rem] after:right-0 after:z-50 after:-mr-7 after:h-[25px]
    after:w-[25px] after:scale-[1.04]
    after:bg-menu-corner after:bg-[length:100%] after:bg-no-repeat after:opacity-0 after:content-[''] after:transition-faster hover:bg-opacity-30 focus:bg-opacity-100 focus:text-primary-contrast-df
    focus:transition-none focus:before:opacity-100 focus:before:transition-none focus:after:opacity-100 focus:after:transition-none dark:bg-primary-dark dark:bg-opacity-0
    dark:before:bg-menu-corner-dark dark:after:bg-menu-corner-dark dark:hover:bg-opacity-50
    focus:dark:bg-opacity-100 focus:dark:text-primary-contrast-dk
    [&>svg]:min-w-min [&>svg]:pr-s`,
    defaultChildren: (icon?: keyof typeof Icons) => (
      <>
        <div className="absolute left-full top-0 z-50 h-10 w-7 bg-primary-default opacity-0 transition-faster group-hover:opacity-30 group-focus:opacity-100 group-focus:transition-none dark:bg-primary-dark " />
        {icon && Icons[icon]({})}
        <ArrowRight className="absolute -right-7 z-[52]"></ArrowRight>
      </>
    )
  }
} as const;

interface IButton {
  children?: ReactNode;
  onClick: () => void;
  onMouseEnter?: () => void;
  className?: string;
  typeOf: keyof typeof buttonsMapping;
  'aria-label'?: string;
  icon?: keyof typeof Icons;
}

export default function Button({
  onClick,
  onMouseEnter,
  children,
  className,
  'aria-label': ariaLabel,
  typeOf,
  icon
}: IButton) {
  const { style, defaultChildren } = buttonsMapping[typeOf];
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${className} ${style}`}
      aria-label={ariaLabel}
    >
      {defaultChildren(icon)}
      {children}
    </button>
  );
}
