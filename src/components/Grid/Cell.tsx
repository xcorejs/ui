import { FC, useContext } from 'react';
import * as React from 'react';
import styled, { css } from 'styled-components';

import { GridContext } from '.';
import { Breakpoints } from '../../theme';
import useTheme from '../../useTheme';
import { mediaQueries } from '../../utils/mediaQuery';
import Box, { BoxProps } from '../Box';
import { parseGridCell } from './data';
import convert, { getArrayValue } from '../../utils/convert';

export type CellProps = BoxProps;

type CellStyleProps = {
  column: (string | null | number)[];
  row: (string | null | number)[];
  gap: (string | null)[];
  breakpoints: Breakpoints;
} & BoxProps;

const CellStyle = styled(Box)<CellStyleProps>`
  ${p => p.alignSelf && css`
    -ms-flex-item-align: ${p.alignSelf};
    -ms-grid-row-align: ${p.alignSelf};
  `}

  ${p => p.justifySelf && css`
    -ms-grid-column-align: ${p.justifySelf};
  `}

  ${p => mediaQueries(p.breakpoints, i => {
    const { toArray } = convert(p.breakpoints);
    const placeSelf = toArray(p.placeSelf);
    const s = placeSelf[i] && placeSelf[i]!.split(' ');

    return placeSelf[i] && css`
      -ms-grid-row-align: ${s![0]};
      -ms-grid-column-align: ${s![1] ? s![1] : s![0]};
    `;
  })}

  ${({ column, row, breakpoints, gap }) => mediaQueries(breakpoints, i => {
    const c = getArrayValue(column, i)!;
    const r = getArrayValue(row, i)!;
    const [msCol, msColSpan] = parseGridCell(c);
    const [msRow, msRowSpan] = parseGridCell(r);

    const getIndex = (n: string) => gap ? 2 * parseInt(n) - 1 : n;

    return [
      (column[i] || gap[i]) && c && css`
        grid-column: ${c};

        -ms-grid-column: ${getIndex(msCol)} !important;
        ${msColSpan && css` -ms-grid-column-span: ${getIndex(msColSpan)} !important; `}
      `,
      (row[i] || gap[i]) && r && css`
        grid-row: ${r};

        -ms-grid-row: ${getIndex(msRow)} !important;
        ${msRowSpan && css` -ms-grid-row-span: ${getIndex(msRowSpan)} !important; `}
      `
    ];
  })}

`;

export type ExtendedCellProps = CellProps;

const Cell: FC<CellProps> = ({ column, row, ...props }) => {
  const { breakpoints } = useTheme();
  const { gap } = useContext(GridContext);
  const { toArray } = convert(breakpoints);
  return (
    <CellStyle
      column={toArray(column)}
      row={toArray(row)}
      gap={toArray(gap)}
      breakpoints={breakpoints}
      {...props}
    />
  );
};

Cell.displayName = 'Cell';

export default Cell;
