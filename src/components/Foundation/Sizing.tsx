interface ISizingProps {}

interface ISizing {}

export default {
  width: {
    auto: 'w-auto',
    '50%': 'w-1/2',
    '100%': 'w-full',
    '100vw': 'w-screen',
    min: 'w-min',
    max: 'w-max',
    fit: 'w-fit',
    '4rem': 'w-16'
  },
  minWidth: {
    auto: 'overflow-auto',
    hidden: 'overflow-hidden',
    visible: 'overflow-visible',
    scroll: 'overflow-scroll'
  },
  maxWidth: {
    fixed: 'fixed',
    absolute: 'absolute',
    relative: 'relative'
  },
  height: {
    auto: 'h-auto',
    '50%': 'h-1/2',
    '100%': 'h-full',
    '100vh': 'h-screen',
    min: 'h-min',
    max: 'h-max',
    fit: 'h-fit',
    '4rem': 'h-16'
  },
  minHeight: {},
  maxHeight: {}
};
