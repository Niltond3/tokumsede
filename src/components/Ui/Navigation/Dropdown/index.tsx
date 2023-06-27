import { ReactNode } from 'react'

import Icons from 'components/Ui/DataDisplay/Icons'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import { SIDE_OPTIONS } from '@radix-ui/react-popper'
import * as types from 'common/types'

// export const SIDE_OPTIONS = ['top', 'right', 'bottom', 'left'];

type Side = (typeof SIDE_OPTIONS)[number]
type DropdownContentProps = {
  contentStyles?: string
  arrownStyles?: string
  arrown?: boolean
  side?: Side
  sideOffset?: number
  alignOffset?: number
  children: ReactNode
}
type DropdownProps = DropdownContentProps & {
  triggerIcon?: types.IconsKey
  triggerLabel?: ReactNode
  triggerStyles?: string
  portal?: boolean
}

export default function Dropdown({
  triggerIcon,
  triggerLabel,
  triggerStyles = '',
  portal = true,
  children,
  contentStyles = '',
  arrownStyles = '',
  arrown = false,
  side,
  sideOffset = 0,
  alignOffset = 0,
}: DropdownProps) {
  return (
    <DropdownPrimitive.Root>
      <DropdownButton icon={triggerIcon} className={triggerStyles}>
        {triggerLabel}
      </DropdownButton>

      {portal ? (
        <DropdownPrimitive.Portal>
          <DropdownContent
            arrown={arrown}
            sideOffset={sideOffset}
            alignOffset={alignOffset}
            contentStyles={contentStyles}
            side={side}
            arrownStyles={arrownStyles}
          >
            {children}
          </DropdownContent>
        </DropdownPrimitive.Portal>
      ) : (
        <DropdownContent
          arrown={arrown}
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          contentStyles={contentStyles}
          side={side}
          arrownStyles={arrownStyles}
        >
          {children}
        </DropdownContent>
      )}
    </DropdownPrimitive.Root>
  )
}

function DropdownContent({
  children,
  contentStyles,
  arrownStyles,
  arrown,
  side,
  sideOffset,
  alignOffset,
}: DropdownContentProps) {
  return (
    <DropdownPrimitive.Content
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={contentStyles}
      side={side}
      sticky="always"
    >
      <>{children}</>
      {arrown && <DropdownPrimitive.Arrow className={arrownStyles} />}
    </DropdownPrimitive.Content>
  )
}

type DropdownButtonProps = types.FragmentProps & {
  icon?: types.IconsKey
}

function DropdownButton({ children, className, icon }: DropdownButtonProps) {
  return (
    <DropdownPrimitive.Trigger aria-label="Customise options" className={className}>
      <>{children}</>
      <Icons icon={icon} />
    </DropdownPrimitive.Trigger>
  )
}

function DropdownSub({
  triggerIcon,
  triggerLabel,
  children,
  triggerStyles = '',
  contentStyles = '',
  arrownStyles,
  arrown,
  sideOffset = 0,
  alignOffset = 0,
}: DropdownProps) {
  return (
    <DropdownPrimitive.Sub>
      <DropdownPrimitive.SubTrigger>
        <div className={triggerStyles}>
          {triggerLabel}
          <Icons icon={triggerIcon} />
        </div>
      </DropdownPrimitive.SubTrigger>

      <DropdownPrimitive.Portal>
        <DropdownPrimitive.SubContent
          sideOffset={sideOffset}
          alignOffset={alignOffset}
          className={contentStyles}
        >
          <>{children}</>
          {arrown && <DropdownPrimitive.Arrow className={arrownStyles} />}
        </DropdownPrimitive.SubContent>
      </DropdownPrimitive.Portal>
    </DropdownPrimitive.Sub>
  )
}

function DropdownSeparator() {
  return (
    <DropdownPrimitive.Separator className="m-0.5 h-px rounded bg-lg-primary/30 dark:bg-lg-primary/30" />
  )
}

function DropdownLabel({ children, className }: types.FragmentProps) {
  return (
    <DropdownPrimitive.Label className={`text-xs opacity-50 ${className}`}>
      {children}
    </DropdownPrimitive.Label>
  )
}

type DropdownRadioGroupProps = types.FragmentProps & {
  onValueChange?: (value: string) => void
  value?: string
}

function DropdownRadioGroup({
  children,
  className,
  onValueChange,
  value,
}: DropdownRadioGroupProps) {
  return (
    <DropdownPrimitive.RadioGroup
      className={`${className}`}
      onValueChange={onValueChange}
      value={value}
    >
      <>{children}</>
    </DropdownPrimitive.RadioGroup>
  )
}

type DropdownRadioItemProps = types.FragmentProps & {
  value: string
  onSelect?: (event: Event) => void
}

function DropdownRadioItem({
  children,
  className,
  value,
  onSelect,
}: DropdownRadioItemProps) {
  return (
    <DropdownPrimitive.RadioItem
      className={`${className} relative`}
      value={value}
      onSelect={onSelect}
    >
      <DropdownPrimitive.ItemIndicator className="absolute left-1 center-x">
        <Icons icon="Check" />
      </DropdownPrimitive.ItemIndicator>
      <>{children}</>
    </DropdownPrimitive.RadioItem>
  )
}

const DropdownItem = DropdownPrimitive.Item
const DropdownGroup = DropdownPrimitive.Group
const DropdownArrow = DropdownPrimitive.Arrow

Dropdown.Sub = DropdownSub
Dropdown.Label = DropdownLabel
Dropdown.Item = DropdownItem
Dropdown.Group = DropdownGroup
Dropdown.Separator = DropdownSeparator
Dropdown.Arrow = DropdownArrow
Dropdown.RadioGroup = DropdownRadioGroup
Dropdown.RadioItem = DropdownRadioItem
