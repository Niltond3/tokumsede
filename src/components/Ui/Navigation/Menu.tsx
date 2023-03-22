import React, { useState, ReactNode } from 'react';

import Icons, { ArrowRight } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
import Button from '../Inputs/Button';
import Link from './Link';

export interface IContent {
  title: string;
  href?: string;
  onClick?: () => void;
  content?: IContent[];
  icon?: keyof typeof Icons;
}

interface IMenu {
  type: 'toast' | 'accordion';
  className?: string;
  children?: ReactNode;
  content: IContent[];
}

interface IRenderSubMenu {
  content: IContent[];
  className?: string;
}

export default function Menu({ content, type, children, className }: IMenu) {
  return renderSubMenu({ content });
}

function renderSubMenu({ content, className }: IRenderSubMenu) {
  return (
    <ul className="ml-m mt-m transition-fast">
      {content.map(({ title, href, onClick, content, icon }, index) => (
        <li key={`${title}${index}`}>
          <div
            className={` ${className} relative flex flex-col items-center p-xs pl-s text-secondary-contrast-df
              transition-fast [&>svg]:min-w-min
              [&>svg]:pr-s [&>ul]:pointer-events-none [&>ul]:max-h-0 [&>ul]:opacity-0
            `}
          >
            {href ? (
              <Link href={href} onClick={onClick}>
                {icon && Icons[icon]({})}
                {title}
              </Link>
            ) : (
              <Button
                className={`bg group relative h-10 w-full rounded-l-full bg-primary-default bg-opacity-0 text-primary-contrast-df transition-faster
              before:absolute
              before:top-[-1.58rem] before:right-0
              before:z-50 before:-mr-5
              before:h-[25px] before:w-[25px] before:rotate-90 before:scale-[1.04] before:bg-menu-corner before:bg-[length:100%] before:bg-no-repeat before:opacity-0
              before:transition-faster after:absolute after:bottom-[-1.58rem] after:right-0 after:z-50 after:-mr-5
              after:h-[25px] after:w-[25px]
              after:scale-[1.04] after:bg-menu-corner after:bg-[length:100%] after:bg-no-repeat after:opacity-0 after:content-[''] after:transition-faster hover:bg-opacity-30
              focus:bg-opacity-100 focus:transition-none focus:before:opacity-100 focus:before:transition-none focus:after:opacity-100 focus:after:transition-none`}
                onClick={() => console.log('click')}
                typeOf="MenuControl"
              >
                {icon && Icons[icon]({})}
                {title}
              </Button>
            )}
            {content &&
              renderSubMenu({
                content,
                className: `border-l-2 border-secondary-default cursor-pointer
                hover:border-secondary-contrast-df hover:bg-secondary-default hover:dark:bg-secondary-dark opacity-50 hover:text-secondary-contrast-df hover:opacity-100
                `
              })}
          </div>
        </li>
      ))}
    </ul>
  );
}
