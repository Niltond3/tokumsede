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
import { motion } from 'framer-motion';
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
      'flex max-h-48 min-h-[11rem] max-w-[16rem] flex-col gap-2 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm'
  };
  return styles;
};

export default function Marketplace() {
  return (
    <DropdownMenu
      styles={Styles}
      list={products}
      renderSelect={({ shortName }) => <div>{shortName}</div>}
      renderOptions={({
        value,
        measure,
        label,
        name,
        setSelect,
        controls,
        shortName
      }) => {
        const lowName = label.toLowerCase();
        const currencyValue = value.toLocaleString('pt-br', {
          minimumFractionDigits: 2
        });
        const mappingStyles = {
          leve: {
            wrapper: 'bg-lg-primary',
            header: 'border-lg-primary text-lg-primary',
            footer: 'hover:text-lg-primary'
          },
          rica: {
            wrapper: 'bg-lg-success',
            header: 'border-lg-success text-lg-success',
            footer: 'hover:text-lg-success'
          },
          sport: {
            wrapper: 'bg-lg-sent',
            header: 'border-lg-sent text-lg-sent',
            footer: 'hover:text-lg-sent'
          }
        } as const;

        const styleKey = lowName as keyof typeof mappingStyles;

        const MesureGroupFiltered = MesureGroup.map((item) => {
          const find = measure.find((value) => value === item.id);
          const newItem = { ...item, disabled: !find ? true : false };
          return newItem;
        });

        const Return_A = (
          <motion.div animate={controls} key={shortName} className="flex">
            <div className="relative flex flex-[70%] justify-between">
              <div className="relative">
                <Button
                  typeOf="secondary"
                  iconL="AddShopping"
                  className="absolute right-0 h-5 w-5 text-lg-primary [&>svg]:h-full [&>svg]:w-full"
                />
                <Img
                  className="relative left-6 h-auto w-10/12"
                  image={lowName as ImagePath}
                  blur="blur"
                />
                <div
                  className={`absolute -left-4 -top-4 z-[-1] flex h-[calc(100%+1.3rem)] w-1/2 flex-col items-center justify-start gap-10 px-2 py-4 text-sm font-bold ${
                    mappingStyles[lowName as keyof typeof mappingStyles]
                  }`}
                >
                  <Button
                    typeOf="secondary"
                    iconL="Info"
                    className="h-5 w-5 text-lg-primary [&>svg]:h-full [&>svg]:w-full"
                  />
                  <span className="text-lg-primary-base">R$ {currencyValue}</span>
                </div>
              </div>
              <Divider orientation="vertical" className="!bg-black/30" />
            </div>
            <div className="flex flex-[25%] flex-col items-center justify-center">
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
          </motion.div>
        );

        const Header = () => (
          <div className="relative flex">
            <div
              className={clsx(
                mappingStyles[styleKey].header,
                'relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border-[3px]  bg-lg-primary-base'
              )}
            >
              <span className="absolute left-1.5 top-[1px] text-[0.45rem] font-bold opacity-60">
                R$
              </span>
              <span className="text-lg font-bold">{value}</span>
              <span className="absolute -bottom-0.5 font-mono text-[0.5rem] font-bold opacity-60">
                /un
              </span>
            </div>
            <span className="absolute z-[0] flex w-full justify-end bg-white/20 pr-1 font-bold text-white center-x">
              {label}
            </span>
          </div>
        );

        const Body = () => (
          <div className="flex">
            <div className="flex flex-1 items-center justify-center">
              <Img
                className="relative h-5/6 w-fit"
                image={lowName as ImagePath}
                blur="blur"
              />
            </div>
            <div className="flex flex-1">
              <Divider orientation="vertical" className="!bg-white/30" />
              <div>
                <RadioGroup
                  group={MesureGroupFiltered}
                  styles={MesureStyles}
                  item={<Icons icon="Drop" className="text-white" />}
                />
                <Divider className="!bg-white/30" />
                {/* CREATE A INPUT TYPE NUMBER */}
                <TextField type="number" />
                {/* <input type="number" className="w-full"></input> */}
              </div>
            </div>
          </div>
        );

        const Footer = () => (
          <div className="flex gap-3">
            <span className="flex items-center justify-center rounded-tr-3xl bg-white/20 px-3 py-xs font-bold text-white">
              {label[0]}
            </span>
            <Button
              className={clsx(
                mappingStyles[styleKey].footer,
                'w-full rounded-none rounded-tl-3xl bg-white/20 text-white hover:bg-white/40'
              )}
            >
              <Icons icon="AddShopping" />
            </Button>
          </div>
        );
        const Return_B = (
          <motion.div
            animate={controls}
            key={shortName}
            className={clsx(
              mappingStyles[styleKey].wrapper,
              'flex min-h-[9rem] w-24 flex-col justify-between rounded-tl-[6.5rem] rounded-tr-lg'
            )}
          >
            <Header />
            <Body />
            <Footer />
          </motion.div>
        );

        return Return_B;
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
