'use client';
import React from 'react';

import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import { clsx } from 'clsx';
import { TooltipProps } from 'common/types';

export default function Tooltip({
  children,
  content,
  arrow = true,
  side = 'top',
  align = 'center',
  alignOffset = 0,
  sideOffset = 4,
  asChild = true,
  triggerStyles = ''
}: TooltipProps) {
  React.useLayoutEffect = React.useEffect;
  return (
    <TooltipPrimitive.Root delayDuration={0} disableHoverableContent>
      <TooltipPrimitive.Trigger asChild>
        {asChild ? (
          children
        ) : (
          <span className={`relative flex h-full flex-1 items-center ${triggerStyles}`}>
            {children}
          </span>
        )}
      </TooltipPrimitive.Trigger>
      <TooltipPrimitive.Portal>
        <TooltipPrimitive.Content
          side={side}
          align={align}
          alignOffset={alignOffset}
          sideOffset={sideOffset}
          className={clsx(
            'z-10 inline-flex animate-opacity items-center rounded px-2 py-1 opacity-0',
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
