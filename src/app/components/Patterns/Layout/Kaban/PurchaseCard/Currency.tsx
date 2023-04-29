import React from 'react';

import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';

import { SessionWrapper } from '.';

import { TypeIcons } from 'utils/Types';

type CurrencyProps = {
  dropDownId: string;
};

export default function Currency({ dropDownId }: CurrencyProps) {
  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];

  return (
    <SessionWrapper>
      <div className="flex justify-between gap-2">
        {/* UPDATE THIS BLOCK */}
        <Tooltip side="top" content={`Forma de pagamento: ${paymentType}`}>
          <div className="group relative flex flex-1 items-center">
            <input type="checkbox" id={dropDownId} className="group peer hidden"></input>
            <label htmlFor={dropDownId} className="flex cursor-pointer items-center">
              <Icons icon={paymentType as keyof TypeIcons} />
              <Arrow />
            </label>
            <ul className="absolute top-full z-10 flex max-h-0 w-full flex-col items-center overflow-hidden rounded-md border-[0.1rem] border-lg-primary-base/0 bg-lg-primary-lighter/0 pt-1 backdrop-blur-sm transition-faster peer-checked:max-h-[10rem] peer-checked:border-lg-primary-base/30 peer-checked:bg-lg-primary-lighter/20">
              {paymentForms.map((value, index) => {
                const key = `${purchaseId}-${value}-${index}`;
                return (
                  <RenderPaymentLi
                    handleClick={handleClickChangePayment}
                    key={key}
                    value={value}
                    dropDownId={dropDownId}
                  />
                );
              })}
            </ul>
          </div>
        </Tooltip>
        {/* UPDATE THIS BLOCK */}
        {/* UPDATE THIS BUTTON */}
        <Tooltip
          content={
            <label className="flex items-center gap-2">
              <Copy /> <span>Total a pagar</span>
            </label>
          }
          side="top"
        >
          <button
            className="group relative flex flex-1 items-center gap-2"
            onClick={ToClipboard}
            data-clipboard="Total a pagar: R$ 00,00"
          >
            <label>
              <Icons icon="CurrencyReal" />
            </label>
            <p>00,00</p>
          </button>
        </Tooltip>
        {/* UPDATE THIS BUTTON */}
        <Tooltip side="top" content="Troco">
          <div className="group relative flex flex-2 items-center gap-2">
            <label>
              <Icons icon="Exchange" />
            </label>
            <TextField type="currence" />
          </div>
        </Tooltip>
      </div>
    </SessionWrapper>
  );
}
