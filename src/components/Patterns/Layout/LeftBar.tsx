import React, { useState } from 'react';

import Button from 'components/Ui/Inputs/Button';
import InteractiveLogo from 'components/Ui/Inputs/InteractiveLogo';

export default function LeftBar() {
  const [hideFullMenu, toggleFullMenu] = useState(true);
  const [showParcialMenu, toggleParcialMenu] = useState(false);

  const handleToggle = () => toggleFullMenu(!hideFullMenu);
  const handleShow = () => toggleParcialMenu(true);
  const handleHide = () => toggleParcialMenu(false);

  return (
    <aside
      onMouseLeave={handleHide}
      className={`container-bar container-bar-aside transition-slow color__tertiary backdrop-blur-md w-60
      ${actionsWhenMenuToggle(hideFullMenu, showParcialMenu, 'menu')}
`}
    >
      <Button
        className={`absolute p-xs w-[4rem] h-[4rem] border-1 right-[-7rem] top-0 z-[51] ${actionsWhenMenuToggle(
          hideFullMenu,
          showParcialMenu,
          'logo'
        )}`}
        onClick={handleToggle}
        typeOf="InteractiveLogo"
      />
      Left Bar
      <button
        onClick={handleToggle}
        onMouseEnter={handleShow}
        className={`absolute transition-slow right-[-1rem] top-0 w-m h-screen ${actionsWhenMenuToggle(
          hideFullMenu,
          showParcialMenu,
          'barButton'
        )}`}
      >
        |
      </button>
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
      hide: '-translate-x-full',
      parcial: '-translate-x-3/4',
      full: ''
    },
    logo: {
      hide: '',
      parcial: '-translate-x-4 scale-90',
      full: 'full !top-0 -translate-x-full items-center dark:bg-tertiary-dark !border-8'
    },
    barButton: {
      hide: 'color__secondary',
      parcial: 'color__tertiary',
      full: 'color__tertiary'
    }
  };
  const { hide, parcial, full } = stylesMapping[component];
  return hideFullMenu && showParcialMenu ? parcial : hideFullMenu ? hide : full;
}
