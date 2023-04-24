import Tooltip from 'app/components/Ui/DataDisplay/_Tooltip';
import Icons from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';
import Link from 'app/components/Ui/Navigation/Link';

import { IContent } from 'utils/Types';

type DropdownControllerProps = Omit<IContent, 'href' | 'onClick'>;

type DropdownMenuProps = DropdownControllerProps & {
  index: number;
};

const DropdownMenu = ({ content = [], icon, title, index }: DropdownMenuProps) => (
  <li>
    <div className={` flex flex-col pl-s transition-fast`}>
      <DropdownController icon={icon} title={title} />
      <ul
        className={[
          'invisible my-1 ml-4 flex max-h-0 flex-col flex-nowrap overflow-hidden opacity-0 transition-faster',
          'peer-data-[state=on]:visible peer-data-[state=on]:max-h-96 peer-data-[state=on]:opacity-100',
          'peer-data-[state=on]:[&>li>a>p]:animate-intro-menu',
          'peer-data-[state=on]:[&>*:nth-child(1)>a>p]:animation-delay-75',
          'peer-data-[state=on]:[&>*:nth-child(2)>a>p]:animation-delay-100',
          'peer-data-[state=on]:[&>*:nth-child(3)>a>p]:animation-delay-150',
          'peer-data-[state=on]:[&>*:nth-child(4)>a>p]:animation-delay-200',
          'peer-data-[state=on]:[&>*:nth-child(5)>a>p]:animation-delay-300',
          'peer-data-[state=on]:[&>*:nth-child(6)>a>p]:animation-delay-500'
        ].join(' ')}
      >
        {content.map((value, itemIndex) => (
          <RenderLi key={`nav-item-${index}.${itemIndex}`} {...value} />
        ))}
      </ul>
    </div>
  </li>
);

const DropdownController = ({ title, icon }: DropdownControllerProps) => (
  <Toggle type="dropdown">
    <Button>
      <Tooltip content={title} side="right">
        <span className="flex h-full flex-1 items-center @[70px]:gap-2.5 child:transition-faster">
          <Icons icon={icon} className="min-w-min" />
          <p
            className={`invisible flex w-0 items-start text-sm font-medium opacity-0 @[160px]:w-min @[161px]:visible @[161px]:opacity-100`}
          >
            {title}
          </p>
          <Icons
            icon="Arrow"
            className="absolute right-1 min-w-min group-data-[state=on]:rotate-90 @[161px]:right-2.5"
          />
        </span>
      </Tooltip>
    </Button>
  </Toggle>
);

const RenderLi = ({ href, icon, title }: IContent) => {
  return (
    <li
      className={`border-l-2 border-l-lg-primary-base/30 transition-faster hover:border-l-lg-primary-base/100`}
    >
      <Tooltip side="right" content={title}>
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
        </Link>
      </Tooltip>
    </li>
  );
};

export default DropdownMenu;