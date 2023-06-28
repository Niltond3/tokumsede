import React, { createContext, useContext, useEffect, useState } from 'react'

import * as icons from 'components/Ui/DataDisplay/Icons'
import Icons from 'components/Ui/DataDisplay/Icons'

import * as DropdownPrimitive from '@radix-ui/react-dropdown-menu'
import * as types from 'common/types'
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

const DropdownContext = createContext<{
  open: boolean
  setOpen: React.Dispatch<React.SetStateAction<boolean>>
}>({
  open: false,
  setOpen: () => {},
})

export default function Dropdown(props: types.DropdownProps) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownContext.Provider value={{ open, setOpen }}>
      <DropdownPrimitive.Root open={open} onOpenChange={setOpen}>
        <DropdownButton className={props.buttonStyles} {...props}>
          {props.buttonLabel}
        </DropdownButton>
        <DropdownMenu {...props}>{props.children}</DropdownMenu>
      </DropdownPrimitive.Root>
    </DropdownContext.Provider>
  )
}

function DropdownButton({
  buttonIcon = 'Menu',
  children,
  className = '',
  openIndicator = false,
}: types.DropdownButtonProps) {
  return (
    <DropdownPrimitive.Trigger
      aria-label="Customise options"
      className={`flex items-center gap-0.5 ${className} group`}
    >
      <>{children}</>
      <Icons icon={buttonIcon} />
      {openIndicator && (
        <icons.Arrow className="transition-faster group-data-state-open:rotate-90" />
      )}
    </DropdownPrimitive.Trigger>
  )
}

const DropdownMenuContext = createContext({
  closeMenu: () => {},
})

function DropdownMenu({
  children,
  arrown,
  arrownStyles,
  ...props
}: types.DropdownMenuProps) {
  const { open, setOpen } = useContext(DropdownContext)
  const controls = useAnimationControls()

  async function closeMenu() {
    await controls.start('closed')
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      controls.start('open')
    }
  }, [controls, open])

  return (
    <DropdownMenuContext.Provider value={{ closeMenu }}>
      <AnimatePresence>
        {open && (
          <DropdownPrimitive.Portal forceMount>
            <DropdownPrimitive.Content
              className={props.contentStyles}
              {...props}
              sticky="always"
              asChild
            >
              <motion.div
                initial="closed"
                animate={controls}
                exit="closed"
                variants={{
                  open: {
                    opacity: 1,
                    transition: { ease: 'easeOut', duration: 0.1 },
                  },
                  closed: {
                    opacity: 0,
                    transition: { ease: 'easeIn', duration: 0.2 },
                  },
                }}
              >
                <>{children}</>
                {arrown && <DropdownPrimitive.Arrow className={arrownStyles} />}
              </motion.div>
            </DropdownPrimitive.Content>
          </DropdownPrimitive.Portal>
        )}
      </AnimatePresence>
    </DropdownMenuContext.Provider>
  )
}

function DropdownSub({
  buttonIcon,
  buttonLabel,
  children,
  buttonStyles = '',
  contentStyles = '',
  arrownStyles,
  arrown,
  sideOffset = 0,
  alignOffset = 0,
}: types.DropdownProps) {
  return (
    <DropdownPrimitive.Sub>
      <DropdownPrimitive.SubTrigger>
        <div className={buttonStyles}>
          {buttonLabel}
          <Icons icon={buttonIcon} />
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

function DropdownRadioGroup({
  children,
  className,
  onValueChange,
  value,
}: types.DropdownRadioGroupProps) {
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

function DropdownRadioItem({
  children,
  className,
  value,
  onSelect,
}: types.DropdownRadioItemProps) {
  return (
    <DropdownPrimitive.RadioItem
      className={`${className} relative`}
      value={value}
      onSelect={onSelect}
    >
      <DropdownPrimitive.ItemIndicator className="absolute left-1 center-x">
        <icons.Check />
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
