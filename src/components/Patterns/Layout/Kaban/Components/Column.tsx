import React, { useContext } from 'react';
import { Draggable, Droppable } from 'react-beautiful-dnd';

import Icons from 'components/Ui/DataDisplay/Icons';
import Button from 'components/Ui/Inputs/Button';

import PurchaseCard from './PurchaseCard';

import clsx from 'clsx';
import * as types from 'common/types';
import { AnimatePresence } from 'framer-motion';
import { AppContext } from 'hooks/usePurchase';

const Column = ({ id, purchasesIds, countLabel, onClick }: types.KabanColumnsProps) => {
  const { state, dispatch } = useContext(AppContext);

  const { title, styles, icon } = mappingStyles[id];

  return (
    <div className={clsx(`h-min flex-1 rounded-sm px-s py-xs`)}>
      <div className={clsx('flex w-full text-sm')}>
        <div className={clsx('flex flex-1 items-center')}>
          <Icons icon={icon} className={clsx('mr-xs')} />
          {title}
        </div>
        <div className={clsx('flex flex-[25%] gap-2')}>
          <span className={clsx('flex flex-1 justify-center')}>{countLabel}</span>
          <Button
            typeOf="toggle"
            toggleVariant="between"
            iconL="SortUp"
            iconR="SortDown"
          />
        </div>
      </div>
      <Droppable droppableId={id}>
        {(provider, snapshot) => (
          <div
            ref={provider.innerRef}
            {...provider.droppableProps}
            className={clsx(
              'max-h-[75vh] min-h-[2rem] overflow-visible overflow-y-auto rounded-md px-1 py-2 scrollbar scrollbar-thumb-slate-300 scrollbar-w-1 transition-fast',
              `${snapshot.isDraggingOver ? styles : ''}`
            )}
            style={{ scrollbarGutter: 'stable both-edges' }}
          >
            {/* <AnimatePresence initial={false}> */}
            {purchasesIds.map((value, index) => {
              return (
                <Draggable index={index} draggableId={`${value}`} key={value}>
                  {(provider, snapshot, rubric) => (
                    <PurchaseCard
                      index={index}
                      purchaseId={`${value}`}
                      currentStatus={`${id}`}
                      provider={provider}
                      rubric={rubric}
                      snapshot={snapshot}
                    />
                  )}
                </Draggable>
              );
            })}
            {/* </AnimatePresence> */}
            {provider.placeholder}
          </div>
        )}
      </Droppable>
      <Button typeOf="secondary" onClick={onClick} iconL="Add" className="gap-2">
        Fazer novo pedido
      </Button>
    </div>
  );
};

export default Column;
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

const mappingStyles: types.KabanColumnsStylesProps = {
  PENDING: {
    title: 'Pendentes',
    styles: 'bg-lg-warning/30',
    icon: 'Pending'
  },
  ACCEPTED: {
    title: 'Aceitos',
    styles: 'bg-lg-info/30',
    icon: 'Accepted'
  },
  DISPATCHED: {
    title: 'Despachados',
    styles: 'bg-lg-sent/30',
    icon: 'logistics'
  },
  DELIVERED: {
    title: 'Entregues',
    styles: 'bg-lg-success/30',
    icon: 'Delivered'
  },
  CANCELED: {
    title: 'Cancelados',
    styles: 'bg-lg-error/30',
    icon: 'Cancel'
  },
  SCHEDULED: {
    title: 'Agendados',
    styles: 'bg-lg-wait/30',
    icon: 'Schedule'
  }
};
