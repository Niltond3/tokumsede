import NextLink from 'next/link';
import { ReactNode } from 'react';

interface Props {
  href: string;
  children: ReactNode;
  className?: string;
}
export default function Link({ href, children, className }: Props) {
  return (
    <NextLink href={href} passHref className={className}>
      {children}
    </NextLink>
  );
}
