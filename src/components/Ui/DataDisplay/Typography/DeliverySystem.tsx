import { ReactNode } from 'react';

import PropTypes from 'prop-types';

interface Props {
  className?: string;
  Children?: ReactNode;
}
export const H1 = ({ className, Children }: Props): ReactNode => (
  <h1 className={className}>{Children}</h1>
);
export const H2 = ({ className, Children }: Props): ReactNode => (
  <h2 className={className}>{Children}</h2>
);
export const H3 = ({ className, Children }: Props): ReactNode => (
  <h3 className={className}>{Children}</h3>
);
export const Subtitle = ({ className, Children }: Props): ReactNode => (
  <h4 className={className}>
    <strong>{Children}</strong>
  </h4>
);
export const Body = ({ className, Children }: Props): ReactNode => (
  <p className={className}>{Children}</p>
);
export const Button = ({ className, Children }: Props): ReactNode => (
  <span className={className}>{Children}</span>
);
export const Caption = ({ className, Children }: Props): ReactNode => (
  <span className={className}>{Children}</span>
);
export const Overline = ({ className, Children }: Props): ReactNode => (
  <h1 className={className}>{Children}</h1>
);

export default function DeliverySystem(DeliverySystemProps: Props) {
  return {
    h1: H1(DeliverySystemProps),
    h2: H2(DeliverySystemProps),
    h3: H3(DeliverySystemProps),
    subtitle: Subtitle(DeliverySystemProps),
    body: Body(DeliverySystemProps),
    button: Button(DeliverySystemProps),
    caption: Caption(DeliverySystemProps),
    overline: Overline(DeliverySystemProps)
  };
}

DeliverySystem.propTypes = {
  className: PropTypes.string,
  Children: PropTypes.node.isRequired
};
