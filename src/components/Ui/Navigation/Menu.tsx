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

export default function Menu({ content, type, children, className }: IMenu) {
  return renderSubMenu(content);
}

function renderSubMenu(content: IContent[]) {
  return (
    <ul className="ml-m mt-m">
      {content.map(({ title, href, onClick, content, icon }, index) => (
        <li
          className="flex items-center pb-m text-secondary-contrast-df opacity-50 transition-faster hover:opacity-100"
          key={`${title}${index}`}
          onClick={onClick}
        >
          <>
            {icon && Icons[icon]({})}
            {href ? (
              <Link href={href} className="pl-s">
                {title}
              </Link>
            ) : (
              <Typography variant="h3" className="pl-s">
                {title}
              </Typography>
            )}
            {content && (
              <>
                <ArrowRight />
                {renderSubMenu(content)}
              </>
            )}
          </>
        </li>
      ))}
    </ul>
  );
}
