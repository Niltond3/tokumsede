import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';

import useColorMode from 'hooks/useColorMode';
import { THEMES } from 'utils/Constants';

interface IConfigWrapper {
  className: string;
  shrink: boolean;
}

export default function ConfigurationsWrapper({ shrink, className }: IConfigWrapper) {
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;
  const toggleTheme = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);

  return (
    <div
      className={`${className} absolute top-0 ml-m flex h-xl w-full justify-between rounded-l-full border-y-8 border-l-8 border-lg-primary pl-m pr-xxl transition-slow dark:border-dk-primary`}
    >
      <div className="absolute top-[3.5rem] h-px w-11 rounded-full transition-faster" />
      <Button typeOf="DarkModeToggle" aria-label="Dark mode toggle" onClick={toggleTheme}>
        <Tooltip distace="close" position="bottom-start" title="Mudar Tema" />
      </Button>
      <Button
        typeOf="Notifications"
        aria-label="Notifications"
        onClick={() => {
          //nothing happened for now
        }}
      >
        <Tooltip distace="close" position="bottom" title="Silênciar" />;
      </Button>
      <Button
        typeOf="Settings"
        aria-label="Settings"
        onClick={() => {
          //nothing happened for now
        }}
      >
        <Tooltip
          distace="close"
          position={shrink ? 'bottom-start' : 'bottom-end'}
          title="Configurações"
        />
      </Button>
    </div>
  );
}
