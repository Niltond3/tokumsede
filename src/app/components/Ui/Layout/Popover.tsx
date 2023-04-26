import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition } from '@headlessui/react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
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
  className?: string;
};

const Popover = ({ list, multiple = true, className = '' }: SelectProps) => {
  const [selected, setSelected] = useState<SelectableProps[]>([list[0]]);

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      <PopoverPrimitive.Root>
        <PopoverPrimitive.Trigger asChild>
          <Listbox.Button className={`flex gap-1 ${className}`}>
            <>
              <Listbox.Label className="cursor-pointer">
                <Icons icon="Purchase" className="pointer-events-none" />
              </Listbox.Label>
              {selected.map((item) => (
                <span key={item.id + item.name + item.value}>{item.shortName}</span>
              ))}
            </>
          </Listbox.Button>
        </PopoverPrimitive.Trigger>
        <PopoverPrimitive.Portal>
          <PopoverPrimitive.Content
            className="rounded bg-transparent shadow-2xl focus:shadow-violet-700"
            sideOffset={5}
          >
            <ListboxOptions list={list} />
            <PopoverPrimitive.Close
              className="absolute top-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-violet-900 focus:shadow-sm focus:shadow-violet-700 hover:bg-violet-400"
              aria-label="Close"
            >
              x
            </PopoverPrimitive.Close>
          </PopoverPrimitive.Content>
        </PopoverPrimitive.Portal>
      </PopoverPrimitive.Root>
    </Listbox>
  );
};

export const ListboxOptions = React.forwardRef<HTMLUListElement, OptionsProps>(
  ({ list }: OptionsProps, ref) => {
    return (
      <Transition
        ref={ref}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="flex h-min w-full flex-col gap-2 overflow-auto rounded-md bg-white/30 py-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-[1px] focus:outline-none sm:text-sm">
          {list.map((item) => (
            <Listbox.Option
              key={item.id}
              value={item}
              className={({ active }) =>
                `relative cursor-pointer select-none transition-faster  ${
                  active ? 'opacity-60' : 'opacity-30'
                }`
              }
            >
              {({ selected }) => (
                <>
                  <span className={`flex truncate ${selected ? '!opacity-100' : ''} `}>
                    <Icons icon={item.label} className="h-auto w-28" />
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

export default Popover;
