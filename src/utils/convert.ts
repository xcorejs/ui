import { Breakpoints } from '../theme';
import { ResponsiveValue } from 'styled-system';

// Conversion proccess
// { xs: "col", md: "row"} -> { xs: "col", sm: "col", md: "row", lg: "row", xl: "row" } -> [col, col, row, row, row]
// { xs: 1, sm: 2, md:  3, lg: 4, xl: 5 } -> [1, 2, 3, 4, 5]

const convert = (breakpoints: Breakpoints) => {
  const valueToArray = <T>(val: T) => [val, ...Array<null>(breakpoints!.length)].fill(null, 1);
  const objToArray = <T>(obj: Record<string, T>): (T | null)[] => ['_', ...breakpoints!.aliases]
    .reduce((acc, val, i) => [
      ...acc,
      obj[val] ? obj[val] : null
    ], [] as (T | null)[]);

  const toArray = <T extends string | number | boolean>(val: ResponsiveValue<T>): (T | null)[] =>
    typeof val === 'object'
      ? val instanceof Array
        ? val
        : objToArray<T>(val as Record<string, T>)
      : valueToArray(val);

  return { valueToArray, objToArray, toArray };
};

export default convert;
