import React, { Fragment } from 'react';

import { GroupType, RadioGroupStyleProp } from './Types';

import * as RadioPrimitive from '@radix-ui/react-radio-group';

type RadioGroupProps = {
  group: GroupType[];
  styles: RadioGroupStyleProp;
  item?: React.ReactNode;
  wrapper?: boolean;
  onValueChange: (value: string) => void;
};

export default function RadioGroup({
  group,
  styles,
  item,
  wrapper,
  onValueChange
}: RadioGroupProps) {
  const { RadioGroupRoot, RadioGroupItem, RadioGroupIndicator, RadioGroupLabel } = styles;
  const defaultValue = group.find((val) => val.default)?.value;
  const Container = wrapper ? 'div' : Fragment;
  return (
    <RadioPrimitive.Root
      className={RadioGroupRoot}
      defaultValue={defaultValue}
      onValueChange={onValueChange}
    >
      {group.map(({ id, value, label, position, indicator, disabled }) => {
        return (
          <Container key={id}>
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
          </Container>
        );
      })}
    </RadioPrimitive.Root>
  );
}