/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import Icons, {
  Accepted,
  ArrowRight,
  Cancel,
  Delivered,
  Hashtag,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import TextField from 'app/components/Ui/Inputs/TextField';

import $ from 'jquery';
import { TypeIcons, PaymentType } from 'utils/Types';

interface ICard {
  index: number;
  title: string;
}

export default function PurchaseCard({ index, title }: ICard) {
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

  function handleClickToClipboard(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    navigator.clipboard.writeText(event.currentTarget.dataset.id!);
  }

  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];
  const checkId = `${title}-dropDownControl-${index}`;
  return (
    <div
      key={`${index}-card`}
      className="mt-2 min-h-[10rem] rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base"
    >
      {/* Head row */}
      <div className="flex justify-between text-xs font-medium opacity-30 ">
        <button
          className="group relative flex items-center"
          data-id={'000'}
          onClick={handleClickToClipboard}
        >
          <Hashtag />
          000
          <Tooltip close position="right" title="Copiar pedido" />
        </button>
        <span>Distribuidora</span>
      </div>
      {/* Currency and status row */}
      <div className="mt-1 flex">
        <div className="group relative flex items-center">
          <input type="checkbox" id={checkId} className="group peer hidden"></input>
          <label htmlFor={checkId} className="flex cursor-pointer items-center">
            <Icons icon={paymentType as keyof TypeIcons} />
            <ArrowRight />
          </label>
          <ul className="absolute top-full flex max-h-0 w-full flex-col items-center overflow-hidden transition-faster peer-checked:max-h-[10rem]">
            {paymentForms.map((value, index) => {
              const key = `${title}-${value}-${index}`;
              return (
                <RenderPaymentLi
                  handleClick={handleClickChangePayment}
                  key={key}
                  value={value}
                  checkId={checkId}
                />
              );
            })}
          </ul>
          <Tooltip
            close
            title={`Forma de pagamento: ${paymentType}`}
            position="top-start"
          />
        </div>
        <div className="group relative flex items-center">
          R$ <span className="px-1">00,00</span>
          <Tooltip close position="top" title="Total a pagar" />
        </div>
        <TextField type="currence" />

        <div className="flex">
          <Pending />
          <Accepted />
          <Icons icon="logistics" />
          <Delivered />
          <Cancel />
          <Schedule />
        </div>
      </div>
    </div>
  );
}

type InitialState = {
  paymentType: PaymentType;
};

type PaymentLiType = {
  checkId: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
  value: keyof TypeIcons;
};

function RenderPaymentLi({ checkId, handleClick, key, value }: PaymentLiType) {
  return (
    <li className="opacity-50 transition-faster hover:opacity-100" key={key}>
      <button onClick={handleClick} value={value} data-check={checkId}>
        <Icons icon={value} />
      </button>
    </li>
  );
}
