import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { StaticImageData } from 'next/image';
import {
  DraggableLocation,
  DraggableProvided,
  DraggableRubric,
  DraggableStateSnapshot
} from 'react-beautiful-dnd';

import * as icons from 'components/Ui/DataDisplay/Icons';
import imgPaths from 'components/Ui/DataDisplay/Images/ImagesPaths';
import { mappingButtonStyles, toggleButtonStyles } from 'components/Ui/Inputs/Button';
import { mappingCheckboxStyles } from 'components/Ui/Inputs/Checkbox';
import { mappingTextFieldTypes } from 'components/Ui/Inputs/TextField';
import { toggleMappingStyles } from 'components/Ui/Inputs/Toggle';
import { navBarMappingSvg, navBarThemeMapping } from 'components/Ui/Navigation/NavBar';

import { AnimationControls } from 'framer-motion';

/**
 * utils related types
 */
/**
 * Generics
 * V=Value
 * K=Key
 * T=Type
 * E=Element
 */
export type UnionToIntersection<U> = (U extends any ? (k: U) => void : never) extends (
  k: infer I
) => void
  ? I
  : never;

export type NavigationProps = {
  title: string;
  icon: IconsKey;
  content?: NavigationProps[];
  href: string;
  onClick?: () => void;
};

export type ImagePath = keyof typeof imgPaths;

export type FragmentProps = {
  children?: React.ReactNode;
  className?: string;
};

type CallbackNodeType<T> = (Item: T) => React.ReactNode;

/**
 * hooks related types
 * -reducer
 * -usePurchase
 */
// @reducer types

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

export type ActionPurchaseProps =
  ActionMap<PurchasePayload>[keyof ActionMap<PurchasePayload>];

export enum PURCHASE_ACTION_TYPES {
  reorder = 'REORDER_COLUMNS',
  prepare = 'PREPARE_PURCHASE',
  create = 'CREATE_PURCHASE',
  update = 'UPDATE_PURCHASE',
  delete = 'DELETE_PURCHASE'
}

export type PurchasePayload = {
  [PURCHASE_ACTION_TYPES.reorder]: {
    purchaseId: string;
    from: PurchaseColumnsKey;
    to: PurchaseColumnsKey;
    fromIndex: number;
    toIndex: number;
  };
  [PURCHASE_ACTION_TYPES.prepare]: { columnId: keyof PurchaseColumnsType };
  [PURCHASE_ACTION_TYPES.create]: {
    columnId: keyof PurchaseColumnsType;
    purchase: PurchaseObjectProps;
  };
  [PURCHASE_ACTION_TYPES.update]: {
    id: string;
    updateFields: Partial<PurchaseObjectProps>;
  };
  [PURCHASE_ACTION_TYPES.delete]: { id: number };
};

type ActionCallback<key extends PURCHASE_ACTION_TYPES> = (
  state: InitialStatePurchaseProps,
  payload: PurchasePayload[key]
) => InitialStatePurchaseProps;

export type ActionHandlersProps = {
  [PURCHASE_ACTION_TYPES.reorder]: ActionCallback<PURCHASE_ACTION_TYPES.reorder>;
  [PURCHASE_ACTION_TYPES.prepare]: ActionCallback<PURCHASE_ACTION_TYPES.prepare>;
  [PURCHASE_ACTION_TYPES.create]: ActionCallback<PURCHASE_ACTION_TYPES.create>;
  [PURCHASE_ACTION_TYPES.update]: ActionCallback<PURCHASE_ACTION_TYPES.update>;
  [PURCHASE_ACTION_TYPES.delete]: ActionCallback<PURCHASE_ACTION_TYPES.delete>;
};

export enum Status {
  PENDING = 'PENDENTE',
  ACCEPTED = 'ACEITO',
  DISPATCHED = 'DESPACHADO',
  DELIVERED = 'ENTREGUE',
  CANCELED = 'CANCELADO',
  SCHEDULED = 'AGENDADO'
}

export type StatusKey = keyof typeof Status;

export type PurchaseColumnsType = { [key in keyof typeof Status]: PurchaseColumnProps };

