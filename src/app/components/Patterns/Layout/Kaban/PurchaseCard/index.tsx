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

import { motion } from 'framer-motion';

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
  const base = 4;
  const time = (d: number) => d * base;
  return (
    <motion.li
      initial={{ opacity: 0, height: 0 }}
      animate={{
        height: '100%',
        opacity: 1,
        transition: {
          type: 'spring',
          bounce: 0.3,
          opacity: { delaty: time(0.025) }
        }
      }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
        duration: time(0.15),
        type: 'spring',
        bounce: 0,
        opacity: { duration: time(0.03) }
      }}
      className="mt-2 flex-1 rounded-md bg-lg-primary p-2 text-sm text-lg-primary-base transition @container"
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
    </motion.li>
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
