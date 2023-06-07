/* eslint-disable @typescript-eslint/no-non-null-assertion */

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};
const containsOnlyNumbers = (str: string) => {
  return /^\d+$/.test(str);
};
export { ToClipboard, containsOnlyNumbers };
