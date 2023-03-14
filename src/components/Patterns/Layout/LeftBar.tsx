import React, { useState } from 'react';

import InteractiveLogo from 'components/Ui/Inputs/InteractiveLogo';

export default function LeftBar() {
  const [toggleFull, toggleMenu] = useState(false);
  const [toggleParcial, toggleHide] = useState(false);

  const handleToggle = () => toggleMenu(!toggleFull);
  const handleShow = () => toggleHide(true);
  const handleHide = () => toggleHide(false);

  return (
    <aside
      className={`container-bar container-bar-aside transition-slow color__tertiary bg-opacity-10 backdrop-blur-md w-60
      ${!toggleFull && '-translate-x-full'} ${toggleParcial && '-translate-x-[80%]'}`}
      onMouseLeave={handleHide}
    >
      <InteractiveLogo className="absolute right-[-7rem] top-[0.4rem]" />
      Left Bar
      <button
        onClick={handleToggle}
        onMouseEnter={handleShow}
        className="absolute right-[-1rem] top-1/2 -translate-y-1/2 color__tertiary w-m h-screen"
      >
        |
      </button>
    </aside>
  );
}
