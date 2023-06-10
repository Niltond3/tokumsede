import * as types from 'common/types';
import { containsOnlyNumbers } from 'common/utils';
import { toInteger } from 'lodash';

export const purchaseReducer = (
  state: types.InitialStatePurchaseProps,
  action: types.ActionPurchaseProps
) => {
  switch (action.type) {
    case 'REORDER_COLUMNS': {
      const { destination, source, purchaseId } = action.payload;
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
    case 'PREPARE_PURCHASE': {
      const { columnId } = action.payload;
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

      newColumns[columnId].purchasesIds = [
        ...newColumns[columnId].purchasesIds,
        temporaryId
      ];

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
    case 'CREATE_PURCHASE': {
      return state;
    }
    case 'UPDATE_PURCHASE': {
      const { id, updateFields } = action.payload;
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
    case 'DELETE_PURCHASE': {
      return state;
    }
    default: {
      return state;
    }
  }
};

function getCountRequestsByState(
  id: types.PurchaseColumnsKey,
  columns: types.PurchaseColumnsType
) {
  const { DELIVERED } = columns;
  if (id === 'DELIVERED') {
    let key: types.PurchaseColumnsKey;
    let count = 0;
    for (key in columns)
      if (key !== 'DELIVERED' && key !== 'CANCELED')
        count = count + columns[key].purchasesIds.length;
    return `${count}/${DELIVERED.purchasesIds.length}`;
  }
  return columns[id].purchasesIds.length;
}
