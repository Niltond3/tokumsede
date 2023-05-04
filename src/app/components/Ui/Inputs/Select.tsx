'use client';
import React, { ElementType, Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition, ListboxProps } from '@headlessui/react';
import * as Popover from '@radix-ui/react-popover';

export type ObjectDefaultProps<T> = T & {
  id: number;
  name: string;
  unavailable: boolean;
};

type OptionsProps<T> = {
  list: ObjectDefaultProps<T>[];
  renderItem: (Item: ObjectDefaultProps<T>) => React.ReactNode;
};
type CallbackType<T> = (Item: T) => React.ReactNode;

type ConditionalProps<T> =
  | {
      multiple?: false;
      renderSelectValue: (item: ObjectDefaultProps<T>) => React.ReactNode;
    }
  | {
      multiple?: true;
      renderSelectValue: (items: ObjectDefaultProps<T>[]) => React.ReactNode;
    };

type SelectProps<T> = OptionsProps<T> & {
  multiple?: boolean;
  arrow?: boolean;
  callback: CallbackType<ObjectDefaultProps<T>>;
};

const SelectRoot = <T,>({
  arrow = true,
  list,
  multiple = false,
  renderItem,
  callback
}: SelectProps<T>) => {
  const [selected, setSelected] = useState<ObjectDefaultProps<T> | ObjectDefaultProps<T>>(
    [] as ObjectDefaultProps<T>[] | object as ObjectDefaultProps<T>
  );

  type Selcreturn<T> = {
    item: ObjectDefaultProps<T>;
    children: React.ReactNode;
  };

  const SelectedValue = ({
    callback
  }: {
    callback: CallbackType<ObjectDefaultProps<T>>;
  }) => {
    if (Array.isArray(selected)) return selected.map((item) => callback(item));
    return callback(selected);
  };

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      <Popover.Root>
        <div className="flex gap-2 ">
          <Popover.Trigger asChild>
            <Listbox.Button className="rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg">
              <>
                <Listbox.Label className="cursor-pointer">
                  <Icons icon="Purchase" className="pointer-events-none" />
                </Listbox.Label>
              </>
            </Listbox.Button>
          </Popover.Trigger>
          {arrow && <Icons icon="Arrow" />}
          {SelectedValue({ callback })}
        </div>
        <Popover.Portal>
          <Transition
            as={Fragment}
            enter="transition ease duration-500 transform"
            enterFrom="opacity-0 -translate-y-12"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease duration-300 transform"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            <Popover.Content>
              <ListboxOptions
                list={list}
                renderItem={(item) => renderItem(item as ObjectDefaultProps<T>)}
              />
              <Popover.Close
                className="absolute top-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-violet-900 focus:shadow-sm focus:shadow-violet-700 hover:bg-violet-400"
                aria-label="Close"
              >
                x
              </Popover.Close>
            </Popover.Content>
          </Transition>
        </Popover.Portal>
      </Popover.Root>
    </Listbox>
  );
};

const ListboxOptionsInner = <T,>(
  { list, renderItem }: OptionsProps<T>,
  ref: React.ForwardedRef<HTMLUListElement>
) => (
  <Listbox.Options
    ref={ref}
    className="flex max-h-48 min-h-[11rem] max-w-[16rem] flex-col gap-3 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm"
  >
    <>
      {list.map((item) => (
        <Listbox.Option
          key={item.id + list.join('')}
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
          {renderItem(item)}
        </Listbox.Option>
      ))}
    </>
  </Listbox.Options>
);

const ListboxOptions = React.forwardRef(ListboxOptionsInner);

export default SelectRoot;
