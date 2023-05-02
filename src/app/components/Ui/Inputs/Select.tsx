import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition } from '@headlessui/react';
import * as Popover from '@radix-ui/react-popover';

export type SelectableProps = {
  id: number;
  name: string;
  shortName: string;
  unavailable: boolean;
  value: number;
};

type OptionsProps = {
  list: SelectableProps[];
  option: React.ReactNode;
};

type SelectProps = OptionsProps & {
  multiple?: boolean;
  arrow?: boolean;
};

const SelectRoot = ({ arrow = true, list, multiple = false, option }: SelectProps) => {
  const [selected, setSelected] = useState<SelectableProps[] | SelectableProps>([]);

  const SelectedValue = () => {
    if (Array.isArray(selected))
      return selected.map((item) => (
        <span key={item.id + item.name + item.value}>{item.shortName}</span>
      ));
    else
      <span key={selected.id + selected.name + selected.value}>
        {selected.shortName}
      </span>;
  };

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      <Popover.Root>
        <div>
          <Popover.Trigger asChild>
            <Listbox.Button className="rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg">
              <>
                <Listbox.Label className="cursor-pointer">
                  <Icons icon="Purchase" className="pointer-events-none" />
                </Listbox.Label>
              </>
            </Listbox.Button>
          </Popover.Trigger>
          {SelectedValue()}
          {arrow && <Icons icon="Arrow" />}
        </div>
        <Popover.Portal>
          <Popover.Content>
            <ListboxOptions list={list} option={option} />
            <Popover.Close
              className="absolute top-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-violet-900 focus:shadow-sm focus:shadow-violet-700 hover:bg-violet-400"
              aria-label="Close"
            >
              x
            </Popover.Close>
          </Popover.Content>
        </Popover.Portal>
      </Popover.Root>
    </Listbox>
  );
};

const ListboxOptions = React.forwardRef<HTMLUListElement, OptionsProps>(
  ({ list, option }: OptionsProps, ref) => {
    return (
      <Transition
        ref={ref}
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="flex max-h-48 min-h-[11rem] max-w-[16rem] flex-col gap-3 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm">
          <>
            {list.map((item) => (
              <Listbox.Option
                key={item.id}
                value={item}
                className={({ active, selected }) =>
                  `relative cursor-pointer select-none transition-faster  ${
                    (active && selected) || selected
                      ? 'opacity-100'
                      : active && !selected
                      ? 'opacity-70'
                      : 'opacity-30'
                  }`
                }
              >
                {option}
              </Listbox.Option>
            ))}
          </>
        </Listbox.Options>
      </Transition>
    );
  }
);

export default SelectRoot;
