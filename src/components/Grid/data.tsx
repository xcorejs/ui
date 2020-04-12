import { getArrayValue } from 'utils/convert';

export const parseGridCell = (val: string | number): [string, string | undefined] =>
  typeof val === 'number'
    ? [val.toString(), undefined]
    : (val.split('/') as [string, string]);

export const parseGridAxis = (
  axis: Array<string | null | number>,
  i: number,
  gap: boolean
): [number | undefined, number | undefined] => {
  const value = getArrayValue(axis, i);

  if (value === null) {
    return [undefined, undefined];
  }

  const [start, end] = parseGridCell(value);

  const getIndex = (n: number) => gap ? 2 * n - 1 : n;

  return [
    getIndex(Number(start)),
    parseSpan(end, Number(start), getIndex)
  ];
};

export const parseSpan = (end: string | undefined, start: number, getIndex: (n: number) => number) =>
  !end
    ? undefined
    : end.includes('span')
      ? getIndex(Number(end.replace('span', '')))
      : getIndex(Number(end)) - getIndex(start);
