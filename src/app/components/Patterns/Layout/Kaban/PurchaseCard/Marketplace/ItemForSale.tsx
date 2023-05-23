/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Img, { ImagePath } from 'app/components/Ui/DataDisplay/Image';
import Button from 'app/components/Ui/Inputs/Button';
import RadioGroup, {
  GroupType,
  RadioGroupStyleProp
} from 'app/components/Ui/Inputs/RadioGroup';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';
import { CallbackRenderOptionsProps } from 'app/components/Ui/Navigation/DropdownMenu';

import clsx from 'clsx';
import { motion } from 'framer-motion';
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

const ItemForSale = ({
  prices: { refill, freight, gallon },
  label,
  name,
  setSelect,
  controls,
  shortName
}: CallbackRenderOptionsProps<ProductType>) => {
  type GallonValueControlProps = {
    refill: number;
    full: number;
  };
  type ValueStateType = {
    current: {
      price?: number;
      measure: string;
      purchase: 'full' | 'refill';
    };
    products: {
      [key: string]: GallonValueControlProps | GroupType;
      measure: GroupType;
    }[];
  };
  const [values, setValues] = useState<ValueStateType>({
    current: {
      price: refill['20L'],
      measure: '20L',
      purchase: 'refill'
    },
    products: Object.keys(gallon).map((value) => {
      const id = value.replace('L', '');
      const refValUnchecked = refill[value as keyof typeof refill];
      const galValUnchecked = gallon[value as keyof typeof gallon];
      const refillValue = !refValUnchecked ? 0 : refValUnchecked;
      const gallonValue = !galValUnchecked ? 0 : galValUnchecked;
      return {
        [value]: {
          refill: refillValue,
          full: gallonValue + refillValue
        },
        measure: {
          id: value,
          value: value,
          label: value,
          position: 'R',
          default: id === '20' ? true : false,
          disabled: !refValUnchecked ? true : false
        }
      };
    })
  });
  const [quantity, setQuantity] = useState(0);

  const lowName = label.toLowerCase();

  const handleQuantity = {
    handleDecrement: () => {
      if (quantity > 0) setQuantity(quantity - 1);
    },
    handleIncrement: () => {
      if (quantity < 100) setQuantity(quantity + 1);
    },
    handleKeyboardChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      setQuantity(parseInt(event.target.value, 10));
    }
  };

  const handleValue = {
    handleToggleFullRefill: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      if (event.target === event.currentTarget) {
        const { state } = event.currentTarget.dataset;
        const toggleValues = (gallonKey: 'full' | 'refill') => {
          const { current, products } = values;

          const product = products.find((product) => product[current.measure]);
          const newPrice = (product![current.measure] as GallonValueControlProps)[
            gallonKey
          ];
          return {
            ...values,
            current: { ...values.current, price: newPrice, purchase: gallonKey }
          };
        };
        const selectState = {
          on: () => setValues(toggleValues('refill')),
          off: () => setValues(toggleValues('full'))
        };
        selectState[state as keyof typeof selectState]();
      }
    },
    handleChangeMeasure: (measure: string) => {
      const product = values.products.find((product) => product[measure]);
      const newPrice = (product![measure] as GallonValueControlProps)[
        values.current.purchase
      ];
      setValues({
        ...values,
        current: { ...values.current, price: newPrice, measure: measure }
      });
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
  const measure: {
    itemIndex: number;
    id: string;
    value: string;
    label?: string;
    position?: 'L' | 'R';
  }[] = values.products.map((item, index) => ({ ...item.measure, itemIndex: index }));

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
      <Header style={header} label={label} value={values.current.price!} />
      <Body
        style={body}
        gallonSrc={gallonSrc}
        quantity={quantity}
        handleQuantity={handleQuantity}
        handleValue={handleValue}
        measure={measure}
      />
      <Footer style={footer} label={label} />
    </motion.div>
  );
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
      <span className="text-lg font-bold transition-faster">{value}</span>
      <span className="absolute -bottom-0.5 font-mono text-[0.5rem] font-extrabold opacity-60">
        /un
      </span>
    </div>
    <span className="absolute right-0 z-[0] flex w-11/12 justify-end bg-white/20 pr-1 font-bold text-white center-x">
      {label}
    </span>
  </div>
);

const Body = ({
  style,
  gallonSrc,
  measure,
  quantity,
  handleQuantity,
  handleValue
}: BodyProps) => {
  const MesureStyles = {
    RadioGroupRoot:
      'flex justify-center items-start [&:has(button[data-state=checked])>button]:text-white relative h-[45%] ',
    RadioGroupItem:
      'focus-visible:outline-none focus-visible:elevation-3 rounded-full data-state-checked:text-white peer peer-data-state-checked:opacity-60 transition-faster data-[disabled]:!opacity-20',
    RadioGroupIndicator: '',
    RadioGroupLabel:
      'absolute bottom-0 text-xs font-semibold text-white opacity-0 [&:has(+[data-state=checked])]:opacity-100 transition-faster'
  };

  const { handleDecrement, handleIncrement, handleKeyboardChange } = handleQuantity;
  const { handleToggleFullRefill, handleChangeMeasure } = handleValue;
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
            onClick={handleToggleFullRefill}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Divider orientation="vertical" className="!h-5/6 !bg-white/30" />
        <div className="h-5/6">
          <RadioGroup
            group={measure}
            styles={MesureStyles}
            item={<Icons icon="Drop" className="" />}
            onValueChange={handleChangeMeasure}
          />
          <Divider className="!bg-white/30" />
          {/* CREATE A INPUT TYPE NUMBER */}
          <TextField
            id={`quantity-${gallonSrc}`}
            type="number"
            placeholder="0"
            maxLength={2}
            buttonStyles={{ wrapper: 'py-s px-xs h-[45%]', button: '', icon: style }}
            className="text-white"
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            onChange={handleKeyboardChange}
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
