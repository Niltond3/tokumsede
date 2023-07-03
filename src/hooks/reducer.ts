import {
  deletePurchase,
  preparePurchase,
  reorderColumns,
  updatePurchase,
} from './actions'

import * as types from 'common/types'
const { PURCHASE_ACTION_TYPES: actionTypes } = types

const actionHandlers: types.ActionHandlersProps = {
  [actionTypes.reorder]: (state, payload) => reorderColumns(state, payload),
  [actionTypes.prepare]: (state, payload) => preparePurchase(state, payload),
  [actionTypes.create]: (state, payload) => state,
  [actionTypes.update]: (state, payload) => updatePurchase(state, payload),
  [actionTypes.delete]: (state, payload) => deletePurchase(state, payload),
}

export const purchaseReducer = (
  state: types.InitialStatePurchaseProps,
  action: types.ActionPurchaseProps,
) => {
  const { type, payload } = action
  const actionHandler = actionHandlers[type]

  if (actionHandler)
    return actionHandler(state, payload as types.UnionToIntersection<typeof payload>)
  return state
}
