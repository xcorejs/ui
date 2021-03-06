import { ResponsiveValue } from '@styled-system/core';
import { BoxProps } from 'components/Box';
import Grid, { GridPositionProps } from 'components/Grid';
import * as CSS from 'csstype';
import React, { Children, FC } from 'react';
import useTheme from 'useTheme';
import { parseTwin } from 'utils/gridTemplate';
import { transform } from 'utils/transform';

export type ColumnResponsiveValue =
  | number
  | null
  | Array<number | null>
  | { [key in string | number]?: number } & { _: number };

export type SimpleGridProps = {
  columns: ColumnResponsiveValue;
  unit?: ResponsiveValue<string>;

  gap?: ResponsiveValue<CSS.GapProperty<string>>;
} & GridPositionProps & BoxProps;

const SimpleGrid: FC<SimpleGridProps> = ({ columns, unit: _unit, children, gap: _gap, ...props }) => {
  const { breakpoints } = useTheme();
  const t = transform(breakpoints);

  const cols = t(columns);
  const gapRow = t(t<string>(_gap).map(g => g && parseTwin(g)[1]));
  const unit = t(_unit);

  return (
    <Grid
      columns={cols.map((c, i) => `repeat(${c}, ${unit.get(i) ?? '1fr'})`)}
      rows={breakpoints.map((_, i) =>
        !gapRow.empty(i) || !cols.empty(i) || !unit.empty(i)
          ? `repeat(${Math.ceil(Children.count(children) / cols.get(i)!)}, ${unit.get(i) ?? '1fr'})`
          : null
      )}
      gap={_gap}
      {...props}
    >
      {children}
    </Grid>
  );
};

export default SimpleGrid;
