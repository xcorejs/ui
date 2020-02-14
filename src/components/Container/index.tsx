import React, { FC } from 'react';
import useTheme from '../../useTheme';
import Flex, { FlexProps } from '../Flex';
import styled from 'styled-components';
import { ContainerType } from './theme';

export type ContainerProps = {
  type?: ContainerType;
  t?: ContainerType;
} & FlexProps;

const ContainerStyle = styled(Flex)<ContainerProps>``;

const Container: FC<ContainerProps> = (
  {
    type: _type,
    t: _t,
    children,
    ...props
  }
) => {
  const { container: { types } } = useTheme();
  const type = _type ?? _t ?? 'normal';

  return <ContainerStyle {...types[type]} {...props}>{children}</ContainerStyle>;
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto'
};

export default Container;
