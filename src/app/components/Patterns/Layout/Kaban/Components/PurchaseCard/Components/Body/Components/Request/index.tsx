import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';

import SessionWrapper from '../SessionWrapper';
import Marketplace from './Marketplace';

export default function Request() {
  return (
    <SessionWrapper>
      <div className="flex gap-2">
        <i className="flex flex-[10%]">
          <Icons icon="Address" />
        </i>
        <Marketplace />
      </div>
    </SessionWrapper>
  );
}
