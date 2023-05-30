import React from 'react';

import Currency from './Components/Currency';
import Personal from './Components/Personal';
import Request from './Components/Request';

type PurchaseCardBodyProps = {
  dropDownId: string;
  purchaseId: string;
};

export default function Body({ dropDownId, purchaseId }: PurchaseCardBodyProps) {
  return (
    <>
      {/* CURRENCY --> CURRENCY TYPE -> PAYMENT TOTAL -> EXCHANGE VALUE */}
      <Currency dropDownId={dropDownId} purchaseId={purchaseId} />
      {/* PERSONAL --> CLIENT NAME ->  CLIENT PHONE NUMBER */}
      <Personal />
      {/* ADDRESS --> STREET -> NEIGHBORHOOD -> NUMBER -> COMPLEMENT -> REFERENCE*/}
      {/* PRODUCT --> PRODUCT -> UN VALUE -> QUANTITY -> TOTAL VALUE */}
      <Request />
    </>
  );
}
