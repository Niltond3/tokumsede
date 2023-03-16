import { useEffect } from 'react';

import useLocalStorage from './useLocalStorage';

export default function useColorMode() {
  const [colorMode, setColorMode] = useLocalStorage('color-mode', 'light');
  useEffect(() => {
    const className = 'dark';
    const classes = document.documentElement.classList;
    colorMode === className ? classes.add('dark') : classes.remove('dark');
  }, [colorMode]);
  return [colorMode, setColorMode];
}
