import { Fragment, useReducer, useState } from 'react';

import Icons, { Quantity } from 'app/components/Ui/DataDisplay/Icons';
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

type MesureType = GroupType[];

type ComponentsProps = { style: string };

type HeaderProps = ComponentsProps & {
  value: number;
  label: keyof TypeIcons;
};
type BodyProps = ComponentsProps & {
  measure: MesureType[];
  gallonSrc: ImagePath;
  quantity: number;
  handleQuantity: {
    handleDecrement: () => void;
    handleIncrement: () => void;
    handleKeyboardChange: React.ChangeEventHandler<HTMLInputElement>;
  };
};
type FooterProps = ComponentsProps & {
  label: keyof TypeIcons;
};

const ItemForSale = ({
  prices,
  label,
  name,
  setSelect,
  controls,
  shortName
}: CallbackRenderOptionsProps<ProductType>) => {
  // const [state, dispatch] = useReducer(reducer, initialState);
  /*
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
  */
 type X = {
  refill: {
      selected: boolean;
      value: number | undefined;
  };
  full: {
      selected: boolean;
      value: number | undefined;
  };
}
/*
          measure: {
          id: value,
          value: value,
          label: value,
          position: 'R',
          default: id === '20' ? true : false,
          disabled: !prices.refill[value as keyof typeof prices.refill] ? true : false
        }
*/
  const [values, setvalues] = (
    Object.keys(prices.gallon).map((value) => {
      const id = value.replace('L', '');
      const A:X = {
        [value]: {
          refill: {
            selected: true,
            value: prices.refill[value as keyof typeof prices.refill]
          },
          full: {
            selected: false,
            value: prices.gallon[value as keyof typeof prices.gallon]
          }
        }
      };
      return A
    })
  );
  const [quantity, setQuantity] = useState(0);

  const lowName = label.toLowerCase();

  const handleQuantity = {
    handleDecrement: () => {
      quantity > 0 ? setQuantity(quantity - 1) : quantity;
    },
    handleIncrement: () => {
      quantity < 100 ? setQuantity(quantity + 1) : quantity;
    },
    handleKeyboardChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(parseInt(event.target.value, 10));
    }
  };
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
  /**
   * value
   * refill | completo
   * quantity
   * vol : 5L 10L 20L
   */
  const {
    refill,
    gallon: { '10L': TenL, '20L': twentyL },
    freight
  } = prices;
  const measure: MesureType = [values[0].measure, values[1].measure, values[2].measure];
  const { wrapper, header, body, footer } = mappingStyles[styleKey];

  return (
    <motion.div
      animate={controls}
      key={shortName}
      className={clsx(
        wrapper,
        'flex w-28 flex-col justify-between rounded-tl-[6.5rem] rounded-tr-lg'
      )}
    >
      <Header style={header} label={label} value={refill['20L']!} />
      <Body
        style={body}
        gallonSrc={gallonSrc}
        quantity={quantity}
        handleQuantity={handleQuantity}
        measure={measure}
      />
      <Footer style={footer} label={label} />
    </motion.div>
  );
};
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
