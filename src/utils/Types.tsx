import { NextComponentType, NextPageContext } from 'next';
import type { AppProps } from 'next/app';

import { thisIcons } from 'app/components/Ui/DataDisplay/Icons';

export type TypeIcons = typeof thisIcons;

type ContentLabel = {
  icon: keyof TypeIcons;
  ariaLabel?: string;
  title: string;
};

export type JSXLabel = ({ ariaLabel, icon, title }: ContentLabel) => JSX.Element;

export interface IContent {
  title: string;
  icon: keyof TypeIcons;
  content?: IContent[];
  page?: string;
  href?: string;
  onClick?: () => void;
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
