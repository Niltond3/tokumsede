import {
  DarkMode,
  LightMode,
  NotificationsOff,
  NotificationsOn,
  SortDown,
  SortUp
} from '../DataDisplay/Icons';

export default function Toggle({
  'aria-label': aria,
  children,
  className,
  id,
  typeOf
}: IToggle) {
  const styles = variantStyles[typeOf];
  const DefaultChildren = defaultChildren[typeOf];

  return (
    <>
      <input type="checkbox" id={id} aria-label={aria} className="peer hidden"></input>
      <label
        htmlFor={id}
        className={[
          `${className} group relative h-auto w-4 cursor-pointer`,
          '[&>*]:absolute [&>*]:transition-faster [&>svg]:center-x',
          '[&>svg:nth-child(2)]:opacity-0',
          'peer-checked:[&>svg:nth-child(1)]:opacity-0 peer-checked:[&>svg:nth-child(2)]:opacity-100'
        ].join(' ')}
      >
        <DefaultChildren />
        {children}
      </label>
    </>
  );
}

const commonStyles = [
  'group relative transition-faster opacity-50 hover:opacity-100 relative w-4 h-full',
  '[&>svg]:absolute [&>svg]:left-1/2  [&>svg]:-translate-y-1/2 [&>svg]:top-1/2 [&>svg]:-translate-x-1/2'
].join(' ');

const variantStyles = {
  DarkModeToggle: `${commonStyles} `,
  Notifications: `${commonStyles}`,
  Sort: `${commonStyles}`
};

const defaultChildren = {
  DarkModeToggle: () => (
    <>
      <LightMode className="opacity-100 transition-slow dark:opacity-0" />
      <DarkMode className="opacity-0 transition-slow dark:opacity-100" />
    </>
  ),
  Notifications: () => (
    <>
      <NotificationsOn className="absolute-y-center" />
      <NotificationsOff className="absolute-y-center" />
    </>
  ),
  Sort: () => (
    <>
      <SortDown />
      <SortUp />
    </>
  )
};

interface IToggle {
  id: string;
  className?: string;
  children?: React.ReactNode;
  typeOf: keyof typeof variantStyles & keyof typeof defaultChildren;
  'aria-label'?: string;
}
