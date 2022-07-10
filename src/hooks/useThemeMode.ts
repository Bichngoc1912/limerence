import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicLayoutEffect';
import { useState, useEffect, useRef } from 'react';
import { ThemeModeType, THEME_MODE } from './types';

const updateThemeMode = () => {
  if (
    localStorage.theme === THEME_MODE.DARK ||
    (!localStorage.theme && window.matchMedia('(prefers-color-scheme: dark)').matches)
  ) {
    document.documentElement.classList.add('tw-dark', 'changing-theme-mode');
  } else {
    document.documentElement.classList.remove('tw-dark', 'changing-theme-mode');
  }

  window.setTimeout(() => {
    document.documentElement.classList.remove('changing-theme-mode');
  });
};

export const useThemeMode = () => {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(THEME_MODE.SYSTEM);
  const initital = useRef(true);

  useIsomorphicLayoutEffect(() => {
    const theme = localStorage.theme;

    if (theme === THEME_MODE.LIGHT || theme === THEME_MODE.DARK) {
      setThemeMode(theme);
    }
  }, []);

  useIsomorphicLayoutEffect(() => {
    if (themeMode === THEME_MODE.SYSTEM) {
      localStorage.removeItem('theme');
    } else if(themeMode === THEME_MODE.LIGHT || themeMode === THEME_MODE.DARK) {
      localStorage.theme = themeMode;
    }

    /*
      Don't run updateThemeMode() in first time load DOM because has script inline
      in <head> to process it
    */
    if (initital.current) {
      initital.current = false;
    } else {
      updateThemeMode();
    }
  }, [themeMode]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', updateThemeMode);

    const onStorage = () => {
      updateThemeMode();

      const theme = localStorage.theme;

      if (theme === THEME_MODE.LIGHT || theme === THEME_MODE.DARK) {
        setThemeMode(theme);
      } else {
        setThemeMode(THEME_MODE.SYSTEM);
      }
    };

    window.addEventListener('storage', onStorage);

    return () => {
      mediaQuery.removeEventListener('change', updateThemeMode);
      window.removeEventListener('storage', onStorage);
    };
  }, []);

  return { themeMode, setThemeMode };
};

export * from './types';
