import Box from 'components/Box';
import Stack from 'components/Stack';
import React, { FC } from 'react';

export default { title: 'Stack' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Stack direction="column" spacing="10px">
        <Box background="red" color="white" p="10px" width="50%">
          Box 1
        </Box>
        <Box background="blue" color="white" p="10px" width="50%">
          Box 2
        </Box>
      </Stack>
      <Box>Lorem ipsum dolor sit amet</Box>
    </Box>
  );
};
