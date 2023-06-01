/* eslint-disable  @typescript-eslint/no-non-null-assertion */
'use client';
import { useSelectedLayoutSegments } from 'next/navigation';
import { Fragment } from 'react';

import Icons, { Arrow, Home } from 'components/Ui/DataDisplay/Icons';
import Link from 'components/Ui/Navigation/Link';

import clsx from 'clsx';
import * as types from 'common/types';
import { NAVIGATION_LINKS } from 'utils/Constants';

export default function Breadcrumb() {
  const paths = getPath({
    content: NAVIGATION_LINKS,
    segments: useSelectedLayoutSegments(),
    segmentsIndex: 1
  });

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

const RenderCrumbs = (paths: types.BreadcrumbPaths[]) => {
  const initialPath = paths[0];
  const liStyles = clsx(
    'group relative flex items-center px-xs text-sm font-medium text-lg-secondary-lighter transition-slow hover:text-lg-secondary-base',
    'dark:text-dk-secondary-base dark:hover:text-dk-accent',
    '[&>a>p]:relative [&>a>p]:mx-3 [&>a>p]:flex [&>a>p]:min-h-[2rem] [&>a>p]:max-w-0 [&>a>p]:items-center [&>a>p]:whitespace-nowrap',
    '[&>a>p]:overflow-hidden [&>a>p]:transition-slow'
  );
  return (
    <ul className="relative space-x-1 transition-slow">
      <li
        className={clsx(
          liStyles,
          `${!initialPath && 'before:hidden'}`,
          'before:transition-slow',
          'before:absolute before:right-2 before:rounded-md before:border-lg-primary dark:before:border-dk-primary',
          'before:top-1/2 before:-translate-y-1/2',
          'before:block before:h-8 before:w-8 before:rotate-[225deg]',
          'before:border-b-2 before:border-l-2 before:border-r-0 before:border-t-0'
        )}
      >
        <Link href="/" className="flex items-center justify-center">
          <Home />
          {initialPath && <p className="group-hover:max-w-xs">{initialPath.title}</p>}
        </Link>
      </li>
      {paths.map(({ icon, href, title }, index) => {
        const nextIndex = index + 1;
        const lastIndex = nextIndex === paths.length;
        return (
          <Fragment key={nextIndex}>
            {index > 0 && (
              <li className={liStyles}>
                <Link href={href ? href : '/'} className="group flex items-center">
                  <>
                    <Icons icon={icon} />
                    <p className={`group-hover:max-w-xs ${lastIndex && '!mr-0'}`}>
                      {title}
                    </p>
                    {!lastIndex && <Arrow />}
                  </>
                </Link>
              </li>
            )}
          </Fragment>
        );
      })}
    </ul>
  );
};

const getPath = ({
  content,
  segments,
  segmentsIndex
}: types.GetBreadcrumbPathsProps): types.BreadcrumbPaths[] => {
  const index = content.findIndex((nav) => nav.href === `/${segments[segmentsIndex]}`);

  const { title, href, content: pathContent, icon } = content[index !== -1 ? index : 0];
  const path: types.BreadcrumbPaths[] = [];

  segments.at(-1) && path.push({ icon, title, href });

  if (pathContent && segments[segmentsIndex + 1] !== undefined)
    return path.concat(
      getPath({
        content: pathContent,
        segments,
        segmentsIndex: segmentsIndex + 1
      })
    );
  return path;
};
