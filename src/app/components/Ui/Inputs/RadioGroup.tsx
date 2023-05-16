import React, { Fragment } from 'react';

import * as RadioPrimitive from '@radix-ui/react-radio-group';

export type GroupType = {
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
  indicator?: React.ReactNode;
  default?: boolean;
  disabled?: boolean;
};

export type RadioGroupStyleProp = {
  RadioGroupRoot: string;
  RadioGroupItem: string;
  RadioGroupIndicator: string;
  RadioGroupLabel: string;
};

type RadioGroupProps = {
  group: GroupType[];
  styles: RadioGroupStyleProp;
  item?: React.ReactNode;
};

export default function RadioGroup({ group, styles, item }: RadioGroupProps) {
  const { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator, RadioGroupLabel } = styles;
  const defaultValue = group.find((val) => val.default)?.value;
  return (
    <RadioPrimitive.Root className={RadioGroupRoot} defaultValue={defaultValue}>
      {group.map(({ id, value, label, position, indicator, disabled }) => {
        console.log(disabled);
        return (
          <Fragment key={id}>
            {label && position === 'R' && (
              <label htmlFor={id} className={RadioGroupLabel}>
                {label}
              </label>
            )}
            <RadioPrimitive.Item
              value={value}
              id={id}
              className={RadioGroupItem}
              disabled={disabled}
            >
              <RadioPrimitive.Indicator className={RadioGroupIndicator} asChild>
                {indicator && indicator}
              </RadioPrimitive.Indicator>
              {item && item}
            </RadioPrimitive.Item>
            {label && position === 'L' && (
              <label htmlFor={id} className={RadioGroupLabel}>
                {label}
              </label>
            )}
          </Fragment>
        );
      })}
    </RadioPrimitive.Root>
  );
}
