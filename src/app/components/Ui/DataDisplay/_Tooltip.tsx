'use client';
import React from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';

type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  arrow?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'center' | 'start' | 'end';
};

export default function Tooltip({
  children,
  content,
  arrow = true,
  side = 'top',
  align = 'center'
}: TooltipProps) {
  React.useLayoutEffect = React.useEffect;
  return (
    <TooltipPrimitive.Provider>
      <TooltipPrimitive.Root open={true} delayDuration={0} defaultOpen={true}>
        <TooltipPrimitive.Trigger asChild>
          <button>{children}</button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          alignOffset={5}
          className={clsx(
            'rounded-md',
            'bg-lg-accent text-lg-primary-base dark:bg-gray-800'
          )}
        >
          {content}
          {arrow && (
            <TooltipPrimitive.Arrow className="fill-current text-lg-accent dark:text-gray-800" />
          )}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
    </TooltipPrimitive.Provider>
  );
}