export type PurchaseColumnsKey = keyof PurchaseColumnsType;

export type InitialStatePurchaseProps = {
  tempPurchases: PurchaseObjectProps[];
  purchases: PurchaseObjectProps[];
  columns: PurchaseColumnsType;
};

export type PurchaseColumnProps = {
  id: PurchaseColumnsKey;
  countLabel: number | string;
  purchasesIds: (string | number)[];
};
/**
 * Accordion related types
 */

export type AccordionItemProps = {
  value: string;
  triggerClassName?: string;
  triggerChildren: React.ReactNode;
  contentClassName?: string;
  contentChildren: React.ReactNode;
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
      typeOf?: 'primary' | 'secondary' | 'noStyle' | undefined | null;
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

/**
 * checkbox related types
 */

export type CheckboxStylesTypes = {
  title?: string;
  icon?: IconsKey;
};

type CheckboxStylesProps = ({ title, icon }: CheckboxStylesTypes) => {
  id: string;
  inputStyles: string;
  labelStyles: string;
  children: JSX.Element;
};

export type MappingCheckboxStylesProps = { [key in string]: CheckboxStylesProps };

export type CheckboxProps = CheckboxStylesTypes & {
  type: keyof typeof mappingCheckboxStyles;
};

/**
 * radio group related types
 */
type GroupType = {
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
  indicator?: React.ReactNode;
  default?: boolean;
  disabled?: boolean;
};

type RadioGroupStyleProp = {
  RadioGroupRoot: string;
  RadioGroupItem: string;
  RadioGroupIndicator: string;
  RadioGroupLabel: string;
};

export type RadioGroupProps = {
  group: GroupType[];
  styles: RadioGroupStyleProp;
  item?: React.ReactNode;
  wrapper?: boolean;
  onValueChange: (value: string) => void;
};

/**
 * select related types
 */
export type SelectDefaultProps<T> = T & {
  id: number;
  name: string;
  unavailable: boolean;
};

export type RenderSelectType<T> = Omit<SelectDefaultProps<T>, 'closeMenu' | 'setSelect'>;

export type RenderSelectProps<T> = {
  renderSelected: CallbackNodeType<SelectDefaultProps<T>>;
};

type RenderSelectOptionsProps<T> = {
  renderOptions: CallbackNodeType<SelectDefaultProps<T>>;
};

export type SelectOptionsProps<T> = RenderSelectOptionsProps<T> & {
  list: SelectDefaultProps<T>[];
};

export type SelectOptionProps<T> = RenderSelectOptionsProps<T> & {
  option: SelectDefaultProps<T>;
};

export type SelectProps<T> = SelectOptionsProps<T> &
  RenderSelectProps<T> & {
    multiple?: boolean;
    arrow?: boolean;
  };

export type SelectButtonProps<T> = RenderSelectProps<T> & {
  selected: SelectDefaultProps<T>;
  arrow: boolean;
};

/**
 * text field related types
 */
export type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: keyof typeof mappingTextFieldTypes;
  maxLength?: number;
  placeholder?: string;
} & TextFieldConditionalProps;

type TextFieldButtonStyles = { wrapper: string; button: string; icon: string };

type TextFieldConditionalProps =
  | {
      type: 'number';
      buttonStyles: TextFieldButtonStyles;
      handleIncrement: () => void;
      handleDecrement: () => void;
    }
  | {
      type: 'currence';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    }
  | {
      type: 'phoneNumber';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    }
  | {
      type: 'text';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    };

export type TextFieldCaretButonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  diretion: 'L' | 'R';
};

/**
 * toggle related types
 */
export type ToggleProps = {
  children: React.ReactNode;
  type: keyof typeof toggleMappingStyles;
  className?: string;
};

/**
 * divider related types
 */
export type DividerProps = {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
};

/**
 * popover related types
 */
export type PopoverSelectableProps = {
  id: number;
  name: string;
  shortName: string;
  unavailable: boolean;
  value: number;
  measure: string;
};
export type PopoverOptionsProps = {
  list: PopoverSelectableProps[];
};

