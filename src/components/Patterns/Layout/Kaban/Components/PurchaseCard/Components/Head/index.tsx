import React from 'react'
import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'

import DropdownMenu from './components/DropdownMenu'
import * as icon from 'components/Ui/DataDisplay/Icons'

import SessionWrapper from '../SessionWrapper'

import * as types from 'common/types'

type PurchaseCardHeadProps = {
  handleProps?: DraggableProvidedDragHandleProps | null
  status: string
  purchaseId: string
  fromIndex: number
}

/* ID NUMBER -> DISTRIBUTOR NAME */
export default function Head({
  handleProps,
  status,
  purchaseId,
  fromIndex,
}: PurchaseCardHeadProps) {
  return (
    <SessionWrapper
      className="relative items-center justify-end"
      handleProps={handleProps}
    >
      <div className="absolute left-0 select-none text-[0px] opacity-0 transition-faster center-x group-hover:animate-pulse group-hover:!text-lg">
        <icon.Drag />
      </div>
      <div className="group absolute left-0 flex h-full max-w-min select-none items-center font-bold opacity-30 transition-faster group-hover:left-[10%]">
        <icon.Number />
        000
      </div>
      <span className="absolute right-0 select-none opacity-30 transition-faster group-hover:right-[10%]">
        Distribuidora
      </span>
      <DropdownMenu
        status={status}
        from={status as types.PurchaseColumnsKey}
        purchaseId={purchaseId}
        fromIndex={fromIndex}
      />
    </SessionWrapper>
  )
}
