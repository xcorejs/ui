import React, { FC } from 'react';
import styled from 'styled-components';

import { boxBase, BoxProps } from './Box';
import Flex from './Flex';

export type AspectRatioProps = {
  ratio: number;
} & BoxProps;

const AspectRatioStyle = styled.div<BoxProps>`
  ${p => boxBase(p)}

  & > div {
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  img {
    object-fit: cover;
  }
`;

const AspectRatio: FC<AspectRatioProps> = ({ ratio, children, ...props }) => (
  <AspectRatioStyle
    width="100%"
    height={0}
    pb={ratio * 100 + '%'}
    position="relative"
    {...props}
  >
    <Flex
      position="absolute"
      alignItems="center"
      justifyContent="center"
      left={0}
      top={0}
    >
      {children}
    </Flex>
  </AspectRatioStyle>
);

export default AspectRatio;
