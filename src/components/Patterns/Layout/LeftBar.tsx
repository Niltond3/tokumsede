import React, { useState } from 'react';

import Button from 'components/Ui/Inputs/Button';

import { THEMES } from '../../../utils/Constants';

import useColorMode from 'hooks/useColorMode';

export default function LeftBar() {
  const [hideFullMenu, toggleFullMenu] = useState(true);
  const [showParcialMenu, toggleParcialMenu] = useState(false);
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;

  const handleToggleFullMenu = () => toggleFullMenu(!hideFullMenu);
  const handleShowParcialMenu = () => toggleParcialMenu(true);
  const handleHideParcialMenu = () => toggleParcialMenu(false);
  const handleToggleColorMode = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);

  return (
    <aside
      onMouseLeave={handleHideParcialMenu}
      className={`container-bar container-bar-aside w-40 backdrop-blur-md transition-slow
      ${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'menu')}
`}
    >
      <div className="absolute top-0 z-[51] ml-m flex h-xl w-full justify-between rounded-l-full border-y-8 border-l-8 border-secondary-default pr-[2.2rem] pl-s transition-slow dark:border-secondary-dark">
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
      Left Bar
      <Button
        typeOf="InteractiveLogo"
        className={`${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'logo')}`}
        onClick={handleToggleFullMenu}
      />
      <Button
        typeOf="InteractiveBar"
        className={`${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'barButton')}`}
        onClick={handleToggleFullMenu}
        onMouseEnter={handleShowParcialMenu}
      />
    </aside>
  );
}
function actionsWhenMenuToggle(
  hideFullMenu: boolean,
  showParcialMenu: boolean,
  component: 'menu' | 'logo' | 'barButton'
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
      full: `-translate-x-full bg-tertiary-default border-8 dark:bg-tertiary-dark
      [&>img]:p-xxs
      [&>img:nth-child(1)]:-translate-y-[0.1rem] [&>img:nth-child(1)]:translate-x-[0.4rem]
      [&>img:nth-child(2)]:!opacity-0
      [&>img:nth-child(3)]:w-8 [&>img:nth-child(3)]:translate-y-[0.1rem] [&>img:nth-child(3)]:translate-x-[0.2rem]
      `
    },
    barButton: {
      hide: 'color__secondary',
      parcial: 'color__secondary',
      full: 'color__tertiary'
    }
  };
  const { hide, parcial, full } = stylesMapping[component];
  return hideFullMenu && showParcialMenu ? parcial : hideFullMenu ? hide : full;
}
