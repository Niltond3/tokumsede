import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition } from '@headlessui/react';
import { TypeIcons } from 'utils/Types';

export type SelectableProps = {
  id: number;
  name: string;
  shortName: string;
  unavailable: boolean;
  label: keyof TypeIcons;
  value: number;
  measure: string;
};

type OptionsProps = {
  list: SelectableProps[];
};

type SelectProps = OptionsProps & {
  multiple?: boolean;
  ListboxOptions: React.ForwardRefExoticComponent<
    OptionsProps & React.RefAttributes<HTMLUListElement>
  >;
};

export default function Select({ list, multiple = true, ListboxOptions }: SelectProps) {
  const [selected, setSelected] = useState<SelectableProps[]>([list[0]]);

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      <Listbox.Label>
        <Icons icon="Purchase" />
      </Listbox.Label>
      <Listbox.Button>
        {selected.map((item) => (
          <span key={item.id + item.name + item.value}>{item.shortName}</span>
        ))}
      </Listbox.Button>
      <ListboxOptions list={list} />
    </Listbox>
  );
}

export const Options = React.forwardRef<HTMLUListElement, OptionsProps>(
  ({ list }: OptionsProps, ref) => {
    return (
      <Transition
        ref={ref}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="fixed top-0 mt-1 flex max-h-8 w-full flex-row overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
          {list.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={({ active }) =>
                `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                  active ? 'bg-amber-100 text-amber-900' : 'text-gray-900'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span
                    className={`block truncate ${
                      selected ? 'font-medium' : 'font-normal'
                    }`}
                  >
                    {item.name}
                  </span>
                  {selected ? (
                    <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                      <Icons icon="Accepted" aria-hidden="true" />
                    </span>
                  ) : null}
                </>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    );
  }
);
