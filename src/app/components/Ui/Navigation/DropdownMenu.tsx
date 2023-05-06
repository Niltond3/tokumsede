'use client';
import React, { useEffect, useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Button from '../Inputs/Button';

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as Popover from '@radix-ui/react-popover';
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimationControls
} from 'framer-motion';

export type ObjectDefaultProps<T> = T & {
  id: number;
  name: string;
  unavailable: boolean;
};

type CallbackType<T> = (Item: T) => React.ReactNode;

type RenderSelectProps<T> = {
  renderItem: CallbackType<ObjectDefaultProps<T>>;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<ObjectDefaultProps<T>>;
};

type OptionsProps<T> = RenderOptionsProps<T> & {
  list: ObjectDefaultProps<T>[];
  controls: AnimationControls;
};

type OptionProps<T> = RenderOptionsProps<T> & {
  option: ObjectDefaultProps<T>;
  onSelect?: () => void;
  closeMenu: () => void;
};

type SelectProps<T> = OptionsProps<T> &
  RenderSelectProps<T> & {
    arrow?: boolean;
  };

type TriggerProps<T> = RenderSelectProps<T> & {
  item: ObjectDefaultProps<T>;
  arrow: boolean;
};

type ItemStateType<T> = ObjectDefaultProps<T>[] | ObjectDefaultProps<T>;

export default function DropdownMenu<T>({
  arrow = true,
  list,
  renderOptions,
  renderItem
}: SelectProps<T>) {
  const [item, setItem] = useState<ItemStateType<T>>(
    [] as ObjectDefaultProps<T>[] | object as ObjectDefaultProps<T>
  );
  const [open, setOpen] = useState(false);
  const controls = useAnimationControls();

  const closeMenu = async () => {
    await controls.start('close');
    setOpen(false);
  };

  useEffect(() => {
    if (open) controls.start('open');
  }, [controls, open]);

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Trigger arrow={arrow} renderItem={renderItem} item={item} />
      <AnimatePresence>
        {open && (
          <Dropdown.Portal forceMount>
            <ListOptions list={list} renderOptions={renderOptions} controls={controls} />
          </Dropdown.Portal>
        )}
      </AnimatePresence>
    </Dropdown.Root>
  );
}

const Trigger = <T,>({ arrow, renderItem, item }: TriggerProps<T>) => {
  const renderSelect = ({ renderItem }: RenderSelectProps<T>) =>
    Array.isArray(item) ? item.map((item) => renderItem(item)) : renderItem(item);

  return (
    <div className="flex gap-2 ">
      <Dropdown.Trigger asChild>
        <Button aria-label="Customise options">
          <Icons icon="Purchase" className="pointer-events-none" />
        </Button>
      </Dropdown.Trigger>
      {arrow && <Icons icon="Arrow" />}
      {renderSelect({ renderItem })}
    </div>
  );
};

const ListOptions = <T,>({ list, renderOptions, controls }: OptionsProps<T>) => (
  <Dropdown.Content asChild align="start">
    <motion.div
      initial="close"
      animate={controls}
      exit="close"
      variants={{
        open: { opacity: 1, scale: '100%' },
        close: { opacity: 0, scale: '90%' }
      }}
    >
      {list.map((item) => (
        <Option
          key={`${item.id}${item.name}`}
          renderOptions={renderOptions}
          option={item}
        />
      ))}
    </motion.div>
  </Dropdown.Content>
);

const Option = <T,>({
  option,
  renderOptions,
  closeMenu,
  onSelect = () => {
    // empty
  }
}: OptionProps<T>) => {
  const controls = useAnimationControls();

  return (
    <Dropdown.Item
      onSelect={async (e) => {
        e.preventDefault();
        /**
         *
         */
        onSelect();
      }}
      className="select-none rounded text-gray-700 opacity-50 outline-none transition-faster data-[highlighted]:opacity-100"
      asChild
    >
      <motion.div animate={controls}>{renderOptions(option)}</motion.div>
    </Dropdown.Item>
  );
};

const sleep = (s: number) => new Promise((resolve) => setTimeout(resolve, s * 1000));
