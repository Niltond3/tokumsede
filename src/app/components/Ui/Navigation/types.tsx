import { mappingSvg } from './NavBar';

import { AnimationControls } from 'framer-motion';

export type ItemStateType<T> = ObjectDefaultProps<T>[] | ObjectDefaultProps<T>;

export type ItemsProps<T> = {
  onSelect?: () => void;
  closeMenu?: () => void;
  setSelect?: React.Dispatch<React.SetStateAction<ItemStateType<T>>>;
};

export type ObjectDefaultProps<T> = T &
  Omit<ItemsProps<T>, 'onSelect'> & {
    id: number;
    name: string;
    unavailable: boolean;
  };

export type CallbackRenderOptionsProps<T> = ObjectDefaultProps<T> & {
  controls: AnimationControls;
};

export type EntryProps = {
  title: string;
  href: string;
  level: keyof typeof mappingSvg;
};
