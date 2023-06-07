import * as types from 'common/types';
//{ ColumnsType, InitialPurchaseStateType, PurchaseActionsType }

export const purchaseReducer = (
  state: types.InitialStatePurchaseProps,
  action: types.ActionPurchaseProps
) => {
  switch (action.type) {
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
