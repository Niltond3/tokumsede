import DropdownMenu from './DropdownMenu';
import WrapperSettings from './WrapperButtonsSettings';

import { NAVIGATION_LINKS } from 'utils/Constants';

export default function LeftBar() {
  return (
    <aside
      className={[
        'group/aside -ml-[9.9rem] flex h-full w-40 flex-col bg-lg-primary text-lg-primary-base @container transition-slow',
        'hover:ml-0 hover:w-16 dark:bg-dk-primary',
        'has-open:ml-0 has-open:w-44 has-open:bg-lg-secondary has-open:dark:bg-dk-secondary',
        'child:transition-slow '
      ].join(' ')}
    >
      <WrapperSettings />
      <nav className="relative -top-16">
        <ul className={`w-full pt-4 transition-fast`}>
          {NAVIGATION_LINKS.map(({ content, icon, title }, menuIndex) => (
            <DropdownMenu
              key={`nav-menu-${menuIndex}`}
              icon={icon}
              index={menuIndex}
              title={title}
              content={content}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
}
