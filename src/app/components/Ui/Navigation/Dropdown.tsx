import React, { useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Tooltip from '../DataDisplay/Tooltip';
import Button from '../Inputs/Button';
import Link from './Link';

import { IContent } from 'utils/Types';

interface IDropdown extends IContent {
  shrink: boolean;
}

export default function Dropdown({ content = [], icon, title, shrink }: IDropdown) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setShowDropdown(!showDropdown);
  return (
    <div className="flex flex-col pl-s text-secondary-contrast-df transition-fast">
      <Button
        className={`${
          shrink
            ? `pointer-events-auto w-1/3 self-end px-m [&>svg:nth-child(2)]:hidden`
            : 'pointer-events-none'
        } ${
          showDropdown &&
          `!bg-primary-default/100 !text-primary-contrast-df transition-none before:opacity-100 before:transition-none after:opacity-100 after:transition-none dark:!bg-primary-dark/100 dark:!text-primary-contrast-dk [&>svg:nth-child(2)]:rotate-90`
        }`}
        onClick={handleClick}
        typeOf="MenuControl"
        icon={icon}
      >
        {!shrink ? title : <Tooltip title={title} position="right" distace="close" />}
      </Button>
      <ul
        className={`my-1 flex flex-col flex-wrap items-end transition-faster ${
          shrink && ''
        } ${showDropdown ? 'max-h-96' : 'max-h-0 overflow-hidden'}`}
      >
        {content.map(({ title, href, onClick, icon }, index) => {
          enum EDelay {
            'animation-delay-[40ms]',
            'animation-delay-[60ms]',
            'animation-delay-[80ms]',
            'animation-delay-[100ms]',
            'animation-delay-[120ms]',
            'animation-delay-[140ms]'
          }
          const delay = EDelay[index];
          return renderLi({
            delay,
            icon,
            index,
            title,
            href,
            onClick,
            showDropdown,
            shrink
          });
        })}
      </ul>
    </div>
  );
}

const renderLi = ({
  delay,
  icon,
  index,
  title,
  href,
  onClick,
  showDropdown,
  shrink
}: IRenderLi) => (
  <li key={`${title}${index}`}>
    {href && (
      <Link
        href={href}
        onClick={onClick}
        //animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-40
        className={`group flex border-l-2 border-l-primary-default/0 p-s transition-faster ${
          showDropdown && 'border-l-primary-default/30 hover:border-l-primary-default/100'
        }`}
      >
        <div
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`flex translate-x-[25px] items-center opacity-0 transition-faster${
            showDropdown && `${delay} animate-intro-menu group-hover:!opacity-100`
          } fill-mode-forwards`}
        >
          {icon && <Icons icon={icon} className="mr-s transition-faster" />}
          {!shrink ? (
            <p className={`min-w-[6rem] text-[0.80rem] font-medium transition-faster`}>
              {title}
            </p>
          ) : (
            <Tooltip title={title} position="right" distace="closer" />
          )}
        </div>
      </Link>
    )}
  </li>
);

interface IRenderLi extends IContent {
  delay: string;
  index: number;
  showDropdown: boolean;
  shrink: boolean;
}
