interface ITooltip {
  title: string;
  position: keyof typeof stylePosition;
  distace: keyof typeof styleDistance;
}

export default function Tooltip({ title, position, distace }: ITooltip) {
  const posStyle = stylePosition[position](distace);
  //opacity-0 group-hover:opacity-100
  return (
    <div
      className={`pointer-events-none absolute flex w-max rounded-md bg-black p-xs text-sm font-medium transition-faster ${posStyle}`}
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
    const className = `${styleDistance[distance].right} before:top-1/2 before:-translate-y-1/2 before:absolute before:-left-[0.95rem] before:h-0 before:w-0 before:border-8 before:border-transparent before:border-r-black before:content-['']`;
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
    const className = '';
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
