import { useContext } from 'react'

import Body from './Components/Body'
import Footer from './Components/Footer'
import Head from './Components/Head'

import clsx from 'clsx'
import * as types from 'common/types'
import { containsOnlyNumbers } from 'common/utils'
import { AppContext } from 'hooks/usePurchase'
import { toInteger } from 'lodash'

export default function PurchaseCard({
  index,
  purchaseId,
  currentStatus,
  provider,
  snapshot,
}: types.KabanPurchaseCardProps) {
  const { state } = useContext(AppContext)
  const { purchases, tempPurchases } = state
  const isSaved = containsOnlyNumbers(purchaseId)
  const arrayBase = {
    true: {
      searchArray: purchases,
      styles: (isDragging: boolean) =>
        `text-lg-primary-base ${isDragging ? 'bg-lg-secondary/80' : 'bg-lg-secondary'}`,
    },
    false: {
      searchArray: tempPurchases,
      styles: (isDragging: boolean) =>
        clsx(
          `border-[1px] border-dashed border-lg-primary text-lg-primary-darker`,
          `[&_.separator]:bg-lg-primary-darker/30`,
          `${isDragging ? 'bg-lg-secondary-base/80' : 'bg-lg-secondary-base'}`,
        ),
    },
  }

  const { searchArray, styles } = arrayBase[`${isSaved}`]

  const arrayIndex = toInteger(purchaseId.replace(/\D/g, '')) - 1
  const purchase = searchArray[arrayIndex]

  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase()
  // const base = 4;
  // const time = (d: number) => d * base;

  return (
    <div
      ref={provider.innerRef}
      {...provider.draggableProps}
      className={clsx(
        'group !left-auto !top-auto mt-2 max-w-[12rem] rounded-md p-2 text-sm @container transition-faster',
        'hover:translate-x-0.5 hover:translate-y-0.5 hover:elevation-5',
        `${styles(snapshot.isDragging)}`,
      )}
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
      <Head
        handleProps={provider.dragHandleProps}
        status={currentStatus}
        purchaseId={purchaseId}
        fromIndex={index}
      />
      <Body dropDownId={dropDownId} purchase={purchase} />
      <Footer />
    </div>
  )
}