export type PopoverSelectProps = PopoverOptionsProps & {
  multiple?: boolean;
  className?: string;
};
/**
 * dropdown related types
 */
export type DropdownItemStateType<T> =
  | DropdownDefaultProps<T>[]
  | DropdownDefaultProps<T>;

type DropdownItemProps<T> = {
  onSelect?: () => void;
  closeMenu?: () => void;
  setSelect?: React.Dispatch<React.SetStateAction<DropdownItemStateType<T>>>;
};

export type DropdownDefaultProps<T> = T &
  Omit<DropdownItemProps<T>, 'onSelect'> & {
    id: number;
    name: string;
    unavailable: boolean;
  };

type RenderSelectDropdownType<T> = Omit<
  DropdownDefaultProps<T>,
  'closeMenu' | 'setSelect'
>;

type DropdownCallbackRenderOptionsProps<T> = DropdownDefaultProps<T> & {
  controls: AnimationControls;
};

type RenderSelectDropdownProps<T> = {
  renderSelect: CallbackNodeType<RenderSelectDropdownType<T>>;
};

type RenderDropdownOptionsProps<T> = {
  renderOptions: CallbackNodeType<DropdownCallbackRenderOptionsProps<T>>;
};

export type DropdownListOptionsProps<T> = RenderDropdownOptionsProps<T> &
  DropdownItemProps<T> & {
    list: DropdownDefaultProps<T>[];
    controls: AnimationControls;
    className: string;
  };

export type DropdownOptionProps<T> = RenderDropdownOptionsProps<T> &
  Omit<DropdownListOptionsProps<T>, 'list' | 'className'> & {
    option: DropdownDefaultProps<T>;
  };
type TriggerStyleProps = {
  wrapper: string;
  renderItemWrapper: string;
  button: string;
  icon: string;
};

export type DropdownTriggerProps<T> = RenderSelectDropdownProps<T> & {
  item: DropdownItemStateType<T>;
  arrow: boolean;
  separator: boolean;
  className: TriggerStyleProps;
};
type DropdownSelectedItemsCallback<T> = (Item: DropdownItemStateType<T>) => void;

export type DropdownSelectProps<T> = RenderSelectDropdownProps<T> &
  Omit<DropdownListOptionsProps<T>, 'closeMenu' | 'controls' | 'className'> & {
    arrow?: boolean;
    separator?: boolean;
    styles: {
      trigger: TriggerStyleProps;
      dropdownContent: string;
    };
    selectItems: DropdownSelectedItemsCallback<T>;
    initialState: DropdownDefaultProps<T>[] | DropdownDefaultProps<T>;
  };

/**
 * link related types
 */
export type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
};

/**
 * nav bar related types
 */
export type NavBarEntryProps = {
  title: string;
  href: string;
  level: keyof typeof navBarMappingSvg;
};

type NavBarThemesProps = typeof navBarThemeMapping;
export type NavBarThemesKeys = keyof NavBarThemesProps;

export type NavBarProps = {
  theme: NavBarThemesKeys;
  entrys: NavBarEntryProps[];
};

/**
 * breadcrumb related types
 */
export type BreadcrumbPaths = {
  icon: IconsKey;
  title: string;
  href?: string;
};

export type GetBreadcrumbPathsProps = {
  segments: string[];
  content: NavigationProps[];
  segmentsIndex: number;
};

/**
 * kaban related types
 */

export type KabanProductType = {
  label: IconsKey;
  shortName: string;
  prices: KabanPricesType;
};

type KabanMarketplaceActions<T> = {
  onSelect?: () => void;
  closeMenu?: () => void;
  setSelect?: React.Dispatch<React.SetStateAction<KabanMarketplaceStateType<T>>>;
};

type KabanMarketplaceDefaultProps<T> = T &
  Omit<KabanMarketplaceActions<T>, 'onSelect'> & {
    id: number;
    name: string;
    unavailable: boolean;
  };

type KabanProductProps = KabanMarketplaceDefaultProps<KabanProductType>;

export type KabanColumnsStylesProps = {
  [key: string]: { title: string; styles: string; icon: IconsKey };
};

export type KabanColumnsProps = PurchaseColumnProps & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
};

