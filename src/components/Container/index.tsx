import React, { FC } from 'react';
import styled from 'styled-components';

import useTheme from '../../useTheme';
import { typeVariant } from '../../utils/variant';
import Flex, { FlexProps } from '../Flex';
import { ContainerType } from './theme';
import { defaults } from '../../utils/defaults';

export type ExtendedContainerProps = {
  type?: ContainerType;
  t?: ContainerType;
} & FlexProps;

const Container: FC<ExtendedContainerProps> = p => {
  const { container } = useTheme();

  const props = defaults(p, typeVariant(container, 'normal', p), container.default);

  return <Flex {...props} />;
};

export default Container;
