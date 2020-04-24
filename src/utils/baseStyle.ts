import { FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { XcoreTheme, emptyTheme } from '../theme';

type Style = FlattenInterpolation<ThemeProps<XcoreTheme>>;

export interface BaseStyle<T> {
  (p: T): Style;
  inherits?: BaseStyle<T>[];
}

export const base = <T>(inherits: BaseStyle<T>[], b: (props: T) => Style): BaseStyle<T> => {
  const f = (p: T) => b(p);
  (f as BaseStyle<T>).inherits = inherits;

  return f;
};

export const polyfillTheme = <T extends {} | undefined>(
  p: T,
  theme: XcoreTheme = emptyTheme
): T & { theme: XcoreTheme } =>
  p &&
  (!('theme' in p) || (p as any).theme === undefined || Object.keys((p as any).theme).length === 0
    ? {
      ...p,
      theme
    }
    : p as T & { theme: XcoreTheme });

export const compose = <T>(...bases: BaseStyle<T>[]) => {
  const flattenBases = Array.from(new Set(flatten(bases)));
  return (p: T & { theme: {} }) => flattenBases.map(b => b(polyfillTheme(p)));
};

const flatten = <T>(bases: BaseStyle<T>[]): BaseStyle<T>[] => bases.reduce(
  (acc, b) => b.inherits
    ? [...acc, ...flatten(b.inherits)]
    : acc,
  bases
);
