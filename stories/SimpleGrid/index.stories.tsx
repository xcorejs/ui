import React, { FC } from 'react';

import { Box, SimpleGrid, Text, XcoreProvider } from '../../src';

export default { title: 'Simple grid' };

export const Basic: FC = () => {
  return (
    <XcoreProvider>
      <Text>
        <SimpleGrid display="inline-grid" columns={2} gap="6rem 2rem" mt="3rem" justifyItems="center">
          <Box>Products</Box>
          <Box>Company</Box>
          <Box>Sitemap</Box>
          <Box>Contacts</Box>
          <Box>Disclaimer</Box>
          <Box>Privacy</Box>
        </SimpleGrid>
      </Text>
    </XcoreProvider>

  );
};
