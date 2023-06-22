import React, { useEffect, useState } from 'react';

import ListOptions from './components/ListOptions';
import Trigger from './components/Trigger';

import * as Dropdown from '@radix-ui/react-dropdown-menu';
import * as types from 'common/types';
import { AnimatePresence, useAnimationControls } from 'framer-motion';

export default function SelectList<T>({
  arrow = true,
  separator = true,
  list,
  onSelect,
  renderSelect,
  renderOptions,
  styles,
  selectItems,
  initialState
}: types.DropdownSelectProps<T>) {
  const [item, setItem] = useState<types.DropdownItemStateType<T>>(initialState);
  const [open, setOpen] = useState(false);
  selectItems(item);

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
        separator={separator}
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
