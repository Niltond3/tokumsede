import NextLink from 'next/link';
import { ReactNode } from 'react';

import PropTypes from 'prop-types';
interface Props {
  Children?: ReactNode;
  href: string;
}
export default function Link({ href, Children }: Props) {
  return (
    <NextLink href={href} passHref>
      <a>{Children}</a>
    </NextLink>
  );
}

Link.propTypes = {
  href: PropTypes.string.isRequired,
  Children: PropTypes.node.isRequired
};
