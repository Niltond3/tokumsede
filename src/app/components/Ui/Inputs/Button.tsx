import React, { ReactNode } from 'react';

import Icons, {
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
  DarkModeToggle: {
    style: 'transition-faster opacity-50 hover:opacity-100',
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
    style: 'transition-faster opacity-50 hover:opacity-100',
    defaultChildren: () => (
      <>
        <Settings></Settings>
      </>
    )
  },
  Notifications: {
    style: 'transition-faster opacity-50 hover:opacity-100',
    defaultChildren: () => (
      <>
        <NotificationsOn className="absolute top-1/2 -translate-y-1/2 opacity-100 transition-slow dark:opacity-0"></NotificationsOn>
        <NotificationsOff className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-slow dark:opacity-100"></NotificationsOff>
      </>
    )
  },
  MenuControl: {
    style: `group btn-menu-control`,
    defaultChildren: (icon?: keyof typeof Icons) => (
      <>
        {icon && Icons[icon]({ className: 'min-w-min pr-s' })}
        <ArrowRight className="right-0 z-[52] mr-1 transition-faster absolute-y-center"></ArrowRight>
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
