import { BoxBaseProps, composedBoxBase } from 'bases';
import CSS from 'csstype';
import React, { createContext, FC } from 'react';
import { Breakpoints } from 'scales/breakpoints';
import styled, { css } from 'styled-components';
import * as system from 'styled-system';
import { ResponsiveValue } from 'styled-system';
import useTheme from 'useTheme';
import { polyfillTheme } from 'utils/baseStyle';
import convert, { getArrayValue } from 'utils/convert';
import { parseTemplate, parseTwin } from 'utils/gridTemplate';
import { mediaQueries } from 'utils/mediaQuery';
import { isIE } from 'utils/isIE';
import { TransformedValue } from 'utils/transform';

type Col = CSS.GridTemplateColumnsProperty<string>;
export type GridColumnResponsiveValue =
  | Col
  | null
  | Array<Col | null>
  | { [key in string | number]?: Col };

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
  const { toArray, transform } = convert(breakpoints);

  return (
    <GridContext.Provider value={{ gap: toArray(gap) }}>
      <GridStyle
        columns={transform(columns)}
        rows={transform(rows)}
        gap={transform(gap)}
        breakpoints={breakpoints}
        {...props}
      />
    </GridContext.Provider>
  );
};
Grid.displayName = 'Grid';

export default Grid;

type GridStyleProps = {
  columns: TransformedValue<string>;
  rows: TransformedValue<string>;
  gap: TransformedValue<string>;
  breakpoints: Breakpoints;
} & GridPositionProps & BoxBaseProps;

const GridStyle = styled.div<GridStyleProps>`
  ${composedBoxBase}

  display: grid;
  display: -ms-grid;

  ${system.grid}

  ${p => system.system({
    justifyItems: true,
    justifyContent: true,
    alignContent: true,
    alignItems: true,
    columns: {
      property: 'gridTemplateColumns'
    },
    row: {
      property: 'gridTemplateRows'
    },
    gap: {
      property: 'gridGap'
    }
  })(polyfillTheme({
    ...p,
    rows: p.rows.value,
    columns: p.columns.value,
    gap: p.gap.value
  }))}

  ${({ columns, rows, gap, breakpoints }) =>
    isIE() && mediaQueries(breakpoints, i => {
      const colVal = columns.get(i)!;
      const rowVal = rows.get(i)!;
      const gapVal = parseTwin(gap.get(i)!);

      return !(columns.empty(i) && rows.empty(i) && gap.empty(i)) && css`
        ${!(columns.empty(i) && gap.empty(i)) && css`
          -ms-grid-columns: ${parseTemplate(colVal, gapVal ? gapVal[0] : null).join(' ')};
        `}

        ${!(rows.empty(i) && gap.empty(i)) && css`
          -ms-grid-rows: ${parseTemplate(rowVal, gapVal ? gapVal[1] : null).join(' ')};
        `}

        ${templateQueries(parseTemplate(colVal), parseTemplate(rowVal), !!gapVal)}
      `;
    })
  }
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
