'use client';
import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';

import { Listbox, Transition } from '@headlessui/react';
import * as Popover from '@radix-ui/react-popover';

export type ObjectDefaultProps<T> = T & {
  id: number;
  name: string;
  unavailable: boolean;
};

type CallbackType<T> = (Item: T) => React.ReactNode;

type RenderSelectProps<T> = {
  renderSelected: CallbackType<ObjectDefaultProps<T>>;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<ObjectDefaultProps<T>>;
};

type OptionsProps<T> = RenderOptionsProps<T> & {
  list: ObjectDefaultProps<T>[];
  open: boolean;
};

type OptionProps<T> = RenderOptionsProps<T> & {
  option: ObjectDefaultProps<T>;
};

type SelectProps<T> = OptionsProps<T> &
  RenderSelectProps<T> & {
    multiple?: boolean;
    arrow?: boolean;
  };

type ButtonProps<T> = RenderSelectProps<T> & {
  selected: ObjectDefaultProps<T>;
  arrow: boolean;
};

const Option = <T,>({ option, renderOptions }: OptionProps<T>) => (
  <Listbox.Option
    value={option}
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
    {renderOptions(option)}
  </Listbox.Option>
);

const Button = <T,>({ arrow, renderSelected, selected }: ButtonProps<T>) => {
  const renderSelect = ({ renderSelected }: RenderSelectProps<T>) =>
    Array.isArray(selected)
      ? selected.map((item) => renderSelected(item))
      : renderSelected(selected);

  return (
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
      {renderSelect({ renderSelected })}
    </div>
  );
};

const ListOptions = React.forwardRef(
  <T,>(
    { list, renderOptions, open }: OptionsProps<T>,
    ref: React.ForwardedRef<HTMLUListElement>
  ) => (
    <Transition
      show={open}
      as={Fragment}
      enter="transform transition duration-[400ms]"
      enterFrom="opacity-0 rotate-[-120deg] scale-50"
      enterTo="opacity-100 rotate-0 scale-100"
      leave="transform duration-200 transition ease-in-out"
      leaveFrom="opacity-100 rotate-0 scale-100 "
      leaveTo="opacity-0 scale-95 "
    >
      <Popover.Content asChild={true}>
        <Listbox.Options
          ref={ref}
          className="flex max-h-0 w-64 flex-col gap-3 overflow-auto rounded-md bg-lg-primary-base/30 px-m pt-4 pb-1 text-base opacity-0 shadow-lg ring-1 ring-black/5 backdrop-blur-sm scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none ui-open:animate-list-open ui-not-open:animate-list-close sm:text-sm"
        >
          <>
            {list.map((item) => (
              <Option
                key={`${item.id}${item.name}`}
                renderOptions={renderOptions}
                option={item}
              />
            ))}
            <Popover.Close
              className="absolute top-1 right-1 inline-flex h-5 w-5 items-center justify-center rounded-full text-violet-900 focus:shadow-sm focus:shadow-violet-700 hover:bg-violet-400"
              aria-label="Close"
            >
              x
            </Popover.Close>
          </>
        </Listbox.Options>
      </Popover.Content>
    </Transition>
  )
);

const SelectRoot = <T,>({
  arrow = true,
  list,
  multiple = false,
  renderOptions,
  renderSelected
}: SelectProps<T>) => {
  const [selected, setSelected] = useState<ObjectDefaultProps<T> | ObjectDefaultProps<T>>(
    [] as ObjectDefaultProps<T>[] | object as ObjectDefaultProps<T>
  );

  return (
    <Listbox value={selected} onChange={setSelected} multiple={multiple}>
      {({ open }) => (
        <>
          <Popover.Root>
            <Button arrow={arrow} renderSelected={renderSelected} selected={selected} />
            <Popover.Portal>
              <ListOptions
                list={list}
                open={open}
                renderOptions={(item) => renderOptions(item as ObjectDefaultProps<T>)}
              />
            </Popover.Portal>
          </Popover.Root>
        </>
      )}
    </Listbox>
  );
};

export default SelectRoot;
