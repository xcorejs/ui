import React, { FC } from 'react';
import Flex, { FlexProps } from '../Flex';
import useTheme from '../../useTheme';

const Container: FC<FlexProps> = ({ children, ...props }) => {
  const theme = useTheme();
  const containerProps = theme.container;

  return (<Flex {...containerProps} {...props}>{children}</Flex>);
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto',
  px: 3
};

export default Container;
