import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Img from 'app/components/Ui/DataDisplay/Image';
import Button from 'app/components/Ui/Inputs/Button';
import RadioGroup from 'app/components/Ui/Inputs/RadioGroup';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';

import { BodyProps } from '../Types';

import clsx from 'clsx';

export default function Body({
  style,
  gallonSrc,
  measure,
  quantity,
  handleQuantity,
  handleValue
}: BodyProps) {
  const MesureStyles = {
    RadioGroupRoot:
      'flex justify-center items-start [&:has(button[data-state=checked])>button]:text-white relative h-[45%] ',
    RadioGroupItem:
      'focus-visible:outline-none focus-visible:elevation-3 rounded-full data-state-checked:text-white peer peer-data-state-checked:opacity-60 transition-faster data-[disabled]:!opacity-20',
    RadioGroupIndicator: '',
    RadioGroupLabel:
      'absolute bottom-0 text-xs font-semibold text-white opacity-0 [&:has(+[data-state=checked])]:opacity-100 transition-faster'
  };

  const { handleDecrement, handleIncrement, handleKeyboardChange } = handleQuantity;
  const { handleToggleFullRefill, handleChangeMeasure } = handleValue;
  return (
    <div className="flex">
      <div className="relative flex flex-1 items-center justify-center">
        <Img className="relative h-5/6 w-fit" image={gallonSrc} blur="blur" />
        <div
          className={clsx(
            'before:absolute before:top-1 before:h-0 before:w-0 before:rotate-45 before:border-4 before:border-transparent before:!border-l-gray-700',
            'absolute -left-1 bottom-3 flex h-6 items-end overflow-hidden'
          )}
        >
          <Button
            id={`${gallonSrc}_bt_tg_text_gallons`}
            typeOf="toggle"
            toggleVariant="text"
            data-tg-on="COMPLETO"
            data-tg-off="REFIL"
            className={`h-4 w-12 rounded-none bg-white !opacity-100 ${style}`}
            onClick={handleToggleFullRefill}
          />
        </div>
      </div>
      <div className="flex flex-1 items-center justify-center">
        <Divider orientation="vertical" className="!h-5/6 !bg-white/30" />
        <div className="h-5/6">
          <RadioGroup
            group={measure}
            styles={MesureStyles}
            item={<Icons icon="Drop" className="" />}
            onValueChange={handleChangeMeasure}
          />
          <Divider className="!bg-white/30" />
          {/* CREATE A INPUT TYPE NUMBER */}
          <TextField
            id={`quantity-${gallonSrc}`}
            type="number"
            placeholder="0"
            maxLength={2}
            buttonStyles={{ wrapper: 'py-s px-xs h-[45%]', button: '', icon: style }}
            className="text-white"
            value={quantity}
            handleDecrement={handleDecrement}
            handleIncrement={handleIncrement}
            onChange={handleKeyboardChange}
          />
        </div>
      </div>
    </div>
  );
}
