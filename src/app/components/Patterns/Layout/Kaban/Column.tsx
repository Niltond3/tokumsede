import Icons, {
  Accepted,
  ArrowRight,
  Cancel,
  Delivered,
  Hashtag,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import {useState} from 'react'
import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';

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
    <div className={`${styles} m-s h-min rounded-sm px-s py-xs`} key={id}>
      <div className="flex w-full justify-between text-sm">
        <div className="flex items-center">
          <Icons icon={icon} className="mr-xs" />
          {title}
        </div>
        <div className="flex w-min justify-between">
          <span>{countLabel}</span>
          <Toggle typeOf="Sort" id={id} className="ml-xs" />
        </div>
      </div>
      <ul className="max-h-72 min-h-[2rem] overflow-y-auto scrollbar-thin scrollbar-thumb-slate-300">
        {purchasesIds.map((value, index) => (
          <div key={`${index}-card`}>
            <div className="flex">
              <span className="flex items-center">
                <Hashtag />
                000
              </span>
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id={`${title}-dropDownControl-${index}`}
                  className="group peer hidden"
                ></input>
                <label htmlFor={`${title}-dropDownControl-${index}`} className="">
                  {/* <Icons icon="" /> */}
                </label>
                <div className="peer-checked:[&>ul]:max-h-[10rem]">
                  <ArrowRight className="" />
                  <ul className="max-h-0 overflow-hidden transition-fast">
                    {renderPaymentLi(title)}
                  </ul>
                </div>
              </div>

              <span>value</span>
              <span>troco</span>
              <span>Distribuidora</span>
              <div className="flex">
                <Pending />
                <Accepted />
                <Icons icon="logistics" />
                <Delivered />
                <Cancel />
                <Schedule />
              </div>
            </div>
          </div>
        ))}
      </ul>
      <Button typeOf="Add" title="Fazer novo pedido" onClick={onClick} />
    </div>
  );
}

function renderPaymentLi(title: string) {
  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];
  return paymentForms.map((value, index) => {
    const key = `${title}-${value}-${index}`;
    return (
      <li className="hover:bg-lg-accent-base" key={key}>
        <input className="hidden" type="checkbox" id={key}></input>
        <label htmlFor={key}>
          <Icons icon={value} />
        </label>
      </li>
    );
  });
}
/*
                  <li className="hover:bg-lg-accent-base">
                    <input
                      className="hidden"
                      type="checkbox"
                      id={`${title}-cash-${index}`}
                    ></input>
                    <label htmlFor={`${title}-cash-${index}`}>
                      <Cash />
                    </label>
                  </li>
                  <li className="hover:bg-lg-accent-base">
                    <input
                      className="hidden"
                      type="checkbox"
                      id={`${title}-credit-${index}`}
                    ></input>
                    <label htmlFor={`${title}-credit-${index}`}>
                      <CreditCard />
                    </label>
                  </li>
                  <li className="hover:bg-lg-accent-base">
                    <input
                      className="hidden"
                      type="checkbox"
                      id={`${title}-pix-${index}`}
                    ></input>
                    <label htmlFor={`${title}-pix-${index}`}>
                      <Pix />
                    </label>
                  </li>
                  <li className="hover:bg-lg-accent-base">
                    <input
                      className="hidden"
                      type="checkbox"
                      id={`${title}-ifood-${index}`}
                    ></input>
                    <label htmlFor={`${title}-ifood-${index}`}>
                      <IFood />
                    </label>
                  </li>
*/

/*
       <div>
              <span>
                <Hashtag />
                000
              </span>
              <select>
                <option value="Dinheiro">
                  <Cash />
                </option>
                <option value="Cartão">
                  <CreditCard />
                </option>
                <option value="Pix">
                  <Pix />
                </option>
                <option value="IFood">
                  <IFood />
                </option>
              </select>
              <span>value</span>
              <span>troco</span>
              <span>Distribuidora</span>
              <div>
                <Pending />
                <Accepted />
                <Icons icon="Logistics" />
                <Delivered />
                <Cancel />
                <Schedule />
              </div>
            </div>
*/

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
