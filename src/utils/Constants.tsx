import { IContent } from './Types';

export const THEMES = {
  LIGHT: 'light',
  DARK: 'dark'
};
export const LOCAL_STORAGE = {
  COLOR_MODE: 'color-mode'
};

export const NAVIGATION_LINKS: IContent[] = [
  {
    icon: 'Home',
    title: 'Principal',
    href: '/',
    content: [
      {
        icon: 'Homes',
        title: 'Home Page',
        href: '/toKumSede'
      },
      {
        icon: 'Purchase',
        title: 'Pedidos',
        href: '/requests'
      }
    ]
  },
  {
    icon: 'Work',
    title: 'Empresarial',
    content: [
      {
        icon: 'Customer',
        title: 'Clientes',
        href: '/clients'
      },
      {
        icon: 'Distributor',
        title: 'Distribuidoras',
        href: '/distributors'
      },
      {
        icon: 'Administrator',
        title: 'Administradores',
        href: '/administrators'
      },
      {
        icon: 'Representative',
        title: 'Representantes',
        href: '/representatives'
      },
      {
        icon: 'Deliveryman',
        title: 'Entregadores',
        href: '/deliverymans'
      },
      {
        icon: 'Attendant',
        title: 'Atendentes',
        href: '/attendant'
      }
    ]
  },
  {
    icon: 'Dashboard',
    title: 'Relatórios',
    content: [
      {
        icon: 'Purchase',
        title: 'Varejo',
        href: '/retail'
      },
      {
        icon: 'Financial',
        title: 'Financeiro',
        href: '/financial'
      },
      {
        icon: 'Commercial',
        title: 'Comercial',
        href: '/commercial'
      },
      {
        icon: 'logistics',
        title: 'Logístico',
        href: '/logistical'
      }
    ]
  }
];
