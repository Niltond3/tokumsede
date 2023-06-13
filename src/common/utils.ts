/* eslint-disable @typescript-eslint/no-non-null-assertion */
import * as types from 'common/types';

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};

const containsOnlyNumbers = (str: string) => /^\d+$/.test(str);

const numberToCurrency = (num: number) =>
  num.toLocaleString('pt-br', { minimumFractionDigits: 2 });

const isArray = (object: any) => Array.isArray(object);

const getCountRequestsByState = (
  id: types.PurchaseColumnsKey,
  columns: types.PurchaseColumnsType
) => {
  const { DELIVERED } = columns;
  if (id === 'DELIVERED') {
    let key: types.PurchaseColumnsKey;
    let count = 0;
    for (key in columns)
      if (key !== 'DELIVERED' && key !== 'CANCELED')
        count = count + columns[key].purchasesIds.length;
    return `${count}/${DELIVERED.purchasesIds.length}`;
  }
  return columns[id].purchasesIds.length;
};

export {
  ToClipboard,
  containsOnlyNumbers,
  numberToCurrency,
  isArray,
  getCountRequestsByState
};
