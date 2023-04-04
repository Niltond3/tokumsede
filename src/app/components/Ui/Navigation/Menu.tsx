import Dropdown from './Dropdown';

import { IContent } from 'utils/Types';

interface IMenu {
  content: IContent[];
  styles: string;
}

export default function Menu({ content, styles }: IMenu) {
  return (
    <ul className={`ml-m mt-m w-full transition-fast`}>
      {content.map(({ ...props }, index) => (
        <li key={`left-menu-${index}`}>
          {props.content && <Dropdown {...props} styles={styles} />}
        </li>
      ))}
    </ul>
  );
}
