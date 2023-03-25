import { ReactNode } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiMoneyWithdraw } from 'react-icons/bi';
import {
  FaAngleRight,
  FaChartBar,
  FaShoppingCart,
  FaSlackHash,
  FaStore,
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
  MdSupportAgent,
  MdWork
} from 'react-icons/md';
import { SiHomeassistant } from 'react-icons/si';
import { TbTruckDelivery } from 'react-icons/tb';

interface IProps {
  children?: ReactNode;
  className?: string;
}
export const Homes = ({ className, children }: IProps) => (
  <SiHomeassistant className={className}>{children}</SiHomeassistant>
);
export const Work = ({ className, children }: IProps) => (
  <MdWork className={className}>{children}</MdWork>
);

export const Financial = ({ className, children }: IProps) => (
  <BiMoneyWithdraw className={className}>{children}</BiMoneyWithdraw>
);

export const logistics = ({ className, children }: IProps) => (
  <TbTruckDelivery className={className}>{children}</TbTruckDelivery>
);

export const Commercial = ({ className, children }: IProps) => (
  <FaStore className={className}>{children}</FaStore>
);

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

const Icons = {
  Administrator,
  ArrowRight,
  Attendant,
  Commercial,
  Customer,
  DarkMode,
  Dashboard,
  Deliveryman,
  Distributor,
  DragBar,
  Financial,
  Hashtag,
  Home,
  Homes,
  LightMode,
  logistics,
  NotificationsOff,
  NotificationsOn,
  Purchase,
  Representative,
  Settings,
  Work
};

export default Icons;
