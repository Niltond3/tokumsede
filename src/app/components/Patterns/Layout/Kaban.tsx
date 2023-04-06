import Button from 'app/components/Ui/Inputs/Button';
import Toggle from 'app/components/Ui/Inputs/Toggle';

export default function Kaban() {
  const initialData = {
    requests: [],
    columns: [
      {
        id: 'pending',
        title: 'Pendentes',
        styles:
          '[&>div>*]:text-lg-warning-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-warning-base dark:bg-dk-warning/10',
        requestsIds: ['', '', '']
      },
      {
        id: 'accepted',
        title: 'Aceitos',
        styles:
          '[&>div>*]:text-lg-info-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-info-base dark:bg-dk-info/10',
        requestsIds: ['', '', '', '', '']
      },
      {
        id: 'dispatched',
        title: 'Despachados',
        styles:
          '[&>div>*]:text-lg-sent-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-sent-base dark:bg-dk-sent/10',
        requestsIds: ['', '']
      },
      {
        id: 'delivered',
        title: 'Entregues',
        styles:
          '[&>div>*]:text-lg-success-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-success-base dark:bg-dk-success/10',
        requestsIds: ['', '']
      },
      {
        id: 'canceled',
        title: 'Cancelados',
        styles:
          '[&>div>*]:text-lg-error-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-error-base dark:bg-dk-error/10',
        requestsIds: []
      },
      {
        id: 'scheduled',
        title: 'Agendados',
        styles:
          '[&>div>*]:text-lg-wait-darkest [&>div>*]:font-medium [&>div>*]:text-md bg-lg-wait-base dark:bg-dk-wait',
        requestsIds: []
      }
    ]
  };
  const { columns } = initialData;

  return (
    <div>
      <ul className="flex">
        {columns.map(({ id, title, styles, requestsIds }) => {
          const defaultCount = requestsIds.length;
          const count =
            id === 'delivered' ? `${defaultCount}/${getCount()}` : defaultCount;

          function getCount() {
            let count = 0;
            columns.forEach(({ id, requestsIds }) => {
              if (id !== 'canceled' && id !== 'delivered')
                count = count + requestsIds.length;
            });
            return count;
          }
          return (
            <li className={`${styles} m-s rounded-sm px-s py-xs`} key={id}>
              <div className="flex w-full justify-between">
                <span>{title}</span>
                <div className="flex w-min justify-between">
                  {count}
                  <Toggle typeOf="Sort" id={id} className="ml-xs" />
                </div>
              </div>
              <Button typeOf="Add" title="Fazer novo pedido" />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
