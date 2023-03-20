import React, { ReactNode } from 'react';

import {
  DragBar,
  LightMode,
  DarkMode,
  Settings,
  NotificationsOn,
  NotificationsOff
} from '../DataDisplay/Icons';
import Img from '../DataDisplay/Image';
import Typography from '../DataDisplay/Typography';

const buttonsMapping = {
  InteractiveLogo: {
    style: `group flex cursor-pointer rounded-full absolute p-xs w-16 h-16 right-[-7rem] top-0 z-[51] border-secondary-default dark:border-secondary-dark
      [&>img]:opacity-50`,
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
  _InteractiveLogo: {
    style: 'wrapper_logo color__transparent transition-slow group',
    defaultChildren: () => (
      <>
        <Img
          size={48}
          image="logo"
          className="wrapper_logo--image transition-slow group-hover:opacity-100"
        ></Img>
        <Typography
          variant="h1"
          bold={false}
          className="pointer-events-none flex-col items-start font-title text-secondary-contrast-df
          child:relative child:left-[-10px] child:select-none child:text-xs child:leading-3
          "
        >
          <span className="transition-slow">Tô</span>
          <span className="transition-slow">Kum</span>
          <span
            className="mb-xxs text-white antialiased opacity-50 transition-slow
          group-hover:text-base group-hover:opacity-100"
          >
            ede
          </span>
        </Typography>
      </>
    )
  },
  InteractiveBar: {
    style: 'wrapper_bar transition-slow',
    defaultChildren: () => <DragBar className="rotate-90" />
  },
  DarkModeToggle: {
    style: '',
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
    style: '',
    defaultChildren: () => (
      <>
        <Settings></Settings>
      </>
    )
  },
  Notifications: {
    style: '',
    defaultChildren: () => (
      <>
        <NotificationsOn></NotificationsOn>
        <NotificationsOff></NotificationsOff>
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
}

export default function Button({
  onClick,
  onMouseEnter,
  children,
  className,
  'aria-label': ariaLabel,
  typeOf
}: IButton) {
  const { style, defaultChildren } = buttonsMapping[typeOf];
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${className} ${style} transition-slow`}
      aria-label={ariaLabel}
    >
      {defaultChildren()}
      {children}
    </button>
  );
}
