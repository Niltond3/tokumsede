import * as types from 'common/types';
import { containsOnlyNumbers, getCountRequestsByState } from 'common/utils';
import { toInteger } from 'lodash';

export function reorderColumns(
  state: types.InitialStatePurchaseProps,
  payload: types.PurchasePayload[types.PURCHASE_ACTION_TYPES.reorder]
) {
  const { destination, source, purchaseId } = payload;
  const newState = { ...state };

  if (source.droppableId == destination.droppableId) {
    const column = newState.columns[source.droppableId as types.PurchaseColumnsKey];
    const newPurchasesIds = [
      ...column.purchasesIds.slice(0, source.index),
      purchaseId,
      ...column.purchasesIds.slice(source.index + 1)
    ];

    const newColumn = { ...column, purchasesIds: newPurchasesIds };

    return {
      ...newState,
      columns: { ...newState.columns, [newColumn.id]: newColumn }
    };
  }

  const sourceColumn = newState.columns[source.droppableId as types.PurchaseColumnsKey];
  const destinationColumn =
    newState.columns[destination.droppableId as types.PurchaseColumnsKey];

  const newSourceColumn = {
    ...sourceColumn,
    purchasesIds: [
      ...sourceColumn.purchasesIds.slice(0, source.index),
      ...sourceColumn.purchasesIds.slice(source.index + 1)
    ]
  };

  const newDestinationColumn = {
    ...destinationColumn,
    purchasesIds: [
      ...destinationColumn.purchasesIds.slice(0, destination.index),
      purchaseId,
      ...destinationColumn.purchasesIds.slice(destination.index)
    ]
  };

  return {
    ...newState,
    columns: {
      ...newState.columns,
      [newSourceColumn.id]: newSourceColumn,
      [newDestinationColumn.id]: newDestinationColumn
    }
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
