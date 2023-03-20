import React, { ReactNode } from 'react';

import { ArrowRight, Home, Hashtag } from '../DataDisplay/Icons';
import Typography from '../DataDisplay/Typography';
import Link from './Link';

const svg = {
  primary: (theme: keyof IThemes) => {
    const themeMapping = {
      Breadcrumbs: <Home className="mr-2 h-4 w-4" />,
      TableOfContents: <Hashtag className="mr-2 h-4 w-4"></Hashtag>
    };
    return themeMapping[theme];
  },
  secondary: () => <ArrowRight className="h-4 w-4" />
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
        [&>ul>li>a>svg]:absolute [&>ul>li>a>svg]:right-full [&>ul>li>a>svg]:top-1/2 [&>ul>li>a>svg]:-translate-y-1/2 [&>ul>li>a]:block
        [&>ul>li>a]:py-1 [&>ul>li>a]:font-medium hover:[&>ul>li>a]:text-primary-select-df [&>ul>li>a]:dark:text-primary-contrast-dk dark:hover:[&>ul>li>a]:text-primary-select-dk [&>ul>li]:relative
        [&_.primary>svg]:opacity-0
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
        {svg[level](theme)}
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
