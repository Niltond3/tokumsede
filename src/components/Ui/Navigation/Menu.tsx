import React, { ReactNode } from 'react';

import Dropdown from './Dropdown';

import { IContent } from 'utils/Types';

export default function Menu({ content }: IMenu) {
  //[&>ul]:pointer-events-none [&>ul]:hidden [&>ul]:max-h-0 [&>ul]:opacity-0
  return (
    <ul className={`ml-m mt-m w-full flex-col transition-fast`}>
      {content.map(({ title, content, icon }, index) => (
        <li key={`${title}${index}`}>
          {content && icon && (
            <Dropdown content={content} icon={icon} title={title}></Dropdown>
          )}
        </li>
      ))}
    </ul>
  );
  // return renderSubMenu({ content, toggle: handleToggle, visibility });
}

interface IMenu {
  type: 'toast' | 'accordion';
  className?: string;
  children?: ReactNode;
  content: IContent[];
}
// function renderSubMenu({ content, className, toggle, visibility }: IRenderSubMenu) {
//   return (
//     <ul
//       className={`ml-m mt-m flex-col transition-fast
//       peer-focus:pointer-events-auto peer-focus:max-h-96 peer-focus:opacity-100
//       ${visibility && 'pointer-events-auto max-h-96 opacity-100'}
//       `}
//     >
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
