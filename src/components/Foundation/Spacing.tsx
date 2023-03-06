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
interface props {
  variant: keyof typeof variantsMapping;
  direction?: keyof typeof directionMapping;
}

export default function a({ variant, direction }: props) {
  const var = variantsMapping[variant];
  return direction
    ? {
        xs: `${var}${direction}-0.5`,
        s: `${var}${direction}-1`,
        m: `${var}${direction}-3`,
        l: `${var}${direction}-6`,
        xl: `${var}${direction}-12`
      }
    : {
        'inset-xs': `${var}-0.5`,
        'inset-s': `${var}-1`,
        'inset-m': `${var}-3`,
        'inset-l': `${var}-6`,
        'inset-xl': `${var}-12`,
        'stack-xs': `${var}y-0.5`,
        'stack-s': `${var}y-1`,
        'stack-m': `${var}y-3`,
        'stack-l': `${var}y-6`,
        'stack-xl': `${var}y-12`
      };
}
a({ variant: 'margin', direction: 'left' }).;
