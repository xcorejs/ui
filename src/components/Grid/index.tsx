import React, { createContext, FC, Children } from 'react';
import styled, { css } from 'styled-components';
import { ResponsiveValue } from 'styled-system';
import * as system from 'styled-system';
import CSS from 'csstype';

import { Breakpoints } from '../../theme';
import useTheme from '../../useTheme';
import convert, { getArrayValue } from '../../utils/convert';
import { parseTemplate, parseTwin } from '../../utils/gridTemplate';
import { mediaQueries } from '../../utils/mediaQuery';
import Box, { BoxProps } from '../Box';
import { templateQueries } from './data';

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

type GridStyleProps = {
  columns: (string | null)[];
  rows: (string | null)[];
  gap: [string | null, string | null][];
  gapArray: (string | null)[];
  breakpoints: Breakpoints;
} & GridPositionProps & BoxProps;

const GridStyle = styled(Box)<GridStyleProps>`
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
