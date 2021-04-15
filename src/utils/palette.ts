import * as polished from 'polished';

export type Palette = Record<50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900, string>;

export const palette = (
  base500: string,
  m: number = 0.4,
  func: (a: number, v: string) => string = polished.lighten
) => ({
  50: func(m * 0.45, base500),
  100: func(m * 0.4, base500),
  200: func(m * 0.3, base500),
  300: func(m * 0.2, base500),
  400: func(m * 0.1, base500),
  500: base500,
  600: func(m * -0.1, base500),
  700: func(m * -0.2, base500),
  800: func(m * -0.3, base500),
  900: func(m * -0.4, base500)
});
