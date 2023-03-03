import { ReactNode } from 'react';

import PropTypes from 'prop-types';

interface Props {
  className?: string;
  Children?: ReactNode;
}
export const h1 = ({ className, Children }: Props): ReactNode => (
  <h1 className={className}>{Children}</h1>
);
export const h2 = ({ className, Children }: Props): ReactNode => (
  <h2 className={className}>{Children}</h2>
);
export const h3 = ({ className, Children }: Props): ReactNode => (
  <h3 className={className}>{Children}</h3>
);
export const subtitle = ({ className, Children }: Props): ReactNode => (
  <h4 className={className}>
    <strong>{Children}</strong>
  </h4>
);
export const body = ({ className, Children }: Props): ReactNode => (
  <p className={className}>{Children}</p>
);
export const button = ({ className, Children }: Props): ReactNode => (
  <span className={className}>{Children}</span>
);
export const caption = ({ className, Children }: Props): ReactNode => (
  <span className={className}>{Children}</span>
);
export const overline = ({ className, Children }: Props): ReactNode => (
  <h1 className={className}>{Children}</h1>
);

// export default function SinglePageApplication(SPAProps: Props) {
//   return {
//     h1: h1(SPAProps),
//     h2: h2(SPAProps),
//     h3: h3(SPAProps),
//     subtitle: subtitle(SPAProps),
//     body: body(SPAProps),
//     button: button(SPAProps),
//     caption: caption(SPAProps),
//     overline: overline(SPAProps)
//   };
// }

SinglePageApplication.propTypes = {
  className: PropTypes.string,
  Children: PropTypes.node.isRequired
};
