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
    style: `group relative mr-m flex h-10 w-full items-center rounded-l-full bg-primary-default/0 pl-m text-secondary-contrast-df transition-faster
    before:absolute
    before:top-[-1.58rem] before:right-2
    before:z-50 before:-mr-2
    before:h-[25px] before:w-[25px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:bg-no-repeat before:opacity-0 before:transition-faster
    after:absolute after:bottom-[-1.58rem] after:right-2 after:z-50 after:-mr-2 after:h-[25px]
    after:w-[25px] after:scale-[1.04]
    after:bg-menu-corner after:bg-[length:100%] after:bg-no-repeat after:opacity-0 after:content-[''] after:transition-faster hover:bg-primary-default/30
    dark:bg-primary-dark/0 dark:before:bg-menu-corner-dark dark:after:bg-menu-corner-dark dark:hover:bg-primary-dark/50`,
    defaultChildren: (icon?: keyof typeof Icons) => (
      <>
        {icon && Icons[icon]({ className: 'min-w-min pr-s' })}
        <ArrowRight className="absolute right-0 top-1/2 z-[52] mr-1 -translate-y-1/2 transition-faster"></ArrowRight>
      </>
    )
  }
} as const;

interface IButton {
  children?: ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
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
