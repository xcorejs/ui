import { Box, useTheme } from '../src';
import React, { FC } from 'react';

export default { title: 'Box' };

export const BasicUsage: FC = () => {
  const t = useTheme();
  return (
    <Box>
      <Box background="crimson" color="white" p="10px" my="15px">
        Box 1
      </Box>
      <Box background="navy" color="white" p="10px" my="15px">
        Box 2
      </Box>
    </Box>
  );
};
