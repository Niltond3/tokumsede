import React from 'react';

import Icons from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';

import Card from './Card';

import { TypeIcons } from 'utils/Types';

type ColumnId =
  | 'PENDING'
  | 'ACCEPTED'
  | 'DISPATCHED'
  | 'DELIVERED'
  | 'CANCELED'
  | 'SCHEDULED';

type Styles = {
  [key: string]: { title: string; styles: string; icon: keyof TypeIcons };
};

interface IColumn {
  id: ColumnId;
}

export default function Column({ id }: IColumn) {
  const mappingStyles: Styles = {
    PENDING: {
      title: 'Pendentes',
      styles: '',
      icon: 'Pending'
    },
    ACCEPTED: {
      title: 'Aceitos',
      styles: '',
      icon: 'Accepted'
    },
    DISPATCHED: {
      title: 'Despachados',
      styles: '',
      icon: 'logistics'
    },
    DELIVERED: {
      title: 'Entregues',
      styles: '',
      icon: 'Delivered'
    },
    CANCELED: {
      title: 'Cancelados',
      styles: '',
      icon: 'Cancel'
    },
    SCHEDULED: {
      title: 'Agendados',
      styles: '',
      icon: 'Schedule'
    }
  };
  const { title, styles, icon } = mappingStyles[id];
  const requestsIds = [];

  return (
    <div className={`${styles} m-s h-min rounded-sm px-s py-xs`} key={id}>
      <div className="flex w-full justify-between text-sm">
        <div className="flex items-center">
          <Icons icon={icon} className="mr-xs" />
          {title}
        </div>
        <div className="flex w-min justify-between">
          <span>{requestsIds.length}</span>
          <Toggle typeOf="Sort" id={id} className="ml-xs" />
        </div>
      </div>
      <ul className="max-h-72 min-h-[2rem] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
        {requestsIds.map((value) => (
          <Card />
        ))}
      </ul>
      <Button typeOf="Add" title="Fazer novo pedido" />
    </div>
  );
}

// onClick = add a new request and add this request.id in list a list of respective column