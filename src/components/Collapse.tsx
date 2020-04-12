import Box, { BoxProps } from 'components/Box';
import React, { FC } from 'react';
import AnimateHeight from 'react-animate-height';

export type CollapseProps = {
  open?: boolean;
  start?: number;
  end?: number;
} & BoxProps;

const Collapse: FC<CollapseProps> = (
  {
    open,
    start = 0,
    end = 'auto',
    ...props
  }
) => (
  <AnimateHeight height={open ? end : start}>
    <Box {...props} />
  </AnimateHeight>
);

export default Collapse;
