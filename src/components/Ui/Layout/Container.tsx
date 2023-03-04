import { ReactNode } from 'react';

import Layout from 'components/Foundation/Layout';

import PropTypes from 'prop-types';

const { position, display } = Layout;

interface props {
  children: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
}
export default function Container({ children, position }: props) {
  return <div className={`${position}${display}`}>{children}</div>;
}
