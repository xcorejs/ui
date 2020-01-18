import React, { FC } from 'react';
import useTheme from 'useTheme';

import Flex, { FlexProps } from '../Flex';

const Container: FC<FlexProps> = ({ children, ...props }) => {
  const { container } = useTheme();

  return <Flex {...container} {...props}>{children}</Flex>;
};

Container.defaultProps = {
  ml: 'auto',
  mr: 'auto',
  px: 3
};

export default Container;
