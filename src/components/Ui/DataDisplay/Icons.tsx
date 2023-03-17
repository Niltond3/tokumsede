import { ReactNode } from 'react';
import { AiOutlineRight, AiFillHome } from 'react-icons/ai';
import {
  MdDragHandle,
  MdLightMode,
  MdDarkMode,
  MdNotifications,
  MdNotificationsOff,
  MdSettings
} from 'react-icons/md';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const ArrowRight = ({ children, className }: IProps) => (
  <AiOutlineRight className={className}>{children}</AiOutlineRight>
);

export const Home = ({ children, className }: IProps) => (
  <AiFillHome className={className}>{children}</AiFillHome>
);

export const DragBar = ({ children, className }: IProps) => (
  <MdDragHandle className={className}>{children}</MdDragHandle>
);

export const LightMode = ({ children, className }: IProps) => (
  <MdLightMode className={className}>{children}</MdLightMode>
);

export const DarkMode = ({ children, className }: IProps) => (
  <MdDarkMode className={className}>{children}</MdDarkMode>
);

export const NotificationsOn = ({ children, className }: IProps) => (
  <MdNotifications className={className}>{children}</MdNotifications>
);

export const NotificationsOff = ({ children, className }: IProps) => (
  <MdNotificationsOff className={className}>{children}</MdNotificationsOff>
);

export const Settings = ({ children, className }: IProps) => (
  <MdSettings className={className}>{children}</MdSettings>
);