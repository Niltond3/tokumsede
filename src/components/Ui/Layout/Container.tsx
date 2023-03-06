import { ReactNode } from 'react';

import Colors from 'components/Foundation/Colors';
import Layout from 'components/Foundation/Layout';
import Sizing from 'components/Foundation/Sizing';
import Spacing from 'components/Foundation/Spacing';

import PropTypes from 'prop-types';

const { position, display } = Layout;
const { width, height } = Sizing;
const { margin, padding } = Spacing;

interface props {
  children?: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
  height: keyof typeof height;
  width: keyof typeof width;
  margin: keyof typeof margin;
  padding: keyof typeof padding;
  color: keyof typeof Colors;
}
export default function Container({
  children,
  position,
  display,
  height,
  width,
  margin,
  padding,
  color
}: props) {
  const twPosition = Layout.position[position];
  const twDisplay = Layout.display[display];
  const twHeight = Sizing.height[height];
  const twWidth = Sizing.width[width];
  const twColors = Colors[color];
  const twMargin = Spacing.margin[margin];
  const twPadding = Spacing.padding[padding];
  return (
    <div
      className={`${twPosition} ${twDisplay} ${twHeight} ${twWidth} ${twColors} ${twMargin} ${twPadding}`}
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
