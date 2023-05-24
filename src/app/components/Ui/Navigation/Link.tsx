import NextLink from 'next/link';

type LinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  style?: React.CSSProperties;
};
export default function Link({ href, children, className, onClick, style }: LinkProps) {
  return (
    <NextLink href={href} passHref className={className} onClick={onClick} style={style}>
      {children}
    </NextLink>
  );
}
