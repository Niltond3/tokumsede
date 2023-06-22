import { DraggableProvidedDragHandleProps } from 'react-beautiful-dnd';

import Divider from 'components/Ui/Layout/Divider';

type SessionProps = {
  children: React.ReactNode;
  className?: string;
  handleProps?: DraggableProvidedDragHandleProps | null;
};

export default function SessionWrapper({
  children,
  className = '',
  handleProps
}: SessionProps) {
  return (
    <section {...handleProps}>
      <>
        <div className={`${className} flex text-xs font-medium`}>{children}</div>
        <Divider className="my-s" />
      </>
    </section>
  );
}
