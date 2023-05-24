import React, { ReactNode } from 'react';

import { Arrow, Home, Hashtag } from '../DataDisplay/Icons';
import Link from './Link';
import { EntryProps } from './types';

type ThemesProps = {
  Breadcrumbs: string;
  TableOfContents: string;
};

interface INavBar {
  theme: keyof ThemesProps;
  entrys: EntryProps[];
}

interface INav {
  children?: ReactNode;
  className?: string;
}

const mappingSvg = {
  primary: (theme: keyof ThemesProps) => {
    const themeMapping = {
      Breadcrumbs: <Home className="mr-2 h-4 w-4" />,
      TableOfContents: <Hashtag className="mr-2 h-4 w-4" />
    };
    return themeMapping[theme];
  },
  secondary: () => <Arrow className="h-4 w-4" />
} as const;

const themeMapping = {
  Breadcrumbs: {
    title: false,
    Element: ({ children, className }: INav) => (
      <nav
        className={`${[
          className,
          'm-m flex rounded-full bg-lg-secondary px-m  py-s opacity-50 hover:opacity-100',
          'dark:bg-dk-secondary',
          '[&>*]:inline-flex [&>*]:items-center',
          '[&>ul]:relative [&>ul]:z-10 [&>ul]:space-x-1',
          '[&>ul>li>a]:flex [&>ul>li>a]:items-center [&>ul>li>a]:text-sm [&>ul>li>a]:font-medium [&>ul>li>a]:text-lg-secondary-lighter hover:[&>ul>li>a]:text-lg-secondary-base',
          'dark:[&>ul>li>a]:text-dk-secondary-base dark:hover:[&>ul>li>a]:text-dk-accent'
        ].join(' ')}`}
      >
        {children}
      </nav>
    )
  },
  /*
        className={`${className} color__transparent
    `}
  */
  TableOfContents: {
    title: true,
    Element: ({ children, className }: INav) => (
      <nav
        className={`${[
          className,
          'px-s',
          '[&>*]:text-xs [&>*]:leading-6',
          '[&>ul>li]:relative',
          '[&>ul>li>a]:block [&>ul>li>a]:py-1 [&>ul>li>a]:font-medium [&>ul>li>a]:text-lg-primary-darkest hover:[&>ul>li>a]:text-lg-primary-light',
          'dark:[&>ul>li>a]:text-dk-secondary-base dark:hover:[&>ul>li>a]:text-dk-accent',
          '[&>ul>li>a>svg]:absolute [&>ul>li>a>svg]:right-full [&>ul>li>a>svg]:top-1/2 [&>ul>li>a>svg]:-translate-y-1/2',
          '[&_.primary>svg]:opacity-0'
        ].join(' ')}`}
      >
        {children}
      </nav>
    )
  }
} as const;
//
const renderRows = (entrys: EntryProps[], theme: keyof ThemesProps) =>
  entrys.map(({ href, level, title }, index) => (
    <li
      key={index}
      className={`${
        level === 'primary' ? 'primary' : 'secondary ml-4'
      } transition-faster`}
    >
      <Link href={href} className="group transition-faster">
        {mappingSvg[level](theme)}
        {title}
      </Link>
    </li>
  ));

export default function NavBar({ theme, entrys }: INavBar) {
  const { title, Element } = themeMapping[theme];
  return (
    <>
      {title && (
        <h5 className="my-m block py-1 text-sm font-semibold leading-6 text-lg-accent dark:text-dk-accent">
          Nesta página
        </h5>
      )}
      <Element aria-label={theme} className="flex transition-faster">
        <ul>{renderRows(entrys, theme)}</ul>
      </Element>
    </>
  );
}

export { mappingSvg };
