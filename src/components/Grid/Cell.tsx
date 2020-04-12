import { BoxBaseProps, composedBoxBase } from 'bases';
import { FC, useContext } from 'react';
import * as React from 'react';
import { Breakpoints } from 'scales/breakpoints';
import styled, { css } from 'styled-components';
import useTheme from 'useTheme';
import convert, { getArrayValue } from 'utils/convert';
import { parseTwin } from 'utils/gridTemplate';
import { mediaQueries } from 'utils/mediaQuery';

import { GridContext } from '.';
import { parseGridAxis } from './data';
import { isIE } from 'utils/isIE';

export type CellProps = BoxBaseProps;
export type ExtendedCellProps = CellProps;

const Cell: FC<CellProps> = ({ column, gridColumn, row, gridRow, ...props }) => {
  const c = column ?? gridColumn;
  const r = row ?? gridRow;
  const { breakpoints } = useTheme();

  const { gap } = useContext(GridContext);
  const { toArray } = convert(breakpoints);

  return (
    <CellStyle
      column={toArray(c)}
      row={toArray(r)}
      gap={toArray(gap)}
      breakpoints={breakpoints}
      {...props}
    />
  );
};

Cell.displayName = 'Cell';

export default Cell;

type CellStyleProps = {
  column: Array<string | null | number>;
  row: Array<string | null | number>;
  gap: Array<string | null>;
  breakpoints: Breakpoints;
} & BoxBaseProps;

const CellStyle = styled.div<CellStyleProps>`
  ${composedBoxBase}

  ${p => isIE() && p.alignSelf && css`
    -ms-flex-item-align: ${p.alignSelf};
    -ms-grid-row-align: ${p.alignSelf};
  `}

  ${p => isIE() && p.justifySelf && css`
    -ms-grid-column-align: ${p.justifySelf};
  `}

  ${p => isIE() && mediaQueries(p.breakpoints, i => {
    const { toArray } = convert(p.breakpoints);
    const placeSelf = toArray(p.placeSelf);
    const s = placeSelf[i] && placeSelf[i]!.split(' ');

    return s && css`
      -ms-grid-row-align: ${s[0]};
      -ms-grid-column-align: ${s[1] ? s[1] : s[0]};
    `;
  })}

  ${({ column, row, breakpoints, gap }) => isIE() && mediaQueries(breakpoints, i => {
    const [gc, gr] = parseTwin(getArrayValue(gap, i));

    const [colStart, colEnd] = parseGridAxis(column, i, !!gc);
    const [rowStart, rowEnd] = parseGridAxis(row, i, !!gr);

    return [
      (column[i] || gap[i]) && colStart && css`
        -ms-grid-column: ${colStart} !important;
      `,
      (column[i] || gap[i]) && colEnd && css`
        -ms-grid-column-span: ${colEnd} !important;
      `,

      (row[i] || gap[i]) && rowStart && css`
        -ms-grid-row: ${rowStart} !important;
      `,
      (row[i] || gap[i]) && rowEnd && css`
        -ms-grid-row-span: ${rowEnd} !important;
      `
    ];
  })}

`;
