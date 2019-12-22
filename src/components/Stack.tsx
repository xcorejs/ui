import Flex, { FlexProps } from 'components/Flex';
import React, { Children, cloneElement, FC, isValidElement, ReactNode } from 'react';
import system from 'styled-system';

export interface StackProps extends FlexProps {
  direction?: system.ResponsiveValue<'column' | 'row'>;
  spacing?: system.ResponsiveValue<number | string>;
  align?: FlexProps['alignItems'];
  justify?: FlexProps['justifyContent'];
  wrap?: FlexProps['flexWrap'];
  children: ReactNode[];
}

const Stack: FC<StackProps> = ({
  align,
  justify,
  wrap,
  direction = 'row',
  spacing = '0',
  children,
  ...props
}) => {
  const isLast = (i: number) => children.length === i + 1;

  const responsiveToObj = <T extends string | number>(
    a: system.ResponsiveValue<T>
  ): Record<string, T | null> =>
      typeof a === 'object'
        ? a instanceof Array
          ? {
            xs: a[0],
            sm: a[1],
            md: a[2],
            lg: a[3],
            xl: a[4]
          }
          : a
        : {
          xs: a,
          sm: a,
          md: a,
          lg: a,
          xl: a
        };

  const getStyle = (
    direction: Record<string, 'column' | 'row' | null>,
    s: Record<string, number | string | null>
  ) =>
    Object.keys(direction).reduce(
      (acc, k) => ({
        ...acc,
        [direction[k] === 'row' ? 'mr' : 'mb']: {
          ...acc[direction[k] === 'row' ? 'mr' : 'mb'],
          [k]: s[k]
        }
      }),
      {
        mb: {},
        mr: {}
      }
    );

  return (
    <Flex
      alignItems={align}
      justifyContent={justify}
      flexDirection={direction}
      flexWrap={wrap}
      {...props}
    >
      {Children.map(children, (child, index) =>
        isValidElement(child) && !isLast(index)
          ? cloneElement(child, getStyle(responsiveToObj(direction), responsiveToObj(spacing)))
          : child
      )}
    </Flex>
  );
};

export default Stack;
