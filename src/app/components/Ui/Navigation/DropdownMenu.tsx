import React, { useEffect, useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Button from '../Inputs/Button';
import {
  CallbackRenderOptionsProps,
  ItemStateType,
  ItemsProps,
  ObjectDefaultProps
} from './types';

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';
import { Slot } from '@radix-ui/react-slot';
import {
  AnimatePresence,
  AnimationControls,
  motion,
  useAnimationControls
} from 'framer-motion';

type CallbackType<T> = (Item: T) => React.ReactNode;

type RenderSelectType<T> = Omit<ObjectDefaultProps<T>, 'closeMenu' | 'setSelect'>;

type RenderSelectProps<T> = {
  renderSelect: CallbackType<RenderSelectType<T>>;
};

type RenderOptionsProps<T> = {
  renderOptions: CallbackType<CallbackRenderOptionsProps<T>>;
};

type ListOptionsProps<T> = RenderOptionsProps<T> &
  ItemsProps<T> & {
    list: ObjectDefaultProps<T>[];
    controls: AnimationControls;
    className: string;
  };

type OptionProps<T> = RenderOptionsProps<T> &
  Omit<ListOptionsProps<T>, 'list' | 'className'> & {
    option: ObjectDefaultProps<T>;
  };

type TriggerProps<T> = RenderSelectProps<T> & {
  item: ItemStateType<T>;
  arrow: boolean;
  className: {
    wrapper: string;
    button: string;
    icon: string;
  };
};

type SelectProps<T> = RenderSelectProps<T> &
  Omit<ListOptionsProps<T>, 'closeMenu' | 'controls' | 'className'> & {
    arrow?: boolean;
    styles: {
      trigger: {
        wrapper: string;
        button: string;
        icon: string;
      };
      dropdownContent: string;
    };
  };

export default function DropdownMenu<T>({
  arrow = true,
  list,
  onSelect,
  renderSelect,
  renderOptions,
  styles
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
  const { dropdownContent, trigger } = styles;

  return (
    <Dropdown.Root open={open} onOpenChange={setOpen}>
      <Trigger
        arrow={arrow}
        renderSelect={renderSelect}
        item={item}
        className={trigger}
      />
      <AnimatePresence>
        {open && (
          <Dropdown.Portal forceMount>
            <ListOptions
              className={dropdownContent}
              closeMenu={closeMenu}
              controls={controls}
              list={list}
              onSelect={onSelect}
              renderOptions={renderOptions}
              setSelect={setItem}
            />
          </Dropdown.Portal>
        )}
      </AnimatePresence>
    </Dropdown.Root>
  );
}

const Trigger = <T,>({ arrow, renderSelect, item, className }: TriggerProps<T>) => {
  const selected = (object: ObjectDefaultProps<T>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { closeMenu: _, setSelect: __, ...selected } = object;
    return selected;
  };
  console.log(item);
  const { wrapper, button, icon } = className;
  const renderSelectItem = () =>
    Array.isArray(item)
      ? item.map((item) => renderSelect(selected(item)))
      : renderSelect(selected(item));

  return (
    <div className={`flex ${wrapper}`}>
      <Dropdown.Trigger asChild>
        <Button aria-label="Customise options" className={button}>
          <Icons icon="Purchase" className={`pointer-events-none ${icon}`} />
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
  setSelect,
  className
}: ListOptionsProps<T>) => (
  <Dropdown.Content asChild align="center" collisionPadding={5}>
    <ScrollAreaPrimitive.Root asChild>
      <ScrollAreaPrimitive.Viewport asChild>
        <motion.div
          className={className}
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
      </ScrollAreaPrimitive.Viewport>
    </ScrollAreaPrimitive.Root>
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
}: OptionProps<T>) => (
  <Slot
    onSelect={async (e) => {
      e.preventDefault();
      /**
       *
       */
      onSelect();
    }}
    className="select-none outline-none transition-faster"
  >
    {renderOptions({
      ...option,
      closeMenu: closeMenu,
      setSelect: setSelect,
      controls
    })}
  </Slot>
);
