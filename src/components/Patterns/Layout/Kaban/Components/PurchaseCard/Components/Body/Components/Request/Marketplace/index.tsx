import React from 'react';

import { ProductProps, ProductType } from 'app/components/Patterns/Layout/Kaban/Types';
import DropdownMenu from 'app/components/Ui/Navigation/DropdownMenu';
import { ObjectDefaultProps, RenderSelectType } from 'app/components/Ui/Navigation/types';

import ItemForSale from './ItemForSale';
import { CurrentValueProps } from './ItemForSale/Types';

type DropdownProductProps = ProductProps & CurrentValueProps;

const mappingMenuStyles = {
  trigger: {
    wrapper: 'items-center gap-2.5 flex-[90%]',
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
      header: 'bg-lg-primary',
      footer: 'text-lg-primary',
      measureStyle: 'border-l-lg-primary'
    },
    rica: {
      header: 'bg-lg-success',
      footer: 'text-lg-success',
      measureStyle: 'border-l-lg-success'
    },
    sport: {
      header: 'bg-lg-sent',
      footer: 'text-lg-sent',
      measureStyle: 'border-l-lg-sent'
    }
  } as const;
  const { header, footer, measureStyle } = mappingProductsStyles[styleKey];
  return (
    <div
      className={`bg-white relative flex flex-col h-full items-center justify-center text-[10px] font-bold leading-none elevation-3 min-w-[2.42rem] max-w-[2.42rem]`}
    >
      <span className={`${header} flex items-center justify-center w-full h-1/2`}>{purchase === 'gallon' ? 'GALÃO' : 'REFIL'}</span>
      <div className={`${footer} flex h-1/2 w-full`}>
        <span className="flex items-center justify-center h-full w-full text-xs px-0.5">{label[0]}</span>
        <span className={`${measureStyle} px-0.5 flex border-l-[1px] border-dashed items-center justify-center`}>{measure}</span>
      </div>
      <span className={`${header} absolute -left-2 flex h-3 w-3 items-center justify-center rounded-full text-center outline outline-2 outline-lg-primary center-x`}>
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
