import React from 'react';

import SessionWrapper from '../SessionWrapper';
import Marketplace from './Marketplace';

import * as types from 'common/types';

export default function Request({
  selectedItems
}: {
  selectedItems: types.DropdownSelectedItemsCallback<
    types.KabanProductType & types.KabanCurrentValueProps
  >;
}) {
  return (
    <SessionWrapper className="flex min-h-[2rem] gap-2">
      {/* <div className="flex min-h-[2rem] gap-2"> */}
      {/* <i className="flex flex-[10%] items-center justify-center">
          <Icons icon="Address" />
        </i> */}
      <Marketplace selectedItems={selectedItems} />
      {/* </div> */}
    </SessionWrapper>
  );
}
