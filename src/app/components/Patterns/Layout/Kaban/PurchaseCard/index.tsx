/* eslint-disable @typescript-eslint/no-non-null-assertion */
import Icons, {
  Accepted,
  Cancel,
  Delivered,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import TextField from 'app/components/Ui/Inputs/TextField';
import Divider from 'app/components/Ui/Layout/Divider';

import Currency from './Currency';
import Head from './Head';
import Marketplace from './Marketplace';

interface ICard {
  index: number;
  purchaseId: string;
  currentStatus: string;
}

export default function PurchaseCard({ index, purchaseId, currentStatus }: ICard) {
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
      <Currency dropDownId={dropDownId} purchaseId={purchaseId} />
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
          <Marketplace />
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

type SessionProps = {
  children: React.ReactNode;
  className?: string;
};

const ToClipboard = (event: React.MouseEvent<HTMLButtonElement>) => {
  event.preventDefault();
  navigator.clipboard.writeText(event.currentTarget.dataset.clipboard!);
};

const SessionWrapper = ({ children, className = '' }: SessionProps) => (
  <section>
    <>
      <div className={`${className} flex text-xs font-medium`}>{children}</div>
      <Divider className="my-s" />
    </>
  </section>
);

export { SessionWrapper, ToClipboard };
