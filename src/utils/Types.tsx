import Icons from 'components/Ui/DataDisplay/Icons';

export type Icon = typeof Icons;

export interface IContent {
  content?: IContent[];
  href: string;
  icon: keyof Icon;
  onClick?: () => void;
  title: string;
}
