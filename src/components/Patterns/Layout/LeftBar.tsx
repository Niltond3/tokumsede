import React, { useState } from 'react';

import Button from 'components/Ui/Inputs/Button';

import { THEMES } from '../../../utils/Constants';

import useColorMode from 'hooks/useColorMode';

export default function LeftBar() {
  const [hideFullMenu, toggleFullMenu] = useState(true);
  const [showParcialMenu, toggleParcialMenu] = useState(false);
  const [colorMode, setClorMode] = useColorMode();

  const handleToggle = () => toggleFullMenu(!hideFullMenu);
  const handleShow = () => toggleParcialMenu(true);
  const handleHide = () => toggleParcialMenu(false);
  const { DARK, LIGHT } = THEMES;
  return (
    <aside
      onMouseLeave={handleHide}
      className={`container-bar container-bar-aside transition-slow backdrop-blur-md w-40
      ${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'menu')}
`}
    >
      <div className="absolute flex justify-between rounded-l-full top-0 pr-[2.2rem] pl-s border-y-8 border-l-8 ml-m h-xl w-full z-[52] border-secondary-default dark:border-secondary-dark">
        <Button
          typeOf="DarkModeToggle"
          aria-label="Dark mode toggle"
          onClick={() => setClorMode(colorMode === 'light' ? 'dark' : 'light')}
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
        onClick={handleToggle}
      />
      <Button
        typeOf="InteractiveBar"
        className={`${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'barButton')}`}
        onClick={handleToggle}
        onMouseEnter={handleShow}
      />
    </aside>
  );
}
function actionsWhenMenuToggle(
  hideFullMenu: boolean,
  showParcialMenu: boolean,
  component: 'menu' | 'logo' | 'barButton'
) {
  const stylesMapping = {
    menu: {
      hide: '-translate-x-full color__secondary',
      parcial: '-translate-x-3/4 color__secondary',
      full: 'color__tertiary'
    },
    logo: {
      hide: '',
      parcial: '-translate-x-4 scale-90',
      full: 'full top-0 -translate-x-full items-center dark:bg-tertiary-dark border-8'
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
