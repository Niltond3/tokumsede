import React from 'react';

/* eslint-disable @typescript-eslint/ban-types */
type AsProp<C extends React.ElementType> = {
  as?: C;
};

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P);

type PolymorphicComponentProp<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<Props & AsProp<C>> &
  Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>;

type PolymorphicRef<C extends React.ElementType> = React.ComponentPropsWithRef<C>['ref'];

type PolymorphicComponentPropWithRef<
  C extends React.ElementType,
  Props = {}
> = PolymorphicComponentProp<C, Props> & { ref?: PolymorphicRef<C> };

type TextProps<C extends React.ElementType> = PolymorphicComponentPropWithRef<C, {}>;

type TextComponent = <C extends React.ElementType = 'span'>(
  props: TextProps<C>
) => React.ReactElement | null;

// type Props<C extends React.ElementType> = React.PropsWithChildren<TextProps<C>> &
//   Omit<React.ComponentPropsWithoutRef<C>, keyof TextProps<C>>;
// type AsProp<C extends React.ElementType> = { as?: C };

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, children }: TextProps<C>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span';

    return <Component ref={ref}>{children}</Component>;
  }
);

export default Text;
