import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { StaticImageData } from 'next/image';

import * as icons from 'components/Ui/DataDisplay/Icons';
import imgPaths from 'components/Ui/DataDisplay/Images/ImagesPaths';
import { mappingButtonStyles, toggleButtonStyles } from 'components/Ui/Inputs/Button';

/**
 * utils related types
 */

export type NavigationProps = {
  title: string;
  icon: IconsKey;
  content?: NavigationProps[];
  href: string;
  onClick?: () => void;
};

export type ImagePath = keyof typeof imgPaths;

/**
 * Generics
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

/**
 * hooks related types
 * -reducer
 * -usePurchase
 */
// @reducer types
export type InitialStatePurchaseProps = {
  purchases: IPurchase[];
  columns: PurchaseColumnsType;
};

export type ActionPurchaseProps =
  ActionMap<PurchasePayload>[keyof ActionMap<PurchasePayload>];

export type PurchaseColumnsType = {
  PENDING: PurchaseColumnProps;
  ACCEPTED: PurchaseColumnProps;
  DISPATCHED: PurchaseColumnProps;
  DELIVERED: PurchaseColumnProps;
  CANCELED: PurchaseColumnProps;
  SCHEDULED: PurchaseColumnProps;
};

export type PurchaseColumnsKey = keyof PurchaseColumnsType;

export type PurchaseColumnProps = {
  id: PurchaseColumnsKey;
  countLabel: number | string;
  purchasesIds: (string | number)[];
};
/**
 * icons related types
 */

export type IconsType = typeof icons;
export type IconsKey = keyof IconsType;
/**
 * avatar related types
 */

export type AvatarProps = {
  subtitle?: string;
  src: string | StaticImageData;
};

/**
 * image related types
 */

export type ImageProps = {
  size?: number;
  sizes?: number;
  width?: number;
  height?: number;
  image: ImagePath;
  className?: string;
  fill?: boolean;
  blur?: 'blur' | 'empty';
};

/**
 * tooltip related types
 */

export type TooltipProps = {
  children: React.ReactNode;
  content: React.ReactNode;
  arrow?: boolean;
  side?: 'top' | 'right' | 'bottom' | 'left';
  align?: 'center' | 'start' | 'end';
  alignOffset?: number;
  sideOffset?: number;
  asChild?: boolean;
  triggerStyles?: string;
};

/**
 * button related types
 */
type ButtonPrimitiveProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  asChild?: boolean;
  iconL?: IconsKey;
  iconR?: IconsKey;
  typeOf?: keyof typeof mappingButtonStyles;
  className?: string;
};

type ConditionalButtonProps =
  | {
      typeOf?: 'primary' | 'secondary' | undefined | null;
      toggleVariant?: never;
      children?: React.ReactNode;
    }
  | {
      typeOf?: 'toggle';
      toggleVariant?: keyof typeof toggleButtonStyles;
      children?: React.ReactNode;
    }
  | {
      typeOf?: 'toggle';
      toggleVariant?: 'between';
      children?: never;
    };
export type ButtonProps = ButtonPrimitiveProps & ConditionalButtonProps;

export type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>;
  };
};

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

export enum PURCHASE_ACTION_TYPES {
  prepare = 'PREPARE_PURCHASE',
  create = 'CREATE_PURCHASE',
  delete = 'DELETE_PURCHASE'
}

type PurchasePayload = {
  [PURCHASE_ACTION_TYPES.prepare]: { columnId: keyof PurchaseColumnsType };
  [PURCHASE_ACTION_TYPES.create]: {
    columnId: keyof PurchaseColumnsType;
    purchase: IPurchase;
  };
  [PURCHASE_ACTION_TYPES.delete]: { id: number };
};
