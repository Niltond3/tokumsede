import Icons from 'components/Ui/DataDisplay/Icons';
import Button from 'components/Ui/Inputs/Button';

import * as DropdownMenuPrimitive from '@radix-ui/react-dropdown-menu';
import { SIDE_OPTIONS } from '@radix-ui/react-popper';
import * as types from 'common/types';

// export const SIDE_OPTIONS = ['top', 'right', 'bottom', 'left'];

type Side = (typeof SIDE_OPTIONS)[number];
type DropdownMenuProps = {
  triggerIcon?: types.IconsKey;
  triggerLabel?: React.ReactNode;
  children: React.ReactNode;
  triggerStyles?: string;
  contentStyles?: string;
  arrownStyles?: string;
  arrown?: boolean;
  side?: Side;
  sideOffset?: number;
  alignOffset?: number;
};

export default function DropdownMenu({
  triggerIcon,
  triggerLabel,
  children,
  triggerStyles = '',
  contentStyles = '',
  arrownStyles = '',
  arrown = false,
  side,
  sideOffset = 0,
  alignOffset = 0
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild>
        <Button
          typeOf="noStyle"
          iconR={triggerIcon}
          aria-label="Customise options"
          className={triggerStyles}
        >
          {triggerLabel}
        </Button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={contentStyles}
          side={side}
        >
          <>{children}</>
          {arrown && <DropdownMenuPrimitive.Arrow className={arrownStyles} />}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export function DropdownSub({
  triggerIcon,
  triggerLabel,
  children,
  triggerStyles = '',
  contentStyles = '',
  arrownStyles,
  arrown,
  sideOffset = 0,
  alignOffset = 0
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Sub>
      <DropdownMenuPrimitive.SubTrigger>
        <div className={triggerStyles}>
          {triggerLabel}
          <Icons icon={triggerIcon} />
        </div>
      </DropdownMenuPrimitive.SubTrigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={contentStyles}
        >
          <>{children}</>
          {arrown && <DropdownMenuPrimitive.Arrow className={arrownStyles} />}
        </DropdownMenuPrimitive.SubContent>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Sub>
  );
}

const DropdownLabel = DropdownMenuPrimitive.Label;
const DropdownItem = DropdownMenuPrimitive.Item;
const DropdownGroup = DropdownMenuPrimitive.Group;
const DropdownSeparator = DropdownMenuPrimitive.Separator;
const DropdownArrow = DropdownMenuPrimitive.Arrow;

export { DropdownLabel, DropdownItem, DropdownGroup, DropdownSeparator, DropdownArrow };
