'use client';
import React, { useState } from 'react';

import Icons, { Arrow, Mouse } from 'app/components/Ui/DataDisplay/Icons';
import Img from 'app/components/Ui/DataDisplay/Image';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';
import Container from 'app/components/Ui/Layout/Container';
import Dropdown from 'app/components/Ui/Navigation/Dropdown';
import Link from 'app/components/Ui/Navigation/Link';
import Menu from 'app/components/Ui/Navigation/Menu';

import ConfigWrapper from './ConfigButtonsWrapper';

import useColorMode from 'hooks/useColorMode';
import { NAVIGATION_LINKS, THEMES } from 'utils/Constants';
import { IContent } from 'utils/Types';

export default function LeftBar() {
  const [hideFullMenu, setShowFullMenu] = useState(true);
  const [showParcialMenu, setShowParcialMenu] = useState(false);
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;
  const toggleTheme = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);
  const [showDropdown, setShowDropdown] = useState(false);
  const handleClick = () => setShowDropdown(!showDropdown);
  const handleSetShowFullMenu = () => setShowFullMenu(!hideFullMenu);
  const handleShowFullMenu = ({ target, currentTarget }: React.MouseEvent) => {
    target === currentTarget && setShowFullMenu(!hideFullMenu);
  };

  const handleShowParcialMenu = () => setShowParcialMenu(true);
  const handleHideParcialMenu = () => setShowParcialMenu(false);

  const { aside, config, logo, menu } = variantStyles(hideFullMenu, showParcialMenu);

  const ret = (
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

  const Return = (
    <aside
      className={[
        'flex h-full w-fit flex-col bg-lg-primary text-lg-primary-base @container transition-slow',
        'child:transition-slow has-checked:bg-lg-secondary dark:bg-dk-primary'
      ].join(' ')}
    >
      <div className="relative -top-16 w-14 bg-lg-primary transition-slow has-checked:w-44 has-checked:bg-lg-secondary">
        <div className="relative h-xl rounded-l-full border-y-8 border-l-8 border-lg-primary transition-slow has-checked:pr-xl has-checked:pl-m dark:border-dk-primary">
          <div className="mr-2 flex h-[calc(100%+8px)] items-center justify-between border-b-[0.1rem] border-lg-primary-base/40 transition-slow child:transition-slow has-checked:border-lg-primary-base/0">
            {/* TOGGLE THEME MODE*/}
            <Button
              typeOf="DarkModeToggle"
              aria-label="Dark mode toggle"
              onClick={toggleTheme}
            >
              <Tooltip close position="bottom-start" title="Mudar Tema" />
            </Button>
            {/* TOGGLE NOTIGICATIONS*/}
            <Button
              typeOf="Notifications"
              aria-label="Notifications"
              onClick={() => {
                //nothing happened for now
              }}
            >
              <Tooltip close position="bottom" title="Silênciar" />;
            </Button>
            {/* SETTINGS*/}
            <Button
              typeOf="Settings"
              aria-label="Settings"
              onClick={() => {
                //nothing happened for now
              }}
            >
              <Tooltip close position={'bottom-start'} title="Configurações" />
            </Button>
            <Mouse className="absolute -right-6 top-6 animate-hover-here opacity-0" />
            <label
              className={[
                'border-secondary-default dark:border-secondary-dark group flex h-16 w-16 cursor-pointer rounded-full border-8 border-lg-primary p-xs dark:border-dk-primary',
                'absolute -right-16 bg-lg-primary center-x',
                'child:transition-slow has-checked:-right-3 has-checked:bg-lg-secondary [&:has(input:checked)>*]:p-xxs'
              ].join(' ')}
              htmlFor="interactive_logo"
            >
              <input type="checkbox" className="peer hidden" id="interactive_logo" />
              <Img
                size={24}
                image="logo"
                className="absolute w-5 group-hover:opacity-100 peer-checked:translate-x-2.5"
              />
              <Img
                size={26}
                image="name"
                className="absolute top-5 right-2 w-5 group-hover:opacity-100 peer-checked:!opacity-0 peer-checked:center-y"
              />
              <Img
                size={48}
                image="waves"
                className="absolute -bottom-1 w-9 group-hover:opacity-100 peer-checked:bottom-1 peer-checked:w-8 peer-checked:translate-y-[0.15rem] peer-checked:translate-x-[0.25rem]"
              />
            </label>
          </div>
        </div>
      </div>
      <nav className="relative -top-16">
        <ul className={`w-full pt-4 transition-fast `}>
          {NAVIGATION_LINKS.map(({ content, icon, title, href, onClick }, index) => (
            <li key={`left-menu-${index}`}>
              {content && (
                <div className={` flex flex-col pl-s transition-fast`}>
                  <input
                    type="checkbox"
                    className="peer hidden"
                    id={`${title}-control-dropdown`}
                  ></input>
                  <label
                    htmlFor={`${title}-control-dropdown`}
                    className={[
                      'btn-menu-control group @container @[100px]:gap-2',
                      'peer-checked:bg-lg-primary-base/100 peer-checked:text-lg-secondary peer-checked:transition-none peer-checked:dark:!bg-dk-primary-base/100 peer-checked:dark:text-dk-secondary-base peer-checked:[&>svg:nth-child(2)]:rotate-90',
                      'peer-checked:before:opacity-100 peer-checked:before:transition-none',
                      'peer-checked:after:opacity-100 peer-checked:after:transition-none'
                    ].join(' ')}
                  >
                    <Icons icon={icon} className="min-w-min" />
                    <p
                      className={`invisible min-w-0 text-[0.80rem] font-medium opacity-0 transition-faster @[100px]:visible @[100px]:min-w-[6rem] @[100px]:opacity-100`}
                    >
                      {title}
                    </p>
                    <Arrow className="z-[52] transition-faster" />
                    <Tooltip title={title} position="right" close />
                  </label>
                  <ul
                    className={[
                      'invisible my-1 flex max-h-0 flex-col flex-nowrap overflow-hidden opacity-0 transition-faster',
                      'peer-checked:visible peer-checked:max-h-96 peer-checked:opacity-100',
                      'peer-checked:[&>li>a>p]:animate-intro-menu',
                      'peer-checked:[&>*:nth-child(1)>a>p]:animation-delay-75',
                      'peer-checked:[&>*:nth-child(2)>a>p]:animation-delay-100',
                      'peer-checked:[&>*:nth-child(3)>a>p]:animation-delay-150',
                      'peer-checked:[&>*:nth-child(4)>a>p]:animation-delay-200',
                      'peer-checked:[&>*:nth-child(5)>a>p]:animation-delay-300',
                      'peer-checked:[&>*:nth-child(6)>a>p]:animation-delay-500'
                    ].join(' ')}
                  >
                    {content.map(({ href, icon, title, content, onClick }, index) => {
                      const Return = (
                        <li
                          className={`border-l-2 border-l-lg-primary-base/30 transition-faster hover:border-l-lg-primary-base/100`}
                        >
                          <Link
                            href={href}
                            className={`group flex items-center justify-start gap-2 p-s fill-mode-forwards transition-faster`}
                          >
                            <Icons icon={icon} />
                            <p className={`opacity-0 `}>{title}</p>
                          </Link>
                        </li>
                      );

                      enum EDelay {
                        'animation-delay-[40ms]!',
                        'animation-delay-[60ms]!',
                        'animation-delay-[80ms]!',
                        'animation-delay-[100ms]!',
                        'animation-delay-[120ms]!',
                        'animation-delay-[140ms]!'
                      }
                      const delay = EDelay[index];
                      const Ret = (
                        <li
                          className="border-l-2 border-l-lg-primary-base/0"
                          key={`${title}-${index}`}
                        >
                          <Link
                            href={href}
                            onClick={onClick}
                            className={`${delay} group flex translate-x-[25px] items-center p-s opacity-0 fill-mode-forwards transition-faster`}
                          >
                            <Icons icon={icon} className="mr-s transition-faster" />
                            <p
                              className={`w-24 text-[0.80rem] font-medium transition-faster`}
                            >
                              {title}
                            </p>
                            <Tooltip title={title} position="right" close />
                          </Link>
                        </li>
                      );
                      return Return;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );

  return Return;
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
