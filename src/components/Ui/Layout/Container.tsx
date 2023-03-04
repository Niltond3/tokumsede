import { ReactNode } from 'react';

import Colors from 'components/Foundation/Colors';
import Layout from 'components/Foundation/Layout';
import Sizing from 'components/Foundation/Sizing';

import PropTypes from 'prop-types';

const { position, display } = Layout;
const { width, height } = Sizing;

interface props {
  children?: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
  height: keyof typeof height;
  width: keyof typeof width;
  color: keyof typeof Colors;
}
export default function Container({
  children,
  position,
  display,
  height,
  width,
  color
}: props) {
  const containerPosition = Layout.position[position];
  const containerDisplay = Layout.display[display];
  const containerHeight = Sizing.height[height];
  const containerWidth = Sizing.width[width];
  const containerColors = Colors[color];
  return (
    <div
      className={`${containerPosition} ${containerDisplay} ${containerHeight} ${containerWidth} ${containerColors}`}
    >
      {children}
    </div>
  );
}

Container.prototype = {
  position: PropTypes.string.isRequired,
  display: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired
};
