import { ActionMap } from 'utils/Types';

export enum PURCHASE_ACTION_TYPES {
  prepare = 'PREPARE_PURCHASE',
  create = 'CREATE_PURCHASE',
  delete = 'DELETE_PURCHASE'
}

type PurchasePayload = {
  [PURCHASE_ACTION_TYPES.prepare]: { columnId: keyof ColumnsType };
  [PURCHASE_ACTION_TYPES.create]: {
    columnId: keyof ColumnsType;
    purchase: IPurchase;
  };
  [PURCHASE_ACTION_TYPES.delete]: { id: number };
};

export type InitialPurchaseStateType = {
  purchases: IPurchase[];
  columns: ColumnsType;
};

export type PurchaseActionsType =
  ActionMap<PurchasePayload>[keyof ActionMap<PurchasePayload>];

export const purchaseReducer = (
  state: InitialPurchaseStateType,
  action: PurchaseActionsType
) => {
  switch (action.type) {
    case 'PREPARE_PURCHASE': {
      const { columnId } = action.payload;
      const newColumns = state.columns;

      newColumns[columnId].purchasesIds = [...newColumns[columnId].purchasesIds, ''];

      newColumns[columnId].countLabel = getCount(columnId, newColumns);

      newColumns.DELIVERED.countLabel = getCount('DELIVERED', newColumns);

      return {
        ...state,
        columns: {
          ...newColumns
        }
      };
    }
    case 'CREATE_PURCHASE': {
      return state;
    }
    case 'DELETE_PURCHASE': {
      return state;
    }
    default: {
      return state;
    }
  }
};
function getCount(id: keyof ColumnsType, columns: ColumnsType) {
  const { DELIVERED } = columns;
  if (id === 'DELIVERED') {
    let key: keyof ColumnsType;
    let count = 0;
    for (key in columns)
      if (key !== 'DELIVERED' && key !== 'CANCELED')
        count = count + columns[key].purchasesIds.length;
    return `${count}/${DELIVERED.purchasesIds.length}`;
  }
  return columns[id].purchasesIds.length;
}

const reducer = (state: InitialPurchaseStateType, action: PurchaseActionsType) =>
  purchaseReducer(state, action);

export default reducer;
