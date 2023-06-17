import * as types from 'common/types';
import {
  containsOnlyNumbers,
  getCountRequestsByState,
  immutableDelete,
  immutableInsert,
  immutableMove
} from 'common/utils';
import { toInteger } from 'lodash';

export function reorderColumns(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.reorder]
) {
  const newState = { ...state };

  const { from, fromIndex, purchaseId, to, toIndex } = payload;

  if (from == to) {
    const column = { ...newState.columns[from] };

    const newColumn = {
      ...column,
      purchasesIds: immutableMove(column.purchasesIds, purchaseId, fromIndex, toIndex)
    };

    return {
      ...newState,
      columns: { ...newState.columns, [newColumn.id]: newColumn }
    };
  }

  const sourceColumn = { ...newState.columns[from] };
  const destinationColumn = { ...newState.columns[to] };
  const newSourceColumn = {
    ...sourceColumn,
    purchasesIds: immutableDelete(sourceColumn.purchasesIds, fromIndex)
  };

  const newDestinationColumn = {
    ...destinationColumn,
    purchasesIds: immutableInsert(destinationColumn.purchasesIds, purchaseId, toIndex)
  };
  const newColumns = {
    ...newState.columns,
    [newSourceColumn.id]: newSourceColumn,
    [newDestinationColumn.id]: newDestinationColumn
  };

  newColumns[newSourceColumn.id].countLabel = getCountRequestsByState(
    newSourceColumn.id,
    newColumns
  );

  newColumns[newDestinationColumn.id].countLabel = getCountRequestsByState(
    newDestinationColumn.id,
    newColumns
  );

  newColumns.DELIVERED.countLabel = getCountRequestsByState('DELIVERED', newColumns);

  return {
    ...newState,
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
