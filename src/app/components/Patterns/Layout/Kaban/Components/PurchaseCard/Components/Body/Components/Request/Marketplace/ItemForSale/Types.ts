import { Dispatch, SetStateAction } from 'react';

import { ImagePath } from 'app/components/Ui/DataDisplay/Image';
import { GroupType } from 'app/components/Ui/Inputs/Types';
import { ItemStateType } from 'app/components/Ui/Navigation/types';

import { TypeIcons } from 'utils/Types';

type MeasureType = {
  itemIndex: number;
  id: string;
  value: string;
  label?: string;
  position?: 'L' | 'R';
}[];

type ComponentsProps = { style: string };

export type GallonValueControlProps = {
  refill: number;
  full: number;
};

export type CurrentValueProps = {
  price?: number;
  measure?: string;
  purchase?: 'full' | 'refill';
  quantity?: number;
};

export type HeaderProps = ComponentsProps & {
  value: number;
  label: keyof TypeIcons;
};

export type BodyProps = ComponentsProps & {
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

export type FooterProps = ComponentsProps & {
  label: keyof TypeIcons;
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
};

export type ValueStateType = {
  current: CurrentValueProps;
  products: {
    [key: string]: GallonValueControlProps | GroupType;
    measure: GroupType;
  }[];
};

export type HandleEventProps = {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
  values: ValueStateType;
  setValues: Dispatch<SetStateAction<ValueStateType>>;
};
