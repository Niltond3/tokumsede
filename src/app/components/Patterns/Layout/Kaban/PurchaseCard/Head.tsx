import React from 'react';

import { Copy, Number } from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';

import { SessionWrapper, ToClipboard } from '.';

export default function Head() {
  return (
    <SessionWrapper className="flex justify-between text-xs font-medium [&>*]:opacity-30">
      {/* UPDATE THIS BUTTON */}
      <Tooltip content={<Copy />} side="right">
        <Button className="group relative" data-clipboard={'000'} onClick={ToClipboard}>
          <Number />
          000
        </Button>
      </Tooltip>
      {/* UPDATE THIS BUTTON */}
      <span>Distribuidora</span>
    </SessionWrapper>
  );
}
