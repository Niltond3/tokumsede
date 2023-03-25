import NextLink from 'next/link';
import { MouseEventHandler, ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}
export default function Link({ href, children, className, onClick }: Props) {
  return (
    <NextLink href={href} passHref className={className} onClick={onClick}>
      {children}
    </NextLink>
  );
}
