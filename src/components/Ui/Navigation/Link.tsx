import NextLink from 'next/link';
import { ReactNode } from 'react';

import PropTypes from 'prop-types';
interface Props extends React.HTMLAttributes<HTMLElement> {
  href: string;
}
export default function Link({ href, children, ...rest }: Props) {
  return (
    <NextLink href={href} passHref {...rest}>
      {children}
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired
};
