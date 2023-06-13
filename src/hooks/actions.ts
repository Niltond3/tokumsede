import * as types from 'common/types';
import { containsOnlyNumbers, getCountRequestsByState } from 'common/utils';
import { toInteger } from 'lodash';

export function reorderColumns(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.reorder]
) {
  const { destination, source, purchaseId } = payload;
  const column = state.columns[source.droppableId as types.PurchaseColumnsKey];
  const newPurchasesIds = Array.from(column.purchasesIds);
  newPurchasesIds.splice(source.index, 1);
  newPurchasesIds.splice(destination.index, 0, purchaseId);

  const newColumn = { ...column, purchasesIds: newPurchasesIds };

  const newColumns = { ...state.columns, [newColumn.id]: newColumn };
  return {
    ...state,
    columns: newColumns
  };
}

export function preparePurchase(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.prepare]
) {
  const { columnId } = payload;
  const newColumns = state.columns;
  const temporaryId = `temp-${state.tempPurchases.length + 1}`;
  const temporaryPurchase: types.PurchaseObjectProps = {
    id: temporaryId,
    distributorName: '',
    note: '',
    payment: 'Cash',
    price: 0,
    exchange: 0,
    origin: 'Site',
    products: [],
    priority: 'normal'
  };

  newColumns[columnId].purchasesIds = [...newColumns[columnId].purchasesIds, temporaryId];

  newColumns[columnId].countLabel = getCountRequestsByState(columnId, newColumns);

  newColumns.DELIVERED.countLabel = getCountRequestsByState('DELIVERED', newColumns);

  return {
    ...state,
    tempPurchases: [...state.tempPurchases, temporaryPurchase],
    columns: {
      ...newColumns
    }
  };
}

export function updatePurchase(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.update]
) {
  const { id, updateFields } = payload;
  const { purchases, tempPurchases } = state;
  const index = toInteger(id.replace(/\D/g, '')) - 1;

  const newState = (
    array: types.PurchaseObjectProps[],
    purchase: types.PurchaseObjectProps,
    key: keyof types.InitialStatePurchaseProps
  ) => {
    const purchases = [
      ...array.slice(0, index),
      { ...purchase, ...updateFields },
      ...array.slice(index + 1)
    ];
    return {
      ...state,
      [key]: purchases
    };
  };

  if (containsOnlyNumbers(id)) {
    const purchase = purchases[index];
    return newState(purchases, purchase, 'purchases');
  }
  const purchase = tempPurchases[index];
  return newState(tempPurchases, purchase, 'tempPurchases');
}
