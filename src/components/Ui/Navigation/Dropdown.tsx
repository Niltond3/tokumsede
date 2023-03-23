import React, { useState } from 'react';

import Icons from '../DataDisplay/Icons';
import Button from '../Inputs/Button';
import Link from './Link';

import { IContent, Icon } from 'utils/Types';

export default function Dropdown({ content, icon, title }: IDropDown) {
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setShowDropdown(!showDropdown);

  return (
    <div
      className="relative flex-col p-xs pl-s text-secondary-contrast-df transition-fast
      "
    >
      <Button
        className={`
        ${
          showDropdown &&
          `!bg-primary-default/100 !text-primary-contrast-df transition-none
          before:opacity-100 before:transition-none after:opacity-100 after:transition-none
          dark:bg-primary-dark/100 dark:text-primary-contrast-dk
          [&>div]:!bg-primary-default/100 [&>svg:nth-child(3)]:rotate-90
          `
        }
      `}
        onClick={handleClick}
        typeOf="MenuControl"
        icon={icon}
      >
        {title}
      </Button>
      <ul className={`max-h-0 ${showDropdown && 'max-h-96'} transition-faster`}>
        {content.map(({ title, href, onClick, icon }, index) => (
          <li key={`${title}${index}`}>
            {href && (
              <Link
                href={href}
                onClick={onClick}
                //translate-x-[50px] animate-[0.4s_ease-in-out_0.1s_intro-menu] animate-fill-mode-forwards animate-delay-20
                className={`opacity-0
                  ${showDropdown && 'translate-x-[50px] opacity-10'}
                `}
              >
                {icon && Icons[icon]({})}
                {title}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

// function renderSubMenu({ content, className, toggle, visibility }: IRenderSubMenu) {
//   return (
//     <ul>
//       {content.map(({ title, href, onClick, content, icon }, index) => (
//         <li key={`${title}${index}`}>
//           <div
//             className={`${className} relative flex flex-col p-xs pl-s text-secondary-contrast-df
//               transition-fast
//               [&>ul]:pointer-events-none [&>ul]:max-h-0 [&>ul]:items-start [&>ul]:opacity-0`}
//           >
//             {href ? (
//               <Link href={href} onClick={onClick}>
//                 {icon && Icons[icon]({})}
//                 {title}
//               </Link>
//             ) : (
//               <Button
//                 className={`peer`}
//                 onClick={toggle}
//                 typeOf="MenuControl"
//                 icon={icon}
//               >
//                 {title}
//               </Button>
//             )}
//             {content &&
//               renderSubMenu({
//                 content,
//                 className: `border-l-2 border-secondary-default cursor-pointer
//                 hover:border-secondary-contrast-df hover:bg-secondary-default hover:dark:bg-secondary-dark opacity-50 hover:text-secondary-contrast-df hover:opacity-100
//                 `,
//                 toggle,
//                 visibility
//               })}
//           </div>
//         </li>
//       ))}
//     </ul>
//   );
// }

// interface IRenderSubMenu {
//   content: IContent[];
//   className?: string;
//   toggle: () => void;
//   visibility: boolean;
// }

interface IDropDown {
  content: IContent[];
  icon: keyof Icon;
  title: string;
}
