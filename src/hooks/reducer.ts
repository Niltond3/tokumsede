import { ColumnsType, InitialPurchaseStateType, PurchaseActionsType } from 'utils/Types';

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

      console.log(newColumns);
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
/**
 * When create a request: Add a new request in array of requests, and a new id inside array of column
 */
