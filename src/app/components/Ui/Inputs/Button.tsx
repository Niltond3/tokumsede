import Icons, {
  LightMode,
  DarkMode,
  NotificationsOn,
  NotificationsOff,
  ArrowRight
} from '../DataDisplay/Icons';
import Img from '../DataDisplay/Image';

import { TypeIcons } from 'utils/Types';

const buttonsMapping = {
  InteractiveLogo: InteractiveLogo(),
  DarkModeToggle: DarkModeToggle(),
  Settings: Settings(),
  Notifications: Notification(),
  MenuControl: MenuControl()
} as const;

interface IButton {
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: () => void;
  className?: string;
  typeOf: keyof typeof buttonsMapping;
  'aria-label'?: string;
  icon?: keyof TypeIcons;
}

export default function Button({
  onClick,
  onMouseEnter,
  children,
  className,
  'aria-label': ariaLabel,
  typeOf,
  icon
}: IButton) {
  const { style, DefaultChildren } = buttonsMapping[typeOf];
  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${style} ${className}`}
      aria-label={ariaLabel}
    >
      <DefaultChildren icon={icon} />
      {children}
    </button>
  );
}

function InteractiveLogo(): IButtonsType {
  const className = `group flex cursor-pointer rounded-full absolute p-xs w-16 h-16 right-[-7rem] top-0 z-[51] border-secondary-default dark:border-secondary-dark
  [&>img]:opacity-50 transition-slow`;
  const DefaultChildren = () => (
    <>
      <Img
        size={24}
        image="logo"
        className="absolute w-6 transition-slow group-hover:opacity-100"
      ></Img>
      <Img
        size={26}
        image="name"
        className="absolute top-5 right-3 transition-slow group-hover:opacity-100"
      ></Img>
      <Img
        size={48}
        image="waves"
        className="absolute bottom-1 transition-slow group-hover:opacity-100"
      ></Img>
    </>
  );
  return {
    style: className,
    DefaultChildren
  };
}

function DarkModeToggle(): IButtonsType {
  const className = 'transition-faster opacity-50 hover:opacity-100';
  const DefaultChildren = () => {
    return (
      <>
        <LightMode className="absolute top-1/2 -translate-y-1/2 opacity-100 transition-slow dark:opacity-0"></LightMode>
        <DarkMode className="absolute top-1/2 -translate-y-1/2 opacity-0 transition-slow dark:opacity-100"></DarkMode>
      </>
    );
  };
  return {
    style: className,
    DefaultChildren
  };
}

function Settings(): IButtonsType {
  const className = 'transition-faster opacity-50 hover:opacity-100';
  const DefaultChildren = () => <Icons icon="Settings" />;
  return {
    style: className,
    DefaultChildren
  };
}

function Notification(): IButtonsType {
  const className = 'transition-faster opacity-50 hover:opacity-100';
  const DefaultChildren = () => (
    <>
      <NotificationsOn className="absolute-y-center opacity-100 transition-slow dark:opacity-0"></NotificationsOn>
      <NotificationsOff className="absolute-y-center opacity-0 transition-slow dark:opacity-100"></NotificationsOff>
    </>
  );
  return {
    style: className,
    DefaultChildren
  };
}

function MenuControl(): IButtonsType {
  const className = 'group btn-menu-control';
  const DefaultChildren = ({ icon }: { icon?: keyof TypeIcons }) => (
    <>
      {icon && <Icons icon={icon} className="min-w-min pr-s"></Icons>}
      <ArrowRight className="absolute-y-center right-0 z-[52] mr-1 transition-faster"></ArrowRight>
    </>
  );
  return {
    style: className,
    DefaultChildren
  };
}

interface IButtonsType {
  style: string;
  DefaultChildren: ({ icon }: { icon?: keyof TypeIcons }) => JSX.Element;
}
