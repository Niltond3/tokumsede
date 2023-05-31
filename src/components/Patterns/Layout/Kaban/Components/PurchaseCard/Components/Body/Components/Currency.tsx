import React, { useState } from 'react';

import Icons from 'components/Ui/DataDisplay/Icons';
import Tooltip from 'components/Ui/DataDisplay/Tooltip';
import Button from 'components/Ui/Inputs/Button';
import TextField from 'components/Ui/Inputs/TextField';

import { ToClipboard } from '../../../Handles';
import SessionWrapper from './SessionWrapper';

import $ from 'jquery';
import { TypeIcons, PaymentType } from 'utils/Types';

type InitialState = {
  paymentType: PaymentType;
};

type PaymentLiType = {
  dropDownId: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
  value: keyof TypeIcons;
};

type CurrencyProps = {
  dropDownId: string;
  purchaseId: string;
};

export default function Currency({ dropDownId, purchaseId }: CurrencyProps) {
  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];
  const initialState: InitialState = {
    paymentType: 'Cash'
  };
  const [state, setState] = useState(initialState);
  const { paymentType } = state;

  const handleClickChangePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { currentTarget } = event;
    const { value, dataset } = currentTarget;
    $(`#${dataset.check}`).prop('checked', false);
    setState({ ...state, paymentType: value as PaymentType });
  };

  return (
    <SessionWrapper>
      <div className="flex justify-between gap-2">
        {/* UPDATE THIS BLOCK */}
        <Tooltip side="top" content={`Forma de pagamento: ${paymentType}`}>
          <div className="group relative flex flex-1 items-center">
            <input type="checkbox" id={dropDownId} className="group peer hidden"></input>
            <label htmlFor={dropDownId} className="flex cursor-pointer items-center">
              <Icons icon={paymentType as keyof TypeIcons} />
              <Icons icon="Arrow" />
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
        <Tooltip
          content={
            <label className="flex items-center gap-2">
              <Icons icon="Copy" /> <span>Total a pagar</span>
            </label>
          }
          side="top"
        >
          <Button
            onClick={ToClipboard}
            data-clipboard="Total a pagar: R$ 00,00"
            iconL="CurrencyReal"
          >
            00,00
          </Button>
        </Tooltip>
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

const RenderPaymentLi = ({ dropDownId, handleClick, key, value }: PaymentLiType) => {
  return (
    <li className="opacity-50 transition-faster hover:opacity-100" key={key}>
      <button onClick={handleClick} value={value} data-check={dropDownId}>
        <Icons icon={value} />
      </button>
    </li>
  );
};
