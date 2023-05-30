/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Icons from '../DataDisplay/Icons';
import Button from './Button';

import clsx from 'clsx';

type TextFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  type: keyof typeof mapTextFieldType;
  maxLength?: number;
  placeholder?: string;
} & TextFieldConditionalProps;

type buttonStyles = { wrapper: string; button: string; icon: string };

type TextFieldConditionalProps =
  | {
      type: 'number';
      buttonStyles: buttonStyles;
      handleIncrement: () => void;
      handleDecrement: () => void;
    }
  | {
      type: 'currence';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    }
  | {
      type: 'phoneNumber';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    }
  | {
      type: 'text';
      buttonStyles?: never;
      handleIncrement?: never;
      handleDecrement?: never;
    };

type CaretButonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  diretion: 'L' | 'R';
};

export default function TextField({
  onChange,
  type = 'number',
  maxLength = 30,
  placeholder = 'digite',
  value,
  className,
  buttonStyles = { wrapper: '', button: '', icon: '' },
  handleDecrement,
  handleIncrement,
  id
}: TextFieldProps) {
  const {
    dataMaxDigits,
    maxLength: ml,
    onInput,
    placeholder: ph,
    type: inputType
  } = mapTextFieldType[type]({ placeholder, maxLength });

  const Input = (
    <input
      type={inputType}
      value={value}
      onInput={onInput}
      onChange={onChange}
      className={`flex w-full truncate bg-transparent font-medium focus:outline-none ${className}`}
      maxLength={ml}
      placeholder={ph}
      data-max-digits={dataMaxDigits}
      min="0"
    />
  );
  const { wrapper, button, icon } = buttonStyles!;

  const CaretButton = ({ diretion, ...props }: CaretButonProps) => {
    const diretionStyles = {
      L: {
        bt: 'rounded-l-full',
        ic: 'rotate-180'
      },
      R: {
        bt: 'rounded-r-full',
        ic: ''
      }
    };
    const dirKey = diretion as keyof typeof diretionStyles;
    const { bt, ic } = diretionStyles[dirKey];
    return (
      <Button className={clsx(bt, button, 'w-1/4 bg-white')} {...props}>
        <Icons
          icon="Caret"
          className={clsx(ic, icon, 'pointer-events-none select-none')}
        />
      </Button>
    );
  };

  // const handleDecrement = (event: EventButton) => modifyValue(event, 'sub');
  // const handleIncrement = (event: EventButton) => modifyValue(event, 'sum');

  const Number = (
    <label className={`flex w-full ${wrapper}`} htmlFor={`input-type-${inputType}-${id}`}>
      <CaretButton diretion="L" onClick={handleDecrement} data-action="decrement" />
      <input
        id={`input-type-${inputType}-${id}`}
        type={inputType}
        value={value}
        onInput={onInput}
        onChange={onChange}
        className={`block w-full truncate bg-transparent text-center font-medium focus:outline-none ${className}`}
        maxLength={ml}
        placeholder={ph}
        data-max-digits={dataMaxDigits}
        min="0"
      ></input>
      <CaretButton diretion="R" onClick={handleIncrement} data-action="increment" />
    </label>
  );

  return type === 'number' ? Number : Input;
}

const mapTextFieldType = {
  currence: () => {
    const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      const input = e.target;
      input.value = input.value.replace(/\D/g, ''); //remove all non numbers
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
      input.value = formatter.format(parseInt(input.value) / 100);
    };
    const styles = '';
    return {
      onInput: mask,
      maxLength: 7,
      dataMaxDigits: 5,
      placeholder: '00,00',
      type: 'text' as React.HTMLInputTypeAttribute,
      styles: styles
    };
  },
  phoneNumber: () => {
    const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      input.value = input.value.replace(/\D/g, ''); //remove all non numbers
      input.value = input.value.replace(/(\d{2})(\d)/, '($1) $2');
      input.value = input.value.replace(/(\d)(\d{4})$/, '$1-$2');
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
    };
    const styles = '';

    return {
      onInput: mask,
      maxLength: 15,
      dataMaxDigits: 15,
      placeholder: '(••) •••••-••••',
      type: 'text' as React.HTMLInputTypeAttribute,
      styles: styles
    };
  },
  text: ({ placeholder, maxLength }: { maxLength?: number; placeholder: string }) => {
    const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
    };
    const styles = '';

    return {
      styles: styles,
      onInput: mask,
      maxLength: maxLength,
      dataMaxDigits: maxLength,
      placeholder: placeholder,
      type: 'text' as React.HTMLInputTypeAttribute
    };
  },
  number: ({ placeholder, maxLength }: { maxLength?: number; placeholder: string }) => {
    const mask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      input.value = input.value.replace(/\D/g, ''); //remove all non numbers
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
    };

    const styles = '';

    return {
      styles: styles,
      onInput: mask,
      maxLength: maxLength,
      dataMaxDigits: maxLength,
      placeholder: placeholder,
      type: 'number' as React.HTMLInputTypeAttribute
    };
  }
};