import React, { useContext } from 'react';

import DropdownMenu from 'components/Patterns/Navigation/DropdownMenu';

import SessionWrapper from '../SessionWrapper';
import ItemForSale from './Components/ItemForSale';

import * as types from 'common/types';
import { containsOnlyNumbers } from 'common/utils';
import { AppContext } from 'hooks/usePurchase';
import { toInteger } from 'lodash';

export default function Request({ purchase }: types.KabanCardRequestProps) {
  const { dispatch } = useContext(AppContext);
  const { update } = types.PURCHASE_ACTION_TYPES;

  return (
    <SessionWrapper className="flex min-h-[2rem] gap-2">
      <DropdownMenu
        styles={mappingMenuStyles}
        list={products}
        renderSelect={RenderSelect}
        renderOptions={ItemForSale}
        arrow={false}
        selectItems={(items) => {
          const itemsAsArray = items as types.DropdownDefaultProps<
            types.KabanProductType & types.KabanCurrentValueProps
          >[];

          const newPrice = getPrice(itemsAsArray);

          if (newPrice !== purchase.price)
            dispatch({
              type: update,
              payload: { id: purchase.id, updateFields: { price: newPrice } }
            });
        }}
      />
    </SessionWrapper>
  );
}

function RenderSelect({
  label,
  purchase,
  measure,
  quantity
}: types.KabanMarketplaceRenderSelectProps) {
  const lowName = label.toLowerCase();
  const styleKey = lowName as keyof typeof mappingProductsStyles;

  const { header, footer, measureStyle } = mappingProductsStyles[styleKey];
  return (
    <div
      className={`relative flex h-full min-w-[2.42rem] max-w-[2.42rem] flex-col items-center justify-center bg-white text-[10px] font-bold leading-none elevation-3`}
    >
      <span className={`${header} flex h-1/2 w-full items-center justify-center`}>
        {purchase === 'gallon' ? 'GALÃO' : 'REFIL'}
      </span>
      <div className={`${footer} flex h-1/2 w-full`}>
        <span className="flex h-full w-full items-center justify-center px-0.5 text-xs">
          {label[0]}
        </span>
        <span
          className={`${measureStyle} flex items-center justify-center border-l-[1px] border-dashed px-0.5`}
        >
          {measure}
        </span>
      </div>
      <span
        className={`${header} absolute -left-2 flex h-3 w-3 items-center justify-center rounded-full text-center outline outline-2 outline-lg-primary center-x`}
      >
        {quantity}
      </span>
    </div>
  );
}

const mappingMenuStyles = {
  trigger: {
    wrapper: 'items-center flex-[90%] overflow-hidden',
    renderItemWrapper: 'pl-2 gap-3',
    button:
      'rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg',
    icon: ''
  },
  dropdownContent:
    'flex max-h-48 min-h-[11rem] max-w-[16rem] min-w-max gap-4 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm'
};

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

const gallonPrices = {
  '5L': 0,
  '10L': 11,
  '20L': 19
};

const products: types.DropdownProductProps[] = [
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

const getPrice = (
  array: types.DropdownDefaultProps<
    types.KabanProductType & types.KabanCurrentValueProps
  >[]
) => {
  let totalPrice = 0;
  array.forEach((item) => {
    if (item.price && item.quantity) totalPrice = totalPrice + item.price * item.quantity;
  });
  return totalPrice;
};
