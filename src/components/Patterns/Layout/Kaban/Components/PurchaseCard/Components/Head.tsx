import React from 'react';

import { Copy, Number } from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';

import { ToClipboard } from '../Handles';
import SessionWrapper from './Body/Components/SessionWrapper';

/*ID NUMBER -> DISTRIBUTOR NAME */
export default function Head() {
  return (
    <SessionWrapper className="justify-between [&>*]:opacity-30 ">
      <Tooltip content={<Copy />} side="right">
        <Button
          className="group relative max-w-min"
          data-clipboard={'000'}
          onClick={ToClipboard}
        >
          <Number />
          000
        </Button>
      </Tooltip>
      <span>Distribuidora</span>
    </SessionWrapper>
  );
}
