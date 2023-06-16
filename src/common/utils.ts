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

const immutablePush = <T>(array: T[], newElement: T) => [...array, newElement];

const immutableUnshift = <T>(array: T[], newElement: T) => [newElement, ...array];

const immutablePop = <T>(array: T[]) => [...array.slice(0, array.length - 1)];

const immutableShift = <T>(array: T[]) => [...array.slice(1)];

const immutableDelete = <T>(array: T[], index: number) => [
  ...array.slice(0, index),
  ...array.slice(index + 1)
];

const immutableInsert = <T>(array: T[], element: T, index: number) => [
  ...array.slice(0, index),
  element,
  ...array.slice(index)
];

const immutableMove = <T>(array: T[], element: T, fromIndex: number, toIndex: number) => {
  const deleted = immutableDelete(array, fromIndex);
  return immutableInsert(deleted, element, toIndex);
};

export {
  ToClipboard,
  containsOnlyNumbers,
  numberToCurrency,
  isArray,
  getCountRequestsByState,
  immutablePush,
  immutableUnshift,
  immutablePop,
  immutableShift,
  immutableDelete,
  immutableInsert,
  immutableMove
};
