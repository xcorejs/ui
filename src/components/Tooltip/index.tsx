import React, { FC } from 'react';

import OutsetBox, { OutsetBoxTarget } from '../AbsoluteBox/OutsetBox';
import Box, { BoxProps } from '../Box';
import Flex from '../Flex';

export type TooltipProps = {
  _outset: BoxProps;
} & BoxProps;

export type ExtendedTooltipProps = {
  target: OutsetBoxTarget;
};

const Tooltip: FC<ExtendedTooltipProps> = ({ target, ...p }) => {
  return (
    <OutsetBox target={target} horizontalPosition="center" verticalPosition="bottom">
      <Flex borderRadius="3px" background="#333">
        Tooltip
      </Flex>
    </OutsetBox>
  );
};

export default Tooltip;
