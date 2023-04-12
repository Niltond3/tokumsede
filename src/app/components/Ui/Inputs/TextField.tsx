/* eslint-disable @typescript-eslint/no-non-null-assertion */

import Tooltip from '../DataDisplay/Tooltip';

const mapTextFieldType = {
  currence: ({ onChange, value }: InputProps) => {
    function currencyMask(e: React.ChangeEvent<HTMLInputElement>) {
      const formatter = new Intl.NumberFormat('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
      });
      const input = e.target;
      input.value = input.value.replace(/\D+/g, ''); //remove all non numbers
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
      input.value = formatter.format(parseInt(input.value) / 100);
    }
    return (
      <div className="group relative flex">
        R$
        <input
          className="w-12 bg-transparent px-1 outline-lg-secondary focus:outline-none"
          type="text"
          onInput={currencyMask}
          maxLength={7}
          data-max-digits="5"
          value={value}
          onChange={onChange}
          placeholder="00,00"
        />
        <Tooltip title="Troco" close position="top" />
      </div>
    );
  }
};

export default function TextField({ value, onChange, type }: ITextField) {
  return mapTextFieldType[type]({ onChange, value });
}

interface ITextField extends InputProps {
  type: keyof typeof mapTextFieldType;
}

type InputProps = {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
