interface ITooltip {
  title: string;
  position: keyof typeof positionStyles;
  distace?: 'close' | 'far';
}

export default function Tooltip({ title, position, distace = 'far' }: ITooltip) {
  // const posStyle = stylePosition[position](distace);

  return (
    <div //opacity-0 group-hover:opacity-100
      className={`${positionStyles[position][distace]} ${[
        'pointer-events-none absolute flex w-max rounded-md bg-lg-accent p-xs text-sm font-medium text-lg-primary-base transition-faster dark:bg-dk-accent',
        "before:absolute before:h-0 before:w-0 before:border-8 before:border-transparent before:content-[''] before:transition-faster "
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
  yStart: `left-0`,
  yMiddle: 'center-y before:center-y',
  yEnd: 'right-0 before:right-[7%]',
  top: 'bottom-[calc(100%+9px)] before:top-[1.8rem] before:border-t-lg-accent before:dark:border-t-dk-accent',
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
    close: `${[xStart, right].join(' ')}`,
    far: `${[xStart, right].join(' ')}`
  },
  right: {
    close: `${[right, xMiddle].join(' ')}`,
    far: `${[right, xMiddle].join(' ')}`
  },
  'right-end': {
    close: `${[right, xEnd].join(' ')}`,
    far: `${[right, xEnd].join(' ')}`
  },
  'left-start': {
    close: `${[left, xStart].join(' ')}`,
    far: `${[left, xStart].join(' ')}`
  },
  left: {
    close: `${[left, xMiddle].join(' ')}`,
    far: `${[left, xMiddle].join(' ')}`
  },
  'left-end': {
    close: `${[left, xEnd].join(' ')}`,
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
    close: `${[bottom, yStart].join(' ')}`,
    far: `${[bottom, yStart].join(' ')}`
  },
  bottom: {
    close: `${[yMiddle, bottom].join(' ')} `,
    far: `${[yMiddle, bottom].join(' ')} `
  },
  'bottom-end': {
    close: `${[bottom, yEnd].join(' ')} `,
    far: `${[bottom, yEnd].join(' ')}`
  }
};
