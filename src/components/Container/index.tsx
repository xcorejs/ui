import React, { ReactNode, forwardRef } from 'react';

import useTheme from '../../useTheme';
import { typeVariant } from '../../utils/variant';
import Flex, { FlexProps } from '../Flex';
import { ContainerVariant } from './theme';
import { merge } from 'utils/merge';

export type ContainerProps = FlexProps;

export type ExtendedContainerProps = {
  variant?: ContainerVariant;
  v?: ContainerVariant;

  children?: ReactNode;
} & ContainerProps;

const Container = forwardRef<HTMLDivElement, ExtendedContainerProps>((p, ref) => {
  const { container } = useTheme();

  const props = merge(p, typeVariant(container, 'normal', p), container.default);

  return <Flex {...props} ref={ref} />;
});

export default Container;
