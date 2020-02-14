import { css } from 'styled-components';

export const templateQueries = (columns: string[], rows: string[], gap: boolean) => css`
  ${rows.map((r, y) =>
    css`
      ${columns.map((c, x) => css`
        & > *:nth-child(${y * columns.length + x + 1}) {
          -ms-grid-column: ${gap ? 2 * x + 1 : x + 1};
          -ms-grid-row: ${gap ? 2 * y + 1 : y + 1};
        }
      `)}
    `
  )}
`;

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
