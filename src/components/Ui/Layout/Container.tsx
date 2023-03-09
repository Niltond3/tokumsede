import { ReactNode } from 'react';

import { IColors, Colors } from 'components/Foundation/Colors';
import Layout from 'components/Foundation/Layout';
import Sizing from 'components/Foundation/Sizing';
import { ISpacingSizing, Spacing } from 'components/Foundation/Spacing';

import PropTypes from 'prop-types';

const { position, display, placeContent, placement } = Layout;
const { width, height } = Sizing;

interface props {
  children?: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
  placeContent?: keyof typeof placeContent;
  height: keyof typeof height;
  width: keyof typeof width;
  color: keyof IColors;
  'p-inset'?: keyof ISpacingSizing;
  'p-stack'?: keyof ISpacingSizing;
  'p-stack-begin'?: keyof ISpacingSizing;
  'p-stack-end'?: keyof ISpacingSizing;
  'p-inline'?: keyof ISpacingSizing;
  'p-inline-begin'?: keyof ISpacingSizing;
  'p-inline-end'?: keyof ISpacingSizing;
  'm-inset'?: keyof ISpacingSizing;
  'm-stack'?: keyof ISpacingSizing;
  'm-stack-begin'?: keyof ISpacingSizing;
  'm-stack-end'?: keyof ISpacingSizing;
  'm-inline'?: keyof ISpacingSizing;
  'm-inline-begin'?: keyof ISpacingSizing;
  'm-inline-end'?: keyof ISpacingSizing;
  'placement-inset'?: keyof (typeof placement)['inset'];
  'placement-inset-x'?: keyof (typeof placement)['inset-x'];
  'placement-inset-y'?: keyof (typeof placement)['inset-y'];
  'placement-top'?: keyof (typeof placement)['top'];
  'placement-right'?: keyof (typeof placement)['right'];
  'placement-bottom'?: keyof (typeof placement)['bottom'];
  'placement-left'?: keyof (typeof placement)['left'];
}

export default function Container({ ...rest }: props) {
  const { color, display, placeContent, height, position, width, children } = rest;

  const { 'm-inset': mIns, 'p-inset': pIns } = rest;
  const { 'm-inline': mInl, 'm-inline-end': mInlE, 'm-inline-begin': mInlB } = rest;
  const { 'p-inline': pInl, 'p-inline-end': pInlE, 'p-inline-begin': pInlB } = rest;

  const { 'm-stack': mSta, 'm-stack-end': mStaE, 'm-stack-begin': mStaB } = rest;
  const { 'p-stack': pSta, 'p-stack-end': pStaE, 'p-stack-begin': pStaB } = rest;

  const { 'placement-inset': plIns } = rest;
  const { 'placement-inset-x': plInsX, 'placement-inset-y': plInsY } = rest;
  const { 'placement-top': plTop, 'placement-bottom': plBottom } = rest;
  const { 'placement-left': plLeft, 'placement-right': plRight } = rest;

  const { margin, padding } = Spacing;
  const twPos = Layout.position[position];
  const twDis = Layout.display[display];
  const twPC = Layout.placeContent[placeContent || 'undefined'];
  const twH = Sizing.height[height];
  const tWW = Sizing.width[width];
  const twC = Colors[color];
  const twMIs = margin.inset[mIns || 'undefined'];
  const twMIl = margin.inline[mInl || 'undefined'];
  const twMSt = margin.stack[mSta || 'undefined'];
  const twMIlE = margin['inline-end'][mInlE || 'undefined'];
  const twMIlB = margin['inline-begin'][mInlB || 'undefined'];
  const twMStE = margin['stack-end'][mStaE || 'undefined'];
  const twMStB = margin['stack-begin'][mStaB || 'undefined'];

  const twPIs = padding.inset[pIns || 'undefined'];
  const twPIl = padding.inline[pInl || 'undefined'];
  const twPSt = padding.stack[pSta || 'undefined'];
  const twPIlE = padding['inline-end'][pInlE || 'undefined'];
  const twPIlB = padding['inline-begin'][pInlB || 'undefined'];
  const twPStE = padding['stack-end'][pStaE || 'undefined'];
  const twPStB = padding['stack-begin'][pStaB || 'undefined'];

  const twPlIns = placement.inset[plIns || 'undefined'];
  const twPlInsX = placement['inset-x'][plInsX || 'undefined'];
  const twPlInsY = placement['inset-y'][plInsY || 'undefined'];
  const twPlTop = placement.top[plTop || 'undefined'];
  const twPlRight = placement.right[plRight || 'undefined'];
  const twPlBottom = placement.bottom[plBottom || 'undefined'];
  const twPlLeft = placement.left[plLeft || 'undefined'];
  return (
    <div
      className={`${twPos} ${twDis} ${twPC} ${twH} ${tWW} ${twC} ${twMIs} ${twMIl} ${twMSt} ${twMIlE} ${twMIlB} ${twMStE} ${twMStB} ${twPIs} ${twPIl} ${twPSt} ${twPIlE} ${twPIlB} ${twPStE} ${twPStB}`}
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
