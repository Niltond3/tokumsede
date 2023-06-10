import React from 'react';

import Currency from './Components/Currency';
import Personal from './Components/Personal';
import Request from './Components/Request';

import * as types from 'common/types';

export default function Body({ dropDownId, purchase }: types.KabanPurchaseCardBodyProps) {
  // const handleSelectedItems = (
  //   items: types.DropdownItemStateType<
  //     types.KabanProductType & types.KabanCurrentValueProps
  //   >
  // ) => {
  //   if (Array.isArray(items)) {
  //     items.
  //   }
  // };
  return (
    <>
      {/* CURRENCY --> CURRENCY TYPE -> PAYMENT TOTAL -> EXCHANGE VALUE */}
      <Currency dropDownId={dropDownId} purchase={purchase} />
      {/* PERSONAL --> CLIENT NAME ->  CLIENT PHONE NUMBER */}
      <Personal />
      {/* ADDRESS --> STREET -> NEIGHBORHOOD -> NUMBER -> COMPLEMENT -> REFERENCE*/}
      {/* PRODUCT --> PRODUCT -> UN VALUE -> QUANTITY -> TOTAL VALUE */}
      <Request purchase={purchase} />
    </>
  );
}
