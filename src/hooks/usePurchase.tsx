'use client';
import { ReactNode, createContext, useReducer, Dispatch } from 'react';

import { purchaseReducer } from './reducer';

import * as types from 'common/types';

const initialState: types.InitialStatePurchaseProps = {
  tempPurchases: [],
  purchases: [],
  columns: {
    PENDING: { id: 'PENDING', purchasesIds: [], countLabel: 0 },
    ACCEPTED: { id: 'ACCEPTED', purchasesIds: [], countLabel: 0 },
    DISPATCHED: { id: 'DISPATCHED', purchasesIds: [], countLabel: 0 },
    DELIVERED: { id: 'DELIVERED', purchasesIds: [], countLabel: 0 },
    CANCELED: { id: 'CANCELED', purchasesIds: [], countLabel: 0 },
    SCHEDULED: { id: 'SCHEDULED', purchasesIds: [], countLabel: 0 }
  }
};

const AppContext = createContext<{
  state: types.InitialStatePurchaseProps;
  dispatch: Dispatch<types.ActionPurchaseProps>;
}>({ state: initialState, dispatch: () => null });

const reducer = (
  state: types.InitialStatePurchaseProps,
  action: types.ActionPurchaseProps
) => purchaseReducer(state, action);

function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
