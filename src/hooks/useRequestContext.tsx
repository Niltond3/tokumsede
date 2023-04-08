import { createContext } from 'react';

type Address = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  note: string;
};

type Client = {
  id: string;
  name: string;
  contact: string;
  address: Address;
};

type Product = {
  id: string;
  name: string;
  quantity: number;
  price: number;
};

type LifeCircle = {
  responsible: string;
  date: Date;
};

type Payment = 'Dinheiro' | 'Cartão' | 'Pix' | 'IFood';
type Origin = 'Telefone' | 'Site' | 'App';

type Request = {
  id: string;
  priority: string;
  note: string;
  origin: Origin;
  client: Client;
  distributorName: string;
  payment: Payment;
  lifeCircle: {
    register: LifeCircle;
    accepted: LifeCircle;
    dispatched: LifeCircle;
    delivered: LifeCircle;
    canceled: LifeCircle;
    scheduled: LifeCircle;
  };
  products: Product[];
};

type InitialStateType = {
  requests: Request[];
};

const initialState: InitialStateType = {
  requests: []
};

const RequestContext = createContext<InitialStateType>(initialState);
