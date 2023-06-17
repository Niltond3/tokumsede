import React from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import * as icon from 'components/Ui/DataDisplay/Icons';
import Tooltip from 'components/Ui/DataDisplay/Tooltip';
import Button from 'components/Ui/Inputs/Button';

import SessionWrapper from './Body/Components/SessionWrapper';

import { ToClipboard } from 'common/utils';

/*ID NUMBER -> DISTRIBUTOR NAME */
export default function Head({
  handleProps
}: {
  handleProps?: DraggableProvidedDragHandleProps | null;
}) {
  return (
    <SessionWrapper className="justify-between [&>*]:opacity-30">
      <Button className="h-full text-2xl" {...handleProps}>
        <icon.Drag></icon.Drag>
      </Button>
      <Tooltip content={<icon.Copy />} side="right">
        <Button className="group max-w-min" data-clipboard={'000'} onClick={ToClipboard}>
          <icon.Number />
          000
        </Button>
      </Tooltip>
      <span>Distribuidora</span>
    </SessionWrapper>
  );
}
