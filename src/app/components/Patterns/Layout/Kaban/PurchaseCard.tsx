/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import Icons, {
  Accepted,
  Address,
  ArrowRight,
  Cancel,
  Copy,
  Delivered,
  Exchange,
  Number,
  Pending,
  Phone,
  Purchase,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import Img from 'app/components/Ui/DataDisplay/Image';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import TextField from 'app/components/Ui/Inputs/TextField';

import $ from 'jquery';
import { TypeIcons, PaymentType } from 'utils/Types';

interface ICard {
  index: number;
  purchaseId: string;
  currentStatus: string;
}

export default function PurchaseCard({ index, purchaseId, currentStatus }: ICard) {
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

  const handleClickToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
  };

  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];
  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase();
  const accordionId = `${currentStatus}-accordion-control-${index}`.toLocaleLowerCase();

  return (
    <div
      key={`${index}-card`}
      className="mt-2 rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base"
    >
      {/*HEAD --> ID NUMBER -> DISTRIBUTOR NAME */}
      <div className="flex justify-between text-xs font-medium [&>*]:opacity-30 ">
        <button
          className="group relative flex items-center transition-faster hover:opacity-100"
          data-clipboard={'000'}
          onClick={handleClickToClipboard}
        >
          <Number />
          000
          <Tooltip
            close
            noArrow
            position="right"
            title={<Copy />}
            className="bg-lg-primary-base/30 backdrop-blur-sm"
          />
        </button>
        <span>Distribuidora</span>
      </div>
      {/* CURRENCY --> CURRENCY TYPE -> PAYMENT TOTAL -> EXCHANGE VALUE */}
      <div className="mt-2 flex justify-between">
        <div className="group relative flex items-center">
          <input type="checkbox" id={dropDownId} className="group peer hidden"></input>
          <label htmlFor={dropDownId} className="flex cursor-pointer items-center">
            <Icons icon={paymentType as keyof TypeIcons} />
            <ArrowRight />
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
          <Tooltip
            close
            title={`Forma de pagamento: ${paymentType}`}
            position="top-start"
          />
        </div>
        <button
          className="group relative flex items-center"
          onClick={handleClickToClipboard}
          data-clipboard="Total a pagar: R$ 00,00"
        >
          <p className="pointer-events-none px-1">
            <span className="text-xs font-medium">R$ </span>00,00
          </p>
          <Tooltip
            close
            position="top"
            title={
              <div className="flex items-center">
                <Copy /> <p className="ml-1">Total a pagar</p>
              </div>
            }
          />
        </button>
        <div className="group relative flex items-center">
          <Exchange /> <TextField type="currence" />
          <Tooltip close position="top" title="Troco" />
        </div>
      </div>
      {/* PERSONAL --> CLIENT NAME ->  CLIENT PHONE NUMBER */}
      <div className="mt-2 flex">
        <div className="group relative">
          <TextField type="text" maxLength={15} placeholder="Nome do cliente" />
          <Tooltip title="Cliente" close position="top" />
        </div>
        <label className="group relative ml-2 flex items-center">
          <Phone /> <TextField type="phoneNumber" />
          <Tooltip title="Telefone" close position="top" />
        </label>
      </div>
      {/* ADDRESS --> STREET -> NEIGHBORHOOD -> NUMBER -> COMPLEMENT -> REFERENCE*/}
      <div className="mt-2 text-left">
        <button className="group relative float-left mr-1 h-min">
          <Address />
          <Tooltip position="top-start" title="Mudar endereço" close />
        </button>
        <p className="text-justify">
          rua do cliente, nº ## ● bairro do cliente. | complemento ● referência
        </p>
      </div>
      {/* PRODUCT --> PRODUCT -> UN VALUE -> QUANTITY -> TOTAL VALUE */}
      <div className={'relative my-1'}>
        <input type="checkbox" id={accordionId} className="group peer hidden"></input>
        <label
          htmlFor={accordionId}
          className="relative flex cursor-pointer items-center justify-between transition-faster peer-checked:mt-2 peer-checked:[&>svg:nth-child(2)]:-rotate-90"
        >
          <Purchase />
          <ArrowRight className="rotate-90 transition-faster" />
        </label>
        <div className="max-h-0 overflow-hidden p-1 transition-faster peer-checked:max-h-40">
          <div>
            <div>
              <Img size={12} image="logo" />
              <p>productName</p>
            </div>
            <div className="group relative flex items-center">
              <p className="px-1">
                <span className="text-xs font-medium">R$ </span>
                <TextField type="currence" />
              </p>
              <Tooltip close position="top" title="Troco" />
            </div>
            <div>
              qtd <input type="number"></input>
            </div>
            <button
              className="group relative flex items-center"
              onClick={handleClickToClipboard}
              data-clipboard="Subtotal: R$ 00,00"
            >
              <p className="pointer-events-none px-1">
                <span className="text-xs font-medium">R$ </span>00,00
              </p>
              <Tooltip
                close
                position="top"
                title={
                  <div className="flex items-center">
                    <Copy /> <p className="ml-1">Subtotal</p>
                  </div>
                }
              />
            </button>
          </div>
        </div>
      </div>
      {/* STATUS --> STATUS TIME AND RESPONSE TRACKER */}
      <div className="flex">
        <Pending />
        <Accepted />
        <Icons icon="logistics" />
        <Delivered />
        <Cancel />
        <Schedule />
      </div>
    </div>
  );
}

type InitialState = {
  paymentType: PaymentType;
};

type PaymentLiType = {
  dropDownId: string;
  handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
  value: keyof TypeIcons;
};

function RenderPaymentLi({ dropDownId, handleClick, key, value }: PaymentLiType) {
  return (
    <li className="opacity-50 transition-faster hover:opacity-100" key={key}>
      <button onClick={handleClick} value={value} data-check={dropDownId}>
        <Icons icon={value} />
      </button>
    </li>
  );
}
