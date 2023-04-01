'use client';
import React, { useState } from 'react';

import { Mouse } from 'app/components/Ui/DataDisplay/Icons';
import Button from 'app/components/Ui/Inputs/Button';
import Container from 'app/components/Ui/Layout/Container';
import Menu from 'app/components/Ui/Navigation/Menu';

import ConfigWrapper from './ConfigButtonsWrapper';

import { NAVIGATION_LINKS } from 'utils/Constants';

export default function LeftBar() {
  const [hideFullMenu, setShowFullMenu] = useState(true);
  const [showParcialMenu, setShowParcialMenu] = useState(false);

  const handleSetShowFullMenu = () => setShowFullMenu(!hideFullMenu);
  const handleShowFullMenu = ({ target, currentTarget }: React.MouseEvent) => {
    target === currentTarget && setShowFullMenu(!hideFullMenu);
  };

  const handleShowParcialMenu = () => setShowParcialMenu(true);
  const handleHideParcialMenu = () => setShowParcialMenu(false);

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
      <ConfigWrapper className={config} shrink={hideFullMenu} />
      <Mouse className="absolute -right-6 top-6 animate-hover-here opacity-0 transition-slow" />
      <Button
        typeOf="InteractiveLogo"
        className={`${logo} border-lg-primary dark:border-dk-primary`}
        onClick={handleSetShowFullMenu}
      />
      <Menu content={NAVIGATION_LINKS} styles={menu} />
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
