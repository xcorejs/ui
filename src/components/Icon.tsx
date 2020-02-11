import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import { system } from 'styled-system';

import Flex, { FlexProps } from './Flex';

export type IconProps = {
  svg?: ReactNode;
  fill?: string;
  fillHover?: string;
} & FlexProps;

const Svg = styled(Flex)<IconProps>`
  flex-shrink: 0;
  backface-visibility: hidden;

  svg {
    display: block;
    max-width: 100%;
    max-height: 100%;

    path {
      transition: fill 300ms;
      ${system({
    fill: {
      property: 'fill',
      scale: 'colors'
    }
  })}

    }
  }

  &:not(:root) {
    overflow: hidden;
  }

  &:hover {
    svg {
      path {
        ${system({
          fillHover: {
            property: 'fill',
            scale: 'colors'
          }
        })}
      }
    }
  }
`;

export type ExtendedIconProps = IconProps;

const Icon: FC<ExtendedIconProps> = ({ svg, ...props }) => {
  return (
    <Svg display="inline-block" verticalAlign="middle" maxHeight="100%" {...props}>
      {svg}
    </Svg>
  );
};

export default Icon;
