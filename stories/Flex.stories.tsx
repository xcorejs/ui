import { Box, Flex } from 'index';
import React, { FC } from 'react';

export default { title: 'Flex' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Flex>
        <Box background="red" color="white" p="10px" my="15px" width="50%">
          Box 1
        </Box>
        <Box background="blue" color="white" p="10px" my="15px" width="50%">
          Box 2
        </Box>
      </Flex>
    </Box>
  );
};
