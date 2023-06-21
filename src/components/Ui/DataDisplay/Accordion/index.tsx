import React from 'react';

import * as icons from 'components/Ui/DataDisplay/Icons';

import * as AccordionPrimitives from '@radix-ui/react-accordion';
import * as types from 'common/types';

const Accordion = AccordionPrimitives.Root;

const AccordionItem = ({
  value,
  contentChildren,
  contentClassName = '',
  triggerChildren,
  triggerClassName = ''
}: types.AccordionItemProps) => (
  <AccordionPrimitives.Item value={value}>
    <AccordionTrigger className={triggerClassName}>{triggerChildren}</AccordionTrigger>
    <AccordionContent className={contentClassName}>{contentChildren}</AccordionContent>
  </AccordionPrimitives.Item>
);

const AccordionTrigger = React.forwardRef<HTMLButtonElement, types.FragmentProps>(
  ({ children, className, ...props }: types.FragmentProps, forwardRef) => (
    <AccordionPrimitives.Header className="flex">
      <AccordionPrimitives.Trigger
        className={`group flex w-full items-center justify-between ${className}`}
        {...props}
        ref={forwardRef}
      >
        {children}
        <icons.Arrow
          className="transition-faster group-data-state-open:rotate-90"
          aria-hidden
        />
      </AccordionPrimitives.Trigger>
    </AccordionPrimitives.Header>
  )
);

const AccordionContent = React.forwardRef<HTMLDivElement, types.FragmentProps>(
  ({ children, className, ...props }: types.FragmentProps, forwardedRef) => (
    <AccordionPrimitives.Content
      className={`data-state-open:animate-slide-down data-state-closed:animate-slide-up ${className}`}
      {...props}
      ref={forwardedRef}
    >
      <div className="">{children}</div>
    </AccordionPrimitives.Content>
  )
);

export default Accordion;

export { AccordionItem };
