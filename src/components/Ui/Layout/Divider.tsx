import * as Separator from '@radix-ui/react-separator'
import clsx from 'clsx'
import { DividerProps } from 'common/types'

export default function Dinider({
  className = '',
  orientation = 'horizontal',
}: DividerProps) {
  return (
    <Separator.Root
      orientation={orientation}
      data-type="separator"
      className={clsx(
        'bg-white/30',
        `data-orientation-horizontal:my-1 data-orientation-horizontal:h-px data-orientation-horizontal:w-full`,
        'data-orientation-vertical:mx-1 data-orientation-vertical:h-full data-orientation-vertical:w-px',
        `${className}`,
      )}
    />
  )
}
