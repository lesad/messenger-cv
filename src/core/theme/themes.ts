const colors = {
  purple: '#4849A1',
  greyPurple: '#EEEEF6',
  pinkish: '#ED2460',
  white: '#FFFFFF',
  black: '#000000',
  grey: 'rgba(196, 196, 196, 0.2)',
  purpleAlpha: 'rgba(72, 73, 161, 0.83)',
};

export const sizings = {
  borderRadius: '20px',
  indicatorSize: '20px',

  buttonRadius: '2.143em',
  buttonSize: '4.286em',
};

export const font = {
  family: '"Roboto", sans-serif',
  size: '14px',
  weight: '400',
};

export const lightTheme = {
  primary: colors.purple,
  secondary: colors.white,
  text: colors.black,
  background: colors.greyPurple,
  message: colors.grey,
  indicator: colors.pinkish,
  inactive: colors.purpleAlpha,

  ...sizings,
};

export const darkTheme = {
  // TODO
};

export type ThemeType = typeof lightTheme;
