import Dropdown from './Dropdown';

import { IContent } from 'utils/Types';

interface IMenu {
  content: IContent[];
  shrink: boolean;
}

export default function Menu({ content, shrink }: IMenu) {
  //[&>ul]:pointer-events-none [&>ul]:hidden [&>ul]:max-h-0 [&>ul]:opacity-0
  return (
    <ul className={`ml-m mt-m w-full flex-col transition-fast`}>
      {content.map(({ title, content, icon, href }, index) => (
        <li key={`${title}${index}`}>
          {content && icon && (
            <Dropdown
              content={content}
              icon={icon}
              title={title}
              href={href}
              shrink={shrink}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
