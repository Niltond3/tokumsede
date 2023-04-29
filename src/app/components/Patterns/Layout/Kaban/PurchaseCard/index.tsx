/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { useState } from 'react';

import Icons, {
  Accepted,
  Arrow,
  Cancel,
  Copy,
  Delivered,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import { SelectableProps } from 'app/components/Ui/Inputs/Select';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';
import Popover from 'app/components/Ui/Layout/Popover';

import Currency from './Currency';
import Head from './Head';

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

  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase();
  // const accordionId = `${currentStatus}-accordion-control-${index}`.toLocaleLowerCase();

  // const smReturn = ();

  // const mdReturn = ();

  // const lgReturn = ();

  return (
    <div
      key={`${index}-card`}
      className="mt-2 flex-1 rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base @container"
    >
      {/*ID NUMBER -> DISTRIBUTOR NAME */}
      <Head />
      {/* CURRENCY --> CURRENCY TYPE -> PAYMENT TOTAL -> EXCHANGE VALUE */}
      <Currency dropDownId={dropDownId} />
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

type SessionProps = {
  children: React.ReactNode;
  className?: string;
};

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};

const SessionWrapper = ({ children, className = '' }: SessionProps) => (
  <section className={`${className}`}>
    {children}
    <Divider className="my-s" />
  </section>
);

export { SessionWrapper, ToClipboard };
