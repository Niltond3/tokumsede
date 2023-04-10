'use client';
import { ReactNode, createContext, useReducer, Dispatch } from 'react';

import { purchaseReducer } from './reducer';

import { InitialPurchaseStateType, PurchaseActionsType } from 'utils/Types';

const initialState: InitialPurchaseStateType = {
  purchases: [],
  columns: {
    PENDING: { id: 'PENDING', purchasesIds: [] },
    ACCEPTED: { id: 'ACCEPTED', purchasesIds: [] },
    DISPATCHED: { id: 'DISPATCHED', purchasesIds: [] },
    DELIVERED: { id: 'DELIVERED', purchasesIds: [] },
    CANCELED: { id: 'CANCELED', purchasesIds: [] },
    SCHEDULED: { id: 'SCHEDULED', purchasesIds: [] }
  }
};

const AppContext = createContext<{
  state: InitialPurchaseStateType;
  dispatch: Dispatch<PurchaseActionsType>;
}>({ state: initialState, dispatch: () => null });

const reducer = (state: InitialPurchaseStateType, action: PurchaseActionsType) =>
  purchaseReducer(state, action);

function AppProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>{children}</AppContext.Provider>
  );
}
export { AppContext, AppProvider };
