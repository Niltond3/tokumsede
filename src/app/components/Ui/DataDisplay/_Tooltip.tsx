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
  alignOffset?: number;
  sideOffset?: number;
};

export default function Tooltip({
  children,
  content,
  arrow = true,
  side = 'top',
  align = 'center',
  alignOffset = 0,
  sideOffset = 4
}: TooltipProps) {
  React.useLayoutEffect = React.useEffect;
  return (
    <TooltipPrimitive.Root open={true} delayDuration={0}>
      <TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          avoidCollisions={false}
          className={clsx(
            'z-10 inline-flex items-center rounded px-2 py-1',
            'bg-lg-accent text-lg-primary-base dark:bg-gray-800'
          )}
        >
          {arrow && (
            <TooltipPrimitive.Arrow className="fill-current text-lg-accent dark:text-gray-800" />
          )}
          {content}
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Portal>
    </TooltipPrimitive.Root>
  );
}
export const TooltipProvider = TooltipPrimitive.Provider;
