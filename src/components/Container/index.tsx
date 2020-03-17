import React, { FC } from 'react';

import useTheme from '../../useTheme';
import { typeVariant } from '../../utils/variant';
import Flex, { FlexProps } from '../Flex';
import { ContainerVariant } from './theme';
import { defaults } from '../../utils/defaults';

export type ExtendedContainerProps = {
  variant?: ContainerVariant;
  v?: ContainerVariant;
} & FlexProps;

const Container: FC<ExtendedContainerProps> = p => {
  const { container } = useTheme();

  const props = defaults(p, typeVariant(container, 'normal', p), container.default);

  return <Flex {...props} />;
};

export default Container;
