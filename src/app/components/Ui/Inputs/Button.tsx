/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';

import { Add } from '../DataDisplay/Icons';

import { Slot } from '@radix-ui/react-slot';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  title?: string;
  is?: keyof typeof mappingStyles;
  asChild?: boolean;
};

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, asChild, title, is = 'Root', ...props }: ButtonProps, ref) => {
    const { styles, DefaultChildren } = mappingStyles[is];
    const Component = asChild ? Slot : 'button';

    return (
      <Component ref={ref} className={styles} {...props}>
        <>
          <DefaultChildren title={title} />
          {children}
        </>
      </Component>
    );
  }
);

export default Button;

const mappingStyles = {
  Root: {
    styles: 'flex-1 flex items-center justify-center min-h-[50%]',
    DefaultChildren: () => <></>
  },
  Add: {
    styles: 'opacity-30 hover:opacity-100 transition-faster',
    DefaultChildren: ({ title = 'default' }: { title?: string }) => (
      <div className="flex items-center text-sm font-medium">
        <Add className="h-auto w-5" />
        <span className="ml-s whitespace-nowrap">{title}</span>
      </div>
    )
  }
};
