import { composedIconBase, IconBaseProps } from 'bases';
import React, { FC, ReactNode } from 'react';
import styled from 'styled-components';
import renderComponent from 'utils/renderComponent';
import { shouldForwardProp } from 'utils/withConfig';

export type IconProps = IconBaseProps & {
  svg?: ReactNode;
};

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

const IconStyle = styled.span.withConfig<IconProps>({ shouldForwardProp })`
  ${composedIconBase}
`;
