import React, { ReactNode } from 'react';

import {
  DragBar,
  LightMode,
  DarkMode,
  Settings,
  NotificationsOn,
  NotificationsOff
} from 'components/Ui/DataDisplay/Icons';
import Typography from 'components/Ui/DataDisplay/Typography';

import Img from '../DataDisplay/Image';

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
        <Typography variant="h1" bold={false} className="wrapper_logo--title ">
          <span>Tô</span>
          <span>Kum</span>
          <span className="transition-slow group-hover:opacity-100">ede</span>
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
    defaultChildren: () => (
      <>
        <LightMode></LightMode>
        <DarkMode></DarkMode>
      </>
    )
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
