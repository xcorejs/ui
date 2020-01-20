import { Breakpoints } from '../theme';
import { ResponsiveValue } from 'styled-system';

// Conversion proccess
// { xs: "col", md: "row"} -> { xs: "col", sm: "col", md: "row", lg: "row", xl: "row" } -> [col, col, row, row, row]
// { xs: 1, sm: 2, md:  3, lg: 4, xl: 5 } -> [1, 2, 3, 4, 5]

const convert = (breakpoints: Breakpoints) => {
  const valueToArray = <T>(val: T) => Array<T>(breakpoints!.length + 1).fill(val);
  const objToArray = <T>(obj: Record<string, T>) => ['_', ...breakpoints!.aliases]
    .reduce((acc, val, i) => [
      ...acc,
      obj[val]
        ? obj[val]
        : i === 0 ? obj['_'] : acc[i - 1]
    ], [] as T[]);

  const toArray = <T extends string | number | boolean>(val: ResponsiveValue<T>) =>
    typeof val === 'object'
      ? val instanceof Array
        ? val
        : objToArray(val)
      : valueToArray(val);

  return { valueToArray, objToArray, toArray };
};

export default convert;
