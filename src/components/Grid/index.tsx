import React, { createContext, FC } from 'react';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

import useTheme from '../../useTheme';
import convert, { getArrayValue } from '../../utils/convert';
import { parseTwin, parseTemplate } from '../../utils/gridTemplate';
import { BoxProps, boxBase } from '../Box';
import { Breakpoints } from '../../theme';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../../utils/mediaQuery';

export type GridProps = {
  columns: ResponsiveValue<CSS.GridTemplateColumnsProperty<string>>;
  rows: ResponsiveValue<CSS.GridTemplateRowsProperty<string>>;

  gap?: ResponsiveValue<CSS.GapProperty<string>>;
} & GridPositionProps & BoxProps;

export type GridPositionProps = {
  justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
  justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
  alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
};

// eslint-disable-next-line @typescript-eslint/no-extra-parens
export const GridContext = createContext<{ gap: (string | null)[] }>({ gap: [] });

export type ExtendedGridProps = GridProps;

const Grid: FC<ExtendedGridProps> = ({ columns, rows, gap: _gap, ...props }) => {
  const { breakpoints } = useTheme();
  const { toArray } = convert(breakpoints);
  const gapArray = toArray(_gap);
  const gap = gapArray
    .map(g => parseTwin(g))
    .map(([c, r], i) => [c, r] as [string | null, string | null]);

  return (
    <GridContext.Provider value={{ gap: toArray(_gap) }}>
      <GridStyle
        columns={toArray(columns)}
        rows={toArray(rows)}
        gapArray={gapArray}
        gap={gap}
        breakpoints={breakpoints}
        {...props}
      />
    </GridContext.Provider>
  );
};
Grid.displayName = 'Grid';

export default Grid;

type GridStyleProps = {
  columns: (string | null)[];
  rows: (string | null)[];
  gap: [string | null, string | null][];
  gapArray: (string | null)[];
  breakpoints: Breakpoints;
} & GridPositionProps & BoxProps;

const GridStyle = styled.div<GridStyleProps>`
  ${p => boxBase(p)}
  display: grid;
  display: -ms-grid;

  ${system.grid}

  ${system.system({
    gapArray: {
      property: 'gridGap'
    },
    justifyItems: true,
    justifyContent: true,
    alignContent: true,
    alignItems: true,
    columns: {
      property: 'gridTemplateColumns'
    },
    row: {
      property: 'gridTemplateRows'
    }
  })}

  ${({ columns, rows, gap, gapArray, breakpoints }) => mediaQueries(breakpoints, i => {
    const colVal = getArrayValue(columns, i)!;
    const rowVal = getArrayValue(rows, i)!;
    const gapVal = getArrayValue(gap, i);

    return (columns[i] || rows[i] || gapArray[i]) && css`
      ${(columns[i] || gapArray[i]) && css` -ms-grid-columns: ${parseTemplate(
          colVal,
          gapVal ? gapVal[0] : null
        ).join(' ')};`}

      ${(rows[i] || gapArray[i]) && css` -ms-grid-rows: ${parseTemplate(rowVal, gapVal ? gapVal[1] : null).join(' ')}`}

      ${templateQueries(parseTemplate(colVal), parseTemplate(rowVal), !!gapVal)}
    `;
  })}
`;

const templateQueries = (columns: string[], rows: string[], gap: boolean) => css`
  ${rows.map((_, y) =>
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
