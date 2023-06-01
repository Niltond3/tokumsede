/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Body from './Components/Body';
import Footer from './Components/Footer';
import Head from './Components/Head';

import * as types from 'common/types';
import { motion } from 'framer-motion';

export default function PurchaseCard({
  index,
  purchaseId,
  currentStatus
}: types.KabanPurchaseCardProps) {
  const dropDownId = `${currentStatus}-drop-down-control-${index}`.toLocaleLowerCase();
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
      <Head />
      <Body dropDownId={dropDownId} purchaseId={purchaseId} />
      <Footer />
    </motion.li>
  );
}
