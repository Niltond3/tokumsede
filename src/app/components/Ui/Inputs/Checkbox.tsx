import Icons, { Arrow, Mouse } from '../DataDisplay/Icons';
import Img from '../DataDisplay/Image';
import Tooltip from '../DataDisplay/Tooltip';

import { TypeIcons } from 'utils/Types';

export default function Checkbox({
  type,
  icon,
  title
}: {
  type: keyof typeof mappingStyles;
  title?: string;
  icon?: keyof TypeIcons;
}) {
  return mappingStyles[type]({ icon, title });
}

const mappingStyles = {
  NavDropdownControl: ({
    title = 'Default',
    icon = 'Default'
  }: {
    title?: string;
    icon?: keyof TypeIcons;
  }) => (
    <>
      <input
        type="checkbox"
        className="peer hidden"
        id={`${title.toLowerCase()}-control-dropdown`}
      ></input>
      <label
        htmlFor={`${title.toLowerCase()}-control-dropdown`}
        className={[
          'btn-menu-control group relative',
          '@[70px]:gap-2.5',
          'peer-checked:bg-lg-primary-base/100 peer-checked:text-lg-secondary peer-checked:transition-none peer-checked:dark:!bg-dk-primary-base/100 peer-checked:dark:text-dk-secondary-base',
          'dark:peer-checked:bg-dk-primary-base/100 dark:peer-checked:text-dk-secondary-base',
          'peer-checked:before:opacity-100 peer-checked:before:transition-none',
          'peer-checked:after:opacity-100 peer-checked:after:transition-none',
          'peer-checked:[&>svg:nth-child(3)]:rotate-90',
          'child:transition-faster'
        ].join(' ')}
      >
        <Icons icon={icon} className="min-w-min" />
        <p
          className={`invisible w-24 text-sm font-medium opacity-0 @[161px]:visible @[161px]:opacity-100`}
        >
          {title}
        </p>
        <Arrow className="absolute right-1 min-w-min @[161px]:right-2.5" />
        <Tooltip title={title} position="right" close className="@[70px]:hidden" />
      </label>
    </>
  ),
  LeftAsideControl: () => (
    <label
      className={[
        'border-secondary-default dark:border-secondary-dark group flex h-16 w-16 cursor-pointer rounded-full border-8 border-lg-primary p-xs ',
        'absolute -right-24 bg-lg-primary center-x group-hover/aside:-right-16',
        'child:transition-slow has-open:-right-3 has-open:bg-lg-secondary has-open:p-xxs',
        'dark:border-dk-primary dark:bg-dk-primary dark:has-open:bg-dk-secondary'
      ].join(' ')}
      htmlFor="open-menu"
    >
      <input type="checkbox" className="peer hidden" id="open-menu" />
      <Mouse className="absolute right-16 top-6 animate-hover-here transition-faster group-hover/aside:opacity-0 peer-checked:opacity-0" />
      <Img
        size={24}
        image="logo"
        className="absolute w-5 group-hover:opacity-100 peer-checked:translate-x-2.5"
      />
      <Img
        size={26}
        image="name"
        className="absolute top-5 right-2 w-5 group-hover:opacity-100 peer-checked:!opacity-0 peer-checked:center-y"
      />
      <Img
        size={48}
        image="waves"
        className="absolute -bottom-1 w-9 group-hover:opacity-100 peer-checked:bottom-1 peer-checked:w-8 peer-checked:translate-y-[0.15rem] peer-checked:translate-x-[0.25rem]"
      />
    </label>
  )
};
