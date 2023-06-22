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
  triggerClassName?: string;
  contentClassName?: string;
  arrownClassName?: string;
  arrown?: boolean;
  side?: Side;
  sideOffset?: number;
};

export default function DropdownMenu({
  triggerIcon,
  triggerLabel,
  children,
  triggerClassName = '',
  contentClassName = '',
  arrownClassName = '',
  arrown = false,
  side,
  sideOffset
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Root>
      <DropdownMenuPrimitive.Trigger asChild className={triggerClassName}>
        <Button iconL={triggerIcon} aria-label="Customise options">
          {triggerLabel}
        </Button>
      </DropdownMenuPrimitive.Trigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.Content
          sideOffset={sideOffset}
          className={contentClassName}
          side={side}
        >
          <>{children}</>
          {arrown && <DropdownMenuPrimitive.Arrow className={arrownClassName} />}
        </DropdownMenuPrimitive.Content>
      </DropdownMenuPrimitive.Portal>
    </DropdownMenuPrimitive.Root>
  );
}

export function DropdownSub({
  triggerIcon,
  triggerLabel,
  children,
  triggerClassName = '',
  contentClassName = '',
  arrownClassName,
  arrown,
  sideOffset
}: DropdownMenuProps) {
  return (
    <DropdownMenuPrimitive.Sub>
      <DropdownMenuPrimitive.SubTrigger asChild className={triggerClassName}>
        <Button iconL={triggerIcon} aria-label="Customise options">
          {triggerLabel}
        </Button>
      </DropdownMenuPrimitive.SubTrigger>

      <DropdownMenuPrimitive.Portal>
        <DropdownMenuPrimitive.SubContent
          sideOffset={sideOffset}
          alignOffset={-5}
          className={contentClassName}
        >
          <>{children}</>
          {arrown && <DropdownMenuPrimitive.Arrow className={arrownClassName} />}
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
