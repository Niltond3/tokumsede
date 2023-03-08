import { ReactNode } from 'react';

const variantsMapping = {
  h1: {
    Component: 'h1',
    twClass: 'text-lg font-semibold'
  },
  h2: {
    Component: 'h2',
    twClass: ''
  },
  h3: {
    Component: 'h3',
    twClass: ''
  },
  h4: {
    Component: 'h4',
    twClass: ''
  },
  h5: {
    Component: 'h5',
    twClass: ''
  },
  h6: {
    Component: 'h6',
    twClass: ''
  },
  subtitle: {
    Component: 'h6',
    twClass: 'text-sm font-normal	'
  },
  body: {
    Component: 'p',
    twClass: ''
  },
  button: {
    Component: 'p',
    twClass: ''
  },
  caption: {
    Component: 'p',
    twClass: ''
  },
  overline: {
    Component: 'h6',
    twClass: ''
  }
} as const;

interface TypographyProps {
  variant: keyof typeof variantsMapping;
  bold?: boolean;
  children?: ReactNode;
}
export default function Typography({ variant, children, bold }: TypographyProps) {
  const { Component, twClass } = variantsMapping[variant];
  return (
    <Component
      className={`font-mono text-justify ${
        bold ? 'font-bold' : ''
      } transform ease-in-out duration-500 flex-none h-full flex items-center justify-center ${twClass} `}
    >
      {children}
    </Component>
  );
}
