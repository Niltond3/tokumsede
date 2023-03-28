export default function Container({ type, className, children, ...rest }: IContainer) {
  const { className: style } = containersType[type]();
  return (
    <div className={`fixed flex ${style} ${className}`} {...rest}>
      {children}
    </div>
  );
}

const containersType = {
  AppBar: function () {
    const className = 'w-full h-xl px-l place-content-between';
    return {
      className
    };
  },
  Aside: function () {
    const className = 'h-screen pt-xl flex-col w-min min-w-[13.375rem]';
    return {
      className
    };
  }
};

interface IContainer
  extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  type: keyof typeof containersType;
}
