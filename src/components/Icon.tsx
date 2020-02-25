import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { system } from 'styled-system';

import renderComponent, { Renderable } from '../utils/renderComponent';
import { flexBase, FlexProps } from './Flex';

export type IconProps = {
  svg?: Renderable;
  fill?: string;
  fillHover?: string;
} & FlexProps;

export type ExtendedIconProps = IconProps;

const Icon: FC<ExtendedIconProps> = ({ svg, children, ...props }) => {
  return (
    <IconStyle
      display="inline-block"
      verticalAlign="middle"
      maxHeight="100%"
      {...props}
    >
      {renderComponent(svg)}
      {children}
    </IconStyle>
  );
};

export default Icon;

export const iconBase = (p: IconProps) => css`
  ${flexBase(p)}

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

const IconStyle = styled.span<IconProps>`
  ${p => iconBase(p)}
`;
