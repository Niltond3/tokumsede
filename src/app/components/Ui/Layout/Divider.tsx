import * as Separator from '@radix-ui/react-separator';
import clsx from 'clsx';

type SeparatorProps = {
  className?: string;
  orientation?: 'horizontal' | 'vertical';
};

// eslint-disable-next-line import/no-anonymous-default-export
export default function ({ className = '', orientation = 'horizontal' }: SeparatorProps) {
  return (
    <Separator.Root
      orientation={orientation}
      className={clsx(
        'bg-white',
        `data-orientation-horizontal:h-px data-orientation-horizontal:w-full`,
        'data-orientation-vertical:h-full data-orientation-vertical:w-px',
        `${className}`
      )}
    />
  );
}
