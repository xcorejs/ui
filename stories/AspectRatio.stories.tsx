import React, { FC } from 'react';

import { AspectRatio, Box, Stack } from '../src';

export default { title: 'AspectRatio' };

export const BasicUsage: FC = () => {
  return (
    <Stack gap="10px">
      <Box width="33%">
        <AspectRatio background="crimson" ratio={9 / 16}>
          16:9
        </AspectRatio>
      </Box>
      <Box width="33%">
        <AspectRatio background="crimson" ratio={3 / 4}>
          4:3
        </AspectRatio>
      </Box>
    </Stack>
  );
};
