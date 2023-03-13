import React from 'react';

import { ArrowRight, Home } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
import Link from './Link';

interface IThemes {
  Breadcrumbs: string;
  TableOfContents: string;
}

export interface entry {
  title: string;
  href: string;
  level: 'primary' | 'secondary';
}

interface INavBar {
  theme: keyof IThemes;
  entrys: entry[];
}

const themeMapping = {
  Breadcrumbs: {
    title: false,
    style: 'nav-bar_top color__tertiary'
  },
  TableOfContents: {
    title: true,
    style: 'nav-bar_side'
  }
} as const;

const renderSvg = (level: 'primary' | 'secondary') => {
  const svg = {
    primary: <Home className="mr-2 h-4 w-4" />,
    secondary: <ArrowRight className="h-4 w-4" />
  };
  return svg[level];
};

const renderRows = (entrys: entry[], theme: keyof IThemes) =>
  entrys.map(({ href, level, title }, index) => (
    <li key={index} className={level}>
      <Link href={href} className="group">
        {theme !== 'TableOfContents' && renderSvg(level)}
        {title}
      </Link>
    </li>
  ));

export default function NavBar({ theme, entrys }: INavBar) {
  const { title, style } = themeMapping[theme];
  return (
    <>
      {title && (
        <Typography
          variant="h5"
          bold={true}
          className="my-m text-slate-900 font-semibold text-sm leading-6 dark:text-slate-100"
        >
          Nesta página
        </Typography>
      )}
      <nav className={`${style}`} aria-label={theme}>
        <ul>{renderRows(entrys, theme)}</ul>
      </nav>
    </>
  );
}
