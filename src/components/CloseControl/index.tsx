import React, { forwardRef } from 'react';
import styled from 'styled-components';

import { composedFlexBase } from '../../bases';
import { CloseIcon } from '../../icons/close';
import useTheme from '../../useTheme';
import { merge } from 'utils/merge';
import { sizeVariant } from '../../utils/variant';
import { FlexProps } from '../Flex';
import Icon, { IconProps } from '../Icon';

type CloseControlSizes = 'xs' | 'sm' | 'md' | 'lg';

export type CloseControlProps =
  {
    _icon?: IconProps;
  }
  & FlexProps;

export type ExtendedCloseControlProps =
  {
    size?: CloseControlSizes;
    s?: CloseControlSizes;
  }
  & CloseControlProps;

const CloseControl = forwardRef<HTMLDivElement, ExtendedCloseControlProps>((p, ref) => {
  const { closeControl } = useTheme();

  const { _icon, ...props } = merge(
    p,
    sizeVariant(closeControl, 'md', p),
    closeControl.default
  );

  return (
    <CloseButtonStyle
      display="inline-flex"
      justifyContent="center"
      alignItems="center"
      {...props}
      ref={ref}
    >
      <Icon svg={<CloseIcon />} {..._icon} />
    </CloseButtonStyle>
  );
});

export default CloseControl;

const CloseButtonStyle = styled.div`
  ${composedFlexBase}
  svg {
    width: 100%;
    height: 100%;
  }
`;
