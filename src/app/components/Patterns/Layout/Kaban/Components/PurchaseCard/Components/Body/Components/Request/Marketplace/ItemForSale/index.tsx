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
import {
  CurrentValueProps,
  GallonValueControlProps,
  HandleEventProps,
  ValueStateType
} from './Types';

import clsx from 'clsx';
import { motion } from 'framer-motion';

type ItemForSaleProps = CallbackRenderOptionsProps<ProductType & CurrentValueProps>;

export default function ItemForSale(product: ItemForSaleProps) {
  const {
    prices: { refill, gallon },
    label,
    controls,
    shortName,
    setSelect
  } = product;

  const [values, setValues] = useState<ValueStateType>({
    current: {
      price: refill['20L'],
      measure: '20L',
      purchase: 'refill',
      quantity: 0
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
          gallon: gallonValue + refillValue
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

  const { handleValue } = handleEvents({ values, setValues });

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
        quantity={values.current.quantity!}
        handleValue={handleValue}
        measure={measure}
      />
      <Footer
        style={footer}
        label={label}
        onClick={(event) => {
          event.preventDefault();
          if (setSelect) {
            //...product,
            //...values.current
            const { id, label, name, prices, shortName, unavailable } = product;
            const { measure, price, purchase, quantity } = values.current;
            setSelect((values) => {
              const selectProduct: ItemForSaleProps = {
                id,
                label,
                name,
                prices,
                shortName,
                unavailable,
                measure,
                price,
                purchase,
                quantity
              };
              const arrayValues = values as ItemForSaleProps[];

              function containsObject(item: ItemForSaleProps, array: ItemForSaleProps[]) {
                let Return = false;
                array.forEach((object) => {
                  if (
                    object.id == item.id &&
                    object.measure == item.measure &&
                    object.price == item.price &&
                    object.quantity == item.quantity &&
                    object.purchase == item.purchase
                  )
                    Return = true;
                });
                return Return;
              }

              const productExist = containsObject(selectProduct, arrayValues);
              if (!productExist) return [...arrayValues, selectProduct];
              return [...arrayValues];
            });
          }
        }}
      />
    </motion.div>
  );
}

function handleEvents({ values, setValues }: HandleEventProps) {
  return {
    handleValue: {
      handleToggleGallonRefill: (
        event: React.MouseEvent<HTMLButtonElement, MouseEvent>
      ) => {
        if (event.target === event.currentTarget) {
          const { state } = event.currentTarget.dataset;
          const toggleValues = (gallonKey: 'gallon' | 'refill') => {
            const { current, products } = values;
            const defaultMeasure = current.measure ? current.measure : '20L';
            const product = products.find((product) => product[defaultMeasure]);
            const newPrice = (product![defaultMeasure] as GallonValueControlProps)[
              gallonKey
            ];
            return {
              ...values,
              current: { ...values.current, price: newPrice, purchase: gallonKey }
            };
          };
          const selectState = {
            on: () => setValues(toggleValues('refill')),
            off: () => setValues(toggleValues('gallon'))
          };
          selectState[state as keyof typeof selectState]();
        }
      },
      handleChangeMeasure: (measure: string) => {
        const product = values.products.find((product) => product[measure]);
        const defaultPurchase = values.current.purchase
          ? values.current.purchase
          : 'refill';

        const newPrice = (product![measure] as GallonValueControlProps)[defaultPurchase];
        setValues({
          ...values,
          current: { ...values.current, price: newPrice, measure: measure }
        });
      },
      handleDecrementQuantity: () => {
        const { quantity } = values.current;
        if (quantity && quantity > 0)
          setValues({
            ...values,
            current: { ...values.current, quantity: quantity - 1 }
          });
        console.log(quantity);
      },
      handleIncrementQuantity: () => {
        const { quantity } = values.current;
        if (quantity && quantity < 99)
          setValues({
            ...values,
            current: { ...values.current, quantity: quantity + 1 }
          });
        console.log(quantity);
      },
      handleKeyboardChangeQuantity: (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
          ...values,
          current: { ...values.current, quantity: parseInt(event.target.value, 10) }
        });
      }
    }
  };
}
