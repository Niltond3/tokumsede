import React, { Fragment, useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Img, { ImagePath } from '../DataDisplay/Image';
import TextField from '../Inputs/TextField';
import Divider from './Divider';

import { Listbox, Transition } from '@headlessui/react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import clsx from 'clsx';

export type SelectableProps = {
  id: number;
  name: string;
  shortName: string;
  unavailable: boolean;
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
        <div className={`flex items-center gap-1 ${className}`}>
          <PopoverPrimitive.Trigger asChild>
            <Listbox.Button className="rounded bg-white/30 p-0.5 shadow-md backdrop-blur-sm transition-faster focus-visible:outline-none data-state-open:shadow-lg">
              <>
                <Listbox.Label className="cursor-pointer">
                  <Icons icon="Purchase" className="pointer-events-none" />
                </Listbox.Label>
              </>
            </Listbox.Button>
          </PopoverPrimitive.Trigger>
          {selected.map((item) => (
            <span key={item.id + item.name + item.value}>{item.shortName}</span>
          ))}
        </div>
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
                {({ selected }) => {
                  const { name, measure, value } = item;

                  const currencyValue = value.toLocaleString('pt-br', {
                    minimumFractionDigits: 2
                  });
                  const mappingStyles = {
                    leve: '',
                    rica: '',
                    sport: ''
                  } as const;
                  return (
                    <>
                      <div className="flex ">
                        <div className="relative flex flex-[60%] justify-between">
                          <Icons
                            icon="Info"
                            className="absolute top-0 left-2 h-auto w-5 text-lg-primary"
                          />
                          <div className="relative">
                            <Img image={name as ImagePath} blur="blur" />
                            <div
                              className={clsx(
                                'absolute bottom-0 flex h-1/3 w-1/3 border-spacing-1 items-center justify-center rounded-br-xl rounded-tl-xl border-[1px] border-white bg-lg-success p-2 outline outline-1 outline-lg-accent-darker',
                                mappingStyles[name as keyof typeof mappingStyles]
                              )}
                            >
                              <span className="text-[11px] font-medium text-lg-primary-base">
                                {currencyValue}
                              </span>
                            </div>
                          </div>
                          <Icons
                            icon="AddShopping"
                            className="absolute top-0 right-2 h-auto w-5 text-lg-primary"
                          />
                          <Divider orientation="vertical" className="!bg-black/30" />
                        </div>
                        <div className="flex flex-[40%] flex-col items-center justify-center">
                          <div className="flex">
                            <Icons icon="Drop" className="text-lg-primary" />
                            <Icons icon="Drop" className="text-lg-primary" />
                            <Icons icon="Drop" className="text-lg-primary" />
                          </div>
                          <span>{measure}</span>
                          <Divider className="!bg-black/30" />
                          {/* CREATE A INPUT TYPE NUMBER */}
                          <TextField type="number" />
                          {/* <input type="number" className="w-full"></input> */}
                        </div>
                      </div>
                      <Divider />
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <Icons icon="Accepted" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  );
                }}
              </Listbox.Option>
            ))}
          </>
        </Listbox.Options>
      </Transition>
    );
  }
);

export default Popover;
