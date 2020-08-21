import { ResponsiveValue, system } from '@styled-system/core';
import { BoxBaseProps, composedBoxBase } from 'bases';
import { gridConfig } from 'bases/config/grid';
import CSS from 'csstype';
import React, { createContext, FC, forwardRef, ReactNode } from 'react';
import { Breakpoints } from 'scales/breakpoints';
import styled, { css } from 'styled-components';
import useTheme from 'useTheme';
import { polyfillTheme } from 'utils/baseStyle';
import { parseTemplate, parseTwin } from 'utils/gridTemplate';
import { isIE } from 'utils/isIE';
import { mediaQueries } from 'utils/mediaQuery';
import { transform, TransformedValue } from 'utils/transform';
import { shouldForwardProp } from 'utils/withConfig';

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

export const GridContext = createContext<{ gap?: ResponsiveValue<CSS.GapProperty<string>> }>({ gap: [] });

export type ExtendedGridProps = GridProps;

const Grid = forwardRef<HTMLDivElement, ExtendedGridProps>(({ columns, rows, gap, ...props }, ref) => {
  const { breakpoints } = useTheme();
  const t = transform(breakpoints);

  return (
    <GridContext.Provider value={{ gap }}>
      <GridStyle
        columns={t(columns)}
        rows={t(rows)}
        gap={t(gap)}
        breakpoints={breakpoints}
        ref={ref}
        {...props}
      />
    </GridContext.Provider>
  );
});

Grid.displayName = 'Grid';

export default Grid;

type GridStyleProps = {
  columns: TransformedValue<string>;
  rows: TransformedValue<string>;
  gap: TransformedValue<string>;
  breakpoints: Breakpoints;
} & GridPositionProps & BoxBaseProps;

const GridStyle = styled.div.withConfig<GridStyleProps>({ shouldForwardProp })`
  ${composedBoxBase}

  display: grid;
  display: -ms-grid;

  ${p => gridSystem(polyfillTheme({
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

const gridSystem = system(gridConfig);

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
