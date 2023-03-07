const variantsMapping = {
  padding: 'p',
  margin: 'm'
};
const directionMapping = {
  top: 't',
  right: 'r',
  bottom: 'b',
  left: 'l'
};

interface generalSpacing {
  'inset-none': string;
  'inset-xs': string;
  'inset-s': string;
  'inset-m': string;
  'inset-l': string;
  'inset-xl': string;
  'stack-none': string;
  'stack-xs': string;
  'stack-s': string;
  'stack-m': string;
  'stack-l': string;
  'stack-xl': string;
  'inline-none': string;
  'inline-xs': string;
  'inline-s': string;
  'inline-m': string;
  'inline-l': string;
  'inline-xl': string;
}
interface specificSpacing {
  none: string;
  xs: string;
  s: string;
  m: string;
  l: string;
  xl: string;
}
interface returnProps {
  general: generalSpacing;
  specific: specificSpacing;
}

export default function Spacing(
  variant: keyof typeof variantsMapping,
  direction: keyof typeof directionMapping = 'bottom'
): returnProps {
  const varMap = variantsMapping[variant];
  const dirMap = directionMapping[direction];

  return {
    general: {
      'inset-none': ``,
      'inset-xs': `${varMap}-1`,
      'inset-s': `${varMap}-2`,
      'inset-m': `${varMap}-4`,
      'inset-l': `${varMap}-8`,
      'inset-xl': `${varMap}-16`,
      'stack-none': `${varMap}y-0`,
      'stack-xs': `${varMap}y-1`,
      'stack-s': `${varMap}y-2`,
      'stack-m': `${varMap}y-4`,
      'stack-l': `${varMap}y-8`,
      'stack-xl': `${varMap}y-16`,
      'inline-none': `${varMap}y-0`,
      'inline-xs': `${varMap}y-1`,
      'inline-s': `${varMap}y-2`,
      'inline-m': `${varMap}y-4`,
      'inline-l': `${varMap}y-8`,
      'inline-xl': `${varMap}y-16`
    },
    specific: {
      none: ``,
      xs: `${varMap}${dirMap}-1`,
      s: `${varMap}${dirMap}-2`,
      m: `${varMap}${dirMap}-4`,
      l: `${varMap}${dirMap}-8`,
      xl: `${varMap}${dirMap}-16`
    }
  };
}
