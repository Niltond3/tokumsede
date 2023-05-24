import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';

import { FooterProps } from './Types';

import clsx from 'clsx';

export default function Footer({ style, label }: FooterProps) {
  return (
    <div className="flex gap-3">
      <span className="flex items-center justify-center rounded-tr-3xl bg-white/20 px-3 py-xs font-bold text-white">
        {label[0]}
      </span>
      <Button
        className={clsx(
          style,
          'w-full rounded-none rounded-tl-3xl bg-white/20 text-white hover:bg-white/40'
        )}
      >
        <Icons icon="AddShopping" />
      </Button>
    </div>
  );
}
