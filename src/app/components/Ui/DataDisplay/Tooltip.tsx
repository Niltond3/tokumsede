interface ITooltip {
  title: string;
  position: keyof typeof positionStyles;
  distace: 'close' | 'far';
}

export default function Tooltip({ title, position, distace }: ITooltip) {
  // const posStyle = stylePosition[position](distace);

  return (
    <div //opacity-0 group-hover:opacity-100
      className={`${positionStyles[position][distace]} pointer-events-none absolute flex w-max rounded-md bg-lg-accent p-xs text-sm font-medium  drop-shadow-md transition-faster dark:bg-dk-accent`}
    >
      {title}
    </div>
  );
}

const defaultStyles =
  "before:drop-shadow-md before:transition-faster before:absolute before:h-0 before:w-0 before:border-8 before:border-transparent before:content-['']";

const commonStyles = {
  x: `${defaultStyles} before:top-1/2 before:-translate-y-1/2`,
  y: `${defaultStyles}`,
  right:
    'before:-left-[0.95rem] before:border-r-lg-accent before:dark:border-r-dk-accent',
  bottom: 'before:top-[-0.95rem] before:border-b-lg-accent before:dark:border-b-dk-accent'
};
const { x, y, right, bottom } = commonStyles;

const positionStyles = {
  'top-start': {
    close: '',
    '': `${y}`,
    far: ''
  },
  top: {
    close: '',
    '': `${y}`,
    far: ''
  },
  'top-end': {
    close: '',
    '': `${y}`,
    far: ''
  },
  'right-start': {
    close: '',
    '': `${x} ${right}`,
    far: ''
  },
  right: {
    close: `${x} ${right} left-7`,
    '': `${x} ${right}`,
    far: `${x} ${right} left-14`
  },
  'right-end': {
    close: `${x} ${right}`,
    '': `${x} ${right}`,
    far: `${x} ${right}`
  }, //
  'bottom-start': {
    close: '',
    '': `${y} ${bottom}`,
    far: ''
  },
  bottom: {
    close: '',
    '': `${y} ${bottom}`,
    far: ''
  },
  'bottom-end': {
    close: '',
    '': `${y} ${bottom}`,
    far: `${y} ${bottom}`,
    'left-start': {
      close: '',
      '': `${x}`,
      far: ''
    },
    left: {
      close: '',
      '': `${x}`,
      far: ''
    },
    'left-end': {
      close: '',
      '': `${x}`,
      far: ''
    }
  }
};
