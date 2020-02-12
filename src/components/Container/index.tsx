import React, { FC } from 'react';
import useTheme from '../../useTheme';
import Flex, { FlexProps } from '../Flex';
import styled from 'styled-components';

export type ContainerProps = {
  type?: 'normal' | 'fluid'
} & FlexProps;

const ContainerStyle = styled(Flex)<ContainerProps>``;

const Container: FC<ContainerProps> = (
  {
    type: _type,
    children,
    ...props
  }
) => {
  const { container: { types } } = useTheme();
  const type = _type || 'normal';

  return <ContainerStyle {...types[type]} {...props}>{children}</ContainerStyle>;
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto'
};

export default Container;
