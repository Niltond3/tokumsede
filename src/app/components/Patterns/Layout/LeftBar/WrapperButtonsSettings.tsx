'use client';
import Tooltip from 'app/components/Ui/DataDisplay/_Tooltip';
import Button from 'app/components/Ui/Inputs/Button';
import Checkbox from 'app/components/Ui/Inputs/Checkbox';

import useColorMode from 'hooks/useColorMode';
import { THEMES } from 'utils/Constants';

export default function WrapperSettings() {
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;
  const toggleTheme = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);
  const emptyFunc = () => {
    // Clean
  };

  return (
    <div className="relative -top-16 z-10 w-full bg-lg-primary transition-slow has-open:bg-lg-secondary dark:bg-dk-primary dark:has-open:bg-dk-secondary">
      <div className="relative h-xl rounded-l-full border-y-8 border-l-8 border-lg-primary transition-slow has-open:pr-xl has-open:pl-m dark:border-dk-primary">
        <div className="mr-2 flex h-[calc(100%+8px)] items-center justify-between border-b-[0.1rem] border-lg-primary-base/40 transition-slow child:transition-slow has-open:border-lg-primary-base/0 [&:has(#open-menu:checked)]:mr-0">
          {/* TOGGLE THEME MODE*/}
          <div className="flex h-full w-full items-center gap-2">
            <Tooltip content="Mudar Tema" align="center" side="bottom">
              <Button is="DarkModeToggle" onClick={toggleTheme} />
            </Tooltip>
            {/* TOGGLE NOTIGICATIONS*/}
            <Tooltip content="Silênciar" align="center" side="bottom">
              <Button is="Notifications" onClick={emptyFunc} />
            </Tooltip>
            {/* SETTINGS*/}
            <Tooltip content="Configurações" align="center" side="bottom">
              <Button is="Settings" onClick={emptyFunc} />
            </Tooltip>
          </div>
          <Checkbox type="LeftAsideControl" />
        </div>
      </div>
    </div>
  );
}
