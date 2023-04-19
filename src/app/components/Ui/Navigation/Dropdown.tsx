import React, { useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Tooltip from '../DataDisplay/Tooltip';
import Button from '../Inputs/Button';
import Link from './Link';

import { IContent } from 'utils/Types';

interface IDropdown extends IContent {
  styles: string;
}

export default function Dropdown({ content = [], icon, title, styles }: IDropdown) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setShowDropdown(!showDropdown);

  return (
    <div className={`${styles} flex flex-col pl-s transition-fast`}>
      <Button
        className={`${
          showDropdown &&
          `${[
            '!bg-lg-primary-base/100 text-lg-secondary transition-none dark:!bg-dk-primary-base/100 dark:text-dk-secondary-base [&>svg:nth-child(2)]:rotate-90',
            'before:opacity-100 before:transition-none',
            'after:opacity-100 after:transition-none'
          ].join(' ')}`
        }`}
        onClick={handleClick}
        typeOf="MenuControl"
        icon={icon}
      >
        <p className={`min-w-[6rem] text-[0.80rem] font-medium transition-faster`}>
          {title}
        </p>
        <Tooltip title={title} position="right" close />
      </Button>
      <ul
        className={`my-1 flex flex-col flex-wrap transition-faster ${
          showDropdown ? 'max-h-96' : 'max-h-0 overflow-hidden'
        }`}
      >
        {content.map(({ title, href, onClick, icon, content }, index) => {
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
            content
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
  showDropdown
}: IRenderLi) => (
  <li
    className={`${
      showDropdown && 'border-l-lg-primary-base/30 hover:border-l-lg-primary-base/100'
    } border-l-2 border-l-lg-primary-base/0`}
    key={`${title}${index}`}
  >
    <Link
      href={href}
      onClick={onClick}
      className={`group flex translate-x-[25px] items-center p-s opacity-0 transition-faster ${
        showDropdown && `${delay} animate-intro-menu group-hover:!opacity-100`
      } fill-mode-forwards`}
    >
      <Icons icon={icon} className="mr-s transition-faster" />
      <p className={`min-w-[6rem] text-[0.80rem] font-medium transition-faster`}>
        {title}
      </p>
      <Tooltip title={title} position="right" close />
    </Link>
  </li>
);

interface IRenderLi extends IContent {
  delay: string;
  index: number;
  showDropdown: boolean;
}
