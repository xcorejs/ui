import { FC, useContext } from 'react';
import * as React from 'react';

import { GridContext } from '.';
import useTheme from '../../useTheme';
import convert, { getArrayValue } from '../../utils/convert';
import { BoxProps, boxBase } from '../Box';
import { Breakpoints } from '../../theme';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../../utils/mediaQuery';
import { parseGridCell } from './data';
import { parseTwin } from '../../utils/gridTemplate';

export type CellProps = BoxProps;

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

type CellStyleProps = {
  column: (string | null | number)[];
  row: (string | null | number)[];
  gap: (string | null)[];
  breakpoints: Breakpoints;
} & BoxProps;

const CellStyle = styled.div<CellStyleProps>`
  ${p => boxBase(p)}

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

    const [gc, gr] = parseTwin(getArrayValue(gap, i));

    const getIndex = (n: string, g: string | null) => g ? 2 * parseInt(n) - 1 : n;

    return [
      (column[i] || gap[i]) && c && css`
        grid-column: ${c};

        -ms-grid-column: ${getIndex(msCol, gc)} !important;
        ${msColSpan && css` -ms-grid-column-span: ${getIndex(msColSpan, gc)} !important; `}
      `,
      (row[i] || gap[i]) && r && css`
        grid-row: ${r};

        -ms-grid-row: ${getIndex(msRow, gr)} !important;
        ${msRowSpan && css` -ms-grid-row-span: ${getIndex(msRowSpan, gr)} !important; `}
      `
    ];
  })}

`;
