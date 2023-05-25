import { ImagePath } from 'app/components/Ui/DataDisplay/Image';

import { AnimationControls } from 'framer-motion';
import { TypeIcons } from 'utils/Types';

export type PurchaseCardProps = {
  index: number;
  purchaseId: string;
  currentStatus: string;
};

type ItemsProps<T> = {
  onSelect?: () => void;
  closeMenu?: () => void;
  setSelect?: React.Dispatch<React.SetStateAction<ItemStateType<T>>>;
};

export type ObjectDefaultProps<T> = T &
  Omit<ItemsProps<T>, 'onSelect'> & {
    id: number;
    name: string;
    unavailable: boolean;
  };

type CallbackType<T> = (Item: T) => React.ReactNode;

type ItemStateType<T> = ObjectDefaultProps<T>[] | ObjectDefaultProps<T>;

type RenderSelectType<T> = Omit<ObjectDefaultProps<T>, 'closeMenu' | 'setSelect'>;

type RenderSelectProps<T> = {
  renderSelect: CallbackType<RenderSelectType<T>>;
};

export type CallbackRenderOptionsProps<T> = ObjectDefaultProps<T> & {
  controls?: AnimationControls;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<CallbackRenderOptionsProps<T>>;
};

type ListOptionsProps<T> = RenderOptionsProps<T> &
  ItemsProps<T> & {
    list: ObjectDefaultProps<T>[];
    controls: AnimationControls;
    className: string;
  };

type OptionProps<T> = RenderOptionsProps<T> &
  Omit<ListOptionsProps<T>, 'list' | 'className'> & {
    option: ObjectDefaultProps<T>;
  };

type TriggerProps<T> = RenderSelectProps<T> & {
  item: ItemStateType<T>;
  arrow: boolean;
  className: {
    wrapper: string;
    button: string;
    icon: string;
  };
};

type SelectProps<T> = RenderSelectProps<T> &
  Omit<ListOptionsProps<T>, 'closeMenu' | 'controls' | 'className'> & {
    arrow?: boolean;
    styles: {
      trigger: {
        wrapper: string;
        button: string;
        icon: string;
      };
      dropdownContent: string;
    };
  };

export type ProductProps = ObjectDefaultProps<ProductType>;

type pricesType = {
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

export type ProductType = {
  label: keyof TypeIcons;
  shortName: string;
  prices: pricesType;
};

type MeasureType = {
  itemIndex: number;
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
}[];

type ComponentsProps = { style: string };

type HeaderProps = ComponentsProps & {
  value: number;
  label: keyof TypeIcons;
};
type BodyProps = ComponentsProps & {
  measure: MeasureType;
  gallonSrc: ImagePath;
  quantity: number;
  handleValue: {
    handleToggleFullRefill: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    handleChangeMeasure: (measure: string) => void;
  };
  handleQuantity: {
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleKeyboardChange: React.ChangeEventHandler<HTMLInputElement>;
  };
};
type FooterProps = ComponentsProps & {
  label: keyof TypeIcons;
};
