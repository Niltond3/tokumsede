import NextLink from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  href: string;
  as: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export default function Link({ href, as, children, className, onClick }: Props) {
  return (
    <NextLink href={href} as={as} passHref className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
}
