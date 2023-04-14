import * as icons from './';
import { default as Accepted } from './accepted.svg';
import { default as AddAddress } from './add_address.svg';
import { default as AddUser } from './add_user.svg';
import { default as Add } from './add.svg';
import { default as Address } from './address.svg';
import { default as Administrator } from './administrator.svg';
import { default as Arrow } from './arrow.svg';
import { default as Attendant } from './attendant.svg';
import { default as Cancel } from './cancel.svg';
import { default as Cash } from './cash.svg';
import { default as Commercial } from './commercial.svg';
import { default as Contact } from './contact.svg';
import { default as Copy } from './copy.svg';
import { default as CreditCard } from './credit_card.svg';
import { default as CurrencyReal } from './currency_real.svg';
import { default as Customer } from './customer.svg';
import { default as DarkMode } from './dark_mode.svg';
import { default as Dashboard } from './dashboard.svg';
import { default as Delivered } from './delivered.svg';
import { default as Deliveryman } from './deliveryman.svg';
import { default as Distributor } from './distributor.svg';
import { default as Exchange } from './exchange.svg';
import { default as Financial } from './financial.svg';
import { default as Hashtag } from './hashtag.svg';
import { default as Home } from './home.svg';
import { default as Homes } from './homes.svg';
import { default as IFood } from './ifood.svg';
import { default as LightMode } from './light_mode.svg';
import { default as logistics } from './logistics.svg';
import { default as Mouse } from './mouse.svg';
import { default as NotificationsOff } from './notifications_off.svg';
import { default as NotificationsOn } from './notifications_on.svg';
import { default as Number } from './number.svg';
import { default as Pending } from './pending.svg';
import { default as Personal } from './personal.svg';
import { default as Phone } from './phone.svg';
import { default as Pix } from './pix.svg';
import { default as PuraLeve } from './pura_leve.svg';
import { default as Purchase } from './purchase.svg';
import { default as Representative } from './representative.svg';
import { default as Schedule } from './schedule.svg';
import { default as Settings } from './settings.svg';
import { default as SortDown } from './sort_down.svg';
import { default as SortUp } from './sort_up.svg';
import { default as Work } from './work.svg';

import { TypeIcons } from 'utils/Types';

export {
  PuraLeve,
  Accepted,
  AddAddress,
  AddUser,
  Add,
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
  Delivered,
  Deliveryman,
  Distributor,
  Exchange,
  Financial,
  Hashtag,
  Home,
  Homes,
  IFood,
  LightMode,
  logistics,
  Mouse,
  NotificationsOff,
  NotificationsOn,
  Number,
  Pending,
  Personal,
  Phone,
  Pix,
  Purchase,
  Representative,
  Schedule,
  Settings,
  SortDown,
  SortUp,
  Work
};

const Icons = ({
  icon,
  className,
  ariaLabel
}: {
  icon: keyof TypeIcons;
  className?: string;
  ariaLabel?: string;
}) => icons[icon]({ className, 'aria-label': ariaLabel });

export default Icons;
