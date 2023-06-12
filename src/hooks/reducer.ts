import * as types from 'common/types';
import { containsOnlyNumbers } from 'common/utils';
import { toInteger } from 'lodash';

const { PURCHASE_ACTION_TYPES: actionTypes } = types;

const actionHandlers = {
  [actionTypes.reorder]: ({ state, action }: types.ActionHandlersProps) => {
    const { destination, source, purchaseId } = action[actionTypes.reorder];
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
  },
  [actionTypes.prepare]: ({ state, action }: types.ActionHandlersProps) => {
    const { columnId } =
      action.payload as types.PurchasePayload[typeof actionTypes.prepare];
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
  },
  [actionTypes.create]: ({ state, action }: types.ActionHandlersProps) => state,
  [actionTypes.update]: ({ state, action }: types.ActionHandlersProps) => {
    const { id, updateFields } =
      action.payload as types.PurchasePayload[typeof actionTypes.update];
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
  },
  [actionTypes.delete]: ({ state, action }: types.ActionHandlersProps) => state
};

export const purchaseReducer = (
  state: types.InitialStatePurchaseProps,
  action: types.ActionPurchaseProps
) => {
  const actionHandler = actionHandlers[action.type];
  if (actionHandler) {
    return actionHandler({ state, action: action.payload });
  }
  return state;
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
