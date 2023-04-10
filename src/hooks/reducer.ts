import {
  ColumnsType,
  ColumnType,
  InitialPurchaseStateType,
  PurchaseActionsType
} from 'utils/Types';

export const purchaseReducer = (
  state: InitialPurchaseStateType,
  action: PurchaseActionsType
) => {
  switch (action.type) {
    case 'PREPARE_PURCHASE': {
      const { columnId } = action.payload;
      const newColumns = state.columns;

      const { ACCEPTED, DELIVERED, PENDING, DISPATCHED } = newColumns;

      function getCount() {
        let key: keyof ColumnsType;

        for (key in newColumns) {
          newColumns[key].purchasesIds.length;
        }
      }

      newColumns.DELIVERED.countLabel = ACCEPTED.purchasesIds.length;

      newColumns[columnId].purchasesIds = [...newColumns[columnId].purchasesIds, ''];

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

/**
 * When create a request: Add a new request in array of requests, and a new id inside array of column
 */
