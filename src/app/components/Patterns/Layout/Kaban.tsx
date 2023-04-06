export default function Kaban() {
  const initialData = {
    requests: [],
    columns: [
      {
        id: 'pending',
        title: 'Pendentes',
        styles: 'bg-lg-warning/10 dark:bg-dk-warning/10',
        requestsIds: []
      },
      {
        id: 'accepted',
        title: 'Aceitos',
        styles: 'bg-lg-info/10 dark:bg-dk-info/10',
        requestsIds: []
      },
      {
        id: 'dispatched',
        title: 'Despachados',
        styles: 'bg-lg-sent/10 dark:bg-dk-sent/10',
        requestsIds: []
      },
      {
        id: 'delivered',
        title: 'Entregues',
        styles: 'bg-lg-success/10 dark:bg-dk-success/10',
        requestsIds: []
      },
      {
        id: 'canceled',
        title: 'Cancelados',
        styles: 'bg-lg-error/10 dark:bg-dk-error/10',
        requestsIds: []
      },
      {
        id: 'scheduled',
        title: 'Agendados',
        styles: 'bg-lg-wait dark:bg-dk-wait',
        requestsIds: []
      }
    ]
  };
  const { columns } = initialData;

  return (
    <div>
      <ul className="flex">
        {columns.map(({ id, title, styles, requestsIds }, index) => (
          <li className={`${styles} m-s rounded-sm p-m`} key={id}>
            {title}
          </li>
        ))}
      </ul>
    </div>
  );
}
