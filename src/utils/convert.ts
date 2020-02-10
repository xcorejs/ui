import { Breakpoints } from '../theme';
import { ResponsiveValue } from 'styled-system';

// Conversion proccess
// { xs: "col", md: "row"} -> { xs: "col", sm: "col", md: "row", lg: "row", xl: "row" } -> [col, col, row, row, row]
// { xs: 1, sm: 2, md:  3, lg: 4, xl: 5 } -> [1, 2, 3, 4, 5]

const convert = (breakpoints: Breakpoints) => {
  const valueToArray = <T>(val: T, optimal: boolean = true) => [
    val,
    ...Array<null>(breakpoints!.length)
  ].fill(optimal ? null : val, 1);

  const objToArray = <T>(obj: Record<string, T>, optimal: boolean = true): (T | null)[] =>
    ['_', ...breakpoints!.aliases]
      .reduce((acc, val, i) => [
        ...acc,
        obj[val] ? obj[val] : (optimal || i === 0) ? null : acc[i - 1]
      ], [] as (T | null)[]);

  const toArray = <T extends string | number | boolean>(
    val: ResponsiveValue<T>,
    optimal: boolean = true
  ): (T | null)[] =>
      typeof val === 'object'
        ? val instanceof Array
          ? val
          : objToArray<T>(val as Record<string, T>, optimal)
        : valueToArray(val, optimal);

  const narrow = <T extends string | number | boolean>(val: (T | null)[]) => val.reduce((acc, x, i) => [
    ...acc,
    i === 0
      ? x
      : val[i - 1] === x
        ? null
        : x
  ], [] as (T | null)[]);

  return { valueToArray, objToArray, toArray, narrow };
};

export default convert;
