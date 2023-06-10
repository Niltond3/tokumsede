/* eslint-disable @typescript-eslint/no-non-null-assertion */

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};

const containsOnlyNumbers = (str: string) => /^\d+$/.test(str);

const numberToCurrency = (num: number) =>
  num.toLocaleString('pt-br', { minimumFractionDigits: 2 });

const isArray = (object: any) => Array.isArray(object);

export { ToClipboard, containsOnlyNumbers, numberToCurrency, isArray };
