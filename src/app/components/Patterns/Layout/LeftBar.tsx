'use client';
import React, { useState } from 'react';

import { Mouse } from 'app/components/Ui/DataDisplay/Icons';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';
import Container from 'app/components/Ui/Layout/Container';
import Menu from 'app/components/Ui/Navigation/Menu';

import { THEMES } from '../../../../utils/Constants';

import useColorMode from 'hooks/useColorMode';
import { IContent } from 'utils/Types';

export default function LeftBar() {
  const [hideFullMenu, setShowFullMenu] = useState(true);
  const [showParcialMenu, setShowParcialMenu] = useState(false);
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;

  const handleSetShowFullMenu = () => setShowFullMenu(!hideFullMenu);
  const handleShowFullMenu = ({ target, currentTarget }: React.MouseEvent) => {
    target === currentTarget && setShowFullMenu(!hideFullMenu);
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
  const { aside, config, logo, menu } = variantStyles(hideFullMenu, showParcialMenu);
  return (
    <Container
      type="Aside"
      onClick={handleShowFullMenu}
      onMouseEnter={handleShowParcialMenu}
      onMouseLeave={handleHideParcialMenu}
      className={`pr-m text-lg-primary-lightest ${aside}
`}
    >
      <ConfigWrapper toggleTheme={handleToggleColorMode} className={config} />
      <Mouse className="absolute -right-6 top-6 animate-hover-here opacity-0 transition-slow" />
      <Button
        typeOf="InteractiveLogo"
        className={`${logo} border-lg-primary dark:border-dk-primary`}
        onClick={handleSetShowFullMenu}
      />
      <Menu content={content} styles={menu} />
    </Container>
  );
}
interface IConfigWrapper {
  className: string;
  toggleTheme: () => void;
}
const ConfigWrapper = ({ toggleTheme, className }: IConfigWrapper) => (
  <div
    className={`${className} absolute top-0 ml-m flex h-xl w-full justify-between rounded-l-full border-y-8 border-l-8 border-lg-primary pl-m pr-xxl transition-slow dark:border-dk-primary`}
  >
    <div className="absolute top-[3.5rem] h-px w-11 rounded-full transition-faster" />
    <Button
      typeOf="DarkModeToggle"
      aria-label="Dark mode toggle"
      onClick={toggleTheme}
      className="group relative"
    >
      <Tooltip distace="far" position="bottom-end" title="Mudar Tema" />{' '}
    </Button>
    <Button
      typeOf="Notifications"
      aria-label="Notifications"
      onClick={() => {
        //nothing happened for now
      }}
    />
    <Button
      typeOf="Settings"
      aria-label="Settings"
      onClick={() => {
        //nothing happened for now
      }}
    />
  </div>
);

/**
 *
 * [&>button:first-child>div:first-child] aparecer se parcial
 * [&>button:first-child>p:first-child] aparecer se full
 *
 * [&>ul:first-child_li>a>div>svg:nth(2)] aparecer se parcial
 * [&>ul:first-child_li>a>div>p] aparecer se full
 */

function variantStyles(hideFullMenu: boolean, showParcialMenu: boolean) {
  const menuShrinkStyles = [
    '[&>button:first-child]:w-1/3 [&>button:first-child]:self-end [&>button:first-child]:px-m',
    '[&>button:first-child>svg:nth-child(2)]:hidden',
    '[&>button:first-child>p]:hidden',
    '[&>ul>li>a>div>p]:hidden'
  ].join(' ');

  const mappingStyles = {
    hide: {
      aside: '-translate-x-full bg-lg-primary dark:bg-dk-primary [&_svg]:!opacity-100',
      config: '',
      logo: '',
      menu: `[&>button:first-child]:pointer-events-none ${menuShrinkStyles}`
    },
    full: {
      aside: 'bg-lg-secondary dark:bg-dk-secondary',
      config: '',
      logo: [
        '-translate-x-full bg-lg-secondary border-8 dark:bg-dk-secondary right-0 mr-l',
        '[&>img]:p-xxs',
        '[&>img:nth-child(1)]:-translate-y-[0.1rem] [&>img:nth-child(1)]:translate-x-[0.4rem]',
        '[&>img:nth-child(2)]:!opacity-0',
        '[&>img:nth-child(3)]:w-8 [&>img:nth-child(3)]:translate-y-[0.1rem] [&>img:nth-child(3)]:translate-x-[0.2rem]'
      ].join(' '),
      menu: '[&>button:first-child>div]:hidden [&>ul>li>a>div>div]:hidden'
    },
    parcial: {
      aside: [
        '-translate-x-2/3 bg-lg-primary dark:bg-dk-primary',
        '[&>div:first-child]:ml-40 [&>div:first-child]:pl-0 [&>div:first-child]:pr-40'
      ].join(' '),
      config: '-translate-x-3 [&>div:first-child]:bg-lg-primary-base/40',
      logo: '-translate-x-10 scale-90 animate-pulse',
      menu: `${menuShrinkStyles}`
    }
  };

  const { hide, parcial, full } = mappingStyles;
  return hideFullMenu && showParcialMenu ? parcial : hideFullMenu ? hide : full;
}
