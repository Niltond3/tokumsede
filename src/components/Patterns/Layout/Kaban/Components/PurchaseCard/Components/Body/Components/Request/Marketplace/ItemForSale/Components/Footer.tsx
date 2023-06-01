import React from 'react';

import { ProductType } from 'components/Patterns/Layout/Kaban/Types';
import Icons from 'components/Ui/DataDisplay/Icons';
import Button from 'components/Ui/Inputs/Button';

import { CurrentValueProps, FooterProps } from '../Types';

import clsx from 'clsx';

export default function Footer({ style, label, onClick }: FooterProps) {
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
        onClick={onClick}
      >
        <Icons icon="AddShopping" />
      </Button>
    </div>
  );
}
