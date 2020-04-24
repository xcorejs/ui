import Flex, { FlexProps } from 'components/Flex';
import React, { forwardRef, ReactNode } from 'react';
import useTheme from 'useTheme';
import useMerge from 'utils/useMerge';
import { typeVariant } from 'utils/variant';

import { ContainerVariant } from './theme';

export type ContainerProps = FlexProps;

export type ExtendedContainerProps = {
  variant?: ContainerVariant;
  v?: ContainerVariant;

  children?: ReactNode;
} & ContainerProps;

const Container = forwardRef<HTMLDivElement, ExtendedContainerProps>((p, ref) => {
  const { container } = useTheme();

  const props = useMerge(p, typeVariant(container, 'normal', p), container.default);

  return <Flex {...props} ref={ref} />;
});

export default Container;
