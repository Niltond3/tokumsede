import * as icons from './';
import { default as Accepted } from './svg/accepted.svg';
import { default as AddAddress } from './svg/add_address.svg';
import { default as AddShopping } from './svg/add_shopping.svg';
import { default as AddUser } from './svg/add_user.svg';
import { default as Add } from './svg/add.svg';
import { default as Address } from './svg/address.svg';
import { default as Administrator } from './svg/administrator.svg';
import { default as Arrow } from './svg/arrow.svg';
import { default as Attendant } from './svg/attendant.svg';
import { default as Cancel } from './svg/cancel.svg';
import { default as Cash } from './svg/cash.svg';
import { default as Commercial } from './svg/commercial.svg';
import { default as Contact } from './svg/contact.svg';
import { default as Copy } from './svg/copy.svg';
import { default as CreditCard } from './svg/credit_card.svg';
import { default as CurrencyReal } from './svg/currency_real.svg';
import { default as Customer } from './svg/customer.svg';
import { default as DarkMode } from './svg/dark_mode.svg';
import { default as Dashboard } from './svg/dashboard.svg';
import { default as Default } from './svg/default.svg';
import { default as Delivered } from './svg/delivered.svg';
import { default as Deliveryman } from './svg/deliveryman.svg';
import { default as Distributor } from './svg/distributor.svg';
import { default as Drop } from './svg/drop.svg';
import { default as Exchange } from './svg/exchange.svg';
import { default as Financial } from './svg/financial.svg';
import { default as Gallon } from './svg/gallon.svg';
import { default as Hashtag } from './svg/hashtag.svg';
import { default as Home } from './svg/home.svg';
import { default as Homes } from './svg/homes.svg';
import { default as IFood } from './svg/ifood.svg';
import { default as Info } from './svg/info.svg';
import { default as LevePh } from './svg/leve_ph.svg';
import { default as Leve } from './svg/leve.svg';
import { default as LightMode } from './svg/light_mode.svg';
import { default as logistics } from './svg/logistics.svg';
import { default as Mouse } from './svg/mouse.svg';
import { default as NotificationsOff } from './svg/notifications_off.svg';
import { default as NotificationsOn } from './svg/notifications_on.svg';
import { default as Number } from './svg/number.svg';
import { default as Pending } from './svg/pending.svg';
import { default as Person } from './svg/person.svg';
import { default as Personal } from './svg/personal.svg';
import { default as Phone } from './svg/phone.svg';
import { default as Pix } from './svg/pix.svg';
import { default as Purchase } from './svg/purchase.svg';
import { default as Quantity } from './svg/quantity.svg';
import { default as Representative } from './svg/representative.svg';
import { default as RicaPh } from './svg/rica_ph.svg';
import { default as Rica } from './svg/rica.svg';
import { default as Schedule } from './svg/schedule.svg';
import { default as Settings } from './svg/settings.svg';
import { default as SortDown } from './svg/sort_down.svg';
import { default as SortUp } from './svg/sort_up.svg';
import { default as SportPh } from './svg/sport_ph.svg';
import { default as Sport } from './svg/sport.svg';
import { default as Work } from './svg/work.svg';

import { TypeIcons } from 'utils/Types';

export {
  Accepted,
  Add,
  AddAddress,
  AddShopping,
  AddUser,
  Address,
  Administrator,
  Arrow,
  Attendant,
  Cancel,
  Cash,
  Commercial,
  Contact,
  Copy,
  CreditCard,
  CurrencyReal,
  Customer,
  DarkMode,
  Dashboard,
  Default,
  Delivered,
  Deliveryman,
  Distributor,
  Drop,
  Exchange,
  Financial,
  Gallon,
  Hashtag,
  Home,
  Homes,
  IFood,
  Info,
  Leve,
  LevePh,
  LightMode,
  Mouse,
  NotificationsOff,
  NotificationsOn,
  Number,
  Pending,
  Person,
  Personal,
  Phone,
  Pix,
  Purchase,
  Quantity,
  Representative,
  Rica,
  RicaPh,
  Schedule,
  Settings,
  SortDown,
  SortUp,
  Sport,
  SportPh,
  Work,
  logistics
};

const Icons = ({
  icon = 'default',
  className
}: {
  icon?: keyof TypeIcons;
  className?: string;
}) => icons[icon]({ className });

export default Icons;
