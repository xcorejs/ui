import React, { FC } from 'react';
import styled from 'styled-components';

import { CloseIcon } from '../../icons/close';
import Icon, { IconProps } from '../Icon';
import { FlexProps } from '../Flex';
import { compose } from '../../utils/baseStyle';
import { flexBase } from '../../bases';
import useTheme from '../../useTheme';
import { sizeVariant } from '../../utils/variant';
import { defaults } from '../../utils/defaults';

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

const CloseButton: FC<ExtendedCloseControlProps> = p => {
  const { closeControl } = useTheme();

  const { _icon, ...props } = defaults(
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
    >
      <Icon svg={<CloseIcon />} {..._icon} />
    </CloseButtonStyle>
  );
};

export default CloseButton;

const CloseButtonStyle = styled.div`
  ${compose(flexBase)}
  svg {
    width: 100%;
    height: 100%;
  }
`;
