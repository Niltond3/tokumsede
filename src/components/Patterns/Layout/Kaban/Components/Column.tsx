import { Droppable } from 'react-beautiful-dnd';

import Icons from 'components/Ui/DataDisplay/Icons';
import Button from 'components/Ui/Inputs/Button';

import PurchaseCard from './PurchaseCard';

import * as types from 'common/types';
import { AnimatePresence } from 'framer-motion';

export default function Column({
  id,
  purchasesIds,
  countLabel,
  onClick
}: types.KabanColumnsProps) {
  const mappingStyles: types.KabanColumnsStylesProps = {
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
  return (
    <div className={`${styles} h-min max-w-[16%] flex-1 rounded-sm px-s py-xs`} key={id}>
      <div className="flex w-full text-sm">
        <div className="flex flex-1 items-center">
          <Icons icon={icon} className="mr-xs" />
          {title}
        </div>
        <div className="flex flex-[25%] gap-2">
          <span className="flex flex-1 justify-center">{countLabel}</span>
          <Button
            typeOf="toggle"
            toggleVariant="between"
            iconL="SortUp"
            iconR="SortDown"
          />
        </div>
      </div>
      <Droppable droppableId={id}>
        {(provider) => (
          <div
            ref={provider.innerRef}
            {...provider.droppableProps}
            className="max-h-[75vh] min-h-[2rem] overflow-y-auto px-1 py-2 scrollbar-thin scrollbar-thumb-slate-300"
          >
            <AnimatePresence initial={false}>
              {purchasesIds.map((value, index) => {
                return (
                  <PurchaseCard
                    key={`${index}-${value}-${id}`}
                    index={index}
                    purchaseId={`${value}`}
                    currentStatus={`${id}`}
                  />
                );
              })}
            </AnimatePresence>
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Button typeOf="secondary" onClick={onClick} iconL="Add" className="gap-2">
        Fazer novo pedido
      </Button>
    </div>
  );
}

/*
  {
        id: '1',
        priority: '',
        note: '',
        origin: '',
        client: {
          id: '',
          name: 'test',
          contact: '',
          address: {
            street: '',
            neighborhood: '',
            city: '',
            state: '',
            complement: '',
            note: ''
          }
        },
        distributorName: '',
        payment: '',
        lifeCircle: {
          register: { responsible: '', date: '' },
          accepted: { responsible: '', date: '' },
          dispatched: { responsible: '', date: '' },
          delivered: { responsible: '', date: '' },
          canceled: { responsible: '', date: '' },
          scheduled: { responsible: '', date: '' }
        },
        products: [{ id: '', name: '', quantity: '', price: '' }]
      }
*/