export type KabanPurchaseCardProps = {
  index: number;
  purchaseId: string;
  currentStatus: string;
  provider: DraggableProvided;
  snapshot: DraggableStateSnapshot;
  rubric: DraggableRubric;
};

export type KabanPurchaseCardBodyProps = {
  dropDownId: string;
  purchase: PurchaseObjectProps;
};

export type KabanCardCurrencyProps = {
  dropDownId: string;
  purchase: PurchaseObjectProps;
};

export type KabanCardRequestProps = {
  purchase: PurchaseObjectProps;
};

export type KabanCardCurrencyPaymentLiProps = {
  dropDownId: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
  value: IconsKey;
};

type KabanMarketplaceStateType<T> =
  | KabanMarketplaceDefaultProps<T>[]
  | KabanMarketplaceDefaultProps<T>;

export type DropdownProductProps = KabanProductProps & KabanCurrentValueProps;

export type KabanCurrentValueProps = {
  price?: number;
  measure?: string;
  purchase?: 'gallon' | 'refill';
  quantity?: number;
};

type KabanPricesType = {
  refill: {
    '5L'?: number;
    '10L'?: number;
    '20L'?: number;
  };
  gallon: {
    '5L'?: number;
    '10L'?: number;
    '20L'?: number;
  };
  freight: number;
};

export type KabanMarketplaceRenderSelectProps = RenderSelectType<
  SelectDefaultProps<KabanProductType & KabanCurrentValueProps>
>;

export type KabanItemForSaleProps = DropdownCallbackRenderOptionsProps<
  KabanProductType & KabanCurrentValueProps
>;

export type KabanItemForSaleValueStateType = {
  current: KabanCurrentValueProps;
  products: {
    [key: string]: KabanItemForSaleGallonValueControlProps | GroupType;
    measure: GroupType;
  }[];
};

export type KabanItemForSaleGallonValueControlProps = {
  refill: number;
  gallon: number;
};

export type KabanItemForSaleHandleEventProps = {
  values: KabanItemForSaleValueStateType;
  setValues: React.Dispatch<React.SetStateAction<KabanItemForSaleValueStateType>>;
};

type KabanMeasureType = {
  itemIndex: number;
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
}[];

type KabanItemForSaleComponnetsProps = {
  label: IconsKey;
  style: string;
};

export type KabanItemForSaleHeaderProps = KabanItemForSaleComponnetsProps & {
  value: number;
};

export type KabanItemForSaleBodyProps = Omit<KabanItemForSaleComponnetsProps, 'label'> & {
  measure: KabanMeasureType;
  gallonSrc: ImagePath;
  quantity: number;
  handleValue: {
    handleToggleGallonRefill: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    handleChangeMeasure: (measure: string) => void;
    handleDecrementQuantity: () => void;
    handleIncrementQuantity: () => void;
    handleKeyboardChangeQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
  };
};

export type KabanItemForSaleFooterProps = KabanItemForSaleComponnetsProps & {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type KabanItemForSaleHandleSelectProductProps = {
  event: React.MouseEvent<HTMLButtonElement, MouseEvent>;
  setSelect?: React.Dispatch<
    React.SetStateAction<DropdownItemStateType<KabanProductType & KabanCurrentValueProps>>
  >;
  values: KabanItemForSaleValueStateType;
  product: KabanItemForSaleProps;
};

/**
 *
 */

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

export type PaymentType = 'Cash' | 'CreditCard' | 'Pix' | 'IFood';

type OriginType = 'Telefone' | 'Site' | 'App';

export type PurchaseObjectProps = {
  id: string;
  priority: string;
  note: string;
  origin: OriginType;
  distributorName: string;
  payment: PaymentType;
  price: number;
  exchange: number;
  client?: IClient;
  lifeCircle?: {
    register: LifeCircleType;
    accepted: LifeCircleType;
    dispatched: LifeCircleType;
    delivered: LifeCircleType;
    canceled: LifeCircleType;
    scheduled: LifeCircleType;
  };
  products: DropdownDefaultProps<KabanProductType & KabanCurrentValueProps>[];
};
