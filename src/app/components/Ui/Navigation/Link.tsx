import NextLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
}
export default function Link({ href, children, className, onClick, style }: Props) {
  return (
    <NextLink href={href} passHref className={className} onClick={onClick} style={style}>
      {children}
    </NextLink>
  );
}
