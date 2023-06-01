import Divider from 'components/Ui/Layout/Divider';

type SessionProps = {
  children: React.ReactNode;
  className?: string;
};

export default function SessionWrapper({ children, className = '' }: SessionProps) {
  return (
    <section>
      <>
        <div className={`${className} flex text-xs font-medium`}>{children}</div>
        <Divider className="my-s" />
      </>
    </section>
  );
}
