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
    <SessionWrapper className="group items-center justify-between">
      <div
        className="h-full text-[25px] opacity-0 transition-faster group-hover:opacity-50"
        {...handleProps}
      >
        <icon.Drag></icon.Drag>
      </div>
      <Button
        className="group h-full max-w-min translate-x-[-80%] opacity-30 group-hover:translate-x-0"
        data-clipboard={'000'}
        onClick={ToClipboard}
      >
        <icon.Number />
        000
      </Button>
      <span className="opacity-30">Distribuidora</span>
    </SessionWrapper>
  );
}
