export const THEME_MODE = {
  SYSTEM: 'system',
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type ThemeModeType =
  | typeof THEME_MODE.DARK
  | typeof THEME_MODE.LIGHT
  | typeof THEME_MODE.SYSTEM;
