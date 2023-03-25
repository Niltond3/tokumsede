import React, { useState } from 'react';

import Button from 'components/Ui/Inputs/Button';
import Menu from 'components/Ui/Navigation/Menu';

import { THEMES } from '../../../utils/Constants';

import useColorMode from 'hooks/useColorMode';
import { IContent } from 'utils/Types';

export default function LeftBar() {
  const [hideFullMenu, setShowFullMenu] = useState(true);
  const [showParcialMenu, setShowParcialMenu] = useState(false);
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;

  const handleSetShowFullMenu = () => setShowFullMenu(!hideFullMenu);
  const handleShowFullMenu = (event: React.MouseEvent) => {
    event.target === event.currentTarget && setShowFullMenu(!hideFullMenu);
  };

  const handleShowParcialMenu = () => setShowParcialMenu(true);
  const handleHideParcialMenu = () => setShowParcialMenu(false);
  const handleToggleColorMode = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);

  const content: IContent[] = [
    {
      icon: 'Home',
      title: 'Principal',
      content: [
        {
          icon: 'Homes',
          title: 'Home Page',
          href: '/main/toKumSede'
        },
        {
          icon: 'Purchase',
          title: 'Pedidos',
          href: '/main/requests'
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
          href: '/business/clients'
        },
        {
          icon: 'Distributor',
          title: 'Distribuidoras',
          href: '/business/distributors'
        },
        {
          icon: 'Administrator',
          title: 'Administradores',
          href: '/business/administrators'
        },
        {
          icon: 'Representative',
          title: 'Representantes',
          href: '/business/representatives'
        },
        {
          icon: 'Deliveryman',
          title: 'Entregadores',
          href: '/business/deliverymans'
        },
        {
          icon: 'Attendant',
          title: 'Atendentes',
          href: '/business/attendant'
        }
      ]
    },
    {
      icon: 'Dashboard',
      title: 'Dashboard',
      content: [
        {
          icon: 'Purchase',
          title: 'Varejo',
          href: '/dashboard/retail'
        },
        {
          icon: 'Financial',
          title: 'Financeiro',
          href: '/dashboard/financial'
        },
        {
          icon: 'Commercial',
          title: 'Comercial',
          href: '/dashboard/commercial'
        },
        {
          icon: 'logistics',
          title: 'Logístico',
          href: '/dashboard/logistical'
        }
      ]
    }
  ];

  return (
    <aside
      onClick={handleShowFullMenu}
      onMouseEnter={handleShowParcialMenu}
      onMouseLeave={handleHideParcialMenu}
      className={`container-bar  container-bar-aside w-min min-w-[13.375rem] pr-m backdrop-blur-md transition-slow
      ${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'menu')}
`}
    >
      <div className="absolute top-0 z-[51] ml-m flex h-xl w-full justify-between rounded-l-full border-y-8 border-l-8 border-secondary-default px-m pr-xxl transition-slow dark:border-secondary-dark">
        <Button
          typeOf="DarkModeToggle"
          aria-label="Dark mode toggle"
          onClick={handleToggleColorMode}
        ></Button>
        <Button
          typeOf="Notifications"
          aria-label="Notifications activity Toggle"
          onClick={() => {
            //nothing happened for now
          }}
        ></Button>
        <Button
          typeOf="Settings"
          aria-label="Settings"
          onClick={() => {
            //nothing happened for now
          }}
        ></Button>
      </div>
      <Button
        typeOf="InteractiveLogo"
        className={`${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'logo')}`}
        onClick={handleSetShowFullMenu}
      />
      <Menu content={content}></Menu>
    </aside>
  );
}
function actionsWhenMenuToggle(
  hideFullMenu: boolean,
  showParcialMenu: boolean,
  component: 'menu' | 'logo'
) {
  //[&>img]:left-1/2 [&>img]:-translate-x-1/2
  const stylesMapping = {
    menu: {
      hide: '-translate-x-full color__secondary',
      parcial: '-translate-x-3/4 color__secondary',
      full: 'color__tertiary'
    },
    logo: {
      hide: '',
      parcial: '-translate-x-4 scale-90',
      full: `-translate-x-full bg-tertiary-default border-8 dark:bg-tertiary-dark right-0 mr-l
      [&>img]:p-xxs
      [&>img:nth-child(1)]:-translate-y-[0.1rem] [&>img:nth-child(1)]:translate-x-[0.4rem]
      [&>img:nth-child(2)]:!opacity-0
      [&>img:nth-child(3)]:w-8 [&>img:nth-child(3)]:translate-y-[0.1rem] [&>img:nth-child(3)]:translate-x-[0.2rem]
      `
    }
  };
  const { hide, parcial, full } = stylesMapping[component];
  return hideFullMenu && showParcialMenu ? parcial : hideFullMenu ? hide : full;
}
