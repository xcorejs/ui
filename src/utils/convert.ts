import { Breakpoints } from 'scales/breakpoints';
import { ResponsiveValue } from 'styled-system';
import { transform } from './transform';

const convert = (breakpoints: Breakpoints) => {
  const valueToArray = <T>(val: T, optimal: boolean = true) => [
    val,
    ...Array<null>(breakpoints.length)
  ].fill(optimal ? null : val, 1);

  const objToArray = <T>(obj: Record<string, T>, optimal: boolean = true): (T | null)[] =>
    ['_', ...breakpoints.aliases]
      .reduce((acc, val, i) => [
        ...acc,
        obj[val] ? obj[val] : optimal || i === 0 ? null : acc[i - 1]
      ], [] as (T | null)[]);

  const toArray = <T extends string | number | boolean>(
    val: ResponsiveValue<T> | undefined,
    optimal: boolean = true
  ): (T | null)[] =>
    val === undefined
      ? []
      : typeof val === 'object'
        ? val instanceof Array
          ? val
          : objToArray<T>(val as Record<string, T>, optimal)
        : valueToArray(val, optimal);

  const narrow = <T extends string | number | boolean>(val: (T | null)[]) =>
    val.reduce((acc, x, i) => [
      ...acc,
      i === 0
        ? x
        : val[i - 1] === x
          ? null
          : x
    ], [] as (T | null)[]);

  const getValue = <T>(val: ResponsiveValue<T>, index: string | number): T | null =>
    typeof val === 'object' && val !== null
      ? Array.isArray(val)
        ? getValueFromArray(val, index)
        : getValueFromObject(val as Record<string, T>, index)
      : val;

  const getValueFromArray = <T>(val: T[], index: string | number) => {
    const numIndex = typeof index === 'number'
      ? index
      : index === '_'
        ? 0
        : breakpoints.aliases.indexOf(index) + 1;

    return val[numIndex] ?? val.reduceRight(
      (acc, v, i) => acc === null && i < numIndex ? v : acc,
      null as T | null
    );
  };

  const getValueFromObject = <T>(val: Record<string, T>, index: string | number) => {
    const key = typeof index === 'string'
      ? index
      : breakpoints.aliases[index - 1] ?? '_';

    return (
      // Look if value is easily accessible
      val[key] ??
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
      null
    );
  };

  return { valueToArray, objToArray, toArray, narrow, getValue, transform: transform(breakpoints) };
};

export const getArrayValue = <T>(val: T[], index: number): T | null =>
  val[index] ?? val.reduceRight(
    (acc, v, i) => acc === null && i < index ? v : acc,
    null as T | null
  );

export default convert;
