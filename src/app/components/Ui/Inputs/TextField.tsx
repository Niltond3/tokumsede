/* eslint-disable @typescript-eslint/no-non-null-assertion */

type TextFieldProps = InputProps & {
  type: keyof typeof mapTextFieldType;
  maxLength?: number;
  placeholder?: string;
};

export default function TextField({
  value,
  onChange,
  type,
  maxLength = 10,
  placeholder = 'digite'
}: TextFieldProps) {
  return mapTextFieldType[type]({ onChange, value, maxLength, placeholder });
}

const mapTextFieldType = {
  currence: ({ onChange, value }: InputProps) => {
    const currencyMask = (e: React.ChangeEvent<HTMLInputElement>) => {
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
    return (
      <input
        className="w-10 bg-transparent pl-1 focus:outline-none"
        type="text"
        inputMode="numeric"
        onInput={currencyMask}
        maxLength={7}
        data-max-digits="5"
        value={value}
        onChange={onChange}
        placeholder="00,00"
      />
    );
  },
  phoneNumber: ({ onChange, value }: InputProps) => {
    const phoneMask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      input.value = input.value.replace(/\D/g, ''); //remove all non numbers
      input.value = input.value.replace(/(\d{2})(\d)/, '($1) $2');
      input.value = input.value.replace(/(\d)(\d{4})$/, '$1-$2');
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
    };
    return (
      <input
        className="w-[6.7rem] bg-transparent pl-1 placeholder:text-lg focus:outline-none"
        type="tel"
        onInput={phoneMask}
        maxLength={15}
        data-max-digits="15"
        value={value}
        onChange={onChange}
        placeholder="(••) •••••-••••"
      />
    );
  },
  text: ({
    onChange,
    value,
    placeholder
  }: { maxLength: number; placeholder: string } & InputProps) => {
    const textMask = (e: React.ChangeEvent<HTMLInputElement>) => {
      const input = e.target;
      if (input.value.length === 0) return; //input empty, do nothing
      const maxDigits = parseInt(input.dataset.maxDigits!); //use dataset to check if length is bigger than preffix
      input.value.length > maxDigits &&
        (input.value = input.value.substring(0, maxDigits)); //if input lengh bigger than prefix catch fist digits
    };
    return (
      <input
        className="w-28 bg-transparent pl-1 font-medium focus:outline-none"
        type="text"
        onInput={textMask}
        maxLength={15}
        data-max-digits="15"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    );
  }
};

type InputProps = {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
