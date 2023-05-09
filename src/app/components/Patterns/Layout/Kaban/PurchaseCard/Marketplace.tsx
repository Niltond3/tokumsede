import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Img, { ImagePath } from 'app/components/Ui/DataDisplay/Image';
import Button from 'app/components/Ui/Inputs/Button';
import RadioGroup, {
  GroupType,
  RadioGroupStyleProp
} from 'app/components/Ui/Inputs/RadioGroup';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';
import DropdownMenu, {
  ObjectDefaultProps
} from 'app/components/Ui/Navigation/DropdownMenu';

import clsx from 'clsx';
import { TypeIcons } from 'utils/Types';

const Styles = () => {
  const styles = {
    trigger: {
      wrapper: 'items-center gap-1 flex-[90%]',
      button:
        'rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg',
      icon: ''
    },
    dropdownContent:
      'flex max-h-48 min-h-[11rem] max-w-[16rem] flex-col gap-3 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm'
  };
  return styles;
};

export default function Marketplace() {
  return (
    <DropdownMenu
      styles={Styles}
      list={products}
      renderSelect={({ shortName }) => <div>{shortName}</div>}
      renderOptions={({ value, measure, label, setSelect }) => {
        const lowName = label.toLowerCase();
        const currencyValue = value.toLocaleString('pt-br', {
          minimumFractionDigits: 2
        });
        const mappingStyles = {
          leve: '',
          rica: '',
          sport: ''
        } as const;

        const MesureGroupFiltered = MesureGroup.map((item) => {
          const find = measure.find((value) => value === item.id);
          const newItem = { ...item, disabled: !find ? true : false };
          return newItem;
        });
        return (
          <>
            <div className="flex ">
              <div className="relative flex flex-[60%] justify-between">
                <div className="relative">
                  <div className="absolute top-0 flex w-full flex-wrap justify-between">
                    <Button
                      typeOf="secondary"
                      iconL="Info"
                      className="h-5 w-5 text-lg-primary [&>svg]:h-full [&>svg]:w-full"
                    />
                    <Button
                      typeOf="secondary"
                      iconL="AddShopping"
                      className="h-5 w-5 text-lg-primary [&>svg]:h-full [&>svg]:w-full"
                    />
                  </div>
                  <Img image={lowName as ImagePath} blur="blur" />
                  <div
                    className={clsx(
                      'absolute bottom-0 flex h-1/3 w-1/3 border-spacing-1 items-center justify-center rounded-br-xl rounded-tl-xl border-[1px] border-white bg-lg-success p-2 outline outline-1 outline-lg-accent-darker',
                      mappingStyles[lowName as keyof typeof mappingStyles]
                    )}
                  >
                    <span className="text-[11px] font-medium text-lg-primary-base">
                      {currencyValue}
                    </span>
                  </div>
                </div>
                <Divider orientation="vertical" className="!bg-black/30" />
              </div>
              <div className="flex flex-[40%] flex-col items-center justify-center">
                <RadioGroup
                  group={MesureGroupFiltered}
                  styles={MesureStyles}
                  item={<Icons icon="Drop" className="" />}
                />
                <Divider className="!bg-black/30" />
                {/* CREATE A INPUT TYPE NUMBER */}
                <TextField type="number" />
                {/* <input type="number" className="w-full"></input> */}
              </div>
            </div>
            <Divider />
          </>
        );
      }}
    />
  );
}

type MesureType = GroupType[];

const MesureStyles: RadioGroupStyleProp = () => {
  const Styles = {
    RadioGroupRoot:
      'flex justify-center items-start [&:has(button[data-state=checked])>button]:text-lg-primary relative h-1/4 ',
    RadioGroupItem:
      'data-state-checked:text-lg-primary peer peer-data-state-checked:!text-lg-wait transition-faster data-[disabled]:opacity-30',
    RadioGroupIndicator: '',
    RadioGroupLabel:
      'absolute bottom-0 text-xs font-semibold text-lg-primary opacity-0 [&:has(+[data-state=checked])]:opacity-100 transition-faster'
  };

  return Styles;
};

const MesureGroup: MesureType = [
  {
    id: '5',
    value: '5L',
    label: '5L',
    position: 'R'
  },
  {
    id: '10',
    value: '10L',
    label: '10L',
    position: 'R'
  },
  {
    id: '20',
    value: '20L',
    label: '20L',
    position: 'R',
    default: true
  }
];

type ProductType = {
  label: keyof TypeIcons;
  shortName: string;
  value: number;
  measure: string[];
};

type ProductProps = ObjectDefaultProps<ProductType>;

/**
[16:05, 26/04/2023] Claudizon: Alcalina Rica: 10 e 20 litros
[16:06, 26/04/2023] Claudizon: Alcalina Sport: 5 e 20 litros
[16:06, 26/04/2023] Claudizon: Alcalina Leve: 20 litros
 */
const products: ProductProps[] = [
  {
    id: 1,
    label: 'Leve',
    name: 'Alkalina Leve',
    shortName: 'L',
    value: 8.0,
    measure: ['20'],
    unavailable: true
  },
  {
    id: 2,
    label: 'Rica',
    name: 'Alkalina Rica',
    shortName: 'Rica',
    value: 11.0,
    measure: ['10', '20'],
    unavailable: true
  },
  {
    id: 3,
    label: 'Sport',
    name: 'Alkalina Sport',
    shortName: 'Sport',
    value: 10.0,
    measure: ['5', '20'],
    unavailable: true
  }
];
