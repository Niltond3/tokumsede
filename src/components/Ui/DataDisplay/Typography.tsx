import { ReactNode } from 'react';

const variantsMapping = {
  h1: {
    Component: 'h1',
    twClass:
      'font-sans transform ease-in-out duration-500 flex-none h-full flex items-center justify-center'
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
    twClass: ''
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

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: keyof typeof variantsMapping;
  bold: boolean;
  children: ReactNode;
}
export default function Typography({ variant, children }: TypographyProps) {
  const { Component, twClass } = variantsMapping[variant];
  return <Component className={`${twClass}`}>{children}</Component>;
}
