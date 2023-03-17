import React, { ReactNode } from 'react';

import { ArrowRight, Home } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
import Link from './Link';

const svg = {
  primary: <Home className="mr-2 h-4 w-4" />,
  secondary: <ArrowRight className="h-4 w-4" />
}as const;


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

interface INav{
  children?: ReactNode
  className?: string
}

const themeMapping = {
  Breadcrumbs: {
    title: false,
    Element: ({ children,className}:INav) => (
      <nav className={`${className} color__tertiary m-m flex rounded-full px-m py-s opacity-50 hover:opacity-100
      [&>*]:inline-flex [&>*]:items-center
      [&>ul]:relative [&>ul]:z-10 [&>ul]:space-x-1
      [&>ul>li>a]:flex [&>ul>li>a]:items-center [&>ul>li>a]:text-sm [&>ul>li>a]:font-medium
      [&>ul>li>a]:text-tertiary-contrast-df hover:[&>ul>li>a]:text-tertiary-select-df
      dark:[&>ul>li>a]:text-tertiary-contrast-dk dark:hover:[&>ul>li>a]:text-tertiary-select-dk
      `}>
        {children}
      </nav>
    )
  },
  TableOfContents: {
    title: true,
    Element: ({children,className}:INav) => <nav className={`${className} color__transparent px-s
    [&>ul]:text-primary-contrast-df [&>ul]:text-xs [&>ul]:leading-6
    [&>ul>li:first-child]:block [&>ul>li:first-child]:py-1 [&>ul>li:first-child]:font-medium [&>ul>li:first-child]:text-primary-select-df [&>ul>li:first-child]:dark:text-sky-400
    [&>ul>li>a]:block [&>ul>li>a]:py-1 [&>ul>li>a]:font-medium hover:[&>ul>li>a]:text-primary-select-df [&>ul>li>a]:dark:text-primary-contrast-dk dark:hover:[&>ul>li>a]:text-primary-select-dk
    [&>ul>li>secondary]:ml-4
    `}>
    {children}
  </nav>
  }
} as const;




const renderRows = (entrys: entry[], theme: keyof IThemes) =>
  entrys.map(({ href, level, title }, index) => (
    <li key={index} className={`${level === 'primary' ? 'peer/primary' : 'peer-hover/primary:text-primary-select-df ml-4'} transition-slow`}>
      <Link href={href} className="group transition-fast">
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
          className="my-m text-primary-contrast-df font-semibold text-sm leading-6 dark:text-slate-100 "
        >
          Nesta página
        </Typography>
      )}
      <Element aria-label={theme} className='transition-slow flex'>
        <ul>{renderRows(entrys, theme)}</ul>
      </Element>
    </>
  );
}
