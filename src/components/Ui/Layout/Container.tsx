import { ReactNode } from 'react';

import Colors from 'components/Foundation/Colors';
import Layout from 'components/Foundation/Layout';
import Sizing from 'components/Foundation/Sizing';
import Spacing from 'components/Foundation/Spacing';

import PropTypes from 'prop-types';

const { position, display } = Layout;
const { width, height } = Sizing;
const m = Spacing('margin').general;
const mt = Spacing('margin', 'top').specific;
const mb = Spacing('margin', 'bottom').specific;
const ml = Spacing('margin', 'left').specific;
const mr = Spacing('margin', 'right').specific;

const p = Spacing('padding').general;
const pt = Spacing('padding', 'top').specific;
const pb = Spacing('padding', 'bottom').specific;
const pl = Spacing('padding', 'left').specific;
const pr = Spacing('padding', 'right').specific;

interface props {
  children?: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
  height: keyof typeof height;
  width: keyof typeof width;
  margin?: keyof typeof m;
  mTop?: keyof typeof mt;
  mBotton?: keyof typeof mb;
  mleft?: keyof typeof ml;
  mRight?: keyof typeof mr;
  padding?: keyof typeof p;
  pTop?: keyof typeof pt;
  pBotton?: keyof typeof pb;
  pleft?: keyof typeof pl;
  pRight?: keyof typeof pr;
  color: keyof typeof Colors;
}
export default function Container({
  children,
  position,
  display,
  height,
  width,
  margin = 'inset-none',
  mTop = 'none',
  mBotton = 'none',
  mleft = 'none',
  mRight = 'none',
  padding = 'inset-none',
  pTop = 'none',
  pBotton = 'none',
  pleft = 'none',
  pRight = 'none',
  color
}: props) {
  const twPosition = Layout.position[position];
  const twDisplay = Layout.display[display];
  const twHeight = Sizing.height[height];
  const twWidth = Sizing.width[width];
  const twColors = Colors[color];
  const twMargin = m[margin];
  const twmTop = mt[mTop];
  const twmBotton = mb[mBotton];
  const twmleft = ml[mleft];
  const twmRight = mr[mRight];
  const twPadding = p[padding];
  const twpTop = pt[pTop];
  const twpBotton = pb[pBotton];
  const twpleft = pl[pleft];
  const twpRight = pr[pRight];
  return (
    <div
      className={`${twPosition} ${twDisplay} ${twHeight} ${twWidth} ${twColors} ${twMargin} ${twmTop} ${twmBotton} ${twmleft} ${twmRight} ${twPadding} ${twpTop} ${twpBotton} ${twpleft} ${twpRight} `}
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
