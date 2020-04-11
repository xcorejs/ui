import React, { createContext, FC } from 'react';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';
import CSS from 'csstype';

import useTheme from '../../useTheme';
import convert, { getArrayValue } from '../../utils/convert';
import { parseTwin, parseTemplate } from '../../utils/gridTemplate';
import styled, { css } from 'styled-components';
import { mediaQueries } from '../../utils/mediaQuery';
import { BoxBaseProps, boxBase, composedBoxBase } from '../../bases';
import { compose, polyfillTheme } from '../../utils/baseStyle';
import { Breakpoints } from '../../scales/breakpoints';

type Col = CSS.GridTemplateColumnsProperty<string>;
export type GridColumnResponsiveValue =
  | Col
  | null
  | Array<Col | null>
  | { [key in string | number]?: Col } & { _: Col };

export type GridProps =
  {
    columns: GridColumnResponsiveValue;
    rows: ResponsiveValue<CSS.GridTemplateRowsProperty<string>>;

    gap?: ResponsiveValue<CSS.GapProperty<string>>;
  }
  & GridPositionProps
  & BoxBaseProps;

export type GridPositionProps = {
  justifyItems?: ResponsiveValue<CSS.JustifyItemsProperty>;
  justifyContent?: ResponsiveValue<CSS.JustifyContentProperty>;
  alignItems?: ResponsiveValue<CSS.AlignItemsProperty>;
  alignContent?: ResponsiveValue<CSS.AlignContentProperty>;
};

// eslint-disable-next-line @typescript-eslint/no-extra-parens
export const GridContext = createContext<{ gap: (string | null)[] }>({ gap: [] });

export type ExtendedGridProps = GridProps;

const Grid: FC<ExtendedGridProps> = ({ columns, rows, gap, ...props }) => {
  const { breakpoints } = useTheme();
  const { toArray } = convert(breakpoints);

  return (
    <GridContext.Provider value={{ gap: toArray(gap) }}>
      <GridStyle
        columns={toArray(columns)}
        rows={toArray(rows)}
        gap={toArray(gap)}
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
  gap: (string | null)[];
  breakpoints: Breakpoints;
} & GridPositionProps & BoxBaseProps;

const GridStyle = styled.div<GridStyleProps>`
  ${composedBoxBase}

  display: grid;
  display: -ms-grid;

  ${system.grid}

  ${p => system.system({
    gap: {
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
  })(polyfillTheme(p))}

  ${({ columns, rows, gap, breakpoints }) => mediaQueries(breakpoints, i => {
    const colVal = getArrayValue(columns, i)!;
    const rowVal = getArrayValue(rows, i)!;
    const gapVal = parseTwin(getArrayValue(gap, i));

    return (columns[i] || rows[i] || gap[i]) && css`
      ${(columns[i] || gap[i]) && css`
        -ms-grid-columns: ${parseTemplate(colVal, gapVal ? gapVal[0] : null).join(' ')};
      `}

      ${(rows[i] || gap[i]) && css` -ms-grid-rows: ${parseTemplate(rowVal, gapVal ? gapVal[1] : null).join(' ')}`}

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
