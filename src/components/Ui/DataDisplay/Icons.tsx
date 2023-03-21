import { ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import {
  FaAngleRight,
  FaChartBar,
  FaShoppingCart,
  FaSlackHash,
  FaUsers,
  FaWarehouse
} from 'react-icons/fa';
import {
  MdAdminPanelSettings,
  MdDarkMode,
  MdDeliveryDining,
  MdDragHandle,
  MdLightMode,
  MdNotifications,
  MdNotificationsOff,
  MdRealEstateAgent,
  MdSettings,
  MdSupportAgent
} from 'react-icons/md';

interface IProps {
  children?: ReactNode;
  className?: string;
}

export const Purchase = ({ className, children }: IProps) => (
  <FaShoppingCart className={className}>{children}</FaShoppingCart>
);

export const Attendant = ({ className, children }: IProps) => (
  <MdSupportAgent className={className}>{children}</MdSupportAgent>
);

export const Distributor = ({ className, children }: IProps) => (
  <FaWarehouse className={className}>{children}</FaWarehouse>
);

export const Customer = ({ children, className }: IProps) => (
  <FaUsers className={className}>{children}</FaUsers>
);

export const Administrator = ({ children, className }: IProps) => (
  <MdAdminPanelSettings className={className}>{children}</MdAdminPanelSettings>
);

export const Representative = ({ children, className }: IProps) => (
  <MdRealEstateAgent className={className}>{children}</MdRealEstateAgent>
);

export const Deliveryman = ({ children, className }: IProps) => (
  <MdDeliveryDining className={className}>{children}</MdDeliveryDining>
);

export const Dashboard = ({ children, className }: IProps) => (
  <FaChartBar className={className}>{children}</FaChartBar>
);

export const ArrowRight = ({ children, className }: IProps) => (
  <FaAngleRight className={className}>{children}</FaAngleRight>
);

export const Hashtag = ({ children, className }: IProps) => (
  <FaSlackHash className={className}>{children}</FaSlackHash>
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

export default {
  Administrator,
  ArrowRight,
  Attendant,
  Customer,
  DarkMode,
  Dashboard,
  Deliveryman,
  Distributor,
  DragBar,
  Hashtag,
  Home,
  LightMode,
  NotificationsOff,
  NotificationsOn,
  Purchase,
  Representative,
  Settings
};
