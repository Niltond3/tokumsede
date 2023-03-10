import { HTMLAttributes, ReactNode } from 'react';

import { Colors } from 'components/Foundation/Colors';

import PropTypes from 'prop-types';

const theme = {
  main: 'main',
  footer: 'footer'
};

const themeMapping = {
  'app-bar': {
    component: 'div',
    style: 'container-bar container-bar_app'
  },
  'aside-bar': {
    component: 'aside',
    style: 'container-bar container-bar-aside'
  },
  'right-bar': {
    component: 'aside',
    style: 'container-bar container-bar_right'
  }
} as const;

const colorMapping = {
  transparent: 'color-transparent',
  'primary-disable': 'color-primary-disable',
  'primary-idle': 'color-primary-idle',
  'primary-hover': 'color-primary-hover',
  'primary-active': 'color-primary-active',
  'secondary-disable': 'color-secondary-disable',
  'secondary-idle': 'color-secondary-idle',
  'secondary-hover': 'color-secondary-hover',
  'secondary-active': 'color-secondary-active',
  'tertiary-disable': 'color-tertiary-disable',
  'tertiary-idle': 'color-tertiary-idle',
  'tertiary-hover': 'color-tertiary-hover',
  'tertiary-active': 'color-tertiary-active'
};

const animationMapping = {
  slow: 'transition-slow',
  normal: 'transition-normal',
  fast: 'transition-fast'
};

interface IContainer extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  theme: keyof typeof themeMapping;
  color: keyof typeof colorMapping;
  animation?: keyof typeof animationMapping;
}

export default function Container({
  animation,
  children,
  className,
  color,
  theme
}: IContainer) {
  const { style, component: Component } = themeMapping[theme];
  const twColor = colorMapping[color];
  const twAnimation = animation ? ` ${animationMapping[animation]}` : '';

  return (
    <Component className={`${style} ${twColor} ${className}${twAnimation}`}>
      {children}
    </Component>
  );
}

Container.prototype = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired
};
