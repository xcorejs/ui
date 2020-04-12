import Box from 'components/Box';
import Flex, { FlexProps } from 'components/Flex';
import React, { Children, cloneElement, createElement, FC, isValidElement, ReactNode } from 'react';
import system from 'styled-system';
import useTheme from 'useTheme';
import convert from 'utils/convert';

export interface StackProps extends FlexProps {
  direction?: system.ResponsiveValue<'column' | 'row'>;
  dir?: system.ResponsiveValue<'column' | 'row'>;
  gap?: system.ResponsiveValue<number | string>;
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
  gap,
  children,
  wrapItems,
  ...props
}) => {
  const { breakpoints } = useTheme();
  const { toArray, narrow } = convert(breakpoints);
  const isLast = (i: number) => Children.count(children) === i + 1;

  const direction = _direction ?? _dir ?? 'row';

  const getStyle = (
    dir: ('column' | 'row' | null)[],
    s: (number | string | null)[],
    index: number
  ) => {
    const { mb, mr, maxWidth } = dir.reduce((acc, val, i) => ({
      mb: [...acc.mb, val === 'column' && !isLast(index) ? s[i] : 0],
      mr: [...acc.mr, val === 'row' && !isLast(index) ? s[i] : 0],
      maxWidth: [...acc.maxWidth, val === 'column' ? '100%' : null]
    }),
    {
      mb: [],
      mr: [],
      maxWidth: []
    } as { mb: (string | number | null)[]; mr: (string | number | null)[]; maxWidth: (string | number | null)[] });

    return {
      mb: narrow(mb),
      mr: narrow(mr),
      maxWidth: narrow(maxWidth)
    };
  };

  return (
    <Flex
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      {...props}
    >
      {Children.map(children, (child, index) => wrapItems
        ? (
          <Box {...getStyle(toArray(direction, false), toArray(gap, false), index)}>
            {child}
          </Box>
        )
        : isValidElement(child)
          ? cloneElement(child, getStyle(toArray(direction, false), toArray(gap, false), index))
          : child
      )}

    </Flex>
  );
};

export default Stack;
