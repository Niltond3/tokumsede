import React from 'react';

import { ProductProps, ProductType } from 'app/components/Patterns/Layout/Kaban/Types';
import DropdownMenu from 'app/components/Ui/Navigation/DropdownMenu';
import {
  CallbackType,
  ObjectDefaultProps,
  RenderSelectType
} from 'app/components/Ui/Navigation/types';

import ItemForSale from './ItemForSale';
import { CurrentValueProps } from './ItemForSale/Types';

import clsx from 'clsx';

const mappingMenuStyles = {
  trigger: {
    wrapper: 'items-center gap-4 flex-[90%]',
    button:
      'rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg',
    icon: ''
  },
  dropdownContent:
    'flex max-h-48 min-h-[11rem] max-w-[16rem] min-w-max gap-4 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm'
};

export default function Marketplace() {
  return (
    <DropdownMenu
      styles={mappingMenuStyles}
      list={products}
      renderSelect={RenderSelect}
      renderOptions={ItemForSale}
      arrow={false}
    />
  );
}
type RenderSelectProps = RenderSelectType<
  ObjectDefaultProps<ProductType & CurrentValueProps>
>;

function RenderSelect(product: RenderSelectProps) {
  const { label, name, price, purchase, measure, quantity } = product;
  const lowName = label.toLowerCase();
  const styleKey = lowName as keyof typeof mappingProductsStyles;

  const mappingProductsStyles = {
    leve: {
      wrapper: 'bg-lg-primary',
      header: 'border-lg-primary text-lg-primary',
      footer: 'text-lg-primary'
    },
    rica: {
      wrapper: 'bg-lg-success',
      header: 'border-lg-success text-lg-success',
      footer: 'text-lg-success'
    },
    sport: {
      wrapper: 'bg-lg-sent',
      header: 'border-lg-sent text-lg-sent',
      footer: 'text-lg-sent'
    }
  } as const;
  const { wrapper, footer } = mappingProductsStyles[styleKey];
  return (
    <div
      className={`${wrapper} relative flex h-full flex-col items-center justify-center gap-1 text-[10px]  font-bold leading-none elevation-2`}
    >
      <div className="flex">
        <span className="relative flex h-full w-1/2">{label[0]}</span>
        <span className="flex h-full font-semibold">{measure}</span>
      </div>
      <span className="px-0.5">{purchase === 'gallon' ? 'Galão' : 'Refil'}</span>
      <span className="absolute -left-1.5 flex h-3 w-3 items-center justify-center rounded-full bg-red-600 text-center outline outline-2 outline-lg-primary center-x">
        {quantity}
      </span>
    </div>
  );
}
const gallonPrices = {
  '5L': 0,
  '10L': 11,
  '20L': 19
};
type DropdownProductProps = ProductProps & CurrentValueProps;
const products: DropdownProductProps[] = [
  {
    id: 1,
    label: 'Leve',
    name: 'Alkalina Leve',
    shortName: 'L',
    prices: {
      freight: 0,
      gallon: gallonPrices,
      refill: {
        '20L': 9
      }
    },
    unavailable: true
  },
  {
    id: 2,
    label: 'Rica',
    name: 'Alkalina Rica',
    shortName: 'Rica',
    prices: {
      freight: 0,
      gallon: gallonPrices,
      refill: {
        '10L': 8,
        '20L': 11
      }
    },
    unavailable: true
  },
  {
    id: 3,
    label: 'Sport',
    name: 'Alkalina Sport',
    shortName: 'Sport',
    prices: {
      freight: 0,
      gallon: gallonPrices,
      refill: {
        '5L': 10,
        '20L': 13
      }
    },
    unavailable: true
  }
];
