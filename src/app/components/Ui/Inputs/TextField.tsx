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
  maxLength = 30,
  placeholder = 'digite'
}: TextFieldProps) {
  const {
    dataMaxDigits,
    maxLength: ml,
    onInput,
    placeholder: ph
  } = mapTextFieldType[type]({ placeholder, maxLength });

  return (
    <input
      type="text"
      value={value}
      onInput={onInput}
      onChange={onChange}
      className="flex w-full truncate bg-transparent font-medium focus:outline-none"
      maxLength={ml}
      placeholder={ph}
      data-max-digits={dataMaxDigits}
    />
  );
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
    return {
      onInput: mask,
      maxLength: 7,
      dataMaxDigits: 5,
      placeholder: '00,00'
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

    return {
      onInput: mask,
      maxLength: 15,
      dataMaxDigits: 15,
      placeholder: '(••) •••••-••••'
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

    return {
      onInput: mask,
      maxLength: maxLength,
      dataMaxDigits: maxLength,
      placeholder: placeholder
    };
  }
};

type InputProps = {
  value?: number;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
};
