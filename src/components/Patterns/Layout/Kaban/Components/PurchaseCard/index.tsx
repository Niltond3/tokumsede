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
    if (!purchase.updateAt) controls.start('create')
    else
      controls.start({
        height: 'auto',
        opacity: 1,
        marginTop: 4,
        transition: { duration: 0 },
      })
  }, [controls, purchase])
  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase()

  function getStyle() {
    const { style } = provider.draggableProps
    if (!snapshot.isDropAnimating) return style

    controls.start({
      height: 100,
    })

    return {
      ...style,
      // cannot be 0, but make it super tiny
      transitionDuration: `0.001s`,
    }
  }

  return (
    <motion.div
      ref={provider.innerRef}
      {...provider.draggableProps}
      className={clsx(
        'group !left-auto !top-auto max-w-[12rem] rounded-md p-2 text-sm @container transition-faster',
        'hover:elevation-5',
        `${styles(snapshot.isDragging)}`,
      )}
      initial="delete"
      animate={controls}
      exit="delete"
      variants={{
        create: {
          height: 'auto',
          opacity: 1,
          marginTop: 4,
        },
        delete: {
          height: 0,
          opacity: 0,
          marginTop: 0,
        },
      }}
      style={getStyle()}
    >
      <Head
        handleProps={provider.dragHandleProps}
        status={currentStatus}
        purchaseId={purchaseId}
        fromIndex={index}
      />
      <Body dropDownId={dropDownId} purchase={purchase} />
      <Footer />
    </motion.div>
  )
}
