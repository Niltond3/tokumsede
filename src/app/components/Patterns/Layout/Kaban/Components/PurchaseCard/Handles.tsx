/* eslint-disable @typescript-eslint/no-non-null-assertion */

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};

export { ToClipboard };
