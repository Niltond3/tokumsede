import { useContext, useEffect } from 'react'

import Body from './Components/Body'
import Footer from './Components/Footer'
import Head from './Components/Head'

import clsx from 'clsx'
import * as types from 'common/types'
import { containsOnlyNumbers } from 'common/utils'
import { motion, useAnimationControls } from 'framer-motion'
import { AppContext } from 'hooks/usePurchase'
import { toInteger } from 'lodash'

export default function PurchaseCard({
  index,
  purchaseId,
  currentStatus,
  provider,
  snapshot,
  columnId,
}: types.KabanPurchaseCardProps) {
  const { state } = useContext(AppContext)
  const { purchases, tempPurchases } = state
  const alreadyExist = containsOnlyNumbers(purchaseId)
  const controls = useAnimationControls()
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

  const { searchArray, styles } = arrayBase[`${alreadyExist}`]

  const arrayIndex = toInteger(purchaseId.replace(/\D/g, '')) - 1
  const purchase = searchArray[arrayIndex]

  useEffect(() => {
    if (!purchase.updateAt) {
      controls.start('create')
      return
    }
    controls.start('update')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [controls])

  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase()
  const base = 4
  const t = (d: number) => d * base
  const isMoving = () => purchase.currentStatus !== columnId
  return (
    <motion.div
      key={purchase.id}
      ref={provider.innerRef}
      {...provider.draggableProps}
      className={clsx(
        'group !left-auto !top-auto max-w-[12rem] rounded-md p-2 text-sm @container',
        'hover:elevation-5',
        `${styles(snapshot.isDragging)}`,
      )}
      initial={isMoving() ? 'update' : 'delete'}
      animate={controls}
      exit="delete"
      transition={{
        opacity: { duration: isMoving() ? 0 : t(0.03) },
        height: { duration: isMoving() ? 0 : t(0.2) },
      }}
      variants={{
        create: {
          height: 'auto',
          opacity: 1,
          marginTop: 4,
          transition: {
            opacity: { delay: t(0.025) },
          },
        },
        delete: {
          height: 0,
          opacity: 0,
          marginTop: 0,
        },
        update: {
          height: 'auto',
          opacity: 1,
          marginTop: 4,
          transition: { duration: 0 },
        },
      }}
    >
      <Head
        handleProps={provider.dragHandleProps}
        status={currentStatus}
        purchase={purchase}
        fromIndex={index}
      />
      <Body dropDownId={dropDownId} purchase={purchase} />
      <Footer />
    </motion.div>
  )
}
