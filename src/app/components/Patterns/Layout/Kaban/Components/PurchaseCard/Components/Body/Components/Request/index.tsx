import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';

import SessionWrapper from '../SessionWrapper';
import Marketplace from './Marketplace';

export default function Request() {
  return (
    <SessionWrapper>
      <div className="flex min-h-[2rem] gap-2">
        <i className="flex flex-[10%] items-center justify-center">
          <Icons icon="Address" />
        </i>
        <Marketplace />
      </div>
    </SessionWrapper>
  );
}
