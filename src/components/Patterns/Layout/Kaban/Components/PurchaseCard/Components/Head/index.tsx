import React from 'react';
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import DropdownMenu from './components/DropdownMenu';
import * as icon from 'components/Ui/DataDisplay/Icons';

import SessionWrapper from '../SessionWrapper';

/*ID NUMBER -> DISTRIBUTOR NAME */
export default function Head({
  handleProps
}: {
  handleProps?: DraggableProvidedDragHandleProps | null;
}) {
  return (
    <SessionWrapper
      className="relative items-center justify-between"
      handleProps={handleProps}
    >
      <div className="h-full select-none text-[0px] opacity-0 transition-faster group-hover:animate-pulse group-hover:!text-[25px]">
        <icon.Drag />
      </div>
      <div className="group absolute left-0 flex h-full max-w-min select-none items-center font-bold opacity-30 transition-faster group-hover:left-[10%]">
        <icon.Number />
        000
      </div>
      <span className="absolute right-0 select-none opacity-30 transition-faster group-hover:right-[10%]">
        Distribuidora
      </span>
      <DropdownMenu />
    </SessionWrapper>
  );
}
