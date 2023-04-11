import Icons, {
  Accepted,
  ArrowRight,
  Cancel,
  Delivered,
  Hashtag,
  Pending,
  Schedule
} from 'app/components/Ui/DataDisplay/Icons';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import $ from 'jquery'
import {ChangeEventHandler, FormEventHandler, useState} from 'react'
import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';

import { TypeIcons, ColumnType, PaymentType } from 'utils/Types';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import { Props } from 'react-input-mask';

type Styles = {
  [key: string]: { title: string; styles: string; icon: keyof TypeIcons };
};

interface IColumn extends ColumnType {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}

type InitialState = {
  paymentType: PaymentType 
}

export default function Column({ id, purchasesIds, countLabel, onClick }: IColumn) {
  const initialState: InitialState = {
    paymentType: 'Cash'
  }
  
  const [state,setState] = useState(initialState)
  const {paymentType}=state
  const handleChangePayment = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    const {currentTarget} = event
    const {value, dataset} = currentTarget
    $(`#${dataset.check}`).prop( "checked", false );
    setState({...state,paymentType:value as PaymentType})
  }
  
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
          <RenderCard 
          index={index} 
          onChangePayment={handleChangePayment} 
          paymentType={paymentType} 
          title={title}></RenderCard>
        ))}
      </ul>
      <Button typeOf="Add" title="Fazer novo pedido" onClick={onClick} />
    </div>
  );
}

interface ICard {
  index: number;
  title:string;
  paymentType: PaymentType ;
  onChangePayment: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

function RenderCard ({index, title, paymentType,onChangePayment }:ICard) {
  const paymentForms: (keyof TypeIcons)[] = ['Cash', 'CreditCard', 'Pix', 'IFood'];
  const checkId = `${title}-dropDownControl-${index}`
  return (
  <div key={`${index}-card`} className='min-h-[8rem] mt-9'>
    <div className="flex">
      <span className="flex items-center">
        <Hashtag />
        000
      </span>
        
        <div className="relative flex items-center">
        <input
          type="checkbox"
          id={checkId}
          className="group peer hidden"
        ></input>
        <label htmlFor={checkId} className="flex items-center cursor-pointer relative group">
          <Icons icon={paymentType as keyof TypeIcons} />
          <ArrowRight />
          <Tooltip distace='close' title={paymentType} position='top'></Tooltip>
        </label>
        <ul className="absolute max-h-0 overflow-hidden transition-faster peer-checked:max-h-[10rem] top-full">
          {
            paymentForms.map((value, index)=>{
              const key = `${title}-${value}-${index}`;
              return <RenderPaymentLi handleClick={onChangePayment} key={key} value={value} checkId={checkId}></RenderPaymentLi>
            })
          }
        </ul>
        </div>
      
      
      
      <CurrencyInput></CurrencyInput>

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
  )
}

type PaymentLiType = {
  checkId:string
  handleClick:(event: React.MouseEvent<HTMLButtonElement>) => void;
  key: string;
  value: keyof TypeIcons;
}
function CurrencyInput({value, onChange}:{value?:number; onChange?:ChangeEventHandler<HTMLInputElement> }){
  //{...props}: Props & React.ComponentPropsWithoutRef<"input">
  function mascaraMoeda(e: React.ChangeEvent<HTMLInputElement>) {
    const formatter = new Intl.NumberFormat('pt-BR', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    const input = e.target;
    // elimina tudo que não é dígito
    input.value = input.value.replace(/\D+/g, '');
    if (input.value.length === 0) // se não tem nada preenchido, não tem o que fazer
        return;
    // verifica se ultrapassou a quantidade máxima de dígitos (pegar o valor no dataset)
    const maxDigits = parseInt(input.dataset.maxDigits!);
    if (input.value.length > maxDigits) {
        // O que fazer nesse caso? Decidi pegar somente os primeiros dígitos
        input.value = input.value.substring(0, maxDigits);
    }
    // lembrando que o valor é a quantidade de centavos, então precisa dividir por 100
    input.value = formatter.format(parseInt(input.value) / 100);
}
  return <div className='flex'>R$<input type="text" onInput={mascaraMoeda} maxLength={7} data-max-digits="5" value={value} onChange={onChange} placeholder='troco' /></div>
}

function RenderPaymentLi({checkId, handleClick, key, value}:PaymentLiType) {
  return (
  <li className="hover:bg-lg-accent-base" key={key}>
    <button onClick={handleClick} value={value} data-check={checkId}><Icons icon={value} /></button>
  </li>
  )
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
