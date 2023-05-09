import React from 'react';

import Icons from '../DataDisplay/Icons';

import * as RadioPrimitive from '@radix-ui/react-radio-group';
import { TypeIcons } from 'utils/Types';

export type GroupType = {
  id: string;
  value: string;
  label?: string;
  default?: boolean;
};

export type RadioGroupStyleProp = () => {
  RadioGroupRoot: string;
  RadioGroupItemWrapper: string;
  RadioGroupItem: string;
  RadioGroupIndicator: string;
  RadioGroupLabel: string;
};

type RadioGroupProps = {
  group: GroupType[];
  styles: RadioGroupStyleProp;
  icon?: keyof TypeIcons;
  indicator?: boolean;
  Item?: React.ReactNode;
};

export default function RadioGroup({
  group,
  styles,
  icon,
  indicator = true,
  Item
}: RadioGroupProps) {
  const {
    RadioGroupRoot,
    RadioGroupItemWrapper,
    RadioGroupItem,
    RadioGroupIndicator,
    RadioGroupLabel
  } = styles();
  const defaultValue = group.find((val) => val.default)?.value;
  return (
    <RadioPrimitive.Root className={RadioGroupRoot} defaultValue={defaultValue}>
      {group.map(({ id, value, label }) => {
        return (
          <>
            {label ? (
              <div key={id} className={RadioGroupItemWrapper}>
                <RadioItem
                  RadioGroupIndicator={RadioGroupIndicator}
                  RadioGroupItem={RadioGroupItem}
                  id={id}
                  value={value}
                  Item={Item}
                  icon={icon}
                  indicator={indicator}
                  key={id}
                  label={label}
                />
                <label htmlFor={id} className={RadioGroupLabel}>
                  {label}
                </label>
              </div>
            ) : (
              <RadioItem
                RadioGroupIndicator={RadioGroupIndicator}
                RadioGroupItem={RadioGroupItem}
                id={id}
                value={value}
                Item={Item}
                icon={icon}
                indicator={indicator}
                key={id}
              />
            )}
          </>
        );
      })}
    </RadioPrimitive.Root>
  );
}

const RadioItem = ({
  value,
  id,
  RadioGroupIndicator,
  RadioGroupItem,
  Item,
  icon,
  indicator
}: GroupType & {
  RadioGroupItem: string;
  RadioGroupIndicator: string;
  indicator?: boolean;
  icon?: keyof TypeIcons;
  Item?: React.ReactNode;
}) => (
  <RadioPrimitive.Item value={value} id={id} className={RadioGroupItem}>
    {indicator && (
      <RadioPrimitive.Indicator className={RadioGroupIndicator}>
        {icon && <Icons icon={icon} />}
      </RadioPrimitive.Indicator>
    )}
    {Item && Item}
  </RadioPrimitive.Item>
);
