import React, { ReactNode } from 'react';

import Typography from 'components/Ui/DataDisplay/Typography';

import Img from '../DataDisplay/Image';

const buttonsMapping = {
  InteractiveLogo: {},
  InteractiveBar: {}
} as const;

interface IButton {
  children?: ReactNode;
  onClick: () => void;
  onMouseEnter?: () => void;
  className?: string;
  typeOf: keyof typeof buttonsMapping;
}

export default function Button({
  onClick,
  onMouseEnter,
  children,
  className,
  typeOf
}: IButton) {
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${className} ${
        typeOf === 'InteractiveLogo' &&
        'wrapper_logo color__transparent transition-slow group'
      }`}
    >
      {typeOf === 'InteractiveLogo' && (
        <Img
          size={48}
          image="logo"
          className="transition-slow max-h-12 mt-xs wrapper_logo--image group-hover:opacity-100"
        ></Img>
      )}
      {typeOf === 'InteractiveLogo' && (
        <Typography variant="h1" bold={false} className="wrapper_logo--title ">
          <span>Tô</span>
          <span>Kum</span>
          <span className="transition-slow group-hover:opacity-100">ede</span>
        </Typography>
      )}
      {children}
    </button>
  );
}
