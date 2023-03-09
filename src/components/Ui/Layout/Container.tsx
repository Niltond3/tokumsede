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
    style: 'container-bar container-bar_app',
    color: Colors.primary
  },
  'left-bar': {
    component: 'aside',
    style: 'container-bar container-bar_left',
    color: Colors.transparent
  },
  'right-bar': {
    component: 'aside',
    style: 'container-bar container-bar_right',
    color: Colors.transparent
  }
} as const;

interface IContainer extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  theme: keyof typeof themeMapping;
}

export default function Container({ theme, children, className }: IContainer) {
  const { style, color, component: Component } = themeMapping[theme];
  return <Component className={`${style} ${color} ${className}`}>{children}</Component>;
}

Container.prototype = {
  children: PropTypes.node,
  theme: PropTypes.string.isRequired
};
