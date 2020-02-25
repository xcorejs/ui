
export const parseGridCell = (val: string | number): [string, string | undefined] => {
  const [start, end] = typeof val === 'number'
    ? [val.toString()]
    : (val.split('/') as [string] | [string, string]);

  return !end ? [
    start,
    undefined
  ] : [
    start,
    end.includes('span') ? end.replace('span', '') : (parseInt(end) - parseInt(start)).toString()
  ];
};
