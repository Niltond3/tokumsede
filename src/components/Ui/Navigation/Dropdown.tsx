import React, { useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Button from '../Inputs/Button';
import Link from './Link';

import { IContent } from 'utils/Types';

export default function Dropdown({ content = [], icon, title }: IContent) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setShowDropdown(!showDropdown);

  return (
    <div
      className="relative flex-col pl-s text-secondary-contrast-df transition-fast
      "
    >
      <Button
        className={`
        ${
          showDropdown &&
          `!bg-primary-default/100 !text-primary-contrast-df transition-none
          before:opacity-100 before:transition-none after:opacity-100 after:transition-none
          dark:!bg-primary-dark/100 dark:!text-primary-contrast-dk
          [&>div]:!bg-primary-default/100 [&>svg:nth-child(2)]:rotate-90
          `
        }
      `}
        onClick={handleClick}
        typeOf="MenuControl"
        icon={icon}
      >
        {title}
      </Button>
      <ul
        className={`pointer-events-none max-h-0 ${
          showDropdown && 'pointer-events-auto max-h-96'
        } my-1 flex-col transition-faster`}
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
          return renderLi({ delay, icon, index, title, href, onClick, showDropdown });
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
  <li key={`${title}${index}`}>
    {href && (
      <Link
        href={href}
        onClick={onClick}
        //animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-40
        className={`ml-m flex border-l-2 p-s transition-faster ${
          showDropdown
            ? `border-l-primary-default/30 hover:border-l-primary-default/100`
            : 'border-l-primary-default/0'
        }`}
      >
        <span
          // eslint-disable-next-line tailwindcss/no-custom-classname
          className={`flex translate-x-[25px] items-center opacity-0 ${
            showDropdown ? `${delay} animate-intro-menu` : ''
          } fill-mode-forwards`}
        >
          {icon && Icons[icon]({ className: 'mr-s' })}
          {title}
        </span>
      </Link>
    )}
  </li>
);

interface IRenderLi extends IContent {
  delay: string;
  index: number;
  showDropdown: boolean;
}
