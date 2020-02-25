
import { Box, Link } from '../src';
import React, { FC } from 'react';

export default { title: 'Link' };

export const BasicUsage: FC = () => {
  return (
    <Box>
      <Link href="/">Burger King burger</Link>
    </Box>
  );
};
