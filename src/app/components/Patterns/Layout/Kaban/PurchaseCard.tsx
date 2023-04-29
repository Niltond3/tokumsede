/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import Icons, {
  Accepted,
  Arrow,
  Cancel,
  Copy,
  Delivered,
  Number,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import { SelectableProps } from 'app/components/Ui/Inputs/Select';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';
import Popover from 'app/components/Ui/Layout/Popover';

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
  // const accordionId = `${currentStatus}-accordion-control-${index}`.toLocaleLowerCase();

  // const smReturn = ();

  // const mdReturn = ();

  // const lgReturn = ();

  const SessionWrapper = ({ children }: { children: React.ReactNode }) => (
    <section>
      {children}
      <Divider className="my-s" />
    </section>
  );
  return (
    <div
      key={`${index}-card`}
      className="mt-2 flex-1 rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base @container"
    >
      {/*HEAD --> ID NUMBER -> DISTRIBUTOR NAME */}
      <SessionWrapper>
        <div className="flex justify-between text-xs font-medium [&>*]:opacity-30">
          {/* UPDATE THIS BUTTON */}
          <Tooltip content={<Copy />} side="right">
            <button
              className="group relative flex items-center transition-faster hover:opacity-100"
              data-clipboard={'000'}
              onClick={handleClickToClipboard}
            >
              <Number />
              000
              {/* className="bg-lg-primary-base/30 backdrop-blur-sm" */}
            </button>
          </Tooltip>
          {/* UPDATE THIS BUTTON */}
          <span>Distribuidora</span>
        </div>
      </SessionWrapper>
      {/* CURRENCY --> CURRENCY TYPE -> PAYMENT TOTAL -> EXCHANGE VALUE */}
      <SessionWrapper>
        <div className="flex justify-between gap-2">
          {/* UPDATE THIS BLOCK */}
          <Tooltip side="top" content={`Forma de pagamento: ${paymentType}`}>
            <div className="group relative flex flex-1 items-center">
              <input
                type="checkbox"
                id={dropDownId}
                className="group peer hidden"
              ></input>
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
              onClick={handleClickToClipboard}
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
      {/* PERSONAL --> CLIENT NAME ->  CLIENT PHONE NUMBER */}
      <SessionWrapper>
        <div className="flex flex-col">
          <div className="group relative flex items-center gap-2">
            <label>
              <Icons icon="Person" />
            </label>
            <TextField type="text" placeholder="Nome do cliente" />
          </div>
          <div className="group relative flex items-center gap-2">
            <label>
              <Icons icon="Phone" />
            </label>
            <TextField type="phoneNumber" />
          </div>
        </div>
      </SessionWrapper>
      {/* ADDRESS --> STREET -> NEIGHBORHOOD -> NUMBER -> COMPLEMENT -> REFERENCE*/}
      {/* PRODUCT --> PRODUCT -> UN VALUE -> QUANTITY -> TOTAL VALUE */}
      <SessionWrapper>
        <div className="flex gap-2">
          <i className="flex flex-[10%]">
            <Icons icon="Address" />
          </i>
          <Popover list={products} className="flex-[90%]" />
        </div>
      </SessionWrapper>
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

type Product = SelectableProps;
/**
[16:05, 26/04/2023] Claudizon: Alcalina Rica: 10 e 20 litros
[16:06, 26/04/2023] Claudizon: Alcalina Sport: 5 e 20 litros
[16:06, 26/04/2023] Claudizon: Alcalina Leve: 20 litros
 */
const products: Product[] = [
  {
    id: 1,
    name: 'leve',
    shortName: 'L',
    value: 8.0,
    measure: '20L',
    unavailable: false
  },
  {
    id: 2,
    name: 'rica',
    shortName: 'R',
    value: 11.0,
    measure: '20L',
    unavailable: false
  },
  {
    id: 3,
    name: 'sport',
    shortName: 'S',
    value: 10.0,
    measure: '20L',
    unavailable: false
  }
];

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

//<SessionWrapper>
//  <div className="text-left">
//    {/* UPDATE THIS BUTTON*/}
//    <Tooltip side="top" content="Mudat Endereço">
//      <button className="group relative float-left mr-1 h-min">
//        <Address />
//      </button>
//    </Tooltip>
//    {/* UPDATE THIS BUTTON*/}
//    <p className="text-justify">
//      rua do cliente, nº ## ● bairro do cliente. | complemento ● referência
//    </p>
//  </div>
//  {/* PRODUCT --> PRODUCT -> UN VALUE -> QUANTITY -> TOTAL VALUE */}
//  <div className={'relative my-1'}>
//    <input type="checkbox" id={accordionId} className="group peer hidden"></input>
//    <label
//      htmlFor={accordionId}
//      className="relative flex cursor-pointer items-center justify-between transition-faster peer-checked:mt-2 peer-checked:[&>svg:nth-child(2)]:-rotate-90"
//    >
//      <Purchase />
//      <Arrow className="rotate-90 transition-faster" />
//    </label>
//    <div className="max-h-0 overflow-hidden p-1 transition-faster peer-checked:max-h-40">
//      <div className="flex [&>*]:w-4 ">
//        <p>produto</p>
//        <p>un</p>
//        <p>qtd</p>
//        <p>total</p>
//      </div>
//      <ul>{renderProducts(products)}</ul>
//    </div>
//  </div>
//</SessionWrapper>;
