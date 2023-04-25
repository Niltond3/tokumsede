import { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition } from '@headlessui/react';

const people = [
  { id: 1, name: 'Durward Reynolds', unavailable: false },
  { id: 2, name: 'Kenton Towne', unavailable: false },
  { id: 3, name: 'Therese Wunsch', unavailable: false },
  { id: 4, name: 'Benedict Kessler', unavailable: true },
  { id: 5, name: 'Katelyn Rohan', unavailable: false }
];

export type SelectableProps = {
  id: number;
  name: string;
  label: React.ReactNode;
  shortName: string;
  unavailable: boolean;
};

type SelectProps = {
  list: SelectableProps[];
  multiple?: boolean;
};

export default function Select({ list, multiple = true }: SelectProps) {
  const [selected, setSelected] = useState([list[0], list[3]]);

  return (
    <div className="fixed ">
      <Listbox value={selected} onChange={setSelected} multiple={multiple}>
        <div className="relative">
          <Listbox.Button>
            {selected.map((select) => select.name).join(', ')}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              {list.map((select) => (
                <Listbox.Option
                  key={select.id}
                  value={select}
                  disabled={select.unavailable}
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
                        {select.name}
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
        </div>
      </Listbox>
    </div>
  );
}
