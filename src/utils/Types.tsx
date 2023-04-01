import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import { thisIcons } from 'app/components/Ui/DataDisplay/Icons';

export type TypeIcons = typeof thisIcons;

export interface IContent {
  content?: IContent[];
  href?: string;
  icon: keyof TypeIcons;
  onClick?: () => void;
  title: string;
}
export type AppPropsWithLayout = AppProps & {
  Component: AppProps['Component'] & {
    PageLayout?: NextComponentType<NextPageContext, any, any>;
  };
};

export interface IHMLElement {
  children?: React.ReactNode;
  className?: string;
}
