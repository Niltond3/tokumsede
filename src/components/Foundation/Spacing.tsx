export interface ISpacingSizing {
  undefined: string;
  xxs: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
  xxl: string;
}
interface ISpacingOptions {
  inset: ISpacingSizing;
  stack: ISpacingSizing;
  'stack-begin': ISpacingSizing;
  'stack-end': ISpacingSizing;
  inline: ISpacingSizing;
  'inline-begin': ISpacingSizing;
  'inline-end': ISpacingSizing;
}
interface ISpacing {
  margin: ISpacingOptions;
  padding: ISpacingOptions;
}
export const Spacing: ISpacing = {
  margin: {
    inset: {
      undefined: '',
      xxs: 'm-xxs',
      xs: 'm-xs',
      s: 'm-s',
      m: 'm-m',
      l: 'm-l',
      xl: 'm-xl',
      xxl: 'm-xxl'
    },
    stack: {
      undefined: '',
      xxs: 'my-xxs',
      xs: 'my-xs',
      s: 'my-s',
      m: 'my-m',
      l: 'my-l',
      xl: 'my-xl',
      xxl: 'my-xxl'
    },
    'stack-begin': {
      undefined: '',
      xxs: 'mt-xxs',
      xs: 'mt-xs',
      s: 'mt-s',
      m: 'mt-m',
      l: 'mt-l',
      xl: 'mt-xl',
      xxl: 'mt-xxl'
    },
    'stack-end': {
      undefined: '',
      xxs: 'mb-xxs',
      xs: 'mb-xs',
      s: 'mb-s',
      m: 'mb-m',
      l: 'mb-l',
      xl: 'mb-xl',
      xxl: 'mb-xxl'
    },
    inline: {
      undefined: '',
      xxs: 'mx-xxs',
      xs: 'mx-xs',
      s: 'mx-s',
      m: 'mx-m',
      l: 'mx-l',
      xl: 'mx-xl',
      xxl: 'mx-xxl'
    },
    'inline-begin': {
      undefined: '',
      xxs: 'ml-xxs',
      xs: 'ml-xs',
      s: 'ml-s',
      m: 'ml-m',
      l: 'ml-l',
      xl: 'ml-xl',
      xxl: 'ml-xxl'
    },
    'inline-end': {
      undefined: '',
      xxs: 'mr-xxs',
      xs: 'mr-xs',
      s: 'mr-s',
      m: 'mr-m',
      l: 'mr-l',
      xl: 'mr-xl',
      xxl: 'mr-xxl'
    }
  },
  padding: {
    inset: {
      undefined: '',
      xxs: 'p-xxs',
      xs: 'p-xs',
      s: 'p-s',
      m: 'p-m',
      l: 'p-l',
      xl: 'p-xl',
      xxl: 'p-xxl'
    },
    stack: {
      undefined: '',
      xxs: 'py-xxs',
      xs: 'py-xs',
      s: 'py-s',
      m: 'py-m',
      l: 'py-l',
      xl: 'py-xl',
      xxl: 'py-xxl'
    },
    'stack-begin': {
      undefined: '',
      xxs: 'pt-xxs',
      xs: 'pt-xs',
      s: 'pt-s',
      m: 'pt-m',
      l: 'pt-l',
      xl: 'pt-xl',
      xxl: 'pt-xxl'
    },
    'stack-end': {
      undefined: '',
      xxs: 'pb-xxs',
      xs: 'pb-xs',
      s: 'pb-s',
      m: 'pb-m',
      l: 'pb-l',
      xl: 'pb-xl',
      xxl: 'pb-xxl'
    },
    inline: {
      undefined: '',
      xxs: 'px-xxs',
      xs: 'px-xs',
      s: 'px-s',
      m: 'px-m',
      l: 'px-l',
      xl: 'px-xl',
      xxl: 'px-xxl'
    },
    'inline-begin': {
      undefined: '',
      xxs: 'pl-xxs',
      xs: 'pl-xs',
      s: 'pl-s',
      m: 'pl-m',
      l: 'pl-l',
      xl: 'pl-xl',
      xxl: 'pl-xxl'
    },
    'inline-end': {
      undefined: '',
      xxs: 'pr-xxs',
      xs: 'pr-xs',
      s: 'pr-s',
      m: 'pr-m',
      l: 'pr-l',
      xl: 'pr-xl',
      xxl: 'pr-xxl'
    }
  }
};
