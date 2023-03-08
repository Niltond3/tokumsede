import { ReactNode } from 'react';

import { IColors, Colors } from 'components/Foundation/Colors';
import Layout from 'components/Foundation/Layout';
import Sizing from 'components/Foundation/Sizing';
import { ISpacingSizing, Spacing } from 'components/Foundation/Spacing';

import PropTypes from 'prop-types';

const { position, display } = Layout;
const { width, height } = Sizing;

interface props {
  children?: ReactNode;
  position: keyof typeof position;
  display: keyof typeof display;
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
}

export default function Container({ ...rest }: props) {
  const { color, display, height, position, width, children } = rest;

  const { 'm-inset': mIns, 'p-inset': pIns } = rest;
  const { 'm-inline': mInl, 'm-inline-end': mInlE, 'm-inline-begin': mInlB } = rest;
  const { 'p-inline': pInl, 'p-inline-end': pInlE, 'p-inline-begin': pInlB } = rest;

  const { 'm-stack': mSta, 'm-stack-end': mStaE, 'm-stack-begin': mStaB } = rest;
  const { 'p-stack': pSta, 'p-stack-end': pStaE, 'p-stack-begin': pStaB } = rest;

  const { margin, padding } = Spacing;
  const twPosition = Layout.position[position];
  const twDisplay = Layout.display[display];
  const twHeight = Sizing.height[height];
  const twWidth = Sizing.width[width];
  const twColors = Colors[color];
  const twmIns = margin.inset[mIns || 'undefined'];
  const twmInl = margin.inline[mInl || 'undefined'];
  const twmSta = margin.stack[mSta || 'undefined'];
  const twmInlE = margin['inline-end'][mInlE || 'undefined'];
  const twmInlB = margin['inline-begin'][mInlB || 'undefined'];
  const twmStaE = margin['stack-end'][mStaE || 'undefined'];
  const twmStaB = margin['stack-begin'][mStaB || 'undefined'];

  const twpIns = padding.inset[pIns || 'undefined'];
  const twpInl = padding.inline[pInl || 'undefined'];
  const twpSta = padding.stack[pSta || 'undefined'];
  const twpInlE = padding['inline-end'][pInlE || 'undefined'];
  const twpInlB = padding['inline-begin'][pInlB || 'undefined'];
  const twpStaE = padding['stack-end'][pStaE || 'undefined'];
  const twpStaB = padding['stack-begin'][pStaB || 'undefined'];

  return (
    <div
      className={`${twPosition} ${twDisplay} ${twHeight} ${twWidth} ${twColors} ${twmIns} ${twmInl} ${twmSta} ${twmInlE} ${twmInlB} ${twmStaE} ${twmStaB} ${twpIns} ${twpInl} ${twpSta} ${twpInlE} ${twpInlB} ${twpStaE} ${twpStaB}`}
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
