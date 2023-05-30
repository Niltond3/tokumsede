import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import TextField from 'app/components/Ui/Inputs/TextField';

import SessionWrapper from './SessionWrapper';

export default function Personal() {
  return (
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
  );
}
