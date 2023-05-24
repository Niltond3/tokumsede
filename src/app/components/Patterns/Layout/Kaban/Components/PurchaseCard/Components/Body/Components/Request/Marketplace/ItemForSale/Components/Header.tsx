import React from 'react';

import { HeaderProps } from './Types';

import clsx from 'clsx';

export default function Header({ style, value, label }: HeaderProps) {
  return (
    <div className="relative flex w-11/12 self-end">
      <div
        className={clsx(
          style,
          'relative z-10 flex h-12 w-12 flex-col items-center justify-center rounded-full border-[3px]  bg-lg-primary-base'
        )}
      >
        <span className="absolute left-1.5 top-[1px] text-[0.45rem] font-extrabold opacity-60">
          R$
        </span>
        <span className="text-lg font-bold transition-faster">{value}</span>
        <span className="absolute -bottom-0.5 font-mono text-[0.5rem] font-extrabold opacity-60">
          /un
        </span>
      </div>
      <span className="absolute right-0 z-[0] flex w-11/12 justify-end bg-white/20 pr-1 font-bold text-white center-x">
        {label}
      </span>
    </div>
  );
}
