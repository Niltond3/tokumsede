import React, { useState, ReactNode } from 'react';

import Icons from '../DataDisplay/Icons';
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
  toggle: () => void;
  visibility: boolean;
}

export default function Menu({ content, type, children, className }: IMenu) {
  const [visibility, toggle] = useState(false);
  const handleToggle = () => toggle(!visibility);
  //[&>ul]:pointer-events-none [&>ul]:hidden [&>ul]:max-h-0 [&>ul]:opacity-0
  return renderSubMenu({ content, toggle: handleToggle, visibility });
}

function renderSubMenu({ content, className, toggle, visibility }: IRenderSubMenu) {
  return (
    <ul
      className={` ml-m mt-m transition-fast
      peer-focus:pointer-events-auto peer-focus:max-h-96 peer-focus:opacity-100`}
    >
      {content.map(({ title, href, onClick, content, icon }, index) => (
        <li key={`${title}${index}`}>
          <div
            className={`${className} relative flex flex-col items-center p-xs pl-s text-secondary-contrast-df
              transition-fast
              [&>svg]:min-w-min [&>svg]:pr-s
              [&>ul]:pointer-events-none [&>ul]:max-h-0 [&>ul]:opacity-0`}
          >
            {href ? (
              <Link href={href} onClick={onClick}>
                {icon && Icons[icon]({})}
                {title}
              </Link>
            ) : (
              <Button
                className={`peer`}
                onClick={toggle}
                typeOf="MenuControl"
                icon={icon}
              >
                {title}
              </Button>
            )}
            {content &&
              renderSubMenu({
                content,
                className: `border-l-2 border-secondary-default cursor-pointer
                hover:border-secondary-contrast-df hover:bg-secondary-default hover:dark:bg-secondary-dark opacity-50 hover:text-secondary-contrast-df hover:opacity-100
                `,
                toggle,
                visibility
              })}
          </div>
        </li>
      ))}
    </ul>
  );
}
