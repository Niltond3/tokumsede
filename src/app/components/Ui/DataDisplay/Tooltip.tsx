interface ITooltip {
  title: React.ReactNode;
  position: keyof typeof positionStyles;
  close?: boolean;
  noArrow?: boolean;
  className?: string;
}

export default function Tooltip({
  title,
  position,
  close = false,
  noArrow = false,
  className = ''
}: ITooltip) {
  return (
    <div
      className={`${positionStyles[position][close ? 'close' : 'far']} ${[
        'pointer-events-none absolute flex w-max rounded-md bg-lg-accent p-xs text-sm font-medium text-lg-primary-base opacity-0 transition-faster group-hover:opacity-100 dark:bg-dk-accent',
        `${
          !noArrow &&
          "before:absolute before:h-0 before:w-0 before:border-8 before:border-transparent before:content-[''] before:transition-faster "
        } ${className}`
      ].join(' ')} `}
    >
      {title}
    </div>
  );
}

const defaultStyles = {
  xStart: `top-0`,
  xMiddle: ``,
  xEnd: `bottom-0`,
  yStart: `-left-1`,
  yMiddle: 'center-y before:center-y',
  yEnd: '-right-2 before:right-[7%]',
  top: 'bottom-[calc(100%+9px)] before:top-[1.7rem] before:border-t-lg-accent before:dark:border-t-dk-accent',
  bottom:
    'before:top-[-0.94rem] before:border-b-lg-accent before:dark:border-b-dk-accent top-[calc(100%+9px)]',
  right:
    'left-[calc(100%+9px)] before:left-[-0.94rem] before:border-r-lg-accent before:dark:border-r-dk-accent',
  left: 'right-[calc(100%+9px)] before:right-[-0.94rem] before:border-l-lg-accent before:dark:border-l-dk-accent'
};

const { xStart, xMiddle, xEnd, yStart, yMiddle, yEnd, top, bottom, left, right } =
  defaultStyles;

const positionStyles = {
  'right-start': {
    close: `${[xStart, right].join(' ')} left-[95%]`,
    far: `${[xStart, right].join(' ')}`
  },
  right: {
    close: `${[right, xMiddle].join(' ')} left-[95%]`,
    far: `${[right, xMiddle].join(' ')}`
  },
  'right-end': {
    close: `${[right, xEnd].join(' ')} left-[95%]`,
    far: `${[right, xEnd].join(' ')}`
  },
  'left-start': {
    close: `${[left, xStart].join(' ')} left-[95%]`,
    far: `${[left, xStart].join(' ')}`
  },
  left: {
    close: `${[left, xMiddle].join(' ')} left-[95%]`,
    far: `${[left, xMiddle].join(' ')}`
  },
  'left-end': {
    close: `${[left, xEnd].join(' ')} left-[95%]`,
    far: `${[left, xEnd].join(' ')}`
  },
  'top-start': {
    close: `${[top, yStart].join(' ')}`,
    far: `${[top, yStart].join(' ')} `
  },
  top: {
    close: `${[top, yMiddle].join(' ')}`,
    far: `${[top, yMiddle].join(' ')}`
  },
  'top-end': {
    close: `${[top, yEnd].join(' ')}`,
    far: `${[top, yEnd].join(' ')}`
  },
  'bottom-start': {
    close: `${[bottom, yStart].join(' ')} top-[90%]`,
    far: `${[bottom, yStart].join(' ')}`
  },
  bottom: {
    close: `${[yMiddle, bottom].join(' ')} top-[90%]`,
    far: `${[yMiddle, bottom].join(' ')} `
  },
  'bottom-end': {
    close: `${[bottom, yEnd].join(' ')} top-[90%]`,
    far: `${[bottom, yEnd].join(' ')}`
  }
};
