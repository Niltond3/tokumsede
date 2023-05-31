import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';
import { StaticImageData } from 'next/image';

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

type CallbackNodeType<T> = (Item: T) => React.ReactNode;

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

export type DropdownTriggerProps<T> = RenderSelectDropdownProps<T> & {
  item: DropdownItemStateType<T>;
  arrow: boolean;
  separator: boolean;
  className: {
    wrapper: string;
    button: string;
    icon: string;
  };
};

export type DropdownSelectProps<T> = RenderSelectDropdownProps<T> &
  Omit<DropdownListOptionsProps<T>, 'closeMenu' | 'controls' | 'className'> & {
    arrow?: boolean;
    separator?: boolean;
    styles: {
      trigger: {
        wrapper: string;
        button: string;
        icon: string;
      };
      dropdownContent: string;
    };
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
