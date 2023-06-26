import * as types from 'common/types'
import { containsOnlyNumbers, getCountRequestsByState } from 'common/utils'
import { toInteger } from 'lodash'

export function reorderColumns(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.reorder],
) {
  const newState = state

  const { from, fromIndex, purchaseId, to, toIndex } = payload

  if (from === to && fromIndex === toIndex) return state
  const newFromColumn = newState.columns[from]
  const newToColumn = newState.columns[to]

  newFromColumn.purchasesIds.splice(fromIndex, 1)

  newToColumn.purchasesIds.splice(toIndex, 0, purchaseId)

  const newColumns = {
    ...newState.columns,
    [from]: newFromColumn,
    [to]: newToColumn,
  }

  const newFromColumnCount = getCountRequestsByState(from, newColumns)
  const newToColumnCount = getCountRequestsByState(to, newColumns)
  const newDeliveryCount = getCountRequestsByState('DELIVERED', newState.columns)

  return {
    ...newState,
    columns: {
      ...newColumns,
      [from]: { ...newFromColumn, countLabel: newFromColumnCount },
      [to]: { ...newToColumn, countLabel: newToColumnCount },
      DELIVERED: { ...newColumns.DELIVERED, countLabel: newDeliveryCount },
    },
  }
}

export function preparePurchase(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.prepare],
) {
  const { columnId } = payload
  const newColumns = state.columns
  const temporaryId = `temp-${state.tempPurchases.length + 1}`
  const temporaryPurchase: types.PurchaseObjectProps = {
    id: temporaryId,
    distributorName: '',
    note: '',
    payment: 'Cash',
    price: 0,
    exchange: 0,
    origin: 'Site',
    products: [],
    priority: 'normal',
  }

  newColumns[columnId].purchasesIds = [...newColumns[columnId].purchasesIds, temporaryId]

  newColumns[columnId].countLabel = getCountRequestsByState(columnId, newColumns)

  newColumns.DELIVERED.countLabel = getCountRequestsByState('DELIVERED', newColumns)

  return {
    ...state,
    tempPurchases: [...state.tempPurchases, temporaryPurchase],
    columns: {
      ...newColumns,
    },
  }
}

export function updatePurchase(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.update],
) {
  const { id, updateFields } = payload
  const { purchases, tempPurchases } = state
  const index = toInteger(id.replace(/\D/g, '')) - 1

  const newState = (
    array: types.PurchaseObjectProps[],
    purchase: types.PurchaseObjectProps,
    key: keyof types.InitialStatePurchaseProps,
  ) => {
    const purchases = [
      ...array.slice(0, index),
      { ...purchase, ...updateFields },
      ...array.slice(index + 1),
    ]
    return {
      ...state,
      [key]: purchases,
    }
  }

  if (containsOnlyNumbers(id)) {
    const purchase = purchases[index]
    return newState(purchases, purchase, 'purchases')
  }
  const purchase = tempPurchases[index]
  return newState(tempPurchases, purchase, 'tempPurchases')
}
