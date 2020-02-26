import { FlattenInterpolation, ThemeProps, css } from 'styled-components';

import { XcoreTheme } from '../theme';

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

export const compose = <T>(...bases: BaseStyle<T>[]) => {
  const flattenBases = Array.from(new Set(flatten(bases)));
  console.trace(bases, flattenBases);
  return (p: T) => css`
    ${flattenBases.map(b => b(p))}
  `;
};

const flatten = <T>(bases: BaseStyle<T>[]): BaseStyle<T>[] => bases.reduce(
  (acc, b) => b.inherits
    ? [...acc, ...flatten(b.inherits)]
    : acc,
  bases
);
