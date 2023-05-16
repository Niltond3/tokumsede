import { useReducer } from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Img, { ImagePath } from 'app/components/Ui/DataDisplay/Image';
import Button from 'app/components/Ui/Inputs/Button';
import RadioGroup, {
  GroupType,
  RadioGroupStyleProp
} from 'app/components/Ui/Inputs/RadioGroup';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';
import {
  CallbackRenderOptionsProps,
  ObjectDefaultProps
} from 'app/components/Ui/Navigation/DropdownMenu';

import reducer from './ItemForSaleReducer';

import clsx from 'clsx';
import { motion } from 'framer-motion';
import $ from 'jquery';
import { TypeIcons } from 'utils/Types';

type pricesType = {
  refill: number;
  gallon: {
    '10L': number;
    '20L': number;
  };
  freight: number;
};

export type ProductType = {
  label: keyof TypeIcons;
  shortName: string;
  value: pricesType;
  measure: string[];
};

type MesureType = GroupType[];

const ItemForSale = ({
  value,
  measure,
  label,
  name,
  setSelect,
  controls,
  shortName
}: CallbackRenderOptionsProps<ProductType>) => {
  // const [state, dispatch] = useReducer(reducer, initialState);

  const lowName = label.toLowerCase();

  const mappingStyles = {
    leve: {
      wrapper: 'bg-lg-primary',
      header: 'border-lg-primary text-lg-primary',
      footer: 'hover:text-lg-primary',
      body: 'text-lg-primary'
    },
    rica: {
      wrapper: 'bg-lg-success',
      header: 'border-lg-success text-lg-success',
      footer: 'hover:text-lg-success',
      body: 'text-lg-success'
    },
    sport: {
      wrapper: 'bg-lg-sent',
      header: 'border-lg-sent text-lg-sent',
      footer: 'hover:text-lg-sent',
      body: 'text-lg-sent'
    }
  } as const;

  const styleKey = lowName as keyof typeof mappingStyles;
  const gallonSrc = lowName as ImagePath;

  const {
    refill,
    gallon: { '10L': TenL, '20L': twentyL },
    freight
  } = value;

  const { wrapper, header, body, footer } = mappingStyles[styleKey];

  const Valuation = () => {
    return $(`#${lowName}_bt_tg_text_gallons`);
  };

  console.log(Valuation());

  return (
    <motion.div
      animate={controls}
      key={shortName}
      className={clsx(
        wrapper,
        'flex w-28 flex-col justify-between rounded-tl-[6.5rem] rounded-tr-lg'
      )}
    >
      <Header style={header} label={label} value={refill} />
      <Body style={body} gallonSrc={gallonSrc} measure={measure} />
      <Footer style={footer} label={label} />
    </motion.div>
  );
};
type ComponentsProps = { style: string };

type HeaderProps = ComponentsProps & {
  value: number;
  label: keyof TypeIcons;
};
type BodyProps = ComponentsProps & {
  measure: string[];
  gallonSrc: ImagePath;
};
type FooterProps = ComponentsProps & {
  label: keyof TypeIcons;
};
const Header = ({ style, value, label }: HeaderProps) => (
  <div className="relative flex w-11/12 self-end">
    <div
      className={clsx(
        style,
        'relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border-[3px]  bg-lg-primary-base'
      )}
    >
      <span className="absolute left-1.5 top-[1px] text-[0.45rem] font-extrabold opacity-60">
        R$
      </span>
      <span className="text-lg font-bold">{value}</span>
      <span className="absolute -bottom-0.5 font-mono text-[0.5rem] font-extrabold opacity-60">
        /un
      </span>
    </div>
    <span className="absolute right-0 z-[0] flex w-11/12 justify-end bg-white/20 pr-1 font-bold text-white center-x">
      {label}
    </span>
  </div>
);

const Body = ({ style, measure, gallonSrc }: BodyProps) => {
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

  const MesureGroupFiltered = MesureGroup.map((item) => {
    const find = measure.find((value) => value === item.id);
    const newItem = { ...item, disabled: !find ? true : false };
    return newItem;
  });

  const MesureStyles: RadioGroupStyleProp = {
    RadioGroupRoot:
      'flex justify-center items-start [&:has(button[data-state=checked])>button]:text-white relative h-[45%] ',
    RadioGroupItem:
      'data-state-checked:text-white peer peer-data-state-checked:opacity-60 transition-faster data-[disabled]:!opacity-20',
    RadioGroupIndicator: '',
    RadioGroupLabel:
      'absolute bottom-0 text-xs font-semibold text-white opacity-0 [&:has(+[data-state=checked])]:opacity-100 transition-faster'
  };

  return (
    <div className="flex">
      <div className="relative flex flex-1 items-center justify-center">
        <Img className="relative h-5/6 w-fit" image={gallonSrc} blur="blur" />
        <div
          className={clsx(
            'before:absolute before:top-1 before:h-0 before:w-0 before:rotate-45 before:border-4 before:border-transparent before:!border-l-gray-700',
            'absolute -left-1 bottom-3 flex h-6 items-end overflow-hidden'
          )}
        >
          <Button
            id={`${gallonSrc}_bt_tg_text_gallons`}
            typeOf="toggle"
            toggleVariant="text"
            data-tg-on="COMPLETO"
            data-tg-off="REFIL"
            className={`h-4 w-12 rounded-none bg-white !opacity-100 ${style}`}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Divider orientation="vertical" className="!h-5/6 !bg-white/30" />
        <div className="h-5/6">
          <RadioGroup
            group={MesureGroupFiltered}
            styles={MesureStyles}
            item={<Icons icon="Drop" className="" />}
          />
          <Divider className="!bg-white/30" />
          {/* CREATE A INPUT TYPE NUMBER */}
          <TextField
            type="number"
            placeholder="0"
            maxLength={3}
            buttonStyles={{ wrapper: 'py-s px-xs h-[45%]', button: '', icon: style }}
            className="text-white"
            value={0}
          />
        </div>
      </div>
    </div>
  );
};

const Footer = ({ style, label }: FooterProps) => (
  <div className="flex gap-3">
    <span className="flex items-center justify-center rounded-tr-3xl bg-white/20 px-3 py-xs font-bold text-white">
      {label[0]}
    </span>
    <Button
      className={clsx(
        style,
        'w-full rounded-none rounded-tl-3xl bg-white/20 text-white hover:bg-white/40'
      )}
    >
      <Icons icon="AddShopping" />
    </Button>
  </div>
);

export default ItemForSale;
