import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

import { THEMES } from 'utils/Constants';

export default function useColorMode() {
  const { DARK, LIGHT } = THEMES;
  const [colorMode, setColorMode] = useLocalStorage('color-mode', LIGHT);
  useEffect(() => {
    const className = DARK;
    const classes = document.documentElement.classList;
    colorMode === className ? classes.add(DARK) : classes.remove(DARK);
  }, [DARK, colorMode]);
  return [colorMode, setColorMode];
}
