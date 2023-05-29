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
      wrapper: 'bg-lg-primary/30',
      header: 'border-lg-primary text-lg-primary',
      footer: 'text-lg-primary'
    },
    rica: {
      wrapper: 'bg-lg-success/30',
      header: 'border-lg-success text-lg-success',
      footer: 'text-lg-success'
    },
    sport: {
      wrapper: 'bg-lg-sent/30',
      header: 'border-lg-sent text-lg-sent',
      footer: 'text-lg-sent'
    }
  } as const;
  const { wrapper, footer } = mappingProductsStyles[styleKey];
  return (
    <div className={`relative flex h-full items-center justify-center elevation-2`}>
      <span className="relative flex h-full w-1/2">{label[0]}</span>
      <div className="flex w-1/2 flex-col ">
        <span className=" font-semibold">{quantity}</span>
        <span className="font-semibold">{measure}</span>
      </div>

      <span
        className={clsx(
          `${footer} absolute -bottom-1 -left-1 bg-white px-0.5 py-px text-[10px] font-semibold`,
          'before:absolute before:left-px before:top-[-3px] before:h-0 before:w-0 before:rotate-45 before:border-[3px] before:border-transparent before:!border-l-gray-700'
        )}
      >
        {purchase}
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
