/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

// import {
//   CallbackRenderOptionsProps,
//   ProductType
// } from 'components/Patterns/Layout/Kaban/Types';

import Body from './Components/Body';
import Footer from './Components/Footer';
import Header from './Components/Header';

import clsx from 'clsx';
import * as types from 'common/types';
import { motion } from 'framer-motion';

export default function ItemForSale(product: types.KabanItemForSaleProps) {
  const {
    prices: { refill, gallon },
    label,
    controls,
    shortName,
    setSelect
  } = product;
  const [values, setValues] = useState<types.KabanItemForSaleValueStateType>({
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
  const styleKey = lowName as keyof typeof mappingProductsStyles;
  const gallonSrc = lowName as types.ImagePath;

  const measure: {
    itemIndex: number;
    id: string;
    value: string;
    label?: string;
    position?: 'L' | 'R';
  }[] = values.products.map((item, index) => ({ ...item.measure, itemIndex: index }));

  const { wrapper, header, body, footer } = mappingProductsStyles[styleKey];

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
        onClick={(event) => handleSelectProduct({ event, setSelect, product, values })}
      />
    </motion.div>
  );
}

function handleEvents({ values, setValues }: types.KabanItemForSaleHandleEventProps) {
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
            const newPrice = (
              product![defaultMeasure] as types.KabanItemForSaleGallonValueControlProps
            )[gallonKey];
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

        const newPrice = (
          product![measure] as types.KabanItemForSaleGallonValueControlProps
        )[defaultPurchase];
        setValues({
          ...values,
          current: { ...values.current, price: newPrice, measure: measure }
        });
      },
      handleDecrementQuantity: () => {
        const { quantity } = values.current;
        setValues({
          ...values,
          current: { ...values.current, quantity: quantity! - 1 }
        });
      },
      handleIncrementQuantity: () => {
        const { quantity } = values.current;
        if (quantity! < 99)
          setValues({
            ...values,
            current: { ...values.current, quantity: quantity! + 1 }
          });
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

const mappingProductsStyles = {
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

function containsObject(
  item: Omit<types.KabanItemForSaleProps, 'controls'>,
  array: types.KabanItemForSaleProps[]
) {
  let Return = {
    exists: false,
    index: 0
  };

  array.forEach((object, index) => {
    const commonConditional =
      object.id == item.id &&
      object.measure == item.measure &&
      object.price == item.price &&
      object.purchase == item.purchase;

    if (commonConditional)
      Return = {
        exists: true,
        index
      };
  });
  return Return;
}

function handleSelectProduct({
  event,
  setSelect,
  product,
  values
}: types.KabanItemForSaleHandleSelectProductProps) {
  event.preventDefault();
  if (setSelect && values.current.quantity != 0) {
    //...product,
    //...values.current
    const { id, label, name, prices, shortName, unavailable } = product;
    const { measure, price, purchase, quantity } = values.current;
    setSelect((values) => {
      const selectProduct = {
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
      const arrayValues = values as types.KabanItemForSaleProps[];
      const { exists, index } = containsObject(selectProduct, arrayValues);

      const unshiftNulishQuantityProduct = [
        ...arrayValues.slice(0, index),
        ...arrayValues.slice(index + 1)
      ];

      if (!exists && selectProduct.quantity! > 0) return [...arrayValues, selectProduct];
      const existentElement = arrayValues[index];
      if (!existentElement) return [...arrayValues];
      const newQuantity = existentElement.quantity! + selectProduct.quantity!;
      if (exists && newQuantity <= 0) return unshiftNulishQuantityProduct;
      const updateQuantity = [
        ...arrayValues.slice(0, index),
        {
          ...existentElement,
          quantity: newQuantity <= 99 ? newQuantity : 99
        },
        ...arrayValues.slice(index + 1)
      ];
      if (exists && newQuantity > 0) return updateQuantity;
      if (!exists) return [...arrayValues];
      return [...arrayValues];
    });
  }
}
