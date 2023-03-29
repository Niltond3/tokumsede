interface ITooltip {
  title: string;
  position: keyof typeof stylePosition;
  distace: keyof typeof styleDistance;
}

export default function Tooltip({ title, position, distace }: ITooltip) {
  const posStyle = stylePosition[position](distace);

  return (
    <div
      className={`pointer-events-none absolute flex w-max rounded-md bg-tertiary-default p-xs text-sm font-medium text-primary-default opacity-0 drop-shadow-md transition-faster group-hover:opacity-100 dark:bg-secondary-default ${positionStyles[position]}`}
    >
      {title}
    </div>
  );
}

const styleDistance = {
  close: {
    top: '',
    right: 'left-12',
    bottom: '',
    left: ''
  },
  closer: {
    top: '',
    right: 'left-7',
    bottom: '',
    left: ''
  }
};

const defaultStyles =
  "before:drop-shadow-md before:transition-faster before:absolute before:h-0 before:w-0 before:border-8 before:border-transparent before:content-['']";

const commonStyles = {
  x: `${defaultStyles} before:top-1/2 before:-translate-y-1/2`,
  y: `${defaultStyles}`,
  right:
    'before:-left-[0.95rem] before:border-r-tertiary-default before:dark:border-r-secondary-default',
  bottom:
    'before:top-[-0.95rem] before:border-b-tertiary-default before:dark:border-b-secondary-default'
};
const { x, y, right, bottom } = commonStyles;

const positionStyles = {
  'top-start': `${y}`,
  top: `${y}`,
  'top-end': `${y}`,
  'right-start': `${x} ${right}`,
  right: `${x} ${right}`,
  'right-end': `${x} ${right}`,
  'bottom-start': `${y} ${bottom}`,
  bottom: `${y} ${bottom}`,
  'bottom-end': `-bottom-4 -right-24 ${y} ${bottom}`,
  'left-start': `${x}`,
  left: `${x}`,
  'left-end': `${x}`
};

const stylePosition = {
  'top-start': () => {
    const className = '';
    return className;
  },
  top: () => {
    const className = '';
    return className;
  },
  'top-end': () => {
    const className = '';
    return className;
  },
  'right-start': () => {
    const className = '';
    return className;
  },
  right: (distance: keyof typeof styleDistance) => {
    const className = `${styleDistance[distance].right} before:drop-shadow-md before:transition-faster before:top-1/2 before:-translate-y-1/2 before:absolute before:-left-[0.95rem] before:h-0 before:w-0 before:border-8 before:border-transparent before:border-r-tertiary-default before:dark:border-r-tertiary-dark before:content-['']`;
    return className;
  },
  'right-end': () => {
    const className = '';
    return className;
  },
  'bottom-start': () => {
    const className = '';
    return className;
  },
  bottom: () => {
    const className = '';
    return className;
  },
  'bottom-end': () => {
    const className = ``;
    return className;
  },
  'left-start': () => {
    const className = '';
    return className;
  },
  left: () => {
    const className = '';
    return className;
  },
  'left-end': () => {
    const className = '';
    return className;
  }
};
