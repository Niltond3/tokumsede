import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import Icons from 'components/Ui/DataDisplay/Icons';
export type Icon = typeof Icons;

export interface IContent {
  content?: IContent[];
  href: string;
  icon: keyof Icon;
  onClick?: () => void;
  title: string;
}
export type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>;
  };
};
