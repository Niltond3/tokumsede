import React, { useState, ReactNode } from 'react';

import Icons, { ArrowRight } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
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
    <ul className="ml-m mt-m">
      {content.map(({ title, href, onClick, content, icon }, index) => (
        <li
          className={`
           group flex-col p-s text-secondary-contrast-df opacity-50 transition-faster
            hover:text-secondary-contrast-df hover:opacity-100
            ${className}
          `}
          key={`${title}${index}`}
          onClick={onClick}
        >
          <div className="flex items-center pl-s [&>svg]:min-w-min [&>svg]:pr-s ">
            {icon && Icons[icon]({})}
            {href ? (
              <Link href={href}>{title}</Link>
            ) : (
              <Typography variant="button">{title}</Typography>
            )}
          </div>
          {content &&
            renderSubMenu({
              content,
              className:
                'border-l-2 border-secondary-default hover:border-secondary-contrast-df hover:bg-secondary-default hover:dark:bg-secondary-dark'
            })}
        </li>
      ))}
    </ul>
  );
}
