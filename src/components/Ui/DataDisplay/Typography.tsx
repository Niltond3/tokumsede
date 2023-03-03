import { ReactNode } from 'react';

const variantsMapping = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  subtitle: 'h6',
  body: 'p',
  button: 'p',
  caption: 'p',
  overline: 'h6'
} as const;

interface TypographyProps extends React.HTMLAttributes<HTMLElement> {
  variant: keyof typeof variantsMapping;
  color: string;
  children: ReactNode;
}
export default function Typography({
  variant,
  color,
  children,
  ...props
}: TypographyProps) {
  const Component = variantsMapping[variant];
  return (
    <Component className={`typography--variant-${variant} ${color}`} {...props}>
      {children}
    </Component>
  );
}
