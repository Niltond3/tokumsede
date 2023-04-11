import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import { thisIcons } from 'app/components/Ui/DataDisplay/Icons';

export type TypeIcons = typeof thisIcons;

type ContentLabel = {
  icon: keyof TypeIcons;
  ariaLabel?: string;
  title: string;
};

export type JSXLabel = ({ ariaLabel, icon, title }: ContentLabel) => JSX.Element;

export interface IContent {
  title: string;
  icon: keyof TypeIcons;
  content?: IContent[];
  href: string;
  onClick?: () => void;
}
export type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>;
  };
};

// export interface IHMLElement {
//   children?: React.ReactNode;
//   className?: string;
// }

type AddressType = {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
  note: string;
};

type LifeCircleType = {
  responsible: string;
  date: Date;
};

interface IClient {
  id: number;
  name: string;
  contact: string;
  address: AddressType;
}

interface IProduct {
  id: number;
  name: string;
  quantity: number;
  price: number;
}

export type PaymentType = 'Cash' | 'CreditCard' | 'Pix' | 'IFood';

type OriginType = 'Telefone' | 'Site' | 'App';

interface IPurchase {
  id: number;
  priority: string;
  note: string;
  origin: OriginType;
  client: IClient;
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
  products: IProduct[];
}

export type ColumnsType = {
  PENDING: ColumnType;
  ACCEPTED: ColumnType;
  DISPATCHED: ColumnType;
  DELIVERED: ColumnType;
  CANCELED: ColumnType;
  SCHEDULED: ColumnType;
};

export type ColumnType = {
  id: keyof ColumnsType;
  countLabel: number | string;
  purchasesIds: (string | number)[];
};
/**
 * V=Value
 * K=Key
 * T=Type
 * E=Element
 */
export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

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

export type PurchaseActionsType =
  ActionMap<PurchasePayload>[keyof ActionMap<PurchasePayload>];

export type InitialPurchaseStateType = {
  purchases: IPurchase[];
  columns: ColumnsType;
};
