import NextLink from 'next/link';

import { LinkProps } from 'common/types';

export default function Link({ href, children, className, onClick, style }: LinkProps) {
  return (
    <NextLink href={href} passHref className={className} onClick={onClick} style={style}>
      {children}
    </NextLink>
  );
}
