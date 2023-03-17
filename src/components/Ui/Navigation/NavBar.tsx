import React, { ReactNode } from 'react';

import { ArrowRight, Home } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
import Link from './Link';

const svg = {
  primary: <Home className="mr-2 h-4 w-4" />,
  secondary: <ArrowRight className="h-4 w-4" />
} as const;

interface IThemes {
  Breadcrumbs: string;
  TableOfContents: string;
}

export interface entry {
  title: string;
  href: string;
  level: keyof typeof svg;
}

interface INavBar {
  theme: keyof IThemes;
  entrys: entry[];
}

interface INav {
  children?: ReactNode;
  className?: string;
}

const themeMapping = {
  Breadcrumbs: {
    title: false,
    Element: ({ children, className }: INav) => (
      <nav
        className={`${className} color__tertiary m-m flex rounded-full px-m py-s opacity-50 hover:opacity-100
      [&>*]:inline-flex [&>*]:items-center
      [&>ul>li>a]:flex [&>ul>li>a]:items-center [&>ul>li>a]:text-sm
      [&>ul>li>a]:font-medium [&>ul>li>a]:text-tertiary-contrast-df hover:[&>ul>li>a]:text-tertiary-select-df dark:[&>ul>li>a]:text-tertiary-contrast-dk
      dark:hover:[&>ul>li>a]:text-tertiary-select-dk [&>ul]:relative
      [&>ul]:z-10 [&>ul]:space-x-1
      `}
      >
        {children}
      </nav>
    )
  },
  TableOfContents: {
    title: true,
    Element: ({ children, className }: INav) => (
      <nav
        className={`${className} color__transparent px-s
        [&>*]:text-xs [&>*]:leading-6 [&>*]:text-primary-contrast-df
        [&>ul>li>a]:block [&>ul>li>a]:py-1 [&>ul>li>a]:font-medium
        hover:[&>ul>li>a]:text-primary-select-df [&>ul>li>a]:dark:text-primary-contrast-dk dark:hover:[&>ul>li>a]:text-primary-select-dk
        [&>ul>li]:relative [&>ul>li]:before:absolute [&>ul>li]:before:right-full [&>ul>li]:before:top-0 [&>ul>li]:before:m-s [&>ul>li]:before:h-4 [&>ul>li]:before:w-4
        [&>ul>li]:before:fill-primary-select-dk [&>ul>li]:before:transition-faster [&_.primary]:before:opacity-0 [&_.primary]:before:content-hashtag hover:[&_.primary]:before:opacity-100
        [&_.secondary]:before:content-right
    `}
      >
        {children}
      </nav>
    )
  }
} as const;
//
const renderRows = (entrys: entry[], theme: keyof IThemes) =>
  entrys.map(({ href, level, title }, index) => (
    <li
      key={index}
      className={`${
        level === 'primary' ? 'primary' : 'secondary ml-4'
      } transition-faster`}
    >
      <Link href={href} className="group transition-faster">
        {theme !== 'TableOfContents' && svg[level]}
        {title}
      </Link>
    </li>
  ));

export default function NavBar({ theme, entrys }: INavBar) {
  const { title, Element } = themeMapping[theme];
  return (
    <>
      {title && (
        <Typography
          variant="h5"
          bold={true}
          className="my-m block py-1 text-sm font-semibold leading-6 text-primary-select-df dark:text-sky-400"
        >
          Nesta página
        </Typography>
      )}
      <Element aria-label={theme} className="flex transition-faster">
        <ul>{renderRows(entrys, theme)}</ul>
      </Element>
    </>
  );
}
