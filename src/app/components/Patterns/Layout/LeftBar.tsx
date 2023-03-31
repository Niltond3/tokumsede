'use client';
import React, { useState } from 'react';

import { Mouse } from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';
import Container from 'app/components/Ui/Layout/Container';
import Menu from 'app/components/Ui/Navigation/Menu';

import ConfigurationsWrapper from './ConfigurationsWrapper';

import { IContent } from 'utils/Types';

export default function LeftBar() {
  const [hideFullMenu, setShowFullMenu] = useState(true);
  const [showParcialMenu, setShowParcialMenu] = useState(false);

  const handleSetShowFullMenu = () => setShowFullMenu(!hideFullMenu);
  const handleShowFullMenu = ({ target, currentTarget }: React.MouseEvent) => {
    target === currentTarget && setShowFullMenu(!hideFullMenu);
  };

  const handleShowParcialMenu = () => setShowParcialMenu(true);
  const handleHideParcialMenu = () => setShowParcialMenu(false);

  const content: IContent[] = [
    {
      icon: 'Home',
      title: 'Principal',
      as: '/Principal',
      content: [
        {
          icon: 'Homes',
          title: 'Home Page',
          as: '/Principal/ToKumSede',
          href: '/toKumSede'
        },
        {
          icon: 'Purchase',
          title: 'Pedidos',
          as: '/Principal/Pedidos',
          href: '/requests'
        }
      ]
    },
    {
      icon: 'Work',
      title: 'Empresarial',
      as: '/Principal/Empresarial',
      content: [
        {
          icon: 'Customer',
          title: 'Clientes',
          as: '/Principal/Empresarial/Clientes',
          href: '/business/clients'
        },
        {
          icon: 'Distributor',
          title: 'Distribuidoras',
          as: '/Principal/Empresarial/Distribuidoras',
          href: '/business/distributors'
        },
        {
          icon: 'Administrator',
          title: 'Administradores',
          as: '/Principal/Empresarial/Administradores',
          href: '/business/administrators'
        },
        {
          icon: 'Representative',
          title: 'Representantes',
          as: '/Principal/Empresarial/Representantes',
          href: '/business/representatives'
        },
        {
          icon: 'Deliveryman',
          title: 'Entregadores',
          as: '/Principal/Empresarial/Entregadores',
          href: '/business/deliverymans'
        },
        {
          icon: 'Attendant',
          title: 'Atendentes',
          as: '/Principal/Empresarial/Atendentes',
          href: '/business/attendant'
        }
      ]
    },
    {
      icon: 'Dashboard',
      title: 'Dashboard',
      as: '/Principal/Dashboard/',
      content: [
        {
          icon: 'Purchase',
          title: 'Varejo',
          as: '/Principal/Dashboard/Varejo',
          href: '/dashboard/retail'
        },
        {
          icon: 'Financial',
          title: 'Financeiro',
          as: '/Principal/Dashboard/Financeiro',
          href: '/dashboard/financial'
        },
        {
          icon: 'Commercial',
          title: 'Comercial',
          as: '/Principal/Dashboard/Comercial',
          href: '/dashboard/commercial'
        },
        {
          icon: 'logistics',
          title: 'Logístico',
          as: '/Principal/Dashboard/Logístico',
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
      <ConfigurationsWrapper className={config} shrink={hideFullMenu} />
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

function variantStyles(hideFullMenu: boolean, showParcialMenu: boolean) {
  const menuShrinkStyles = [
    '[&>button:first-child]:w-1/3 [&>button:first-child]:self-end [&>button:first-child]:px-m',
    '[&>button:first-child>svg:nth-child(2)]:hidden',
    '[&>button:first-child>p]:hidden',
    '[&>ul]:items-end [&>ul]:mr-[7%]',
    '[&>ul>li>a>p]:hidden'
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
      menu: '[&>button:first-child>div]:hidden [&>ul>li>a>div]:hidden [&>ul]:ml-[3%]'
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
