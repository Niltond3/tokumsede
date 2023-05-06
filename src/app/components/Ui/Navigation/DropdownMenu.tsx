'use client';
import React, { useEffect, useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Button from '../Inputs/Button';

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimationControls
} from 'framer-motion';

type ItemsProps<T> = {
  onSelect?: () => void;
  closeMenu?: () => void;
  setSelect?: React.Dispatch<React.SetStateAction<ItemStateType<T>>>;
};

export type ObjectDefaultProps<T> = T &
  Omit<ItemsProps<T>, 'onSelect'> & {
    id: number;
    name: string;
    unavailable: boolean;
  };

type CallbackType<T> = (Item: T) => React.ReactNode;

type ItemStateType<T> = ObjectDefaultProps<T>[] | ObjectDefaultProps<T>;

type RenderSelectType<T> = Omit<ObjectDefaultProps<T>, 'closeMenu' | 'setSelect'>;

type RenderSelectProps<T> = {
  renderSelect: CallbackType<RenderSelectType<T>>;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<ObjectDefaultProps<T>>;
};

type ListOptionsProps<T> = RenderOptionsProps<T> &
  ItemsProps<T> & {
    list: ObjectDefaultProps<T>[];
    controls: AnimationControls;
  };

type OptionProps<T> = RenderOptionsProps<T> &
  Omit<ListOptionsProps<T>, 'list'> & {
    option: ObjectDefaultProps<T>;
  };

type TriggerProps<T> = RenderSelectProps<T> & {
  item: ItemStateType<T>;
  arrow: boolean;
};

type SelectProps<T> = RenderSelectProps<T> &
  Omit<ListOptionsProps<T>, 'closeMenu' | 'controls'> & {
    arrow?: boolean;
  };

export default function DropdownMenu<T>({
  arrow = true,
  list,
  onSelect,
  renderSelect,
  renderOptions
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
      <Trigger arrow={arrow} renderSelect={renderSelect} item={item} />
      <AnimatePresence>
        {open && (
          <Dropdown.Portal forceMount>
            <ListOptions
              setSelect={setItem}
              closeMenu={closeMenu}
              list={list}
              onSelect={onSelect}
              renderOptions={renderOptions}
              controls={controls}
            />
          </Dropdown.Portal>
        )}
      </AnimatePresence>
    </Dropdown.Root>
  );
}

const Trigger = <T,>({ arrow, renderSelect, item }: TriggerProps<T>) => {
  const selected = (object: ObjectDefaultProps<T>) => {
    delete object.closeMenu;
    delete object.setSelect;
    const obj: RenderSelectType<T> = object as RenderSelectType<T>;
    return obj;
  };

  const renderSelectItem = () =>
    Array.isArray(item)
      ? item.map((item) => renderSelect(selected(item)))
      : renderSelect(selected(item));

  return (
    <div className="flex gap-2 ">
      <Dropdown.Trigger asChild>
        <Button aria-label="Customise options">
          <Icons icon="Purchase" className="pointer-events-none" />
        </Button>
      </Dropdown.Trigger>
      {arrow && <Icons icon="Arrow" />}
      {renderSelectItem()}
    </div>
  );
};

const ListOptions = <T,>({
  list,
  renderOptions,
  closeMenu,
  onSelect,
  controls,
  setSelect
}: ListOptionsProps<T>) => (
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
          setSelect={setSelect}
          key={`${item.id}${item.name}`}
          renderOptions={renderOptions}
          option={item}
          closeMenu={closeMenu}
          onSelect={onSelect}
          controls={controls}
        />
      ))}
    </motion.div>
  </Dropdown.Content>
);

const Option = <T,>({
  setSelect,
  option,
  renderOptions,
  closeMenu,
  controls,
  onSelect = () => {
    // empty
  }
}: OptionProps<T>) => {
  // const controls = useAnimationControls();

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
      <motion.div animate={controls}>
        {renderOptions({ ...option, closeMenu: closeMenu, setSelect: setSelect })}
      </motion.div>
    </Dropdown.Item>
  );
};
