import OutsetBox, { OutsetBoxTarget } from 'components/AbsoluteBox/OutsetBox';
import Box, { BoxProps } from 'components/Box';
import Flex from 'components/Flex';
import React, { FC } from 'react';

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
