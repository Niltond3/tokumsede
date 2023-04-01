import Dropdown from './Dropdown';

import { IContent } from 'utils/Types';

interface IMenu {
  content: IContent[];
  styles: string;
}

export default function Menu({ content, styles }: IMenu) {
  return (
    <ul className={`ml-m mt-m w-full transition-fast`}>
      {content.map(({ title, content, icon, href }, index) => (
        <li key={`${title}${index}`}>
          {content && icon && (
            <Dropdown
              content={content}
              icon={icon}
              title={title}
              href={href}
              styles={styles}
            />
          )}
        </li>
      ))}
    </ul>
  );
}
