/* eslint-disable @typescript-eslint/no-non-null-assertion */

import { useContext } from 'react';
import { Draggable } from 'react-beautiful-dnd';

import Body from './Components/Body';
import Footer from './Components/Footer';
import Head from './Components/Head';

import * as types from 'common/types';
import { containsOnlyNumbers } from 'common/utils';
import { motion } from 'framer-motion';
import { AppContext } from 'hooks/usePurchase';
import { toInteger } from 'lodash';

export default function PurchaseCard({
  index,
  purchaseId,
  currentStatus
}: types.KabanPurchaseCardProps) {
  const { state } = useContext(AppContext);
  const { purchases, tempPurchases } = state;
  const searchArray = containsOnlyNumbers(purchaseId) ? purchases : tempPurchases;
  const arrayIndex = toInteger(purchaseId.replace(/\D/g, '')) - 1;
  const purchase = searchArray[arrayIndex];

  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase();
  const base = 4;
  const time = (d: number) => d * base;
  return (
    <Draggable draggableId={purchase.id} index={index}>
      {(provider) => {
        return (
          <div
            {...provider.dragHandleProps}
            {...provider.draggableProps}
            key={purchase.id}
            ref={provider.innerRef}
            className="mt-2 max-w-[12rem] flex-1 rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base @container"
            // onDragStart={() => provider.dragHandleProps?.onDragStart}
            // initial={{ opacity: 0 }}
            // animate={{
            //   opacity: 1,
            //   transition: {
            //     type: 'spring',
            //     bounce: 0.3,
            //     opacity: { delaty: time(0.025) }
            //   }
            // }}
            // exit={{ opacity: 0 }}
            // transition={{
            //   duration: time(0.15),
            //   opacity: { duration: time(0.03) }
            // }}
          >
            <Head />
            <Body dropDownId={dropDownId} purchase={purchase} />
            <Footer />
          </div>
        );
      }}
    </Draggable>
  );
}
