import Icons, {
  LightMode,
  DarkMode,
  NotificationsOn,
  NotificationsOff,
  Arrow,
  Add
} from '../DataDisplay/Icons';
import Img from '../DataDisplay/Image';

import { TypeIcons } from 'utils/Types';

export default function Button({
  onClick,
  onMouseEnter,
  children,
  className = '',
  'aria-label': ariaLabel,
  typeOf,
  icon,
  title
}: IButton) {
  const styles = variantStyles[typeOf];
  const DefaultChildren = defaultChildren[typeOf];

  return (
    <button
      onClick={onClick}
      onMouseEnter={onMouseEnter}
      className={`${styles} ${className}`}
      aria-label={ariaLabel}
    >
      <DefaultChildren icon={icon} title={title} />
      {children}
    </button>
  );
}
const commonStyles = [
  'group relative transition-faster opacity-50 hover:opacity-100 relative w-4 h-full mb-2',
  '[&>svg]:absolute [&>svg]:left-1/2  [&>svg]:-translate-y-1/2 [&>svg]:top-1/2 [&>svg]:-translate-x-1/2'
].join(' ');

const variantStyles = {
  InteractiveLogo: [
    'group flex cursor-pointer rounded-full absolute p-xs w-16 h-16 right-[-7rem] top-0 z-[51] border-secondary-default dark:border-secondary-dark transition-slow',
    '[&>img]:opacity-100'
  ].join(' '),
  DarkModeToggle: `${commonStyles}`,
  Settings: `${commonStyles}`,
  Notifications: `${commonStyles}`,
  MenuControl: 'group btn-menu-control -mr-0.5',
  Add: 'opacity-30 hover:opacity-100 transition-faster'
};

const defaultChildren = {
  InteractiveLogo: () => (
    <>
      <Img
        size={24}
        image="logo"
        className="absolute w-6 transition-slow group-hover:opacity-100"
      />
      <Img
        size={26}
        image="name"
        className="absolute top-5 right-3 transition-slow group-hover:opacity-100"
      />
      <Img
        size={48}
        image="waves"
        className="absolute bottom-1 transition-slow group-hover:opacity-100"
      />
    </>
  ),
  DarkModeToggle: () => (
    <>
      <LightMode className="opacity-100 dark:opacity-0" />
      <DarkMode className="opacity-0 dark:opacity-100" />
    </>
  ),
  Settings: () => <Icons icon="Settings" />,
  Notifications: () => (
    <>
      <NotificationsOn className="absolute-y-center opacity-100 transition-slow dark:opacity-0" />
      <NotificationsOff className="absolute-y-center opacity-0 transition-slow dark:opacity-100" />
    </>
  ),
  MenuControl: ({ icon, title }: { icon?: keyof TypeIcons; title?: string }) => (
    <>
      {icon && <Icons icon={icon} className="min-w-min pr-s" />}
      <p>{title}</p>
      <Arrow className="absolute-y-center right-0 z-[52] mr-1 transition-faster" />
    </>
  ),
  Add: ({ title }: { title?: string }) => (
    <div className="flex items-center text-sm font-medium">
      <Add className="h-auto w-5" />{' '}
      <span className="ml-s whitespace-nowrap">{title}</span>
    </div>
  )
};

interface IButton {
  title?: string;
  icon?: keyof TypeIcons;
  className?: string;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  onMouseEnter?: () => void;
  typeOf: keyof typeof variantStyles & keyof typeof defaultChildren;
  'aria-label'?: string;
}
