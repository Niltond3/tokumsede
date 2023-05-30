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
  gallon: number;
};

export type CurrentValueProps = {
  price?: number;
  measure?: string;
  purchase?: 'gallon' | 'refill';
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
    handleToggleGallonRefill: (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => void;
    handleChangeMeasure: (measure: string) => void;
    handleDecrementQuantity: () => void;
    handleIncrementQuantity: () => void;
    handleKeyboardChangeQuantity: (event: React.ChangeEvent<HTMLInputElement>) => void;
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
  values: ValueStateType;
  setValues: Dispatch<SetStateAction<ValueStateType>>;
};
