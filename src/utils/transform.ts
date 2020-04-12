import { Breakpoints } from 'scales/breakpoints';
import { ResponsiveValue } from 'styled-system';

export interface TransformedValue<T> {
  map: <U>(unit: (x: T, key: number | string) => U | null | undefined) => ResponsiveValue<U>;
  mapAll: <U>(unit: (x: T | null | undefined, key: number | string) => U) => ResponsiveValue<U>;
  reduce: <U>(unit: (accumulator: U, value: T, key: number | string) => U, initialValue: U) => U;

  get: (index: number | string) => T | null | undefined;
  empty: (index: number | string) => boolean;
  value: ResponsiveValue<T> | undefined;
  type: 'array' | 'object' | 'value';
}

export const transform = (breakpoints: Breakpoints) => <T>(val: ResponsiveValue<T> | undefined): TransformedValue<T> =>
  typeof val === 'object' && val !== null
    ? Array.isArray(val)
      ? transformArray(breakpoints, val)
      : transformObject(breakpoints, val as Record<string, T>)
    : transformValue(breakpoints, val);

const transformArray = <T>(breakpoints: Breakpoints, val: (T | null)[]): TransformedValue<T> => ({
  map: unit => val.map((x, i) =>
    x !== null && x !== undefined
      ? unit(x, i) ?? null
      : null
  ),
  mapAll: unit => val.map(unit),
  reduce: null as any,
  get: index => {
    const numIndex = typeof index === 'number'
      ? index
      : index === '_'
        ? 0
        : breakpoints.aliases.indexOf(index) + 1;

    return val[numIndex] ?? val.reduceRight(
      (acc, v, i) => acc === null && i < numIndex ? v : acc,
      null as T | null
    );
  },
  empty: i => {
    const numIndex = typeof i === 'number'
      ? i
      : i === '_'
        ? 0
        : breakpoints.aliases.indexOf(i) + 1;
    return val[numIndex] === null || val[numIndex] === undefined;
  },
  value: val,
  type: 'array'
});

const transformObject = <T>(breakpoints: Breakpoints, val: Record<string, T | undefined>): TransformedValue<T> => ({
  map: <U>(unit: (x: T, key: number | string) => U | undefined): U =>
    Object.keys(val).reduce(
      (acc, k) => {
        const v = val[k] === undefined ? val[k] : unit(val[k]!, k);
        return v !== null && v !== undefined
          ? {
            ...acc,
            [k]: v
          }
          : acc;
      },
      {} as U
    ),
  mapAll: null as any,
  reduce: null as any,
  get: (index) => {
    const key = typeof index === 'string'
      ? index
      : breakpoints.aliases[index - 1] ?? '_';

    return val[key] ??
        // Look for value in previous values
        ['_', ...breakpoints.aliases].reduceRight(
          (acc, k) =>
            k === key
              ? null
              : acc === null && val[k]
                ? val[k]
                : acc,
          undefined as T | null | undefined
        ) ??
        // Return null instead of undefined
        null;
  },
  empty: i => {
    const key = typeof i === 'string' ? i : breakpoints.aliases[i - 1] ?? '_';
    return val[key] === null || val[key] === undefined;
  },
  value: val,
  type: 'object'
});

const transformValue = <T>(breakpoints: Breakpoints, val: T | null | undefined): TransformedValue<T> => ({
  map: unit => val !== null && val !== undefined ? unit(val, 0) ?? null : null,
  mapAll: unit => unit(val, 0),
  reduce: (unit, initialValue) => val ? unit(initialValue, val, 0) : initialValue,
  get: _ => val,
  empty: i => i !== 0 || val === null || val === undefined,
  value: val,
  type: 'value'
});
