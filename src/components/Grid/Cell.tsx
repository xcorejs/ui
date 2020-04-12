import { BoxBaseProps, composedBoxBase } from 'bases';
import React, { FC, useContext } from 'react';
import { Breakpoints } from 'scales/breakpoints';
import styled, { css } from 'styled-components';
import useTheme from 'useTheme';
import { parseTwin } from 'utils/gridTemplate';
import { mediaQueries } from 'utils/mediaQuery';

import { GridContext } from '.';
import { parseGridAxis } from './data';
import { isIE } from 'utils/isIE';
import { system, ResponsiveValue } from 'styled-system';
import { polyfillTheme } from 'utils/baseStyle';
import { transform } from 'utils/transform';

export type CellProps = BoxBaseProps;
export type ExtendedCellProps = CellProps;

const Cell: FC<CellProps> = ({ column, gridColumn, row, gridRow, ...props }) => {
  const { breakpoints } = useTheme();
  const { gap } = useContext(GridContext);

  return (
    <CellStyle
      column={column ?? gridColumn}
      row={row ?? gridRow}
      gap={gap}
      breakpoints={breakpoints}
      {...props}
    />
  );
};

export default Cell;

type CellStyleProps = {
  gap?: ResponsiveValue<string>;
  breakpoints: Breakpoints;
} & BoxBaseProps;

const CellStyle = styled.div<CellStyleProps>`
  ${composedBoxBase}

  ${p => isIE() && [
      // Styled system properties
      system({
        alignSelf: {
          properties: ['-ms-flex-item-align', '-ms-grid-row-align'] as any[]
        },
        justifySelf: {
          property: '-ms-grid-column-align' as any
        }
      })(polyfillTheme(p)),
      // Manually position element in grid and handle place-self property
      mediaQueries(p.breakpoints, i => {
        const t = transform(p.breakpoints);
        const column = t(p.column);
        const row = t(p.row);
        const gap = t(p.gap);
        const [gc, gr] = parseTwin(gap.get(i));

        const [colStart, colEnd] = parseGridAxis(column.get(i), !!gc);
        const [rowStart, rowEnd] = parseGridAxis(row.get(i), !!gr);

        const placeSelf = transform(p.breakpoints)(p.placeSelf).get(i);
        const s = placeSelf?.split(' ');

        return [
          // Grid position
          (!column.empty(i) || !gap.empty(i)) && colStart && css`
            -ms-grid-column: ${colStart} !important;
          `,
          (!column.empty(i) || !gap.empty(i)) && colEnd && css`
            -ms-grid-column-span: ${colEnd} !important;
          `,

          (!row.empty(i) || !gap.empty(i)) && rowStart && css`
            -ms-grid-row: ${rowStart} !important;
          `,
          (!row.empty(i) || !gap.empty(i)) && rowEnd && css`
            -ms-grid-row-span: ${rowEnd} !important;
          `,
          // place-self
          s && css`
            -ms-grid-row-align: ${s[0]};
            -ms-grid-column-align: ${s[1] ? s[1] : s[0]};
          `
        ];
      })
  ]}

`;
