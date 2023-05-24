/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import {
  CallbackRenderOptionsProps,
  ProductType
} from 'app/components/Patterns/Layout/Kaban/Types';
import { ImagePath } from 'app/components/Ui/DataDisplay/Image';

import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { GallonValueControlProps, HandleEventProps, ValueStateType } from './Types';

import clsx from 'clsx';
import { motion } from 'framer-motion';

export default function ItemForSale({
  prices: { refill, gallon },
  label,
  controls,
  shortName
}: CallbackRenderOptionsProps<ProductType>) {
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

  const measure: {
    itemIndex: number;
    id: string;
    value: string;
    label?: string;
    position?: 'L' | 'R';
  }[] = values.products.map((item, index) => ({ ...item.measure, itemIndex: index }));

  const { wrapper, header, body, footer } = mappingStyles[styleKey];

  const { handleQuantity, handleValue } = handleEvents({
    quantity,
    setQuantity,
    setValues,
    values
  });

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
}

function handleEvents({ quantity, setQuantity, values, setValues }: HandleEventProps) {
  return {
    handleQuantity: {
      handleDecrement: () => {
        if (quantity > 0) setQuantity(quantity - 1);
      },
      handleIncrement: () => {
        if (quantity < 100) setQuantity(quantity + 1);
      },
      handleKeyboardChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        setQuantity(parseInt(event.target.value, 10));
      }
    },
    handleValue: {
      handleToggleFullRefill: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
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
    }
  };
}
