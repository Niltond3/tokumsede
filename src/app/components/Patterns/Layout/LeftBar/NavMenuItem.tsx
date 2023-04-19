import Icons from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Checkbox from 'app/components/Ui/Inputs/Checkbox';
import Link from 'app/components/Ui/Navigation/Link';

import { IContent, TypeIcons } from 'utils/Types';

type NavMenuItemType = {
  content?: IContent[];
  icon: keyof TypeIcons;
  title: string;
  index: number;
};

const NavMenuItem = ({ content = [], icon, title, index }: NavMenuItemType) => (
  <li>
    <div className={` flex flex-col pl-s transition-fast`}>
      <Checkbox type="NavDropdownControl" icon={icon} title={title} />
      <ul
        className={[
          'invisible my-1 ml-4 flex max-h-0 flex-col flex-nowrap overflow-hidden opacity-0 transition-faster',
          'peer-checked:visible peer-checked:max-h-96 peer-checked:opacity-100',
          'peer-checked:[&>li>a>p]:animate-intro-menu',
          'peer-checked:[&>*:nth-child(1)>a>p]:animation-delay-75',
          'peer-checked:[&>*:nth-child(2)>a>p]:animation-delay-100',
          'peer-checked:[&>*:nth-child(3)>a>p]:animation-delay-150',
          'peer-checked:[&>*:nth-child(4)>a>p]:animation-delay-200',
          'peer-checked:[&>*:nth-child(5)>a>p]:animation-delay-300',
          'peer-checked:[&>*:nth-child(6)>a>p]:animation-delay-500'
        ].join(' ')}
      >
        {content.map(({ href, icon, title }, itemIndex) => (
          <li
            key={`nav-item-${index}.${itemIndex}`}
            className={`border-l-2 border-l-lg-primary-base/30 transition-faster hover:border-l-lg-primary-base/100`}
          >
            <Link
              href={href}
              className={`group flex items-center justify-start gap-2 p-s fill-mode-forwards transition-faster`}
            >
              <Icons icon={icon} className="min-w-min" />
              <p
                className={`hidden overflow-hidden whitespace-nowrap text-xs opacity-0 transition-fast @[161px]:flex`}
              >
                {title}
              </p>
              <Tooltip close title={title} position="right" className="@[70px]:hidden" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  </li>
);

export default NavMenuItem;
