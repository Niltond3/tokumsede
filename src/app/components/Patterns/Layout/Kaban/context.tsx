import { ReactNode, createContext, useReducer } from 'react';
import {requestReducer, RequestActions, } from './reducer'

type AddressType = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  note: string;
};

type ClientType = {
  id: number;
  name: string;
  contact: string;
  address: AddressType;
};

type ProductType = {
  id: number;
  name: string;
  quantity: number;
  price: number;
};

type LifeCircleType = {
  responsible: string;
  date: Date;
};

type PaymentType = 'Dinheiro' | 'Cartão' | 'Pix' | 'IFood';
type OriginType = 'Telefone' | 'Site' | 'App';

export type RequestType = {
  id: number;
  priority: string;
  note: string;
  origin: OriginType;
  client: ClientType;
  distributorName: string;
  payment: PaymentType;
  lifeCircle: {
    register: LifeCircleType;
    accepted: LifeCircleType;
    dispatched: LifeCircleType;
    delivered: LifeCircleType;
    canceled: LifeCircleType;
    scheduled: LifeCircleType;
  };
  products: ProductType[];
};

//--------------------------------------------

type ColumnIdType =
  | 'PENDING'
  | 'ACCEPTED'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELED'
  | 'SCHEDULED';

type ColumnType ={
  id: ColumnIdType;
  requestsIds: string[];
}

type InitialStateType = {
  requests: RequestType[];
  columns:{
    PENDING: ColumnType;
    ACCEPTED: ColumnType;
    DISPATCHED: ColumnType;
    DELIVERED: ColumnType;
    CANCELED: ColumnType;
    SCHEDULED: ColumnType;
  }
};

const initialState: InitialStateType = {
  requests: [],
  columns:{
    PENDING:{id:'PENDING', requestsIds:[]},
    ACCEPTED:{id:'ACCEPTED', requestsIds:[]},
    DISPATCHED:{id:'DISPATCHED', requestsIds:[]},
    DELIVERED:{id:'DELIVERED', requestsIds:[]},
    CANCELED:{id:'CANCELED', requestsIds:[]},
    SCHEDULED:{id:'SCHEDULED', requestsIds:[]},
  }
};

const AppContext = createContext<{state:InitialStateType; dispatch:React.Dispatch<RequestActions>}>({state:initialState,dispatch:()=> null});

function AppProvider ({children}:{children:ReactNode}) {
  const [state,dispatch] = useReducer((state, action)=>{}, initialState);

  return (
    <AppContext.Provider value={{state,dispatch}}>{children}</AppContext.Provider>
  )
}
export {AppContext,AppProvider}
