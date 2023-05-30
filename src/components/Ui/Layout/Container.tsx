export default function Container({ type, className, children, ...rest }: IContainer) {
  const style = mapStyles[type];
  return (
    <div className={`fixed flex ${style} ${className}`} {...rest}>
      {children}
    </div>
  );
}

const mapStyles = {
  AppBar: 'w-full h-xl px-l place-content-between'
};

interface IContainer
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: keyof typeof mapStyles;
}
