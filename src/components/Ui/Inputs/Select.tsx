'use client';
import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';
import { ObjectDefaultProps } from './Types';

import { Listbox } from '@headlessui/react';
import * as Popover from '@radix-ui/react-popover';
import { AnimatePresence, motion } from 'framer-motion';

type CallbackType<T> = (Item: T) => React.ReactNode;

type RenderSelectProps<T> = {
  renderSelected: CallbackType<ObjectDefaultProps<T>>;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<ObjectDefaultProps<T>>;
};

type OptionsProps<T> = RenderOptionsProps<T> & {
  list: ObjectDefaultProps<T>[];
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
    { list, renderOptions }: OptionsProps<T>,
    ref: React.ForwardedRef<HTMLUListElement>
  ) => (
    <Popover.Content asChild>
      <Listbox.Options as={Fragment}>
        <motion.ul
          initial={{ opacity: 0, scale: '90%' }}
          animate={{ opacity: 1, scale: '100%' }}
          exit={{ opacity: 0, scale: '90%' }}
          ref={ref}
          className="flex w-64 flex-col gap-3 overflow-auto rounded-md bg-lg-primary-base/30 px-m pb-1 pt-4 text-base shadow-lg backdrop-blur-sm transition-all scrollbar-thin scrollbar-track-transparent scrollbar-thumb-lg-secondary/50 scrollbar-corner-transparent focus:outline-none sm:text-sm"
        >
          {list.map((item) => (
            <Option
              key={`${item.id}${item.name}`}
              renderOptions={renderOptions}
              option={item}
            />
          ))}
        </motion.ul>
      </Listbox.Options>
    </Popover.Content>
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
    <Listbox as="div" value={selected} onChange={setSelected} multiple={multiple}>
      {({ open }) => (
        <Popover.Root open={open}>
          <Button arrow={arrow} renderSelected={renderSelected} selected={selected} />
          <AnimatePresence>
            <Popover.Portal>
              <ListOptions
                list={list}
                renderOptions={(item) => renderOptions(item as ObjectDefaultProps<T>)}
              />
            </Popover.Portal>
          </AnimatePresence>
        </Popover.Root>
      )}
    </Listbox>
  );
};

export default SelectRoot;
