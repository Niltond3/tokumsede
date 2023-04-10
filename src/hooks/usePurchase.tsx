'use client';
import { ReactNode, createContext, useReducer, Dispatch } from 'react';

import { purchaseReducer } from './reducer';

import { InitialPurchaseStateType, PurchaseActionsType } from 'utils/Types';

const initialState: InitialPurchaseStateType = {
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
