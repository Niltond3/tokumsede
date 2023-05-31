import Icons, { Arrow, Mouse, SortDown, SortUp } from '../DataDisplay/Icons';
import Img from '../DataDisplay/Images';

import { clsx } from 'clsx';
import * as types from 'common/types';

export default function Checkbox({ type, icon, title }: types.CheckboxProps) {
  const { children, id, inputStyles, labelStyles } = mappingCheckboxStyles[type]({
    title,
    icon
  });

  return (
    <>
      <input type="checkbox" id={id} className={inputStyles}></input>
      <label className={labelStyles} htmlFor={id}>
        {children}
      </label>
    </>
  );
}

const defaultStyles = {
  inputHidden: 'peer hidden',
  labelToggle: clsx(
    `group h-auto cursor-pointer`,
    '[&>*]:absolute [&>*]:transition-faster [&>svg]:center-x',
    '[&>svg:nth-child(2)]:opacity-0',
    'peer-checked:[&>svg:nth-child(1)]:opacity-0 peer-checked:[&>svg:nth-child(2)]:opacity-100',
    'opacity-50 transition-faster hover:opacity-100',
    '[&>svg]:absolute [&>svg]:left-1/2  [&>svg]:top-1/2 [&>svg]:-translate-x-1/2 [&>svg]:-translate-y-1/2'
  )
};
const { inputHidden, labelToggle } = defaultStyles;

const mappingCheckboxStyles: types.MappingCheckboxStylesProps = {
  NavDropdownControl: ({
    title = 'Default',
    icon = 'Default'
  }: types.CheckboxStylesTypes) => {
    return {
      id: `${title.toLowerCase()}-control-dropdown`,
      inputStyles: inputHidden,
      labelStyles: [
        'btn-menu-control group',
        '@[70px]:gap-2.5',
        'peer-checked:bg-lg-primary-base/100 peer-checked:text-lg-secondary peer-checked:transition-none peer-checked:dark:!bg-dk-primary-base/100 peer-checked:dark:text-dk-secondary-base',
        'dark:peer-checked:bg-dk-primary-base/100 dark:peer-checked:text-dk-secondary-base',
        'peer-checked:before:opacity-100 peer-checked:before:transition-none',
        'peer-checked:after:opacity-100 peer-checked:after:transition-none',
        'peer-checked:[&>svg:nth-child(3)]:rotate-90',
        'child:transition-faster'
      ].join(' '),
      children: (
        <>
          <Icons icon={icon} className="min-w-min" />
          <p
            className={`invisible w-24 text-sm font-medium opacity-0 @[161px]:visible @[161px]:opacity-100`}
          >
            {title}
          </p>
          <Arrow className="absolute right-1 min-w-min @[161px]:right-2.5" />
        </>
      )
    };
  },
  LeftAsideControl: () => {
    return {
      id: 'open-menu',
      inputStyles: inputHidden,
      labelStyles: [
        'border-secondary-default dark:border-secondary-dark group flex h-16 w-16 cursor-pointer rounded-full border-8 border-lg-primary p-xs ',
        'absolute -right-24 bg-lg-primary center-x group-hover/aside:-right-16',
        'peer-checked:-right-3 peer-checked:bg-lg-secondary peer-checked:p-xxs child:transition-slow',
        'dark:border-dk-primary dark:bg-dk-primary dark:peer-checked:bg-dk-secondary'
      ].join(' '),
      children: (
        <>
          <Mouse className="pointer-events-none absolute right-16 top-6 animate-hover-here transition-faster group-hover/aside:opacity-0 group-peer-checked:opacity-0" />
          <Img
            size={24}
            image="logo"
            className="absolute w-5 group-hover:opacity-100 group-peer-checked:w-[1.15rem] group-peer-checked:translate-x-[0.79rem]"
          />
          <Img
            size={26}
            image="name"
            className="absolute right-2 top-5 w-5 group-hover:opacity-100 group-peer-checked:!opacity-0 group-peer-checked:center-y"
          />
          <Img
            size={48}
            image="waves"
            className="absolute -bottom-1 w-9 group-hover:opacity-100 group-peer-checked:bottom-1 group-peer-checked:w-[1.8rem] group-peer-checked:translate-x-[0.45rem] group-peer-checked:translate-y-[0.05rem]"
          />
        </>
      )
    };
  },
  SortControl: () => {
    return {
      id: '',
      inputStyles: inputHidden,
      labelStyles: labelToggle,
      children: (
        <>
          <SortDown />
          <SortUp />
        </>
      )
    };
  }
};

export { mappingCheckboxStyles };
