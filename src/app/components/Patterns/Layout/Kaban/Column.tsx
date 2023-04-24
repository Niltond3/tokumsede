import Icons from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';

import PurchaseCard from './PurchaseCard';

import { TypeIcons, ColumnType } from 'utils/Types';

type Styles = {
  [key: string]: { title: string; styles: string; icon: keyof TypeIcons };
};

interface IColumn extends ColumnType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

export default function Column({ id, purchasesIds, countLabel, onClick }: IColumn) {
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
  return (
    <div
      className={`${styles} h-min max-w-[16%] flex-1 rounded-sm px-s  py-xs `}
      key={id}
    >
      <div className="flex w-full text-sm">
        <div className="flex flex-1 items-center">
          <Icons icon={icon} className="mr-xs" />
          {title}
        </div>
        <div className="flex flex-[25%] gap-2">
          <span className="flex flex-1 justify-center">{countLabel}</span>
          <Toggle type="between" className="flex-1">
            <Button>
              <Icons icon={'SortUp'} />
              <Icons icon={'SortDown'} />
            </Button>
          </Toggle>
        </div>
      </div>
      <ul className="max-h-72 min-h-[2rem] overflow-y-auto px-1 py-2 scrollbar-thin scrollbar-thumb-slate-300">
        {purchasesIds.map((value, index) => (
          <PurchaseCard
            key={`${index}-${value}-${id}`}
            index={index}
            purchaseId={`${value}`}
            currentStatus={`${id}`}
          />
        ))}
      </ul>
      <Button is="Add" title="Fazer novo pedido" onClick={onClick} />
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
