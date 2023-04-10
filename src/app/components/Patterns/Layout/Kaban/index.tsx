'use client';
import { useContext, Dispatch } from 'react';

import Column from './Column';

import { AppContext } from 'hooks/usePurchase';
import { PURCHASE_ACTION_TYPES, ColumnsType, PurchaseActionsType } from 'utils/Types';

export default function Kaban() {
  const { state, dispatch } = useContext(AppContext);
  const { columns } = state;
  return <div className="flex">{renderColumns(columns, dispatch)}</div>;
}

const renderColumns = (columns: ColumnsType, dispatch: Dispatch<PurchaseActionsType>) => {
  const myColumns: JSX.Element[] = [];
  let key: keyof typeof columns;
  const { prepare } = PURCHASE_ACTION_TYPES;

  const handleClick = {
    ACCEPTED: () => dispatch({ type: prepare, payload: {} }),
    CANCELED: () => dispatch({ type: prepare, payload: {} }),
    DELIVERED: () => dispatch({ type: prepare, payload: {} }),
    DISPATCHED: () => dispatch({ type: prepare, payload: {} }),
    PENDING: () => dispatch({ type: prepare, payload: {} }),
    SCHEDULED: () => dispatch({ type: prepare, payload: {} })
  };

  const hc = (id: keyof ColumnsType) =>
    dispatch({ type: prepare, payload: { columnId: id } });

  for (key in columns) {
    const { id, purchasesIds } = columns[key];
    myColumns.push(
      <Column
        id={id}
        purchasesIds={purchasesIds}
        onClick={() => dispatch({ type: prepare, payload: { columnId: id } })}
      />
    );
  }
  return myColumns;
};

/*
<Column
        id={pendingId}
        purchasesIds={pendingRequests}
        onClick={handleClick.PENDING}
      />
      <Column
        id={acceptedId}
        purchasesIds={acceptedRequests}
        onClick={handleClick.ACCEPTED}
      />
      <Column
        id={dispatchedId}
        purchasesIds={dispatchedRequests}
        onClick={handleClick.DISPATCHED}
      />
      <Column
        id={deliveredId}
        purchasesIds={deliveredRequests}
        onClick={handleClick.DELIVERED}
      />
      <Column
        id={scheduledId}
        purchasesIds={scheduledRequests}
        onClick={handleClick.SCHEDULED}
      />
      <Column
        id={canceledId}
        purchasesIds={canceledRequests}
        onClick={handleClick.CANCELED}
      />
*/

/*
  const initialData = {
    requests: {
      '1': {
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
      },
      '2': {
        id: '2',
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
      },
      '3': {
        id: '3',
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
      },
      '4': {
        id: '4',
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
      },
      '5': {
        id: '5',
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
      },
      '6': {
        id: '6',
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
      },
      '7': {
        id: '7',
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
      },
      '8': {
        id: '8',
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
      },
      '9': {
        id: '9',
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
      },
      '10': {
        id: '10',
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
    },
    columns: [
      {
        id: 'pending',
        title: 'Pendentes',
        styles:
          '[&>div>*]:text-lg-warning-darkest bg-lg-warning-base dark:bg-dk-warning/10',
        requestsIds: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
      },
      {
        id: 'accepted',
        title: 'Aceitos',
        styles: '[&>div>*]:text-lg-info-darkest bg-lg-info-base dark:bg-dk-info/10',
        requestsIds: []
      },
      {
        id: 'dispatched',
        title: 'Despachados',
        styles: '[&>div>*]:text-lg-sent-darkest bg-lg-sent-base dark:bg-dk-sent/10',
        requestsIds: []
      },
      {
        id: 'delivered',
        title: 'Entregues',
        styles:
          '[&>div>*]:text-lg-success-darkest bg-lg-success-base dark:bg-dk-success/10',
        requestsIds: []
      },
      {
        id: 'canceled',
        title: 'Cancelados',
        styles: '[&>div>*]:text-lg-error-darkest bg-lg-error-base dark:bg-dk-error/10',
        requestsIds: []
      },
      {
        id: 'scheduled',
        title: 'Agendados',
        styles: '[&>div>*]:text-lg-wait-darkest bg-lg-wait-base dark:bg-dk-wait',
        requestsIds: []
      }
    ]
  };

  const { columns } = initialData;
____________________________________________________________________________________
        <ul className="flex">
        {columns.map(({ id, title, styles, requestsIds }) => {
          const defaultCount = requestsIds.length;
          const count =
            id === 'delivered' ? `${defaultCount}/${getCount()}` : defaultCount;

          function getCount() {
            let count = 0;
            columns.forEach(({ id, requestsIds }) => {
              if (id !== 'canceled' && id !== 'delivered')
                count = count + requestsIds.length;
            });
            return count;
          }

          return (
            <li className={`${styles} m-s h-min rounded-sm px-s py-xs`} key={id}>
              <div className="flex w-full justify-between text-sm">
                <div>{title}</div>
                <div className="flex w-min justify-between">
                  {count}
                  <Toggle typeOf="Sort" id={id} className="ml-xs" />
                </div>
              </div>
              <ul className="max-h-72 min-h-[2rem] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
                {requestsIds.map((value, index) => (
                  <li className="my-s mx-xs rounded-sm bg-white p-s" key={index}>
                    {initialData.requests['1'].client.name}
                  </li>
                ))}
              </ul>
              <Button typeOf="Add" title="Fazer novo pedido" />
            </li>
          );
        })}
      </ul>
*/
