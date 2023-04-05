/* eslint-disable  @typescript-eslint/no-non-null-assertion */
'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import { Fragment } from 'react';

import { ArrowRight, Home } from 'app/components/Ui/DataDisplay/Icons';
import Link from 'app/components/Ui/Navigation/Link';

import { NAVIGATION_LINKS } from 'utils/Constants';
import { IContent } from 'utils/Types';

interface IPaths {
  title: string;
  href?: string;
}

export default function Breadcrumb() {
  const segments = useSelectedLayoutSegments();

  const getPath = (content: IContent[], segmentsIndex: number): IPaths[] => {
    const index = content.findIndex((nav) => nav.href === `/${segments[segmentsIndex]}`);
    const { title, href, content: pathContent } = content[index !== -1 ? index : 0];
    const path: IPaths[] = [];

    segments.at(-1) && path.push({ title, href });

    if (pathContent) return path.concat(getPath(pathContent, segmentsIndex + 1));

    return path;
  };

  const paths = getPath(NAVIGATION_LINKS, 1);

  return (
    <nav
      aria-label="breadcrumb"
      className={`${[
        'flex transition-faster',
        'm-m flex rounded-full bg-lg-secondary px-m  py-s opacity-50 hover:opacity-100',
        'dark:bg-dk-secondary',
        '[&>*]:inline-flex [&>*]:items-center [&>*]:transition-fast'
      ].join(' ')}`}
    >
      {RenderCrumbs(paths!)}
    </nav>
  );
}

const liStyles = [
  'flex items-center text-sm font-medium text-lg-secondary-lighter hover:text-lg-secondary-base px-xs',
  'dark:text-dk-secondary-base dark:hover:text-dk-accent'
].join(' ');

const RenderCrumbs = (paths: IPaths[]) => (
  <ul className="relative space-x-1">
    <li className={`${liStyles} group peer`}>
      <Link href="/" className="flex items-center justify-center">
        <Home />
        {paths[0] && (
          <>
            <p
              className={[
                'relative flex min-h-[2rem] max-w-0 items-center overflow-hidden pl-4 pr-0 transition-slow group-hover:max-w-xs group-hover:pr-4',
                "before:absolute before:right-1 before:rounded-md before:border-lg-primary before:content-[''] before:transition-faster",
                'before:top-1/2 before:-translate-y-1/2',
                'before:block before:h-8 before:w-8 before:rotate-[225deg]',
                'before:border-t-0 before:border-l-2 before:border-b-2 before:border-r-0'
              ].join(' ')}
            >
              {paths[0].title}
            </p>
          </>
        )}
      </Link>
    </li>
    {paths.map(({ href, title }, index) => (
      <Fragment key={index + 1}>
        {index > 0 && (
          <li className={liStyles}>
            <Link href={href ? href : '/'} className="group">
              {title}
            </Link>
            {index + 1 !== paths.length && <ArrowRight />}
          </li>
        )}
      </Fragment>
    ))}
  </ul>
);
