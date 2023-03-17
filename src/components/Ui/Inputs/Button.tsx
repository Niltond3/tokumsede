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
    style: 'wrapper_logo color__transparent transition-slow group',
    defaultChildren: () => (
      <>
        <Img
          size={48}
          image="logo"
          className="transition-slow wrapper_logo--image group-hover:opacity-100"
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
            className="transition-slow mb-xxs text-white antialiased opacity-50
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
          <LightMode className="transition-slow absolute top-1/2 -translate-y-1/2 opacity-100 dark:opacity-0"></LightMode>
          <DarkMode className="transition-slow absolute top-1/2 -translate-y-1/2 opacity-0 dark:opacity-100"></DarkMode>
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
      className={`${className} ${style}`}
      aria-label={ariaLabel}
    >
      {defaultChildren()}
      {children}
    </button>
  );
}
