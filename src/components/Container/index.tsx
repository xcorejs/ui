import React, { FC } from 'react';
import Flex, { FlexProps } from 'components/Flex';
import useTheme from 'useTheme';

const Container: FC<FlexProps> = ({ children, ...props }) => {
  const { container } = useTheme();

  return (<Flex {...container} {...props}>{children}</Flex>);
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto',
  px: 3
};

export default Container;
