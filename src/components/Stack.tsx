import Box from 'components/Box';
import Flex, { FlexProps } from 'components/Flex';
import React, { Children, cloneElement, FC, isValidElement, ReactNode } from 'react';
import { ResponsiveValue } from 'styled-system';
import useTheme from 'useTheme';
import { transform } from '../utils/transform';

export interface StackProps extends FlexProps {
  direction?: ResponsiveValue<'column' | 'row'>;
  dir?: ResponsiveValue<'column' | 'row'>;
  gap?: ResponsiveValue<number | string>;
  wrapItems?: boolean;

  children: ReactNode;

  align?: FlexProps['alignItems'];
  justify?: FlexProps['justifyContent'];
  wrap?: FlexProps['flexWrap'];
}

export type ExtendedStackProps = StackProps;

const Stack: FC<StackProps> = ({
  direction: _direction,
  dir: _dir,
  align,
  justify,
  wrap,
  gap: _gap,
  children,
  wrapItems,
  ...props
}) => {
  const { breakpoints } = useTheme();
  const t = transform(breakpoints);

  const direction = t(_direction ?? _dir ?? 'row');
  const gap = t(_gap);

  const itemStyle = ['_', ...breakpoints.aliases].reduce(
    (acc, val) => {
      const d = direction.get(val);
      const g = gap.get(val);
      return {
        mb: [...acc.mb, d === 'column' ? g : 0],
        mr: [...acc.mr, d === 'row' ? g : 0]
      };
    },
    {
      mb: [] as (string | number | null)[],
      mr: [] as (string | number | null)[]
    }
  );

  const maxWidth = direction.map(d => d === 'column' ? '100%' : null);

  const getStyle = (i: number) => {
    const last = Children.count(children) === i + 1;
    return {
      mb: last ? 0 : itemStyle.mb,
      mr: last ? 0 : itemStyle.mr,
      maxWidth
    };
  };

  return (
    <Flex
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction.value}
      flexWrap={wrap}
      {...props}
    >
      {Children.map(children, (child, i) =>
        wrapItems
          ? <Box {...getStyle(i)}>{child}</Box>
          : isValidElement(child)
            ? cloneElement(child, getStyle(i))
            : child
      )}

    </Flex>
  );
};

export default Stack;
