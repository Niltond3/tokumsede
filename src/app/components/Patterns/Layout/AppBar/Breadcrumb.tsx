/* eslint-disable  @typescript-eslint/no-non-null-assertion */
'use client';
import { usePathname, useSelectedLayoutSegments } from 'next/navigation';
import { Fragment } from 'react';

import { ArrowRight, Home } from 'app/components/Ui/DataDisplay/Icons';
import Link from 'app/components/Ui/Navigation/Link';

import { NAVIGATION_LINKS } from 'utils/Constants';
import { IContent } from 'utils/Types';

export default function Breadcrumb() {
  const pathName = usePathname();
  const page = useSelectedLayoutSegments()[1];
  const index = NAVIGATION_LINKS.findIndex((nav) => nav.page === page);

  const paths = NAVIGATION_LINKS[index !== -1 ? index : 0].content;

  return (
    <nav
      aria-label="breadcrumb"
      className={`${[
        'flex transition-faster',
        'm-m flex rounded-full bg-lg-secondary px-m  py-s opacity-50 hover:opacity-100',
        'dark:bg-dk-secondary',
        '[&>*]:inline-flex [&>*]:items-center'
      ].join(' ')}`}
    >
      {RenderCrumbs(paths!, pathName)}
    </nav>
  );
}

const liStyles = [
  'flex items-center text-sm font-medium text-lg-secondary-lighter hover:text-lg-secondary-base',
  'dark:text-dk-secondary-base dark:hover:text-dk-accent'
].join(' ');

const RenderCrumbs = (paths: IContent[], pathName: string) => (
  <ul className="relative space-x-1">
    <li className={liStyles}>
      <Link href="/">
        <Home />
      </Link>
    </li>
    {paths.map(({ href, title }, index) => (
      <Fragment key={index + 1}>
        {href! === pathName && (
          <li className={liStyles}>
            <ArrowRight />
            <Link href={href ? href : '/'} className="group transition-faster">
              {title}
            </Link>
          </li>
        )}
      </Fragment>
    ))}
  </ul>
);
